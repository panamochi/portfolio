"use strict";

// *****クラスfadeでアニメーションで出現させる*****
window.addEventListener("load", function () {
  // fadeをすべて取得する
  const Fades = document.querySelectorAll(".fade");
  //   scrollイベントをセット
  this.window.addEventListener("scroll", showFades);
  //   ロードのタイミングで一度処理(なくても動作に問題ないのでいらないかも？)
  showFades();

  function showFades() {
    // 処理位置
    const triggerBottom = (window.innerHeight / 6) * 5;
    // console.log(document.documentElement.ofHeight);
    // console.log(window.pageYOffset);
    // console.log(triggerBottom);

    Fades.forEach((fade) => {
      // listの頭部分の座標を取得
      const fadeTop = fade.getBoundingClientRect().top;

      // console.log(fadeTop);

      //   listの頭部分が処理位置を超えたら
      if (fadeTop < triggerBottom) {
        fade.classList.add("show");
        fade.classList.remove("hidden");
      } else {
        fade.classList.remove("show");
        fade.classList.add("hidden");
      }
    });
  }
});

// *****ページトップボタン*****
const pageTopBtn = document.querySelector(".home");
// .homeをクリックしたら
pageTopBtn.addEventListener("click", scrollTop);
// ページ上部へスムーズに移動する
function scrollTop() {
  window.scroll({ top: 0, behavior: "smooth" });
}
// スクロールされたら表示
window.addEventListener("scroll", scrollEvent);
function scrollEvent() {
  if (window.pageYOffset > 100) {
    pageTopBtn.classList.add("show");
  } else if (window.pageYOffset < 100) {
    pageTopBtn.classList.remove("show");
  }
}

// ローディングアニメーション
function loadingPage() {
  const loading = document.querySelector(".loader");
  loading.classList.add("hide");
}

if (!sessionStorage.getItem("visited")) {
  sessionStorage.setItem("visited", "first");
  window.addEventListener("load", () => {
    setTimeout(loadingPage, 2000);
  });
  setTimeout(loadingPage, 5000);
} else {
  loadingPage();
}

// const loading = document.querySelector(".loader");
// window.addEventListener(
//   "load",
//   () => {
//     loading.classList.add("hide");
//   },
//   false
// );
