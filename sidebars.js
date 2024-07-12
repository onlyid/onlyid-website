module.exports = {
    mySideBar: [
        {
            type: "doc",
            id: "home",
            label: "文档首页"
        },
        "background",
        {
            type: "category",
            label: "轻认证 OTP",
            items: [
                "one-time-password/intro",
                "one-time-password/send-otp",
                "one-time-password/verify-otp"
            ]
        },
        {
            type: "category",
            label: "单点登录 SSO",
            items: [
                "single-sign-on/oauth",
                "single-sign-on/web",
                "single-sign-on/android",
                "single-sign-on/ios",
                "single-sign-on/other"
            ]
        },
        {
            type: "category",
            label: "其他",
            items: ["other/security", "other/faq"]
        }
    ]
};
