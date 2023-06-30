/*


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

 let accountIndex; //로그인된 유저의 index 저장
 let accountArray = [] // 회원정보 리스트
 let priceArray = [] //요금리스트
 let giftCardArray = [] //상품권 리스트

 
 function SignUp(){ console.log('버튼')		//회원가입 함수

 let addminAccount = {ID:"root1234",Pwd:"root1234",limitTime:34873249646237,grade:1,totalPrice:99999999}
 accountArray.push(addminAccount)
 function SignUp(){ console.log('버튼')
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
      alert('회원가입정보를 입력해주세요.')
      return;
   }
   console.log( account );
   accountArray.push(account)
 console.log(accountArray)
 }

function PriceSelect(_getIdx)
{
	console.log(_getIdx)
}


function correctInfo(_idx){
	
	
	accountArray[_idx].limitTime += priceArray[idx].time
	//누적시간 더하기
	accountArray[_idx].totalPrice += priceArray[idx].price
	//누적투입금액 더하기
	

		
}
//유저 정보의 등급 조정
 function SetGrade()
 {
	 if(accountArray[_idx].totalPrice >= 30000){
		// totalPrice(누적투입금액)이 300시간 이상일 때 1 등급 부여
		accountArray[_idx].grade = 1
	} 
	else if(accountArray[_idx].totalPrice >= 20000){
		// totalPrice(누적투입금액)이 200시간 이상일 때 2 등급 부여
		accountArray[_idx].grade = 2
	}
	else if(accountArray[_idx].totalPrice >= 10000){
		// totalPrice(누적투입금액)이 200시간 이상일 때 3 등급 부여
		 accountArray[_idx].grade = 3
	}
	else 
		{
			// totalPrice(누적투입금액)이 100시간 미만일 때 4 등급 부여
			accountArray[_idx].grade = 4	
	}
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
	 let  id =document.querySelector('.id').value;	console.log(id)
	 let pwd =document.querySelector('.pwd').value; console.log(pwd)
	 
	 let member ={ id : id, pwd : pwd};	console.log(member)
	 
	 if(id==''|| pwd==""){alert('[로그인 실패]: 아이디,패스워드 확인해주세요.'); return;}
	if(id.length<8 || pwd.length<8){alert('[로그인 실패]: 8글자 이상 일벽해주세요'); return;}
	
	 //accountArray.push(member)
	 
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
		else {alert('로그인 실패');}
		
		document.querySelector('.id').value = ``
		document.querySelector('.pwd').value = ``
		
		LoadPriceList();
		Admin_View();
		AdminAccountCheck();



}
//테스트용 유저 정보 추가

}


// 요금제 리스트 직접 기입
priceArray.push({time:"01:00",price:1000})
priceArray.push({time:"02:00",price:2000})
priceArray.push({time:"03:00",price:3000})
priceArray.push({time:"04:00",price:4000})
priceArray.push({time:"05:00",price:5000})
priceArray.push({time:"06:00",price:6000})
priceArray.push({time:"07:00",price:7000})
priceArray.push({time:"08:00",price:8000})


 function LoadPriceList()
{
	let _getListView = document.querySelector(".MainPriceListView") // 요금리스트를 추가할 div select 
	for(let idx=0;idx<priceArray.length;idx++)
	{
		//리스트에 목록 업데이트

		_getListView.innerHTML +=`
		<div class="PriceListItem" onclick="PriceSelect(${idx})">
				<h4>${accountArray[accountIndex].grade} 등급회원 ${GradetoPrice(accountArray[accountIndex].grade,priceArray[idx].price)}원</h4>
				<span> ${priceArray[idx].time}</span>
				
				
				</div>
	`
	}
}
function AdminAccountCheck()
{
	let _adminBtn = `<button onclick="AdminMenu"> 관리자 메뉴</button>`

function  Admin_View(){ console.log('관리자페이지')
   let UserList = document.querySelector('#UserList')
   let html = `<tr> <th>아이디</th> <th>비밀번호</th> <th>등급</th> <th>충전금액</th> </tr>`
   //UserList.innerHTML = html
   for( let i=0; i<accountArray.length; i++){
   let account = accountArray[i];
      html += `<tr onclick="AdminViewTable(${i})">
               <td> ${ account.ID } </td>
               <td> ${ account.Pwd } </td>
               <td> ${ account.grade } </td>
               <td> ${ account.totalPrice } </td>
             </tr>`
   }
   
   UserList.innerHTML  = html
}





function AdminViewTable(index){
	let AdminView_Table = document.querySelector('#AdminViewTable')
	// 2. 무엇을 ~~~ 
	//let accountArray = accountArray[index] // 인수로 전달받은 인덱스의 객체를 1개 꺼내기 
	
	let html = `<div> 회원 상세 조회 </div>
				<div> 이름 : ${ accountArray[index].Name } </div>
				<div> 아이디 : ${ accountArray[index].ID } </div>
				<div> 비밀번호 : ${ accountArray[index].Pwd } </div>
				<div> 등급 : ${ accountArray[index].grade } </div>
				<button onclick="onDelete( ${ index } )">삭제</button>
				<button>수정</button>`
	// 3. 대입
	AdminView_Table.innerHTML = html  
	 
}





function onDelete( index ){ console.log('onDelete()함수' + index )
	
	// 1. 배열내 삭제할 인덱스의 해당하는 객체 호출 
	 accountArray.splice(index,1)
	 Admin_View()
}


	if(accountArray[accountIndex].id == addminAccount.id && accountArray[accountIndex].pwd == addminAccount.pwd)
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
	}
}

 