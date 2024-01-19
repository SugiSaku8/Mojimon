/*
cStudy inc.
cStudy もじもん
Mojimon 'Waza' Script
©2023-24 Carnation cStudy
*/
function getid(ID_NAME) {
  var result = document.getElementById(ID_NAME).InnerHTML;
  return result;
}
/*window.onload = function() {
  document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // ページのリロードを防ぐ
    var name = document.getElementById('searchName').value;
    var password = document.getElementById('searchPassword').value;
    fetch('/get?name=' + encodeURIComponent(name))
        .then(response => {
             if (!response.ok) {
                 return response.text().then(text => {
                     throw new Error(`Request failed with status ${response.status}: ${text}`);
                 });
             }
             return response.json();
         })
        .then(data => {
          if(data.password == password)  {
          document.getElementById('result').innerText = 'ログインに成功しました。';
          } else {
            throw new Error('パスワードが違います。')
          }
        })
        .catch(error => {
            document.getElementById('result').innerText = 'Error: ' + error.message;
        });
  });
}
*/




/*function setup(){
  let teki_mojimon = map[Math.floor( Math.random() * map.length )]
  let jibun_mojimon = map[Math.floor( Math.random() * map.length )]
  console.log("敵のもじもん:"+ teki_mojimon + "自分のもじもん:" + jibun_mojimon)
  document.getElementById("taiatari").addEventListener('click', function(){
    waza.taiatari()
  });
  document.getElementById("binta").addEventListener('click', function(){
    waza.binta()
  });
  document.getElementById("main").style.display = "block";
}*/