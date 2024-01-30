
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
      }
    */
    case "火":
      return { 
        name:"火",
        kakusuu:4,
        busyu:4,
        jukugo:"火中",
        yomi:"かちゅう"
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
        busyu:3
      }
    case "一":
      return {
        name: "一",
        kakusuu:1,
        busyu:1
      }
    case "二":
      return {
        name: "二",
        kakusuu:2,
        busyu:2
      }
    case "三":
      return {
        name: "三",
        kakusuu:3,
        busyu:1
      }
    case "四":
      return {
        name: "四",
        kakusuu:5,
        busyu:3
      }
    case "五":
      return {
        name: "五",
        kakusuu:4,
        busyu:2
      }
    case "六":
      return {
        name: "六",
        kakusuu:4,
        busyu:2
      }
    case "七":
      return {
        name: "七",
        kakusuu:2,
        busyu:1
      }
    case "八":
      return {
        name: "八",
        kakusuu:2,
        busyu:2
      }
    case "九":
      return {
        name: "九",
        kakusuu:2,
        busyu:1
      }
    case "十":
      return {
        name: "十",
        kakusuu:2,
        busyu:2
      }
    case "百":
      return {
        name: "百",
        kakusuu:6,
        busyu:5
      }
    case "千":
      return {
        name: "千",
        kakusuu:3,
        busyu:2
      }
    case "上":
      return {
        name: "上",
        kakusuu:3,
        busyu:1
      }
    case "下":
      return {
        name: "下",
        kakusuu:3,
        busyu:1
      }
    case "円":
        return {
          name: "円",
          kakusuu:4,
          busyu:2
        }
    case "王":
        return {
          name: "王",
          kakusuu:4,
          busyu:4
        }
    case "音":
        return {
          name: "音",
          kakusuu:9,
          busyu:9
        }
    case "貝":
        return {
          name: "貝",
          kakusuu:7,
          busyu:7
        }
    case "学":
          return {
            name: "学",
            kakusuu:8,
            busyu:3
          }
    case "気":
          return {
            name: "気",
            kakusuu:6,
            busyu:4
          }
    case "休":
      return {
        name: "休",
        kakusuu:6,
        busyu:2
      }
    case "玉":
      return {
        name: "玉",
        kakusuu:5,
        busyu:5
      }
    case "空":
      return {
        name: "空",
        kakusuu:8,
        busyu: 5
      }
    case "犬":
      return {
        name: "犬",
        kakusuu:4,
        busyu:4
      }
    case "見":
      return {
        name: "見",
        kakusuu:7,
        busyu:7
      }
    case "竹":
      return {
        name: "竹",
        kakusuu:6,
        busyu:6
      }
    case "田":
      return {
        name: "田",
        kakusuu:5,
        busyu:5
      }
    case "口":
      return {
        name: "口",
        kakusuu:3,
        busyu:3
      }
    case "白":
      return {
        name: "白",
        kakusuu:5,
        busyu:5
      }
    case "青":
      return {
        name: "青",
        kakusuu:8,
        busyu:8
      }
    case "赤":
      return {
        name: "赤",
        kakusuu:7,
        busyu:7
      }
    case "林":
      return {
        name: "林",
        kakusuu:8,
        busyu:4
      }
    case "森":
      return {
        name: "森",
        kakusuu:12,
        busyu:4
      }
    case "校":
      return {
        name: "校",
        kakusuu:10,
        busyu:4
      }
    case "力":
      return {
        name: "力",
        kakusuu:2,
        busyu:2
      }
    case "文":
      return {
        name: "文",
        kakusuu:4,
        busyu:4
      }
    case "立":
      return {
        name: "立",
        kakusuu:5,
        busyu:5
      }
    case "目":
      return {
        name: "目",
        kakusuu:5,
        busyu:5
      }
    case "名":
      return {
        name: "名",
        kakusuu:6,
        busyu:3
      }
    case "本":
      return {
        name: "本",
        kakusuu:5,
        busyu:4
      }
    case "年":
      return {
        name: "年",
        kakusuu:6,
        busyu:3
      }
    case "入":
      return {
        name: "入",
        kakusuu:2,
        busyu:2
      }
    case "天":
      return {
        name: "天",
        kakusuu:4,
        busyu:3
      }
    case "町":
      return {
        name: "町",
        kakusuu:7,
        busyu:5
      }
    case "虫":
      return {
        name: "虫",
        kakusuu:6,
        busyu:6
      }
    case "中":
      return {
        name: "中",
        kakusuu:4,
        busyu:1
      }
    case "男":
      return {
        name: "男",
        kakusuu:7,
        busyu:5
      }
    case "女":
      return {
        name: "女",
        kakusuu:3,
        busyu:3
      }
    case "大":
      return {
        name: "大",
        kakusuu:3,
        busyu:3
      }
    case "小":
      return {
        name: "小",
        kakusuu:3,
        busyu:3
      }
    case "糸":
      return {
        name: "糸",
        kakusuu:6,
        busyu:6
      }
    case "子":
      return {
        name: "子",
        kakusuu:3,
        busyu:3
      }
    case "字":
      return {
        name: "字",
        kakusuu:6,
        busyu:3
      }
    case "耳":
      return {
        name: "耳",
        kakusuu:6,
        busyu:6
      }
    case "車":
      return {
        name: "車",
        kakusuu:7,
        busyu:7
      }
    case "手":
      return {
        name: "手",
        kakusuu:4,
        busyu:4
      }
      case "小":
      return {
        name: "小",
        kakusuu:3,
        busyu:3
      }
    case "出":
      return {
        name: "出",
        kakusuu:5,
        busyu:2
      }
    case "人":
      return {
        name: "人",
        kakusuu:2,
        busyu:2
      }
    case "正":
      return {
        name: "正",
        kakusuu:5,
        busyu:4
      }
    case "生":
      return {
        name: "生",
        kakusuu:5,
        busyu:5
      }
    case "先":
      return {
        name: "先",
        kakusuu:6,
        busyu:2
      }
    case "早":
      return {
        name: "早",
        kakusuu:6,
        busyu:4
      }
    case "足":
      return {
        name: "足",
        kakusuu:7,
        busyu:7
      }
    case "村":
      return {
        name: "村",
        kakusuu:7,
        busyu:4
      }
  } 
}