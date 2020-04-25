module.exports = {
    configureWebpack:{
        module:{
            rules:[{
                test: /\.coffee$/,
                user:['coffee-loader']
            }]
        }
    },
    devServer:{
        proxy:{
            '/api':{
                target: 'http://localhost:8081/',
                changeOrigin: true,
            },
        },
    },
};