# OAuth入门

:::info 提示
如果你已经使用过基于OAuth的社交登录方案（如微信、微博等），可跳过本节。
:::

## 前言

本页不论述OAuth 2.0的协议细节，只介绍应用接入SSO时涉及到的概念和流程。

## 授权流程

SSO支持OAuth 2.0的Authorization Code登录授权方式，整体流程：

1. 在用户需要登录时，应用跳转至唯ID提供的登录授权页；
2. 用户在登录页完成认证和授权，唯ID生成auth code返回应用；
3. 应用使用auth code搭配应用Secret换取access token；
4. 应用使用access token最终换取用户账号信息，流程结束。

:::caution 注意
在第2步得到auth code后，应用前端应该把code中转至应用服务端，由服务端完成第3、4步，以防泄露你的应用Secret和access token。
:::

## 名词解释

<dl>
    <dt>Client ID和Client Secret</dt>
    <dd>应用ID和应用Secret，相当于你的应用在唯ID的帐号和密码，是调用OpenAPI所必需的标识。</dd>
    <dt>Auth Code / Authorization Code</dt>
    <dd>应用使用auth code换取access token，code的有效期为10分钟，一个code换取一次access token即失效。</dd>
    <dt>Access Token</dt>
    <dd>应用使用access token换取用户信息，token的有效期为24小时，一个token可多次换取用户信息而不会失效。</dd>
</dl>
