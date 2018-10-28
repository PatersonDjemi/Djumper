module.exports = function(api) {
    api.cache(true);
    const presets = ["@babel/env", "@babel/react"];
    const plugins = [["lodash", {"id": ["lodash", "semantic-ui-react"]}]];
    const sourceMaps = true;

    return {
        presets,
        plugins,
        sourceMaps
    };
}