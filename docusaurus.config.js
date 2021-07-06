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
                        { label: "OTP （ 无密码 轻认证 ）", to: "/otp" },
                        { label: "SSO （ 统一账号 单点登录 ）", to: "/sso" },
                        { label: "IAM （ 用户管理 权限控制 ）", to: "/iam" },
                    ],
                },
                {
                    type: "doc",
                    docId: "intro",
                    label: "文档",
                },
                { to: "/demo", label: "体验" },
                { to: "/pricing", label: "价格" },
                { to: "/blog", label: "博客" },
                {
                    href: "https://github.com/onlyid",
                    label: "GitHub",
                },
                {
                    href: "https://www.onlyid.net/console",
                    label: "控制台",
                    position: "right",
                },
            ],
        },
        colorMode: {
            disableSwitch: true,
        },
        footer: {
            style: "dark",
            links: [
                {
                    title: "Docs",
                    items: [
                        {
                            label: "Tutorial",
                            to: "/docs/intro",
                        },
                    ],
                },
                {
                    title: "Community",
                    items: [
                        {
                            label: "Stack Overflow",
                            href: "https://stackoverflow.com/questions/tagged/docusaurus",
                        },
                        {
                            label: "Discord",
                            href: "https://discordapp.com/invite/docusaurus",
                        },
                        {
                            label: "Twitter",
                            href: "https://twitter.com/docusaurus",
                        },
                    ],
                },
                {
                    title: "More",
                    items: [
                        {
                            label: "Blog",
                            to: "/blog",
                        },
                        {
                            label: "GitHub",
                            href: "https://github.com/facebook/docusaurus",
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
        },
        prism: {
            theme: codeTheme,
        },
    },
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                },
                blog: {},
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            },
        ],
    ],
};
