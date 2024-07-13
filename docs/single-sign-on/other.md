# 其他平台接入

## 前言

唯ID官方暂只支持网站、Android和iOS三大常用平台，但其他平台（Windows、macOS等）通过嵌入WebView也能使用，本节简要介绍实现原理和流程。

## 实现原理

标准OAuth流程中，只有获取Authorization Code是在客户端进行，通过Authorization Code换取Access Token和通过Access Token换取用户信息，都是在服务端进行。

所以这里关键是获取Authorization Code，简单说，是通过平台原生的WebView打开授权页，待用户认证授权后，重定向到应用回调URI时，拦截这个请求，并从中取出Authorization Code。

## 获取Authorization Code

用户需要登录时，通过平台原生WebView打开授权页：

```
https://onlyid.net/oauth?client-id=你的应用ID&redirect-uri=你的应用回调URI
```

:::info 提示
此时应用回调URI并无实际意义，建议设置成http://localhost，同时应使用 [encodeURIComponent](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) 方法转码后再使用。
:::

示例：

```
https://onlyid.net/oauth?client-id=07c9770f22b1460398d44b4a3543db79&redirect-uri=http%3A%2F%2Flocalhost
```

授权页引导用户完成验证，然后带上Code GET方式重定向到你的应用回调URI，成功示例：

```http
GET http://localhost/?code=596c441eced7220159a3c0616e4de248e9223c9d HTTP/1.1
```

此时通过WebView提供的相关拦截方法拦截请求，并从中取出Authorization Code。

## 获取Access Token和用户信息

之后的流程（通过Authorization Code换取Access Token和通过Access Token换取用户信息）与网站接入时并无区别，请直接参阅 [相关小节](/docs/single-sign-on/web#获取access-token)。

