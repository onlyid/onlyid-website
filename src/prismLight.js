const baseTheme = require("prism-react-renderer/themes/github");

module.exports = {
    ...baseTheme,
    styles: [
        ...baseTheme.styles,
        {
            types: ["url"],
            style: { color: "#393A34" },
            languages: ["http"]
        },
        {
            types: ["property"],
            style: { color: "#660e7a" },
            languages: ["http"]
        },
        {
            types: ["string"],
            style: { color: "#393A34" },
            languages: ["http"]
        },
        {
            types: ["number"],
            style: { color: "#393A34" },
            languages: ["http"]
        }
    ]
};
