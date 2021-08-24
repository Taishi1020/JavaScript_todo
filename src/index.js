import "./styles.css";

const onClickAdd = () => {
  //いきなり機能を実装するのでは無く関数がうまく動作しているかの確認(細分化)
  const inputText = document.getElementById("add-text").value;

  document.getElementById("add-text").value = ""; //←打った値を初期化する処理、初期化することによって、入力欄に値が残らない

  const div = document.createElement("div"); //HTMLのDOMが生成される
  div.className = "list-row"; //差し込んでいる
  // console.log(div);           //divが差し込まれているか確認
  const li = document.createElement("li"); //liテキストを生成
  li.innerText = inputText; //innnerTextの中に、テキストボックスから取得した変数（入力した内容）を設定することで liタグが作成される

  //完了ボタンタグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //おされた完了ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
    const deleteTaret = completeButton.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTaret);
  });

  //削除ボタン生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    //Todo内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    //div以下を初期化
    addTarget.textContent = null;

    //liタグの生成
    const li = document.createElement("li");
    li.innerText = text;
    console.log(li);

    //buttonタグの生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    //divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    console.log(addTarget);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //divタグの子要素に書く要素をｓ設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
