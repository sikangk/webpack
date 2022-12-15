const path = require('path');

module.exports = {
    mode: 'development',
    // 시작점
    entry: {
        main: './src/app.js',

    },

    //번들된 파일 output
    output: {
        path: path.resolve('./dist'),
        filename: "[name].js"
    },
    //웹팩의 로더는 각 파일을 처리하기 위한 요소
    module: {
        rules: [{
            // 처리할 파일의 패턴을 명시
            test: /\.js$/,
            //패턴에 걸리는 요소들은 use 함수에 걸리도록
            use: [
                path.resolve('./my-webpack-loader.js')
            ]
        }
        ]
    }
}
