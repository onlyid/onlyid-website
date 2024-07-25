# Android应用接入

:::info 提示
如果你还没创建应用，请先到控制台 -> 应用管理 新建一个得到应用ID和应用Secret再继续。
:::

:::info 提示
如果你还没配置应用包名，请先到控制台 -> 应用管理 -> OAuth设置 配置好再继续。
:::

## 集成SDK

已改用Gradle形式，发布到 <a href="https://jitpack.io/#onlyid/onlyid-sdk-android"><img src="https://jitpack.io/v/onlyid/onlyid-sdk-android.svg" alt="jitpack" className="docs__img2"/></a>（绿色数字是当前最新版本），请开发者使用Gradle来编译、更新SDK。在项目全局的build.gradle添加：

```
allprojects {
    repositories {
        ...
        maven { url 'https://jitpack.io' }
    }
}
```

在app模块的build.gradle添加：

```
dependencies {
    ...
    implementation 'com.github.onlyid:onlyid-sdk-android:最新版本'
}
```

集成SDK。

## 获取Auth Code

展示登录按钮（如果你的应用把唯ID作为唯一登录方式，按钮文案可写 "登录"，否则可以写 "用唯ID登录"）引导用户点击。

使用OnlyID.oauth方法打开授权页。代码示例：

```java
static final int REQUEST_OAUTH = 1;
...
OAuthConfig config = new OAuthConfig("你的应用ID");
OnlyID.oauth(this, config, REQUEST_OAUTH);
...
@Override
protected void onActivityResult(int requestCode, int resultCode, Intent data) {
    super.onActivityResult(requestCode, resultCode, data);
    if (requestCode != REQUEST_OAUTH) return;

    if (resultCode == RESULT_OK) {
        // 获得auth code
        String code = data.getStringExtra(OnlyID.EXTRA_CODE);
    } else if (resultCode == RESULT_CANCELED) {
        // 用户取消（拒绝）
    } else if (resultCode == OnlyID.RESULT_ERROR) {
        // 发生错误
        Exception exception = (Exception) data.getSerializableExtra(OnlyID.EXTRA_EXCEPTION);
    }
}
```

:::info 提示
如果用户安装了唯ID APP，会唤起APP完成授权，否则通过WebView打开授权页完成授权。
:::

## 获取Access Token和用户信息

之后的流程（通过auth code换取access token和通过access token换取用户信息）与网站接入时并无区别，请直接参阅 [相关小节](/docs/single-sign-on/web#获取access-token)。

## 结语

你已完成接入，接下来还可以到GitHub查阅 [示例Demo（Android）](https://github.com/onlyid/onlyid-demo-android)，以加深理解。