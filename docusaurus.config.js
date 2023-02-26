const codeTheme = require("prism-react-renderer/themes/github");

const otpHtml =
    '<span class="material-icons-outlined">pin</span><span class="name">OTP</span>无密码 轻认证';
const ssoHtml =
    '<span class="material-icons">portrait</span><span class="name">SSO</span>统一账号 单点登录';
const uamHtml =
    '<span class="material-icons-outlined">groups</span><span class="name">UAM</span>用户管理 权限控制';

module.exports = {
    title: "唯ID",
    url: "https://www.onlyid.net",
    baseUrl: "/home/",
    favicon: "img/favicon.png",
    i18n: {
        defaultLocale: "zh",
        locales: ["zh"]
    },
    themeConfig: {
        navbar: {
            logo: {
                src: "img/logo.svg"
            },
            items: [
                {
                    label: "产品",
                    items: [
                        { html: otpHtml, to: "/one-time-password" },
                        { html: ssoHtml, to: "/single-sign-on" },
                        { html: uamHtml, to: "/user-and-access-management" }
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
