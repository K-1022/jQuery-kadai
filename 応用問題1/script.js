$(function () {
  //応用1のコメント
  // $("#btn").on("click", function () {
  //   $("ul").append("<li>" + $('[id="text-box"]').val() + "</li>");
  //   $("#text-box").val("");
  // });
  let text = ".text-box";
  let error = "#error";
  let text2 = ".text-box2";
  let error2 = "#error2";

  const validationTextBox = (textBox, errorDiv, btnClick, listAppend) => {
    console.log(textBox, errorDiv, btnClick, listAppend);
    $(textBox).on("input", function () {
      if ($(textBox).val().length >= 20) {
        $(textBox).addClass("sample");
        $(errorDiv).text("20 文字以上は入力できません");
        $(btnClick).prop("disabled", true);
      } else {
        $(errorDiv).text("");
        $(textBox).removeClass("sample");
        $(btnClick).prop("disabled", false);
      }
    });

    // 追加ボタンを押したときの処理
    $(btnClick).on("click", function () {
      // テキストボックスが空のとき
      $(textBox).val();
      if ($(textBox).val() === "") {
        $(textBox).addClass("sample");
        $(errorDiv).text("入力必須です");
      } else {
        $(listAppend).append("<li>" + $(textBox).val() + "</li>");
        $(textBox).val("");
        $(errorDiv).text("");
        $(textBox).removeClass("sample");
      }
    });
  };

  validationTextBox(text, error, ".btn", ".list");
  validationTextBox(text2, error2, ".btn2", ".list2");

  // // 追加ボタンを押したときの処理
  // $(".btn").on("click", function () {
  //   // テキストボックスが空のとき
  //   $(text).val();
  //   if ($(text).val() === "") {
  //     $(text).addClass("sample");
  //     $(error).text("入力必須です");
  //   } else {
  //     $(".list").append("<li>" + $(text).val() + "</li>");
  //     $(text).val("");
  //     $(error).text("");
  //     $(text).removeClass("sample");
  //   }
  // });

  // テキストボックスに20文字以上入力されたとき
  // $(text).on("input", function () {
  //   if ($(text).val().length >= 20) {
  //     $(text).addClass("sample");
  //     $(error).text("20 文字以上は入力できません");
  //     $(".btn").prop("disabled", true);
  //   } else {
  //     $(error).text("");
  //     $(text).removeClass("sample");
  //     $(".btn").prop("disabled", false);
  //   }
  // });

  let isUp = true;

  $(".button").on("click", function () {
    if (isUp) {
      $(".button").text("▼");
      $(".list").slideUp();
      isUp = false;
    } else {
      $(".button").text("▲");
      $(".list").slideDown();
      isUp = true;
    }
  });
});

// // 追加ボタンを押したときの処理
// $(".btn2").on("click", function () {
//   // テキストボックスが空のとき
//   $(text2).val();
//   if ($(text2).val() === "") {
//     $(text2).addClass("sample");
//     $(error2).text("入力必須です");
//   } else {
//     $(".list2").append("<li>" + $(text2).val() + "</li>");
//     $(text2).val("");
//     $(error2).text("");
//     $(text2).removeClass("sample");
//   }
// });

// テキストボックスに20文字以上入力されたとき
// $(text2).on("input", function () {
//   if ($(text2).val().length >= 20) {
//     $(text2).addClass("sample");
//     $(error2).text("20 文字以上は入力できません");
//     $(".btn2").prop("disabled", true);
//   } else {
//     $(error2).text("");
//     $(text2).removeClass("sample");
//     $(".btn2").prop("disabled", false);
//   }
// });

//リストの上げ下げ
let isUp2 = true;

$(".button2").on("click", function () {
  if (isUp2) {
    $(".button2").text("▼");
    $(".list2").slideUp();
    isUp2 = false;
  } else {
    $(".button2").text("▲");
    $(".list2").slideDown();
    isUp2 = true;
  }
});
// $(".slide2").on("click", function () {
//   if ($(".list2").val().length >= 0) {
//     $(".slide2").text("▼");
//     $(".list2").slideUp();
//   }
//   $(".slide2")
//     .text("▼")
//     .on("click", function () {
//       $(".slide2").text("▲");
//       $(".list2").slideDown();
//     });
// });

// // //応用3の問題
// // // やることが入力されずに追加ボタン押下された場合下記を行う
// // //   - リストに追加しない
// // //   - 入力フォームの背景を赤にする
// // //   - 入力フォームの下に、「入力必須です」と表示する
// // //応用4の問題
// // // - やることが 20 文字以上入力されたら、（追加ボタンを押していなくても）下記を行う
// // //   - 入力フォーム背景を赤にする
// // //   - 入力フォームの下に、「20 文字以上は入力できません」と表示する
// //   - 追加ボタンを押せないようにする
