var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: '19931014', 
    database: 'vuedata'
});
router.use('/add', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);//当前服务允许跨域
    res.setHeader('Access-Control-Allow-Credentials', true);  //允许携带凭证
    //兜库，看有无用户名,有才种,并取用户信息
    // var username = req.query.username
    // var password = req.query.password  
    var username = JSON.parse(Object.keys(req.body)).username;
    var password = JSON.parse(Object.keys(req.body)).password;  
    console.log(username,password);
    var sql1 = `SELECT * FROM userdata WHERE username="${username}"`;
    var sql2 = `INSERT INTO userdata(username,password) VALUES("${username}","${password}")`;
    connection.query(sql1, function (error, results){
        if (error) throw error;
        else{
            if (results.length > 0) {
                res.send({ error: 1, msg: '用户名已存在！' });
                return;
            }else{
                connection.query(sql2, function (error){
                    if (!error) {
                        res.send({ error: 0, msg: '注册成功！', username: username });
                        return;
                    }
                })
            }
        }
    });
});
    

module.exports = router;

