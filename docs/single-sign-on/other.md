# 其它平台接入

## 简介

SSO目前官方支持网站、Android、iOS三个常用平台，对于Windows、macOS以及其他系统平台，可以通过嵌入WebView的方式接入使用。

:::info 提示
对于没有WebView组件的平台（或者虽然有但不方便调用），你可以回退到使用OTP功能。

如果你的应用同时使用了OTP和SSO功能，注意引导用户使用同个手机号/邮箱进行登录认证，避免出现一个用户创建多个账号的情况。
:::

## 获取Auth Code

在OAuth流程中，只有获取auth code是在客户端进行，其余步骤都是在服务端进行。

所以这里关键是获取auth code。

应用展示登录按钮，在用户点击后，通过平台的WebView组件打开登录授权页。

待用户完成认证后，唯ID会生成auth code重定向到你的回调URI。使用WebView提供的方法监听这个重定向行为，然后从url中提取出auth code。

:::info 提示
回调URI应使用 [encodeURIComponent](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) 方法转码后再使用。

此时回调URI并无实际意义，建议设置成 `http://localhost`。
:::

对于本页没有展开描述的细节，如登录按钮样式、登录授权页网址，请参考 [网站应用接入](/docs/single-sign-on/web)。

## 获取用户信息

得到auth code后，通过code换取用户信息的逻辑三端一致（Web、Android、iOS），详见 [获取用户信息](/docs/single-sign-on/user-info)。
