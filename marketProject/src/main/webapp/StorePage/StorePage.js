console.log('js실행')
let categoryList=[ '전체' , '식당' , '카페' , '용달/이사' , '뷰티/미용' , '헬스/필라테스']
let Contents = ['asdas','asda1231s','asddasdas']
AllContentView();
function AllContentView(){
	console.log('입력')
	let AllContentView = document.querySelector('.AllContentView')
	console.log(AllContentView)
	let content = document.querySelector('.content')
	console.log(content)
	for( let i = 0; i<Contents.length; i++){
		let html=``;
		html +=`<div>${Contents[i]}</div> `
		content.innerHTML = html
	}

}
function regist(){
	document.querySelector('.sum');
	console.log('입력');

}
