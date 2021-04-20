module.exports = function () {
  return {
    module: {
      rules: [
        {
          test: /\.(ttf|eot|otf|woff|woff2)$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',
            publicPath: '../fonts/',
          },
        },
      ],
    },
  };
};
