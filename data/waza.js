// Sleep関数
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function save_send(senddata) {}
function save(data) {
  let status = get.status(
    "https://mojimon.onrender.com/get",
    4000,
  );
  //getサーバーに対して、4秒限定で接続テスト
  save_send(data);
}

//スクロールを無効化する
function disableScroll(event) {
  event.preventDefault();
}

// イベントと関数を紐付け
document.addEventListener('touchmove', disableScroll, { passive: false });


const get = {
  status: function (url, timeout) {
    const controller = new AbortController();
    const signal = controller.signal;
    const options = { mode: "no-cors", signal };
    return fetch(url, options)
      .then(
        setTimeout(() => {
          controller.abort();
        }, timeout),
      )
      .then((response) => {
        return response.statusText;
      })
      .catch((error) => {
        return "Erorr:" + error.message;
      });
    //エラーでなくなったからここ有効化していいよね？
  },
};

var teki_hp;
var teki_hp2;
var teki_def;
var teki_atk;
var jibun_hp;
var jibun_hp2;
var jibun_def;
var jibun_atk;
function battle_finish() {
  document.all.battle.style.display = "none";
  document.all.Cofb.style.display = "block";
}
function reset_hensuutati() {
teki_hp = +document.getElementById("teki_hp").innerHTML;
teki_hp2 = teki_hp
teki_def = +document.getElementById("teki_B").innerHTML;
teki_atk = +document.getElementById("teki_A").innerHTML;
jibun_hp= +document.getElementById("jibun_hp").innerHTML;
jibun_def= +document.getElementById("jibun_B").innerHTML;
jibun_atk= +document.getElementById("jibun_A").innerHTML;
}
const waza = {
  taiatari: async function () {
    var teki_hp_max = document.getElementById("teki_hp_max").innerHTML;
    var jibun_hp_max = document.getElementById("jibun_hp_max").innerHTML;
    document.getElementById("mes").innerHTML =
      `${jibun_result.name}は${teki_result.name}にたいあたりをした！`;
    teki_hp2 = teki_hp;
    teki_hp = Math.floor(teki_hp - (10 + jibun_atk - teki_def) / 2 - 10);
    if (teki_hp > teki_hp_max) {
      teki_hp = teki_hp_max;
    } else if(teki_hp < 0) {
      teki_hp = 0;
    }
    var change = function () {
      if(teki_hp == 0) {
        document.getElementById("mes").innerHTML = `${teki_result.name}をたおした！`
        check_mojimon_tairyoku()
      } else {
      document.getElementById("mes").innerHTML = `${teki_result.name}に${
        teki_hp2 - teki_hp
      }ダメージ！`;
      teki_hp2 = teki_hp;
      }
    };
    document.getElementById("teki_hp").innerHTML = teki_hp;
    await sleep(3000);
    change();
  },
  binta: async function (teki_result, jibun_result) {
    var teki_hp_max = document.getElementById("teki_hp_max").innerHTML;
    var jibun_hp_max = document.getElementById("jibun_hp_max").innerHTML;
    document.getElementById("mes").innerHTML =
      `${jibun_result.name}は${teki_result.name}にびんたをした！`;
    teki_hp2 = teki_hp;
    teki_hp = Math.floor(teki_hp - (10 + jibun_atk - teki_def) / 40 - 10);
    if (teki_hp >= teki_hp_max) {
      teki_hp = teki_hp_max;
    }
    var change = function () {
      document.getElementById("mes").innerHTML = `${teki_result.name}に${
        teki_hp2 - teki_hp
      }ダメージ！`;
      teki_hp2 = teki_hp;
    };
    document.getElementById("teki_hp").innerHTML = teki_hp;
    await sleep(3000);
    change();
  },
  /*
	技の作り方　これをコピーして、日本語のところをいい感じに書き換えましょう。
       -----------------------
	技の名前: async function(teki_result, jibun_result){
	  var teki_hp_max = document.getElementById("teki_hp_max").innerHTML;
	  var jibun_hp_max = document.getElementById("jibun_hp_max").innerHTML;
	  document.getElementById("mes").innerHTML = `${jibun_result.name}は${teki_result.name}にたいあたりをした！`
	  teki_hp = Math.floor(teki_result.hp - (その技の攻撃力 + jibun_result.atk - teki_result.def)/20 - その技の攻撃力)
	  if(teki_hp >= teki_hp_max){
	    teki_hp = teki_hp_max - 1
	  }
	  var change = function() {
	    document.getElementById("mes").innerHTML = `${teki_result.name}に${teki_result.hp - teki_hp}ダメージ！`
	    teki_result.hp = teki_hp
	  }
	  document.getElementById("teki_hp").innerHTML = teki_hp
	  await sleep(3000);
	  change()
	},
	---------------------
	その後、ひだりの方にある、Filesから、index.htmlを探して、クリックします。
	そして、下の方にある、技の名前が書かれているところを見つけて（100行目あたり）、黄色い所(今はtaiatariになっているところ)を技の名前にしたり、日本語で書かれている、画面に表示される技名などを変えてみたりしましょう。
	*/
};
