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
		   		grade:0,
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



// 결제방식(카드, 현금)을 선택
function PriceSelect(_idx){
	
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
	console.log(accountIndex)
	console.log(accountArray[accountIndex].limitTime)
	console.log('출력')

	accountArray[accountIndex].limitTime += priceArray[_idx].time
	//누적시간 더하기
	accountArray[accountIndex].totalPrice += priceArray[_idx].price
	//누적투입금액 더하기
	
	if(accountArray[accountIndex].totalPrice >= 300){
		// totalPrice(누적투입금액)이 300시간 이상일 때 1 등급 부여
		accountArray[accountIndex].grade = 1
	} 
	else if(accountArray[accountIndex].totalPrice >= 200){
		// totalPrice(누적투입금액)이 200시간 이상일 때 2 등급 부여
		accountArray[accountIndex].grade = 2
	}
	else if(accountArray[accountIndex].totalPrice >= 100){
		// totalPrice(누적투입금액)이 200시간 이상일 때 3 등급 부여
		 accountArray[accountIndex].grade = 3
	}
	else if(accountArray[accountIndex].totalPrice < 100 && accountArray[accountIndex].totalPrice >= 0){
		// totalPrice(누적투입금액)이 100시간 미만일 때 4 등급 부여
		accountArray[accountIndex].grade = 4
	}
		
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

}
//테스트용 유저 정보 추가

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
				<h4>${accountArray[accountIndex].grade} 등급회원 ${priceArray[idx].price}원</h4>
				<span> ${priceArray[idx].time}</span>
				
				</div>
	`
	}
}


 