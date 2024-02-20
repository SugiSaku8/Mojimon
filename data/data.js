
//判定は漢字ペディアを使うこと！
function check(mojimon) {
  switch(mojimon) {
    /*お手本
    case "漢字":
      return {
        name: "漢字",
        kakusuu:その漢字の画数,
        busyu:部首,
        jukugo:熟語をさがせ！
        yomi:熟語の読み
        setumei:図鑑説明
      }
    */
    case "火":
      return { 
        name:"火",
        kakusuu:4,
        busyu:4,
        jukugo:"火中",
        yomi:"かちゅう",
        setumei:"文字もんのなかで最もあつい炎を放つ。燃えているものを好む。"
      }
    case "水":
      return {
        name:"水",
        kakusuu:4,
        busyu:4,
        jukugo:"水中",
        yomi:"すいちゅう"
      }
    case "山":
      return {
        name:"山",
        kakusuu:3,
        busyu:3,
        jukugo:"山中",
        yomi:"さんちゅう"
      }
    case "石":
      return {
        name:"石",
        kakusuu:5,
        busyu:5,
        jukugo:"石火",
        yomi:"せっか"
      }
    case "金":
      return {
        name: "金",
        kakusuu:8,
        busyu:8,
        jukugo:"合金",
        yomi:"ごうきん"
      }
    case "土":
      return { 
        name:"土",
        kakusuu:3,
        busyu:3,
        jukugo:"出土",
        yomi:"しゅつど"
      }
    case "月":
      return {
        name: "月",
        kakusuu:4,
        busyu:4,
        jukugo:"水月",
        yomi:"すいげつ"
      }
    case "日":
      return {
        name: "日",
        kakusuu:4,
        busyu:4,
        jukugo:"中日",
        yomi:"ちゅうにち"
      }
    case "木":
      return {
        name: "木",
        kakusuu:4,
        busyu:4,
        jukugo:"土木",
        yomi:"どぼく"
      }
    case "雨":
      return {
        name: "雨",
        kakusuu:8,
        busyu:8,
        jukugo:"雨月",
        yomi:"うげつ"
      }
    case "川":
      return {
        name: "川",
        kakusuu:3,
        busyu:3,
        jukugo:"川上",
        yomi:"かわかみ"
      }
    case "夕":
      return {
        name: "夕",
        kakusuu:3,
        busyu:3,
        jukugo:"夕日",
        yomi:"ゆうひ"
      }
    case "花":
      return {
        name: "花",
        kakusuu:7,
        busyu:3,
        jukugo:"花火",
        yomi:"はなび"
      }
    case "草":
      return {
        name: "草",
        kakusuu:9,
        busyu:3,
        jukugo:"水草",
        yomi:"みずくさ"
      }
    case "右":
      return {
        name: "右",
        kakusuu:5,
        busyu:3,
        jukugo:"右手",
        yomi:"みぎて"
      }
    case "左":
      return {
        name: "左",
        kakusuu:5,
        busyu:3,
        jukugo:"左手",
        yomi:"ひだりて",
      }
    case "一":
      return {
        name: "一",
        kakusuu:1,
        busyu:1,
        jukugo:"一千",
        yomi:"いっせん",
      }
    case "二":
      return {
        name: "二",
        kakusuu:2,
        busyu:2,
        jukugo:"二千",
        yomi:"にせん",
      }
    case "三":
      return {
        name: "三",
        kakusuu:3,
        busyu:1,
        jukugo:"三千",
        yomi:"さんぜん",
      }
    case "四":
      return {
        name: "四",
        kakusuu:5,
        busyu:3,
        jukugo:"四千",
        yomi:"よんせん",
      }
    case "五":
      return {
        name: "五",
        kakusuu:4,
        busyu:2,
        jukugo:"五千",
        yomi:"ごせん",
      }
    case "六":
      return {
        name: "六",
        kakusuu:4,
        busyu:2,
        jukugo:"六千",
        yomi:"ろくせん",
      }
    case "七":
      return {
        name: "七",
        kakusuu:2,
        busyu:1,
        jukugo:"七百",
        yomi:"ななひゃく",
      }
    case "八":
      return {
        name: "八",
        kakusuu:2,
        busyu:2,
        jukugo:"八百",
        yomi:"はっぴゃく",
      }
    case "九":
      return {
        name: "九",
        kakusuu:2,
        busyu:1,
        jukugo:"九百",
        yomi:"きゅうひゃく",
      }
    case "十":
      return {
        name: "十",
        kakusuu:2,
        busyu:2,
        jukugo:"十手",
        yomi:"じって",
      }
    case "百":
      return {
        name: "百",
        kakusuu:6,
        busyu:5,
        jukugo:"百日",
        yomi:"ひゃくにち",
      }
    case "千":
      return {
        name: "千",
        kakusuu:3,
        busyu:2,
        jukugo:"千日",
        yomi:"せんにち",
      }
    case "上":
      return {
        name: "上",
        kakusuu:3,
        busyu:1,
        jukugo:"川上",
        yomi:"かわかみ",
      }
    case "下":
      return {
        name: "下",
        kakusuu:3,
        busyu:1,
        jukugo:"川下",
        yomi:"かわしも",
      }
    case "円":
        return {
          name: "円",
          kakusuu:4,
          busyu:2,
          jukugo:"五円",
          yomi:"ごえん",
        }
    case "王":
        return {
          name: "王",
          kakusuu:4,
          busyu:4,
          jukugo:"大王",
          yomi:"だいおう",
        }
    case "音":
        return {
          name: "音",
          kakusuu:9,
          busyu:9,
          jukugo:"子音",
          yomi:"しいん",
        }
    case "貝":
        return {
          name: "貝",
          kakusuu:7,
          busyu:7,
          jukugo:"大貝",
          yomi:"おおがい",
        }
    case "学":
          return {
            name: "学",
            kakusuu:8,
            busyu:3,
            jukugo:"学年",
            yomi:"がくねん",
          }
    case "気":
          return {
            name: "気",
            kakusuu:6,
            busyu:4,
            jukugo:"大気",
            yomi:"たいき",
          }
    case "休":
      return {
        name: "休",
        kakusuu:6,
        busyu:2,
        jukugo:"休日",
        yomi:"きゅうじつ",
      }
    case "玉":
      return {
        name: "玉",
        kakusuu:5,
        busyu:5,
        jukugo:"玉音",
        yomi:"ぎょくおん",
      }
    case "空":
      return {
        name: "空",
        kakusuu:8,
        busyu: 5,
        jukugo:"大空",
        yomi:"おおぞら",
      }
    case "犬":
      return {
        name: "犬",
        kakusuu:4,
        busyu:4,
        jukugo:"子犬",
        yomi:"こいぬ",
      }
    case "見":
      return {
        name: "見",
        kakusuu:7,
        busyu:7,
        jukugo:"見目",
        yomi:"みめ",
      }
    case "竹":
      return {
        name: "竹",
        kakusuu:6,
        busyu:6,
        jukugo:"竹林",
        yomi:"ちくりん",
      }
    case "田":
      return {
        name: "田",
        kakusuu:5,
        busyu:5,
        jukugo:"火田",
        yomi:"かでん",
      }
    case "口":
      return {
        name: "口",
        kakusuu:3,
        busyu:3,
        jukugo:"人口",
        yomi:"じんこう",
      }
    case "白":
      return {
        name: "白",
        kakusuu:5,
        busyu:5,
        jukugo:"白水",
        yomi:"しろみず",
      }
    case "青":
      return {
        name: "青",
        kakusuu:8,
        busyu:8,
        jukugo:"青空",
        yomi:"あおぞら",
      }
    case "赤":
      return {
        name: "赤",
        kakusuu:7,
        busyu:7,
        jukugo:"赤手",
        yomi:"せきしゅ",
      }
    case "林":
      return {
        name: "林",
        kakusuu:8,
        busyu:4,
        jukugo:"森林",
        yomi:"しんりん",
      }
    case "森":
      return {
        name: "森",
        kakusuu:12,
        busyu:4,
        jukugo:"森森",
        yomi:"しんしん",
      }
    case "校":
      return {
        name: "校",
        kakusuu:10,
        busyu:4,
        jukugo:"休校",
        yomi:"きゅうこう",
      }
    case "力":
      return {
        name: "力",
        kakusuu:2,
        busyu:2,
        jukugo:"人力",
        yomi:"じんりき",
      }
    case "文":
      return {
        name: "文",
        kakusuu:4,
        busyu:4,
        jukugo:"大文字（５文字指定）",
        yomi:"だいもんじ",
      }
    case "立":
      return {
        name: "立",
        kakusuu:5,
        busyu:5,
        jukugo:"中立",
        yomi:"ちゅうりつ",
      }
    case "目":
      return {
        name: "目",
        kakusuu:5,
        busyu:5,
        jukugo:"木目",
        yomi:"もくめ",
      }
    case "名":
      return {
        name: "名",
        kakusuu:6,
        busyu:3,
        jukugo:"人名",
        yomi:"じんめい",
      }
    case "本":
      return {
        name: "本",
        kakusuu:5,
        busyu:4,
        jukugo:"見本",
        yomi:"みほん",
      }
    case "年":
      return {
        name: "年",
        kakusuu:6,
        busyu:3,
        jukugo:"一年",
        yomi:"いちねん",
      }
    case "入":
      return {
        name: "入",
        kakusuu:2,
        busyu:2,
        jukugo:"入口",
        yomi:"いりぐち",
      }
    case "天":
      return {
        name: "天",
        kakusuu:4,
        busyu:3,
        jukugo:"天気",
        yomi:"てんき",
      }
    case "町":
      return {
        name: "町",
        kakusuu:7,
        busyu:5,
        jukugo:"町中",
        yomi:"まちなか",
      }
    case "虫":
      return {
        name: "虫",
        kakusuu:6,
        busyu:6,
        jukugo:"虫食む",
        yomi:"むしばむ",
      }
    case "中":
      return {
        name: "中",
        kakusuu:4,
        busyu:1,
        jukugo:"中気",
        yomi:"ちゅうき",
      }
    case "男":
      return {
        name: "男",
        kakusuu:7,
        busyu:5,
        jukugo:"男女",
        yomi:"だんじょ",
      }
    case "女":
      return {
        name: "女",
        kakusuu:3,
        busyu:3,
        jukugo:"女王",
        yomi:"じょうおう",
      }
    case "大":
      return {
        name: "大",
        kakusuu:3,
        busyu:3,
        jukugo:"大男",
        yomi:"おおおとこ",
      }
    case "小":
      return {
        name: "小",
        kakusuu:3,
        busyu:3,
        jukugo:"小学生",
        yomi:"しょうがくせい",
      }
    case "糸":
      return {
        name: "糸",
        kakusuu:6,
        busyu:6,
        jukugo:"上糸",
        yomi:"うわいと",
      }
    case "子":
      return {
        name: "子",
        kakusuu:3,
        busyu:3,
        jukugo:"男子",
        yomi:"だんし",
      }
    case "字":
      return {
        name: "字",
        kakusuu:6,
        busyu:3,
        jukugo:"文字",
        yomi:"もじ",
      }
    case "耳":
      return {
        name: "耳",
        kakusuu:6,
        busyu:6,
        jukugo:"空耳",
        yomi:"そらみみ",
      }
    case "車":
      return {
        name: "車",
        kakusuu:7,
        busyu:7,
        jukugo:"水車",
        yomi:"すいしゃ",
      }
    case "手":
      return {
        name: "手",
        kakusuu:4,
        busyu:4,
        jukugo:"空手",
        yomi:"くうしゅ",
      }
    case "出":
      return {
        name: "出",
        kakusuu:5,
        busyu:2,
        jukugo:"出入",
        yomi:"しゅつにゅう",
      }
    case "人":
      return {
        name: "人",
        kakusuu:2,
        busyu:2,
        jukugo:"小人",
        yomi:"こびと",
      }
    case "正":
      return {
        name: "正",
        kakusuu:5,
        busyu:4,
        jukugo:"中正",
        yomi:"ちゅうせい",
      }
    case "生":
      return {
        name: "生",
        kakusuu:5,
        busyu:5,
        jukugo:"人生",
        yomi:"じんせい",
      }
    case "先":
      return {
        name: "先",
        kakusuu:6,
        busyu:2,
        jukugo:"先日",
        yomi:"せんじつ",
      }
    case "早":
      return {
        name: "早",
        kakusuu:6,
        busyu:4,
        jukugo:"早生",
        yomi:"わせ",
      }
    case "足":
      return {
        name: "足",
        kakusuu:7,
        busyu:7,
        jukugo:"下足",
        yomi:"げそく",
      }
    case "村":
      return {
        name: "村",
        kakusuu:7,
        busyu:4,
        jukugo:"町村",
        yomi:"ちょうそん",
      }
  } 
}