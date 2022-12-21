//タイプライターアニメーション
  var id = ['anemasion']; //指定するidを全て配列で渡す
  var tx = [];
  var txCount = [];
  var txSp = 100; // テキストの表示速度
  var dly = 1000; // 次の文章までの待ち時間
  var count = 0;

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  EachTextAnimeControl();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

  
  window.onload = function(){
    kamikakushi();
    countSet();
    itimozi()
  }
  
  function countSet(){ // 文字数カウントの初期設定
    for(n=0;n<id.length;n++){
      txCount[n] = 0;
    }
  }
  
  
  function kamikakushi(){ // 要素を取得して非表示（opacity:0;）にする
    for(i=0;i<id.length;i++){
      id[i] = document.getElementById(id[i]);
      tx[i] = id[i].firstChild.nodeValue; // 初期の文字列
      id[i].innerHTML = '';
    }
  }
  
  function itimozi(){ //一文字ずつ表示
    id[count].innerHTML = tx[count].substr( 0, ++txCount[count] )+" "; // テキストの指定した数の間の要素を表示
    if(tx[count].length != txCount[count]){ // Count が初期の文字列の文字数と同じになるまでループ
      setTimeout("itimozi()",txSp); // 次の文字へ進む
    }else{
    id[count].innerHTML = tx[count].substr( 0, ++txCount[count] ); // テキストの指定した数の間の要素を表示
      count++; // 次の段落に進む為のカウントアップ
      if(count != id.length){ // id数が最後なら終了
      setTimeout("itimozi()",dly); // 次の段落へ進む
      }
    }
  }


// 参考コード（https://suzunon.com/web-develop/javascript-scroll-animation/）

let targets = document.querySelectorAll('.js-scroll-fall'); //ターゲット要素
//スクロールイベント
window.addEventListener('scroll', function () {
  var scroll = window.scrollY; //スクロール量を取得
  var windowHeight = window.innerHeight; //画面の高さを取得
  for (let target of targets) { //ターゲット要素がある分、アニメーション用のクラスをつける処理を繰り返す
    var targetPos = target.getBoundingClientRect().top + scroll + 300; //ターゲット要素の位置を取得
    if (scroll > targetPos - windowHeight) { //スクロール量 > ターゲット要素の位置
      target.classList.add('is-animated'); //is-animatedクラスを加える
    }
  }
});