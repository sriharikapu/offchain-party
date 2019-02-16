const path = require("path");

module.exports = {
  require: [path.join(__dirname, "src/index.css")],
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        }
      ]
    }
  },
  theme: {
    fontFamily: {
      base: "Montserrat, sans-serif"
    },
    color: {
      baseBackground: "black",
      base: "white",
      link: "#995BD4",
      sidebarBackground: "#111",
      border: "#333",

      codeBackground: "#1d1f21",
      codeComment: "#7C7C7C",
      codePunctuation: "#7C7C7C",
      codeProperty: "#96CBFE",
      codeDeleted: "#f92672",
      codeString: "#A8FF60",
      codeInserted: "#A8FF60",
      codeOperator: "#EDEDED",
      codeKeyword: "#96CBFE",
      codeFunction: "#DD4A68",
      codeVariable: "#C6C5FE"
    }
  }
};
