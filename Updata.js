/*
©Carnation 2024
For Mojimon
All rights reserved
*/
"use strict";

const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

function update(username, level, mojimon, item) {
  // フォルダのパス
  const folderPath = `./data`;

  // フォルダが存在しない場合は作成
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  // 現在の時間を取得
  let Time = new Date().getTime();

  // ファイル名の形式を指定
  const fileName = `${username}.json`;

  // JSONファイルのパス
  const filePath = path.join(folderPath, fileName);

  // オブジェクトを作成
  const andeldata = {
    user: username,
    level: level,
    mojimon: box_mojimon,
    item: item,
    savetime: Time,
  };

  try {
    // JSONファイルに変数の内容を書き込む
    fs.writeFileSync(filePath, JSON.stringify(andeldata, null, 2));
  } catch (erorr) {
    console.error("エラーが発生しました。\n" + error + "\nStatus:500");
  }
}

//Andelの追加処理
router.post("/send", (req, res) => {
  let username = req.body.username;
  let level = req.body.level;
  let mojimon = req.body.mojimon;
  let item = req.body.item;

  if (
    username === undefined ||
    level === undefined ||
    mojimon === undefined ||
    item === undefined
  ) {
    res.json({ status: ":(\n失敗しました。\nデータが不正です。\nStatus:500" });
  } else {
    update(username, level, mojimon, item);
  }
  res.json({
    status:
      "終了しました。\n正常に処理が完了した場合は、100を、\n失敗した場合は、500を返します。",
  });
});

module.exports = router;
