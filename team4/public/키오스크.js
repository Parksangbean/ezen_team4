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
               Pwd : Pwd 
   }
   if( Name == '' || ID == '' || Pwd == '' ){
      alert('회원가입정보를 입력해주세요.')
      return;
   }
   console.log( account );
   accountArray.push(account)
 console.log(accountArray)
 }
 
 
 function Login(){
	 let  id =document.querySelector('.id').value;	console.log(id)
	 let pwd =document.querySelector('.pwd').value; console.log(pwd)
	 
	 let member ={ id : id, pwd : pwd};	console.log(member)
	 
	 if(id==''|| pwd==""){alert('[로그인 실패]: 8글자 입력해주세요.'); return;}
	if(id.length<8 || pwd.length<8){alert('[로그인 실패]: 8글자 이상 일벽해주세요'); return;}
	
	 //accountArray.push(member)
	 
	 	let login = false; //로그인 상태 저장 변수
		for ( let i=0; i<accountArray.length ; i++){

			let member = accountArray[i]
			if(member.ID==id){ 
				if(member.Pwd==pwd) { 
						login= true; 
						break;
								
				}				
			}		
		}	
		if (login == true){alert('로그인성공');}
		else {alert('로그인 실패');}
		
		document.querySelector('.id').value = ``
		document.querySelector('.pwd').value = ``
}

 
 