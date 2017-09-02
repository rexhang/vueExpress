/**
 * 配置文件
 */

let host = "rexhang.com"

let config = {

    // 下面的地址配合云端 Server 工作
    host,

    // 日历获取地址
    indexData: `https://${host}/api/date`,

    // get测试地址
    getTest: `https://${host}/api/get.php`,

    // post测试地址
    postTest: `https://${host}/api/post.php`

}

let conf = {
    author: 'rexhang'
}

// module.exports = config
// export default {}
exports.API = config
exports.conf = conf
