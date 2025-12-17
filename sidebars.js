module.exports = {
    mySideBar: [
        {
            type: "doc",
            id: "home",
            label: "文档首页"
        },
        "oauth",
        {
            type: "category",
            label: "接入流程",
            collapsed: false,
            items: ["integrate/web", "integrate/ios", "integrate/android", "integrate/other"]
        },
        "user-info",
        "get-users",
        "migrate-to",
        "faq"
    ]
}
