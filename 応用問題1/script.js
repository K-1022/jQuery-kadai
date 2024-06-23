$(function () {
  //応用1のコメント
  // $("#btn").on("click", function () {
  //   $("ul").append("<li>" + $('[id="text-box"]').val() + "</li>");
  //   $("#text-box").val("");
  // });
  let text = "#text-box";
  let error = "#error";

  // 追加ボタンを押したときの処理
  $("#btn").on("click", function () {
    // テキストボックスが空のとき
    $(text).val();
    if ($(text).val() === "") {
      $(text).addClass("sample");
      $(error).text("入力必須です");
    } else {
      $("ul").append("<li>" + $(text).val() + "</li>");
      $(text).val("");
      $(error).text("");
      $(text).removeClass("sample");
    }
  });

  // テキストボックスに20文字以上入力されたとき
  $(text).on("input", function () {
    if ($(text).val().length >= 20) {
      $(text).addClass("sample");
      $(error).text("20 文字以上は入力できません");
      $("#btn").prop("disabled", true);
    } else {
      $(error).text("");
      $(text).removeClass("sample");
      $("#btn").prop("disabled", false);
    }
  });
});

//応用3の問題
// やることが入力されずに追加ボタン押下された場合下記を行う
//   - リストに追加しない
//   - 入力フォームの背景を赤にする
//   - 入力フォームの下に、「入力必須です」と表示する
//応用4の問題
// - やることが 20 文字以上入力されたら、（追加ボタンを押していなくても）下記を行う
//   - 入力フォーム背景を赤にする
//   - 入力フォームの下に、「20 文字以上は入力できません」と表示する
//   - 追加ボタンを押せないようにする
