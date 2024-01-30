const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const session = require("express-session");
const flash = require("connect-flash");
let bcrypt = require("bcrypt");
app.set("view engine", "ejs");
const updata = require("./Updata");

function service() {
  app.use("/save_get", express.static(path.join(__dirname, "./n/d/")));

  app.use(express.json());
  app.post("/save", (req, res) => {
    let datas = req.body;
    console.log(req);
    const filename = `./n/d/${req.body.user}.moji`;
    fs.writeFile(filename, JSON.stringify(datas), (err) => {
      if (err) {
        console.error(err);
        res.status(500).send("サーバエラー");
        return;
      }
      let time = Date.now();

      let status = {
        status: "成功",
        message: `${req.body.user}のデータを ${filename}　に保存しました。`,
        time: time,
      };
      res.send();
    });
  });

  //ユーザーデータ処理
  app.use(bodyParser.json());
  app.use("/", updata);
  //ログイン処理
  app.use(
    session({
      secret: "secret",
      resave: true,
      saveUninitialized: true,
    }),
  );

  app.use(flash());

  function updateOrAppendToFile(newData, filename, req, res) {
    fs.readFile(filename, (err, data) => {
      if (err) throw err;
      if (data.length > 0) {
        let jsonData = JSON.parse(data);
        let existingDataIndex = jsonData.findIndex(
          (item) => item.name === newData.name,
        );
        if (existingDataIndex !== -1) {
          res
            .status(409)
            .send(
              "すでにこの名前のアカウントが作成済みです。\nほかの名前にしてください。\n一つ前のページに戻りましょう。",
            );
        } else {
          newData.password = bcrypt.hashSync(newData.password, 10);
          jsonData.push(newData);
          fs.writeFile(filename, JSON.stringify(jsonData), (err) => {
            if (err) throw err;
            console.log("Data written to file");
          });
        }
      } else {
        let jsonData = [newData];
        fs.writeFile(filename, JSON.stringify(jsonData), (err) => {
          if (err) throw err;
          console.log("Data written to file");
        });
      }
    });
  }

  app.use(bodyParser.urlencoded({ extended: false }));

  app.use(bodyParser.json());

  app.use(express.static("data/"));

  app.use(express.static("data/"));

  app.get("/", function (request, response) {
    response.sendFile(__dirname + "/data/index.html"); //
  });

  app.get("/get", function (request, response) {
    const name = request.query.name;
    const password = request.query.password;
    fs.readFile("./data.json", (err, data) => {
      if (err) throw err;
      if (data.length > 0) {
        let jsonData = JSON.parse(data);
        let targetData = jsonData.find((item) => item.name === name);
        if (targetData) {
          var isMatch = bcrypt.compareSync(password, targetData.password); //
          response.send({ targetData, isMatch });
        } else {
          response
            .status(404)
            .send("その名前のアカウントは見つかりませんでした");
        }
      } else {
        response
          .status(404)
          .send(":(\nその名前のアカウントは見つかりませんでした。");
      }
    });
  });

  app.post("/", function (request, response) {
    console.log(request.body);
    updateOrAppendToFile(request.body, "./data.json", request, response);
  });

  //404.500エラーに対応する
  app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + "/data/404.html");
  });

  app.use((err, req, res, next) => {
    res.status(500).sendFile(__dirname + "/data/500.html");
  });

  app.use((req, res, next) => {
    res.status(409).sendFile(__dirname + "/data/409.html");
  });

  app.use((req, res, next) => {
    res.status(502).sendFile(__dirname + "/data/502.html");
  });
  
  //サーバーの起動
  var listener = app.listen(1301, function () {
    console.log(
      "もじもんのサーバーは、" +
        listener.address().port +
        "で動いています!!!!!",
    );
    console.log("____________________________________________________");
    console.log("|              Mojimon Developer Console");
    console.log("|                     起動しました。");
    console.log("|             ログはすべてここに出力されます。");
    console.log("|  起動時にエラーが出た場合は、index.jsを確認してください。");
    console.log("|                                                   ");
    console.log("|         ©Carnation Mojimon 2023-24");
    console.log("|         このサーバーは、Mojimonのサーバーです。");
    console.log("|                                               ");
  });
}

service();
