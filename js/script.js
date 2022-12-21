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