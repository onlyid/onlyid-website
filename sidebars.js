module.exports = {
    mySideBar: [
        {
            type: "doc",
            id: "home",
            label: "文档首页"
        },
        {
            type: "category",
            label: "轻认证 OTP",
            collapsed: false,
            items: [
                "one-time-password/send-otp",
                "one-time-password/verify-otp",
                "one-time-password/faq"
            ]
        },
        {
            type: "category",
            label: "单点登录 SSO",
            collapsed: false,
            items: [
                "single-sign-on/oauth",
                "single-sign-on/web",
                "single-sign-on/android",
                "single-sign-on/ios",
                "single-sign-on/other",
                "single-sign-on/user-info",
                "single-sign-on/migrate-to",
                "single-sign-on/faq"
            ]
        }
    ]
};
