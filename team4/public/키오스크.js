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
 
accountArray[accountIndex]

AccountInfo // 유저정보
   id
   pwd
   limitTime//누적남은시간
   grade//등급
   totalPrice//누적투입금액

function PriceSlect(_getIdx)
{
	console.log(_getIdx)
}

function correctInfo(_idx){
	
	accountArray[_idx].limitTime += priceArray[idx].time
	//누적시간 더하기
	accountArray[_idx].totalPrice += priceArray[idx].price
	//누적투입금액 더하기
	
	if(accountArray[_idx].totalPrice >= 300){
		// totalPrice(누적투입금액)이 300시간 이상일 때 1 등급 부여
		accountArray[_idx].grade = 1
	} 
	else if(accountArray[_idx].totalPrice >= 200){
		// totalPrice(누적투입금액)이 200시간 이상일 때 2 등급 부여
		accountArray[_idx].grade = 2
	}
	else if(accountArray[_idx].totalPrice >= 100){
		// totalPrice(누적투입금액)이 200시간 이상일 때 3 등급 부여
		 accountArray[_idx].grade = 3
	}
	else if(accountArray[_idx].totalPrice < 100 && accountArray[_idx].totalPrice >= 0){
		// totalPrice(누적투입금액)이 100시간 미만일 때 4 등급 부여
		accountArray[_idx].grade = 4
	}
		
}
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 