/* HTML restartBox DIV박스 내 게임필드 버튼 생성 */
for(let i=0; i<9; i++){
	document.querySelector(".restartBox").innerHTML +=
	`<button onclick="restartGame(${i})"></button>`
	if((i+1)%3==0) document.querySelector(".restartBox").innerHTML += '<br/>'
}

function outPutResult(resultNumber){
/* 매개변수가 1:승리 2:패배 3:무승부 */
/* 게임결과를 alert창에 출력 */
	if(resultNumber == 1)alert("승리하였습니다")
	if(resultNumber == 2)alert("패배하였습니다")
	if(resultNumber == 3)alert("무승부입니다")
	
}

function restartGame(fieldInputResult){
	
	
}
