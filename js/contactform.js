"use strict";

// *****コンタクトフォーム*****
const btn = document.getElementById("submit");

function contact() {
  const inputName = document.getElementById("name").value;
  const message = document.getElementById("output");

  if (inputName === "") {
    message.innerText = `※必須項目を入力して下さい※`;
    message.style.display = "block";
  } else {
    message.innerText = `${inputName}さん\nお問い合わせありがとうございます。`;

    message.style.display = "block";
  }
}
btn.addEventListener("click", contact);
// **************************
