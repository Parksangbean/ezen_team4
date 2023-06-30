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
 
 
//테스트용 유저 정보 추가
accountIndex = 0
accountArray.push(
	{id:"123",pwd:"123",limitTime:123,grade:1,totalPrice:12345}
)
// 요금제 리스트 직접 기입
priceArray.push({time:"01:00",price:1000})
priceArray.push({time:"02:00",price:2000})
priceArray.push({time:"03:00",price:3000})
priceArray.push({time:"04:00",price:4000})
priceArray.push({time:"05:00",price:5000})
priceArray.push({time:"06:00",price:6000})
priceArray.push({time:"07:00",price:7000})
priceArray.push({time:"08:00",price:8000})


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

 