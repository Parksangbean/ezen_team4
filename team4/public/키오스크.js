/*
//22

PriceArray  // 요금충전
         (시간)
   1 : 1000   
   2 : 2000
   3 : 3000
   4r : 4000

admin // 관리자 계정
   id
   pwd
   
   
 */
document.querySelector('#main').style='display: none;'
document.querySelector('#Admin').style='display: none;'
 let accountIndex; //로그인된 유저의 index 저장
 let accountArray = [] // 회원정보 리스트
 let priceArray = [] //요금리스트
 let giftCardArray = [] //상품권 리스트

// 관리자 계정
 let addminAccount = {ID:"root1234",Pwd:"root1234",limitTime:34873249646237,grade:1,totalPrice:99999999}
 accountArray.push(addminAccount)
 //테스트 유저 
 accountArray.push({Name:"가나다",ID:"test1test2",Pwd:"test2test2",limitTime:54,grade:4,totalPrice:1000})
 accountArray.push({Name:"라마바",ID:"test2test2",Pwd:"test2test2",limitTime:114,grade:4,totalPrice:2000})
 accountArray.push({Name:"사아자",ID:"test1test2",Pwd:"test2test2",limitTime:123,grade:4,totalPrice:3000})
 accountArray.push({Name:"자차카",ID:"test1test2",Pwd:"test2test2",limitTime:154,grade:4,totalPrice:3000})
 function SignUp(){ //회원가입 함수
   let Name = document.querySelector('#Name').value;    // 성명
   let ID = document.querySelector('#ID').value;      // 아이디   
   let Pwd = document.querySelector('#Pwd').value;       // 비밀번호
   
   if( ID.length < 8){
      alert('8자 이상 입력해주세요.')
   }
   if( Pwd.length < 8){
      alert('8자 이상 입력해주세요.')
   }
  
   let account = { Name : Name ,
               ID : ID ,
               Pwd : Pwd ,
               limitTime :0,
		   		grade:4,
   			totalPrice:0
   }
   if( Name == '' || ID == '' || Pwd == '' ){
	   //가입정보가 공백일 경우 중지
      alert('회원가입정보를 입력해주세요.')
      return;
   }
   if( ID == addminAccount.ID ){
	   //관리자 계정과 중복될 경우 중지
	   alert('이미 가입된 아이디입니다')
	   return;
   }
   for(let i=0; i<accountArray.length; i++){
	   //기존 회원 ID와 중복될 경우 중지
		if( accountArray[i].ID == ID ){
		   	alert('이미 가입된 아이디입니다')
		   	return;
	   }
   }
   
	alert('회원가입 완료')
	console.log( account );
	accountArray.push(account)
 	console.log(accountArray)
 	SignUpGap()
 }

//회원가입 상 입력된 value값 초기화
function SignUpGap(){
	document.querySelector('#Name').value = '';    // 성명
   	document.querySelector('#ID').value = '';      // 아이디   
   	document.querySelector('#Pwd').value = '';       // 비밀번호
}



// 결제방식(카드, 현금)을 선택
function PriceSelect(_idx)
{

	let _PriceSelect = prompt("결제방식 '카드' 또는 '현금'을 입력해주세요")
	let _inputCashPrice = 0
	//현금투입금액 선언
	let changeCash = 0
	//거스름돈 선언
	
	if(_PriceSelect == '현금'){ // 현금결제방식 선택할 경우
		_inputCashPrice = prompt('투입금액을 입력해주세요')
		if(_inputCashPrice > priceArray[_idx].price ){
			changeCash = _inputCashPrice - priceArray[_idx].price
			alert(`반환금액 ${changeCash}원 입니다.`)
		}
	} else if(_PriceSelect == '카드') { // 카드결제방식 선택할 경우
		_inputCashPrice = priceArray[_idx].price
	} else { // 현금, 카드 결제방식 모두 아닌 경우
		alert('결제방식을 다시 확인해주세요')
		return
	}

	accountArray[accountIndex].limitTime += priceArray[_idx].time
	//누적시간 더하기
	accountArray[accountIndex].totalPrice += priceArray[_idx].price
	//누적투입금액 더하기
	SetGrade()
	UserInfoUpdate()
	LoadPriceList()
	
	console.log('회원번호 : '+accountIndex)
	console.log('누적시간 : '+accountArray[accountIndex].limitTime)
	console.log('누적금액 : '+accountArray[accountIndex].totalPrice)
		
}

//유저 정보의 등급 조정
 function SetGrade()
 {

	if(accountArray[accountIndex].totalPrice >= 30000){accountArray[accountIndex].grade = 1}
	else if(accountArray[accountIndex].totalPrice >= 20000){accountArray[accountIndex].grade = 2}
	else if(accountArray[accountIndex].totalPrice >= 10000){accountArray[accountIndex].grade = 3}
	else{accountArray[accountIndex].grade = 4}
	
 }
 
 //등급을 받아 요금제 리스트에서 배율 조정
 function GradetoPrice(_getgr,_getPrice)
 {
	 if(_getgr == 1)
	 {
		  return 0.7 *_getPrice
	 }
	 if(_getgr == 2){
		return 0.8 *_getPrice 
	 } 
	 if(_getgr == 3) {
		 return 0.9 *_getPrice}
	 if(_getgr== 4) {
		 return 1 *_getPrice}
 }

 
function Login(){		//로그인 함수
	let  id =document.querySelector('.id').value;
	let pwd =document.querySelector('.pwd').value;
	 
	let member ={ id : id, pwd : pwd};
	 
	if(id==''|| pwd==""){alert('[로그인 실패]: 아이디,패스워드 확인해주세요.'); return;}
	if(id.length<8 || pwd.length<8){alert('[로그인 실패]: 8글자 이상 일벽해주세요'); return;}
	 
	let login = false; //로그인 상태 저장 변수
	for ( let i=0; i<accountArray.length ; i++){
		let member = accountArray[i]
		if(member.ID==id){ 
			if(member.Pwd==pwd) { 
					login= true; 
					accountIndex = i
					break;		
			}				
		}		
	}	
	if (login == true){alert('로그인성공');}
	else {
		alert('로그인 실패');
		document.querySelector('.id').value = ``
		document.querySelector('.pwd').value = ``
		return;
		}
	SetGrade();
	document.querySelector('.id').value = ``
	document.querySelector('.pwd').value = ``
		
	LoadPriceList();
	AdminAccountCheck();
	
	UserInfoUpdate()
	
	
	document.querySelector('#Account').style='display: none;'
	
	document.querySelector('#main').style
	='width : 1180px;height: 580px;border: 1px solid black;display: flex;justify-content: space-between;margin: 0 auto;background-color: #4F4B50;'
}

function UserInfoUpdate()
{
	let h = parseInt(accountArray[accountIndex].limitTime/60)
	let m = accountArray[accountIndex].limitTime%60
		document.querySelector(".outputConsumerInfo").innerHTML = 
	`<h3>회원정보</h3>
	이름 : ${accountArray[accountIndex].Name}<br/>
	아이디 : ${accountArray[accountIndex].ID}<br/>
	남은시간 : ${h}시간${m}분<br/>
	누적충전시간 : ${accountArray[accountIndex].totalPrice}<br/>
	등급 : ${accountArray[accountIndex].grade}
	`
}
// 요금제 리스트 직접 기입
priceArray.push({time:60,price:1000})
priceArray.push({time:120,price:2000})
priceArray.push({time:180,price:3000})
priceArray.push({time:240,price:4000})
priceArray.push({time:300,price:5000})
priceArray.push({time:360,price:6000})
priceArray.push({time:420,price:7000})
priceArray.push({time:143,price:8000}) // 분 테스트

 function LoadPriceList()
{
	let _getListLeftView = document.querySelector(".MainPriceListView_left") // 요금리스트를 추가할 div select 
	let _getListRightView = document.querySelector(".MainPriceListView_right") // 요금리스트를 추가할 div select
	let _leftview =``
	for(let idx=0;idx<4;idx++)
	{
		_leftview +=`<div class="PriceListItem" onclick="PriceSelect(${idx})">
				<h4>${accountArray[accountIndex].grade} 등급회원 ${GradetoPrice(accountArray[accountIndex].grade,priceArray[idx].price)}원</h4>
				<span> ${priceArray[idx].time}분</span>
				</div>	`
	}
	_getListLeftView.innerHTML = _leftview
	let _rightview =``
	for(let idx=4;idx<priceArray.length;idx++)
	{
		_rightview+=`
		<div class="PriceListItem" onclick="PriceSelect(${idx})">
				<h4>${accountArray[accountIndex].grade} 등급회원 ${GradetoPrice(accountArray[accountIndex].grade,priceArray[idx].price)}원</h4>
				<span> ${priceArray[idx].time}분</span>
				</div>	`
	}
	_getListRightView.innerHTML =_rightview
}

// 로그아웃시 함수
function logout(){
	accountIndex = ''
	document.querySelector(".MainPriceListView_left").innerHTML = ''
	document.querySelector(".MainPriceListView_right").innerHTML = ''
	document.querySelector(".Main_Button").innerHTML = ''
	document.querySelector('#main').style='display: none;'
	document.querySelector('#Account').style
	='width : 1180px0;height: 580px;border: 1px solid black;margin: 0 auto;display: flex;justify-content: space-between;background-color: #4F4B50;'
}












//관리자 계정으로 로그인할 때만 '관리자메뉴 버튼' 출력
function AdminAccountCheck()
{
	
	if(accountArray[accountIndex].ID == addminAccount.ID && accountArray[accountIndex].Pwd == addminAccount.Pwd)
	document.querySelector(".Main_Button").innerHTML += `<button class="Main_Button" onclick="Admin_View()"> 관리자 페이지</button>`
}

function  Admin_View(){ 
	console.log('관리자페이지')
	let UserList = document.querySelector('#_AdminTable')
	let html = `<tr> <th>아이디</th> <th>비밀번호</th> <th>등급</th> <th>충전금액</th> </tr>`
   //UserList.innerHTML = html
	for( let i=0; i<accountArray.length; i++)
    {
   		let account = accountArray[i];
      	html += `<tr onclick="AdminViewTable(${i})">
               <td class="table_1_id"> ${ account.ID } </td>
               <td class="table_2_pwd"> ${ account.Pwd } </td>
               <td class="table_3_grade"> ${ account.grade } </td>
               <td class="table_4_totalPrice"> ${ account.totalPrice } </td>
             </tr>`
    }
   
	UserList.innerHTML = html
	document.querySelector('#main').style='display : none;'
	document.querySelector('#Admin').style
	='	width : 1180px;height: 580px;border: 1px solid black;display: flex;justify-content: space-between;margin: 0 auto;background-color: #4F4B50;'
}




/* 관리자 메뉴 */





function AdminViewTable(index){
	let AdminView_Table = document.querySelector('#AdminViewTable')
	// 2. 무엇을 ~~~ 
	//let accountArray = accountArray[index] // 인수로 전달받은 인덱스의 객체를 1개 꺼내기 
	
	let html = `<h3> 회원 상세 조회 </h3>
				<div class="AdminViewTable_Name"> 이름 : ${ accountArray[index].Name } </div>
				<div class="AdminViewTable_Id"> 아이디 : ${ accountArray[index].ID } </div>
				<div class="AdminViewTable_Pwd"> 비밀번호 : ${ accountArray[index].Pwd } </div>
				<div class="AdminViewTable_Grade"> 등급 : ${ accountArray[index].grade } </div>
				<button onclick="onDelete( ${ index } )">회원삭제</button>`
	// 3. 대입
	AdminView_Table.innerHTML = html  
	 
}

function onDelete( index ){ console.log('onDelete()함수' + index )
	
	// 1. 배열내 삭제할 인덱스의 해당하는 객체 호출
	 accountArray.splice(index,1)
	 Admin_View()
	document.querySelector('#AdminViewTable').innerHTML =``
	
	/*
	if(accountArray[accountIndex].id == addminAccount.ID && accountArray[accountIndex].Pwd == addminAccount.Pwd)
	{
		document.querySelector(".AdminNomarlUser").innerHTML = _adminBtn
	}
	else
	{
		document.querySelector(".AdminNomarlUser").innerHTML =`
		<div class="MenuInfoItem">
				<div> 아이디 : ${accountArray[accountIndex].ID} </div>
				<div> 남은시간 : ${accountArray[accountIndex].limitTime}  </div>
				<div> 등급 : ${accountArray[accountIndex].grade} </div>
			</div>
		</div>`
	}*/
}







function changePagegrade(){
	document.querySelector('#Admin').style='display : none;'
	document.querySelector('#main').style=
	'width : 1180px; height: 580px;border: 1px solid black;display: flex;justify-content: space-between;margin: 0 auto;background-color: #4F4B50;'
}











