console.log('js실행')

let productlist = []
		if (localStorage.getItem('StoreList') != null)
		{ 
		
			for(let item of JSON.parse(localStorage.getItem('StoreList')))
			{
				productlist.push(item)
			}			
		}
//console.log(productlist[0].adrres)
//console.log(productlist[0].title)
AllContentView();
function AllContentView(){
	console.log('입력')
	let AllContentView = document.querySelector('.AllContentView')
	console.log(AllContentView)
	let content = document.querySelector('.content')
	console.log(content)
	let html=``;
	for( let i = 0; i<productlist.length; i++){
		html +=`<div class="test1">
					<div><img class="nimg"src="./img/nonimg.jpg"></div>
					<div><span>${productlist[i].title}</span><span>${productlist[i].address}</span>
						<div>${productlist[i].content}</div>
						<span>${productlist[i].review},${productlist[i].custom}${productlist[i].productType}</span>
					</div>
				</div>`
	}
	content.innerHTML = html
}
function regist(){
	document.querySelector('.sum');
	location.href="../ProductMgr/Product.jsp"
	console.log('입력');
}
function productView(){
	console.log('입력')
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
function detectBottom() { //스크롤 위치를 계산하여 특정 위치에 도달하면 loadlist를 호출하여
//저장된 알바 요소들을 순차적으로 화면에 나타냄
    
    let innerHeight = window.innerHeight//사용자가 브라우저에서 보고있는 높이를 저장
    let scrollHeight = document.body.scrollHeight //스크롤의 전체 위치를 저장
	//스크롤의 현재 위치가 0부터 시작~ 
	// 사용자의 스크롤 전체 높이에서 브라우저의 높이갚을 빼는 방식으로 스크롤의 바닥 체크 
	

    if (pageYOffset >= scrollHeight-innerHeight) {
		//바닥에 닿았으면 true리턴
		//컨텐츠를 추가할 예정이라 body태그의 높이를 늘려줌, 최상단 네비게이션의 stiky속성을 위함
		document.querySelector('body').style.height = scrollHeight+'px';
        return true;
    } else {
		//그렇지 않다면 false 리턴
        return false;
    }
}
//스크롤에 이벤트리스터 추가 올리거나 내릴때마다 아래 구문을 실행
addEventListener("scroll", () => {
		//바닥 체크 함수  체크  
		// 저장된 리스트를 미리 선언된 범위만큼씩 나누고 올림 진행(53개를 예를 들면 6페이지가 나와야 함)
		// 최대 페이지 범위 체크
	if(detectBottom() && Math.ceil(listItem.length/pageRange)>page)
	{
		AllContentView(); // 리스트 불러오기
	}
});