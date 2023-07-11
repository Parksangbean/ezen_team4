console.log('js실행')
let categoryList=[ '전체' , '식당' , '카페' , '용달/이사' , '뷰티/미용' , '헬스/필라테스']
let Contents = []
AllContentView();
function AllContentView(){
	console.log('입력')
	let AllContentView = document.querySelector('.AllContentView')
	console.log(AllContentView)
	let content = document.querySelector('.content')
	console.log(content)
	let html=``;
	for( let i = 0; i<Contents.length; i++){
		
		html +=`<div>${Contents[i]}</div> `
	}
	content.innerHTML = html
}
function regist(){
	document.querySelector('.sum');
	
	console.log('입력');
}
function restaurantView(){
	console.log('입력')
}
function CafeView(){
	console.log('입력')
}
function MoveView(){
	console.log('입력')
}
function beautyView(){
	console.log('입력')
}
function healthView(){
	console.log('입력')
}