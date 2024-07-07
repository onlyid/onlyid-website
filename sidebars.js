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
            label: "使用唯ID OTP",
            items: ["otp/intro", "otp/integrate"]
        },
        {
            type: "category",
            label: "接入唯ID SSO",
            items: ["sso/oauth", "sso/web", "sso/android", "sso/ios", "sso/other"]
        },
        {
            type: "category",
            label: "其他",
            items: ["other/security", "other/faq"]
        }
    ]
};
