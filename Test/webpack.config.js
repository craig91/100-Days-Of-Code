const path = require('path');

const publicFolder = `${__dirname}/public`;

module.exports = {
    entry: './src/Render.jsx',
    output: {
        path: publicFolder,
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: [/\.jsx?$/, /\.js?$/],
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015','react']
                },
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: "file-loader",
                options: {
                  name: "./images/[hash].[ext]"
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader?attrs[]=video:src'
            },

        ],
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['*','.js', '.jsx'],
    }
}























// const path = require('path');
// module.exports = {
//   entry: "./src/App.jsx",
//   output: {
//     path: path.resolve(__dirname, 'public'),
//     filename: "bundle.js",
//   },
//   module: {
//     loaders: [
//       {
//         test: [/\.jsx?$/, /\.js?$/],
//         exclude: /(node_modules)/,
//         loader: 'babel-loader',
//         query: {
//           presets: ['es2015', 'react'],
//           plugins: ["transform-react-jsx-img-import"]
//         }
//       },
//       {
//         test: /\.css$/,
//         loader: 'style-loader!css-loader'
//       },
//       {
//         test: /\.(jpe?g|png|gif|svg)$/i,
//         loader: "file-loader",
//         options: {
//           name: "./images/[hash].[ext]"
//         }
//       }
//     ]
//   },
//   devtool: 'source-map',
//   resolve: {
//     extensions: ["*", ".js", ".jsx" ]
//   }
// };


// module.exports = {
//     entry: "./src/App.jsx",
//     output: {
//         path: path.resolve(__dirname, 'public'),
//         filename: "bundle.js",
//         publicPath: '/'
//     },
//     devServer: {
//         inline: false,
//         contentBase: "./dist",
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.jsx?$/,
//                 exclude:/(node_modules|bower_components)/,
//                 loader: 'babel-loader',
//                 query: {
//                     presets: ['es2015', 'react']
//                 }
//             }
//         ]
//     }

// };