
  // alert('OK!');


$(function () {
  $(".text-animation").each(function () {
    // 1文字ずつ<span>で囲む
    $(this)
      .children()
      .addBack()
      .contents()
      .each(function () {
        if (this.nodeType == 3) {
          $(this).replaceWith(
            $(this).text().replace(/(\S)/g, "<span>$1</span>")
          );
        }
      });
    // スクロールして要素が画面内に入ったら文字を表示
    $(this).on("inview", function () {
      // 1文字ずつ順番に表示(不透明にする)
      $(this).css({ opacity: 1 });
      for (var i = 0; i <= $(this).children("span").length; i++) {
        $(this)
          .children("span")
          .eq(i)
          .delay(200 * i) // 文字間の時間
          .animate({ opacity: 1 }, 1000); // 全部表示されるまでの時間
      }
    });
  });
});