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
        rules: [
            // {
            //     // 처리할 파일의 패턴을 명시
            //     test: /\.js$/,
            //     //패턴에 걸리는 요소들은 use 함수에 걸리도록
            //     use: [
            //         path.resolve('./my-webpack-loader.js')
            //     ]
            // }
            {
                // 처리할 파일의 패턴을 명시
                test: /\.css$/,
                //패턴에 걸리는 요소들은 use 함수에 걸리도록 css loader 라이브러리 / 모듈들은 뒤에꺼부터 먼저 실행됨.
                use: [
                    'style-loader', // js단 css를 cssom으로 로더 해주는 모듈 , 문자열로 된 스타일시트를 index.html에 주입 하도록 해주는것
                    'css-loader' // css 파일을 자바스크립트 모듈처럼 사용가능하게 해주는 모듈
                ],
            },
            // { //구버전 웹팩
            //     test: /\.(png|jpg|gif|svg)$/,
            //     loader:'url-loader', // 파일을 base64로 인코딩해서 자바스크립트 문자열로 변환 해주는 로더
            //     options:{
            //         publicPath:'./dist/', //퍼블릭 패스란 파일로더가 사용하는 파일 앞에 붙는 경로
            //         name:'[name].[ext]?[hash]', //파일로더가 이미지를 해쉬할떄
            //         limit:20000, //20kb 이상은 자바스크립트 문자열로 , 미만은 파일로 복사
            //     }
            // }
            {
                //최신버전의 웹팩 https://webpack.js.org/guides/asset-modules/
                test: /\.(jpe?g|gif|png)$/i,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 20 * 1024 // 20kb
                    }
                }
            }
            // { //file-loader 만 사용시
            //   test: /\.(jpe?g|gif|png)$/i,
            //   type: 'asset/resource',
            // }
        ]
    }
}
