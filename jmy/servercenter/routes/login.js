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
  //此处使用post方法，收到从前端发送回来的数据是对象中的key
  var username = JSON.parse(Object.keys(req.body)).username;
  var password = JSON.parse(Object.keys(req.body)).password;
  console.log(username,password);
  var sql = `select * from userdata`
  connection.query(sql, function (error, results) {
    if (error) throw error;
    for (var i = 0; i < results.length; i++) {
      if (results[i].username == username && results[i].password == password) {
        req.session.username = username;//种库里面用户的 ID
        res.send({ error: 0, msg: '登录成功', username: username });
        return;
      }
    }
    for (var i = 0; i < results.length; i++) {
      if (results[i].username == username && results[i].password != password) {
        res.send({ error: 1, msg: '用户名或密码错误' });
        return;
      }
    }
    for (var i = 0; i < results.length; i++) {
      if (results[i] != username) {
        res.send({ error: 2, msg: '用户名不存在' })
        return;
      }
    }
  });
});


module.exports = router;
