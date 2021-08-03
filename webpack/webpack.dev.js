const webpack =require("webpack");
const webpackMerge = require("webpack-merge");
const baseConfig=require("./webpack.base");
const variable =require("./webpackUtils/variable") ;
const {DIST_PATH}=variable;

const hotPlugin = new webpack.HotModuleReplacementPlugin();

const config = {
    mode: "development",
    cache: { type: 'memory' },
    devtool:"eval-cheap-module-source-map",
    plugins:[hotPlugin],
    devServer: {
        open: "chrome",
        contentBase: DIST_PATH,
        compress: true,//是否启用gzip压缩
        publicPath: "/",
        host: "localhost",
        hot:true,
        port: 9093,
        disableHostCheck: true,
        stats: 'errors-only',
        proxy: {
            // "/service": {
            //     target: "http://localhost:3000"
            // }          
        }
    }
};
const mergedConfig= webpackMerge.merge(baseConfig, config);
module.exports=mergedConfig;