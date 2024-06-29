const codeTheme = require("prism-react-renderer/themes/github");

const productMenu = [
    {
        html: '<span class="material-icons-outlined">pin</span>轻认证 OTP',
        to: "/one-time-password"
    },
    {
        html: '<span class="material-icons">portrait</span>单点登录 SSO',
        to: "/single-sign-on"
    }
];

module.exports = {
    title: "唯ID",
    url: "https://onlyid.net",
    baseUrl: "/web/",
    favicon: "img/favicon.png",
    i18n: { defaultLocale: "zh", locales: ["zh"] },
    themeConfig: {
        navbar: {
            logo: {
                src: "img/logo.svg"
            },
            items: [
                { label: "产品", items: productMenu, className: "nav-item-product" },
                { type: "doc", docId: "intro", label: "文档" },
                { to: "/blog", label: "博客" },
                {
                    href: "https://github.com/onlyid",
                    html: '<span class="iconfont">&#xe6f6;</span>',
                    className: "nav-item-github"
                },
                { href: "https://onlyid.net/console", html: "控制台", position: "right" }
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
