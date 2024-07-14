# iOS快速接入

:::info 提示
如果你还没创建应用，请先到控制台 -> 应用管理 新建一个得到应用ID和应用Secret再继续。
:::

:::info 提示
如果你还没配置应用Bundle ID，请先到控制台 -> 应用管理 -> OAuth设置 配置好再继续。
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

展示登录按钮（如果你的应用把唯ID作为唯一登录方式，按钮文案可写 "登录"，否则可以写 "用唯ID登录"）引导用户点击。

使用OnlyID.oauth方法打开授权页。代码示例：

```swift
let config = OnlyIDOAuthConfig(clientId: "你的应用ID")
OnlyID.oauth(config: config, fromController: self, delegate: self)
...
extension ViewController: OnlyIDOAuthDelegate {
    func onComplete(code: String, state: String?) { // 获得Auth Code }

    func onError(error: NSError) { // 发生错误 }

    func onCancel() { // 用户取消 }
}
```

:::info 提示
使用Objective-C的开发者，请参考 示例Demo（iOS）的OnlyID_Demo_Objc项目。
:::

:::info 提示
如果用户安装了唯ID APP，会唤起APP完成授权，否则通过WebView打开授权页完成授权。
:::

## 获取Access Token和用户信息

之后的流程（通过Auth Code换取Access Token和通过Access Token换取用户信息）与网站接入时并无区别，请直接参阅 [相关小节](/docs/single-sign-on/web#获取access-token)。

## 结语

你已完成接入，接下来还可以到GitHub查阅 [示例Demo（iOS）](https://github.com/onlyid/onlyid-sdk-ios/tree/master/Example)，以加深理解。
