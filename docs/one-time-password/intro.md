# 简介

## 前言

唯ID OTP（一次性密码）不需要集成SDK，让你通过简单调一个HTTP接口，就可以快速发送短信、邮箱验证码。

## 特点和优势

* 实现了发送验证码、核验验证码一体的解决方案。
* 短信支持中国大陆手机号，邮箱支持国内外主流邮箱品牌，如QQ、163、Gmail等。
* 短信三网100%覆盖，验证码到达率高达99%，90%以上验证码10秒内抵达。
* 可选传统方式自行核验，也可以调用API核验（推荐）。

## 适用场景（对比SSO）

* 你的应用比较简单，不需要全功能的身份认证系统，适合使用OTP，否则请接入SSO。
* 你的应用已经接入SSO，但一些场景需要快速认证，不适合展开标准认证页，比如促销活动页领取优惠等，适合使用OTP。
* SSO官方不支持的平台（不支持也可以使用，[其他平台接入](/docs/single-sign-on/other)），如小程序、Windows和macOS原生应用，适合使用OTP。
* 注意：OTP和SSO在产品设计时就是一体的，搭配使用效果最佳，不建议使用OTP后再自建完整的身份认证系统。

## 注意事项

随着接入应用增多，唯ID在短信发送上承担了巨额费用成本，但我们仍坚持200元兜底的良心定价。

开发者应合理使用资源，添加必要的防盗刷机制（图形验证码等），同时更推荐接入唯ID SSO，通过账号共享方便用户，也稍微降低我们的成本。

:::danger 警告
唯ID有完善的风控机制，滥用短信资源、频繁打扰用户的恶意开发者将被纳入黑名单，面临从封禁单个违规应用一周到最高封禁开发者账号一个月的处罚。
:::
