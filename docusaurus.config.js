const codeTheme = require("prism-react-renderer/themes/github");

module.exports = {
    title: "唯ID",
    url: "https://www.onlyid.net",
    baseUrl: "/home/",
    favicon: "img/favicon.png",
    themeConfig: {
        navbar: {
            logo: {
                src: "img/logo.svg"
            },
            items: [
                {
                    label: "产品",
                    items: [
                        {
                            html: '<span class="material-icons-outlined">pin</span>无密码 轻认证',
                            to: "/one-time-password"
                        },
                        {
                            html: '<span class="material-icons">portrait</span>统一账号 单点登录',
                            to: "/single-sign-on"
                        },
                        {
                            html: '<span class="material-icons-outlined">groups</span>用户管理 权限控制',
                            to: "/user-and-access-management"
                        }
                    ],
                    className: "nav-item-product"
                },
                { type: "doc", docId: "intro", label: "文档" },
                { to: "/pricing", label: "价格" },
                { to: "/blog", label: "博客" },
                {
                    href: "https://github.com/onlyid",
                    html: '<span class="iconfont">&#xe6f6;</span>',
                    className: "nav-item-github"
                },
                { href: "https://www.onlyid.net/console", html: "控制台", position: "right" }
            ]
        },
        colorMode: {
            disableSwitch: true
        },
        prism: {
            theme: codeTheme
        }
    },
    plugins: [
        "@docusaurus/plugin-content-blog",
        "@docusaurus/plugin-content-pages",
        ["@docusaurus/plugin-content-docs", { sidebarPath: "./sidebars.js" }]
    ],
    themes: [["@docusaurus/theme-classic", { customCss: "./src/index.css" }]]
};
