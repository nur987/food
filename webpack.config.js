"use strict";

let path = require("path");

module.exports = {
  ////!mode = режим для webpack: development or production
  mode: "development",
  ////!путь к файлу для сбора
  entry: "./js/script.js",
  output: {
    ////! сохраним как собранные js файлы как bundle.js
    filename: "bundle.js",
    ////! __dirname - для получения корня приложения и в этой папке собираем js module and exports
    path: __dirname + "/js",
  },
  ////! true - при сохранении файла автоматически собирает наш проект
  watch: true,
  ////! Когда уже запустили сборщик кода уже код становится не читаемым и чтобы при ошибке коде после сборки мы в этой devtool можем посмотреть исходник кода
  devtool: "source-map",
  ////! module- в module мы можем установить: typeScript, Sass, CoffeeScript,babel etc
  module: {
    rules: [
      {
        ////! find js file
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          ////!связывает webpack c babel
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  ////! for watch the bugs
                  debug: true,
                  ////!
                  corejs: 3,
                  useBuiltIns: "usage",
                },
              ],
            ],
          },
        },
      },
    ],
  },
};
