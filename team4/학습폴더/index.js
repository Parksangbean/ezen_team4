let map = [0,0,0,0,0,0,0,0,0]

ViewUpdate()
function userClick(num){
	if( map[num] != 0 ){
		return ;
	}
	
	map[num] = 1
	ViewUpdate()
	if(outPutResult(WinChecker())){return}
	
	computerClick()
	ViewUpdate()
	if(outPutResult(WinChecker())){return}
}
function computerClick() {
	
	for(let i=1; i>0; i++){
		let 컴퓨터랜덤난수 = parseInt(Math.random()*8); //랜덤함수 생성
		if( map[컴퓨터랜덤난수] ==0 ){
			map[컴퓨터랜덤난수] =-1
			i=-1
		}		
	}
	console.log(map)	
}
let winIdxList = [
	1,2,3,
	4,5,6,
	7,8,9,
	7,5,3,
	1,5,9,1,4,7,2,5,8,3,6,9
]

function WinChecker()
{
	
	for(let i=0;i<24;i+=3)
	{
		
		let sum = 0
		for(let j=i;j<i+3;j++)
		{
			sum += map[ winIdxList[j]-1 ]
		}
		//console.log(sum)
		if(sum == 3)
		{
			//console.log("사용자 승")
			return 1    //사용자 승
		}
		else if(sum == -3)
		{
			//console.log("컴승")
			return 2    //컴퓨터 승
		}
	}
	if(map.indexOf(0) == -1)
	{return 3} //무승부
}


function outPutResult(resultNumber){
/* 매개변수가 1:승리 2:패배 3:무승부 */
/* 게임결과를 alert창에 출력 */
	if(resultNumber == 1){
		alert("승리하였습니다")
		
		return true
	}
	if(resultNumber == 2){
		alert("패배하였습니다")
		return true
		}
	if(resultNumber == 3){
		alert("무승부입니다")
		return true
		}
		
		
	return false
}


/* HTML restartBox DIV박스 내 게임필드 버튼 생성 */
function ViewUpdate()
{
	let _str = ""
	let dStr = ""
	for(let i=0; i<9; i++)
	{
		if(map[i] == 1) {_str = "O"}
		else if(map[i] == -1) {_str = "X"}
		else{_str ="#"}
		
		 dStr+=
		`<button onclick="userClick(${i})">${_str}</button>`
		if((i+1)%3==0) dStr += '<br/>'
	}
	document.querySelector(".restartBox").innerHTML = dStr
}


