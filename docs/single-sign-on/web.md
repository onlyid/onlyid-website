import { Button } from "@material-ui/core";
import useBaseUrl from '@docusaurus/useBaseUrl';

# 网站应用接入

:::info 提示
如果你还没创建应用，请先到控制台 -> 应用管理 新建得到应用ID和应用Secret再继续。

如果你还没配置回调URI，请先到控制台 -> 应用管理 -> OAuth设置 配置好再继续。
:::

## 获取Auth Code

### 登录按钮

应用界面展示登录按钮，文案为："用唯ID登录"，左侧添加唯ID logo，主题色为 `#3F51B5`。

两种参考样式（推荐左侧，更正式更清晰）：

<Button variant="contained" color="primary" startIcon={<img src={useBaseUrl("/img/logo_72_white.png")} />} size="large" className="docs_button1">
    用唯ID登录
</Button>

<Button color="primary" startIcon={<img src={useBaseUrl("/img/logo_72.png")} />} size="large" className="docs_button1">
    用唯ID登录
</Button>

提示：logo素材请从上面两个按钮右键另存为获取。

### 跳转OAuth页

用户点击登录按钮后，跳转至登录授权页：

```http
GET https://onlyid.net/oauth?client-id=你的应用ID&redirect-uri=你的应用回调URI HTTP/1.1
```

:::info 提示
回调URI应使用 [encodeURIComponent](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) 方法转码后再使用。

可使用 [window.open](https://developer.mozilla.org/en-US/docs/Web/API/Window/open) 方法以小窗口形式打开登录页，以获得更好体验。
:::

示例：

```http
GET https://onlyid.net/oauth?client-id=98d44b4a3543db79&redirect-uri=https%3A%2F%2Fwww.example.com%2Fmy-app%2Foauth-callback HTTP/1.1
```

待用户在登录授权页完成认证，唯ID会生成auth code重定向到你的回调URI，成功示例：

```http
GET https://www.example.com/my-app/oauth-callback?code=6e4de248e9223c9d HTTP/1.1
```

## 获取用户信息

得到auth code后，通过code换取用户信息的逻辑三端一致（Web、Android、iOS），详见 [获取用户信息](/docs/single-sign-on/user-info)。

## 示例Demo

请访问GitHub参考 [示例Demo（Web）](https://github.com/onlyid/onlyid-demo-web)。