
const path = require("path");
module.exports = {
    webpack: {
        alias: {
            '@Components': path.resolve(__dirname, "src/components/"),
            '@Hooks': path.resolve(__dirname, "src/hooks/"),
            '@Langs': path.resolve(__dirname, "src/langs/"),
            '@Reducers': path.resolve(__dirname, "src/reducers/"),
        }
    }
}