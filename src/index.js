import "./styles.css";

const onClickAdd = () => {
  //いきなり機能を実装するのでは無く関数がうまく動作しているかの確認(細分化)
  const inputText = document.getElementById("add-text").value;
  alert(inputText);

  document.getElementById("add-text").value = ""; //←打った値を初期化する処理、初期化することによって、入力欄に値が残らない

  const div = document.createElement("div"); //HTMLのDOMが生成される
  div.className = "list-row"; //差し込んでいる
  // console.log(div);           //divが差し込まれているか確認
  const li = document.createElement("li"); //liテキストを生成
  li.innerText = inputText; //innnerTextの中に、テキストボックスから取得した変数（入力した内容）を設定することで liタグが作成される

  //divタグの子要素に書く要素をｓ設定
  div.appendChild(li);
  console.log(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());