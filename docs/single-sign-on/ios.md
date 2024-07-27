import { Button } from "@material-ui/core";
import useBaseUrl from '@docusaurus/useBaseUrl';

# iOS应用接入

:::info 提示
如果你还没创建应用，请先到控制台 -> 应用管理 新建得到应用ID和应用Secret再继续。

如果你还没配置Bundle ID，请先到控制台 -> 应用管理 -> OAuth设置 配置好再继续。
:::

## 集成SDK

推荐通过CocoaPods集成，在项目的Podfile添加：

```
pod 'OnlyID'
```

集成SDK。

你也可以使用源码集成方式，克隆 [代码仓库](https://github.com/onlyid/onlyid-sdk-ios) 到本地后，复制OnlyID文件夹添加到你的工程目录。

:::info 提示
如果使用源码集成方式，建议定期更新最新代码文件，以免错过新的产品功能和安全、错误方面的更新。
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

用户点击登录按钮后，打开登录授权页，代码示例：

```swift
let config = OnlyIDOAuthConfig(clientId: "你的应用ID")
OnlyID.oauth(config: config, fromController: self, delegate: self)
...
extension ViewController: OnlyIDOAuthDelegate {
    func onComplete(code: String, state: String?) { // 获得auth code }

    func onError(error: NSError) { // 发生错误 }

    func onCancel() { // 用户取消 }
}
```

:::info 提示
如果用户安装了唯ID APP，会唤起APP完成认证，否则通过WebView打开登录页完成认证。
:::

## 获取用户信息

得到auth code后，通过code换取用户信息的逻辑三端一致（Web、Android、iOS），详见 [获取用户信息](/docs/single-sign-on/user-info)。

## 示例Demo

请访问GitHub参考 [示例Demo（iOS）](https://github.com/onlyid/onlyid-sdk-ios/tree/master/Example)。