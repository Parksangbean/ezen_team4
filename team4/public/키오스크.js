/*
AccountInfo // 유저정보
   id
   pwd
   limitTime
   grade
   totalPrice

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
 let accountArray =[] // 회원정보 리스트
 let priceArray = [] //요금리스트
 let giftCardArray = [] //상품권 리스트
 
console.log('js실행')
function SignUp(){ console.log('버튼')
	let Name = document.querySelector('#Name').value; 	// 성명
	let ID = document.querySelector('#ID').value;		// 아이디	
	let Pwd = document.querySelector('#Pwd').value; 		// 비밀번호
	
	if( ID.length < 8){
		alert('8자 이상 입력해주세요.')
	}
	if( Pwd.length < 8){
		alert('8자 이상 입력해주세요.')
	}
	
	
	
	let account = { Name : Name ,
					ID : ID ,
					Pwd : Pwd 
	}
	if( Name == '' || ID == '' || Pwd == '' ){
		alert('회원가입정보를 입력해주세요.')
		return;
	}
	console.log( account );
	accountArray.push(account);
 }
 console.log(accountArray)
 
 
 
 
 