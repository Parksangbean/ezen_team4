

  let listItem = [] // 알바 리스트
  //테스트 데이터
  const unitlist = ['시급','일급','월급','연봉']
  const addresslist = ['옹달샘 123-2호 302호','산기슭 132-1 202호','중앙동 2번째 놀이터']
  const titlelist = ['벌레잡아줄사람 구함','게임 보상 상자 대신 열어줄사람','피시방 이벤트 대신 가줘요','삼겹살 대신 구워줄사람']
 let rand = Math.random()*80+10 //리스트 갯수 랜덤 생성
for(let i = 0 ; i<rand;i++)
  listItem.push(
	 {
		 imgPath:"./img/nonimg.jpg",
		 title: titlelist[Math.floor(Math.random()*titlelist.length)], //0부터 배열의 길이만큼 수중에 하나를 인덱스로 접근하여 해당 값 저장
		 address: addresslist[Math.floor(Math.random()*addresslist.length)],
		 payUnit: unitlist[Math.floor(Math.random()*unitlist.length)],
		 pay:Math.random()*900000+10
		 
	 }
 )
 let page = 0 //최대 페이지 저장
 const pageRange = 10 //한 페이지에 보여줄 리스트 갯수 상수 선언
 loadList() // 알바 리스트 불러오기
 function loadList()
 {
	 //document.querySelector('.wrapList').
	 let la = document.createElement('div')
	 la.className = 'listArea'+page
	 la.className += ' listArea'
	 document.querySelector('.partTimeArea').appendChild(la)
	 let getArea = document.querySelector(".listArea"+page)
	 
	 let startP = page*pageRange //페이지당 보여줄 갯수만큼씩만 보여주기
	 let endP = startP+pageRange
	 //10개씩 나누어 떨어지지 않았을때 남은 개수만큼 출력해주기 위해
	 //마지막 페이지를 체크하여 예외처리진행
	 if(endP > listItem.length) //예) 53페이지가 들어왔을때 반복문 마지막의 범위를 60이 아니라 53으로 바꿔준다
	 {
		 endP = listItem.length
	 }
	 for(let i =startP ; i<endP;i++)
	 {
		 let _item = listItem[i]
		 getArea.innerHTML += `
		 <a href="#"><div class="partTimeItem partItem${i}">
			<div>
		 	<img class="previewImg" src="${_item.imgPath}">
		 	</div>
		 	<div>
		 	<ul class="itemInformation">
		 		<li class="itemTitle"> ${_item.title} </li> 
		 		<li class="itemAddress">${_item.address}</li>
		 		<li class="itemPay"> 
		 			<span class="itemUnit">${_item.payUnit}</span>
		 			<span class="itemPayDetail">${_item.pay.toLocaleString()}</span>
		 		</li>
		 	</ul> 
		 	</div>
		 </div></a>
		 `
		 document.querySelector('.partItem'+i).style.opacity = 0
		}
		let tmparray = [] // 생성된알바 리스트 배열에 저장
		for(let i =startP;i<endP;i++)
		{
			tmparray.push(i)
		} 
		
		let inter1 = setInterval(function(){
			
			let a = Math.floor(Math.random()*tmparray.length) 
			// 0~ 배열의 길이 만큼 랜덤 정수 생성 인덱스로 접근하여 요소 하나씩 애니메이션 추가
			
			let _str1 = '.partItem'+tmparray[a]
			//애니메이션 함수
			document.querySelector(_str1).animate([
			 {
				 opacity:0, // 애니메이션 투명도 0부터 시작
			 },
			 
			 {
				 opacity:1, // 0부터 시작하여 600ms에 걸쳐 1로 만들어준다
				 
				 //1이되면 finished함수를 호출하여 애니메이션이 끝나면 추가로 실행할 함수를
				 //추가 할 수 있음
			 },],600).finished.then(function(){
				 //애니메이션이 0~1이되면 다시 0으로 돌아가 수동으로 1로 지정해준다
				 document.querySelector(_str1).style.opacity = 1
			 })
			
			tmparray.splice(a,1) // 저장된 배열을 하나씩 지워주며
			// 겹치는 부분이 없게 해줌,삭제된 배열의 뒤의 요소는 알아서 정렬되어 다른 연산은 필요x
			
			
			if(tmparray.length == 0) //배열에 저장된 알바 아이템을 모두 투명도 1로 만들면 인터벌 종료
			{
				clearInterval(inter1)
			}
		},200)

	 let _a = document.createElement('div')
	 _a.className = 'subBanner'
	 document.querySelector('.listArea'+page).appendChild(_a)
	 _a.innerHTML =`

			<div class="subarea subPry${page}">
				<img src="./img/subbanner.png">
				<div class="subInfo">당근알바 이용방법이 궁금하다면지금 바로 알아보세요!</div>
				
					<button class="subBtn">이용방법 알아보기</button>
				
			</div>


	 `
	 page ++ 

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
		loadList(); // 리스트 불러오기
	}
});

 