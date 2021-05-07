const port = process.env.PORT || 4000
const express = require("express")
const app = express()
const server = require("http").createServer(app)
const session = require("express-session")
//const redis = require("redis").createClient({host:"192.168.88.youip", port: 6379}),
//const connectRedis = require("connect-redis");
const sql = require("mysql")
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
conn = sql.createConnection({
   host: "localhost",
   user: "root",
   password: "mysql",
   database: "demo",
});
app.use(
   session({
      secret: "secretWord",
      key: "key",
      //store: new RedisStore({ client: redis}),
      cookie: {
         path: "/",
         httpOnly: true,
         maxAge: 365 * 24 * 60 * 60 * 1000,
      },
      saveUninitialized: true,
      resave: false,
   })
);
conn.connect((err) => {
   if (err) return console.log(err);
   console.log("Успешное подключение к базе");
   server.listen(port, function () {
      console.log("Сервер работает по адресу ");
   });
})
app.post("/reg", (req,res) => {
   session.username = req.body.user.name1
   console.log("reg")
   console.log(req.body.user.name1)

   query = "INSERT INTO  user (name, sname, numberphone, mail, sity, password ) VALUES (?,?,?,?,?,?)"
   data = [req.body.user.name1, req.body.user.name2, req.body.user.numberphone, req.body.user.email, req.body.user.city, req.body.user.password]
console.log(data)
   conn.query(query, data, (err,result) => {
      if(err) console.log(err)
      else console.log(result)
   })
});
