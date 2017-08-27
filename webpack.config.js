const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist'),
        publicPath: "dist/"
    },
    module: {
        rules: [
            {
                use: "babel-loader",
                test: /\.js$/,
                exclude: path.resolve(__dirname, "node_modules")
            },
            {
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                }),
                test: /\.css$/
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: { limit: 40000}
                    },
                    'image-webpack-loader']
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css')
    ]
};


// __dirname = current directory, le nom de notre projet
// après avoir definit le babel-loader, on cree le fichier babelrc qui va contenir l instruction pour le babel-preset-env
// la nouvelle synthaxe pour le plugin ExtractTextPlugin se trouve la haut, on peut voir comment use ca ds le site npm
// et après on linken notre nvo fichier css ds notre fichier index.html
// besoin d installer file-loader pr que les loader prles images puissent fonctionner
// on ajoute publicpath pr linker les images
// les images qui depassent la limite fixee ne st pas chargees ds le bundle.js mais ds notre fichier et place ds notre output dossier