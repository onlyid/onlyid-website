const codeTheme = require("./src/prismLight");

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
                src: "img/logo.svg",
                href: "/web/home"
            },
            items: [
                { label: "产品", items: productMenu, className: "nav-item-product" },
                { type: "doc", docId: "home", label: "文档" },
                { to: "blog", label: "公告" },
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
            theme: codeTheme,
            additionalLanguages: ["http", "java", "swift"]
        },
        tableOfContents: {
            maxHeadingLevel: 2
        }
    },
    plugins: [
        "@docusaurus/plugin-content-pages",
        ["@docusaurus/plugin-content-docs", { sidebarPath: "./sidebars.js", breadcrumbs: false }],
        [
            "@docusaurus/plugin-content-blog",
            { blogTitle: "公告", blogSidebarCount: 0, showReadingTime: false }
        ]
    ],
    themes: [
        [
            "@docusaurus/theme-classic",
            { customCss: ["./src/index.css", "./src/docs.css", "./src/blog.css"] }
        ]
    ]
};
