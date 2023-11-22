// webpack.config.js
module.exports = {
    // ... other configurations ...
    devServer: {
        contentBase: './dist', // Specify the directory where your compiled files are
        hot: true,
        // ... other DevServer options ...
    },
};
