let 재고리스트 = [15, 20, 25, 100, 5]
let 제품가격 = [1500, 2000, 2000, 1000, 2000]  
let 제품리스트 = ['환타', '코카콜라', '사이다', '솔의눈', '밀키스']
let 버튼상태리스트 = [true, true, true, true, true]


let 잔돈
let 사용가액
let 버튼상태
let 버튼종류
let 재고출력


let id

사용가액 = Number(prompt('현금을 투입해주세요'))

while(true){
	
	
	//재고확인
	for(let i=0; i<제품리스트.length; i++){
		
		
		
		if(재고리스트[i]==0){
			버튼상태리스트[i]=false
			//제품별 재고가 없을시 해당 제품을 기존 true값에서 false로 변환
		}
	}
	console.log("잔액:"+사용가액)
	
	id = 제품리스트.indexOf(prompt("제품 또는 잔돈반환버튼을 눌러주세요"))
	if(id == -1) // 잔돈반환
	{
		잔돈 = 사용가액
		사용가액 = 0
		break;
	}
	else{ //제품선택
		if(버튼상태리스트[id])
		{// 버튼상태리스가 true이면 실행
			
			if(사용가액 >= 제품가격[id])
			{
				console.log(제품가격[id])
				사용가액 -= 제품가격[id]
				재고리스트[id]-- // 선택제품의 재고 1개 감소
				console.log(제품리스트[id]+'가 나왔습니다.')  
			}
			else{console.log("잔액이 부족합니다")}
		}
		else{console.log("재고가 없습니다")}
	}
	
	/*if(화폐종류==현금)
	
	
	if(화폐종류==카드)*/
	
}
//잔돈 출력
console.log("잔돈:"+잔돈)