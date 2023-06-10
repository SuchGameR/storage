document.oncontextmenu = function(){
  return false;
}



// ビジーwaitを使う方法
function sleep(waitMsec) {
  var startMsec = new Date();
 
  // 指定ミリ秒間だけループさせる（CPUは常にビジー状態）
  while (new Date() - startMsec < waitMsec);
}




let index = 0;

function printLetter() {
  const message = messageContents;
  const messageElement = document.getElementById("message");
  messageElement.textContent += message[index];
  index++;

  if (index < message.length) {
    setTimeout(printLetter, 100); // 1000ミリ秒（1秒）ごとに次の文字を表示
  }
}

function startPrinting() {
  index = 0;
  messageElement.textContent = "";
  printLetter();
}
