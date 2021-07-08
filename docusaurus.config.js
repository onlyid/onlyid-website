const codeTheme = require("prism-react-renderer/themes/github");

module.exports = {
    title: "唯ID",
    url: "https://www.onlyid.net",
    baseUrl: "/home/",
    favicon: "img/favicon.png",
    themeConfig: {
        navbar: {
            logo: {
                src: "img/logo.svg",
            },
            items: [
                { to: "/advantage", label: "优势" },
                {
                    label: "产品",
                    items: [
                        { label: "无密码、轻认证", className: "productTip" },
                        { label: "OTP", to: "/otp", className: "productName" },
                        { label: "统一账号、单点登录", className: "productTip" },
                        { label: "SSO", to: "/sso", className: "productName" },
                        { label: "用户管理、权限控制", className: "productTip" },
                        { label: "IAM", to: "/iam", className: "productName" },
                    ],
                },
                { type: "doc", docId: "intro", label: "文档" },
                { to: "/demo", label: "体验" },
                { to: "/pricing", label: "价格" },
                { to: "/blog", label: "博客" },
                { href: "https://github.com/onlyid", label: "GitHub" },
                { href: "https://www.onlyid.net/console", label: "控制台", position: "right" },
            ],
        },
        colorMode: {
            disableSwitch: true,
        },
        prism: {
            theme: codeTheme,
        },
    },
    plugins: [
        ["@docusaurus/plugin-content-blog", { showReadingTime: true }],
        "@docusaurus/plugin-content-pages",
        ["@docusaurus/plugin-content-docs", { sidebarPath: require.resolve("./sidebars.js") }],
    ],
    themes: [["@docusaurus/theme-classic", { customCss: require.resolve("./index.css") }]],
};
