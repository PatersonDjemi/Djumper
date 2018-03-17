const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

// const cleanWebpackPlugin = require('clean-webpack-plugin');

const VENDOR_LIBS = ['react', 'react-dom', 'lodash', 'redux', 'react-redux', 'react-router-dom', 'redux-form', 'redux-saga', 'immutability-helper',
    'prop-types', 'redux-promise'];


module.exports = {
    target: 'web',
    entry: {
        bundle: ['babel-polyfill', './src/index.js'],
        vendor: VENDOR_LIBS
    },
    output: {
        filename: "[name].[chunkHash].js",
        path: path.resolve(__dirname, 'dist'),

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
                    use: [  {
                                loader:'css-loader'
                            },
                            {
                                loader: 'less-loader'
                            }
                        ]
                }),
                test: /\.(css|less)$/
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: { limit: 400000}
                    },
                    'image-webpack-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: 'file-loader'
            },
        ]
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
        // new webpack.({
        //     names: ['vendor', 'manifest']
        // }),
        // new htmlWebpackPlugin({
        //     template: 'index.html'
        // })
    ]
   
};


// __dirname = current directory, le nom de notre projet
// après avoir definit le babel-loader, on cree le fichier babelrc qui va contenir l instruction pour le babel-preset-env
// la nouvelle synthaxe pour le plugin ExtractTextPlugin se trouve la haut, on peut voir comment use ca ds le site npm
// et après on linken notre nvo fichier css ds notre fichier index.html
// besoin d installer file-loader pr que les loader prles images puissent fonctionner
// on ajoute publicpath pr linker les images
// les images qui depassent la limite fixee ne st pas chargees ds le bundle.js mais ds notre fichier et place ds notre output dossier
// installer babel-preset-react afin que babel puisse transpiler les jsx en pure js, puis on va ds le fichier babelrc
// on ajoute aussi le string react au fichier babelrc pour que webpack puisse transpile aussi le le jsx synthaxe en pure js
// le html-webpack-plugin permet d ajouter automatiquement les scripts generes par webpack ds notre fichier html,
    // ensuite un fichier html est generé aussi ds notre nvo dossier dist contenant tsles scripts de ce dossier(css, js,...)
// en ajoutant le chunkHash, on change la propiété name to names au nivo du commonschunkplugin et on lui passe un tableau

// devServer : historyApiFallback permet de dire à webpack de traquer l history du browser afin de pouvoir naviguer d une page à une autre



 /*
resolve: {
    alias: {
        '../../theme.config$': path.join(__dirname, 'My-semantic-theme/theme.config')
    }
},
*/
// bundle: ['babel-polyfill', './src/index.js'] babel-polyfill permet d utiliser les generator et les await feature

//bundle: './src/index.js',

/*
                    use: [  {
                                loader:'css-loader',
                                options: {
                                    sourceMap:tr
                                }
                            },
                            {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: true
                                }
                            },
                            {
                                loader: 'less-loader'
                            }
                        ]
 */