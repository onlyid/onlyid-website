import { Button } from "@material-ui/core";
import useBaseUrl from '@docusaurus/useBaseUrl';

# Android应用接入

:::info 提示
如果你还没创建应用，请先到控制台 -> 应用管理 新建得到应用ID和应用Secret再继续。

如果你还没配置应用包名，请先到控制台 -> 应用管理 -> OAuth设置 配置好再继续。
:::

## 集成SDK

SDK发布到JitPack <a href="https://jitpack.io/#onlyid/onlyid-sdk-android"><img src="https://jitpack.io/v/onlyid/onlyid-sdk-android.svg" alt="jitpack" className="docs__img2"/></a>。

在项目全局的build.gradle添加：

```
allprojects {
    repositories {
        maven { url 'https://jitpack.io' }
    }
}
```

在app模块的build.gradle添加：

```
dependencies {
    implementation 'com.github.onlyid:onlyid-sdk-android:最新版本'
}
```

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

```java
static final int REQUEST_OAUTH = 1;

@Override
protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    loginButton.setOnClickListener((View v) -> {
        OnlyID.startOAuth(MainActivity.this, REQUEST_OAUTH, "你的应用ID");
    });
}

@Override
protected void onActivityResult(int requestCode, int resultCode, Intent data) {
    super.onActivityResult(requestCode, resultCode, data);
    
    if (requestCode != REQUEST_OAUTH) return;

    if (resultCode == RESULT_OK) {
        // 获得auth code
        String code = data.getStringExtra(OnlyID.EXTRA_CODE);
    } else {
        // 用户取消
    }
}
```

:::info 提示
如果用户安装了唯ID APP，会唤起APP完成认证，否则通过WebView打开登录页完成认证。
:::

## 获取用户信息

得到auth code后，通过code换取用户信息的逻辑三端一致（Web、Android、iOS），详见 [获取用户信息](/docs/single-sign-on/user-info)。

## 示例Demo

请访问GitHub参考 [示例Demo（Android）](https://github.com/onlyid/onlyid-sdk-android/tree/master/app/src/main)。
