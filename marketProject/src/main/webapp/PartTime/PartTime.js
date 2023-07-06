/**
 * 
 */

 let listItem = []
 listItem.push(
	 {
		 imgPath:"./img/nonimg.jpg",
		 title:"롤 브론즈~챌린저 대리 구함",
		 address:"현주소 브론즈",
		 payUnit:"일급",
		 pay:10000
		 
	 }
 )
 
  listItem.push(
	 {
		 imgPath:"./img/nonimg.jpg",
		 title:"메이플 대리 사냥해줄분 구함",
		 address:"250레벨",
		 payUnit:"일당",
		 pay:2354345
		 
	 }
 )
 
  listItem.push(
	 {
		 imgPath:"./img/nonimg.jpg",
		 title:"롤 브론즈~챌린저 대리 구함",
		 address:"현주소 브론즈",
		 payUnit:"연봉",
		 pay:34253245
		 
	 }
 )
 
  listItem.push(
	 {
		 imgPath:"./img/nonimg.jpg",
		 title:"과제 대신 해줄 사람 구함",
		 address:"제출 2일전",
		 payUnit:"월급",
		 pay:2345345
		 
	 }
 )
 
  listItem.push(
	 {
		 imgPath:"./img/nonimg.jpg",
		 title:"롤 브론즈~챌린저 대리 구함",
		 address:"현주소 브론즈",
		 payUnit:"시급",
		 pay:1231243
		 
	 }
 )
  listItem.push(
	 {
		 imgPath:"./img/nonimg.jpg",
		 title:"롤 브론즈~챌린저 대리 구함",
		 address:"현주소 브론즈",
		 payUnit:"일급",
		 pay:10000
		 
	 }
 )
 
  listItem.push(
	 {
		 imgPath:"./img/nonimg.jpg",
		 title:"메이플 대리 사냥해줄분 구함",
		 address:"250레벨",
		 payUnit:"일당",
		 pay:2354345
		 
	 }
 )
 
  listItem.push(
	 {
		 imgPath:"./img/nonimg.jpg",
		 title:"롤 브론즈~챌린저 대리 구함",
		 address:"현주소 브론즈",
		 payUnit:"연봉",
		 pay:34253245
		 
	 }
 )
 
  listItem.push(
	 {
		 imgPath:"./img/nonimg.jpg",
		 title:"과제 대신 해줄 사람 구함",
		 address:"제출 2일전",
		 payUnit:"월급",
		 pay:2345345
		 
	 }
 )
 
  listItem.push(
	 {
		 imgPath:"./img/nonimg.jpg",
		 title:"롤 브론즈~챌린저 대리 구함",
		 address:"현주소 브론즈",
		 payUnit:"시급",
		 pay:1231243
		 
	 }
 )
 loadList()
 function loadList()
 {
	 let getArea = document.querySelector(".listArea")
	 for(let i =0 ; i<10;i++)
	 {
		 let _item = listItem[i]
		 getArea.innerHTML += `
		 <a href="#"><div class="partTimeItem">
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
	 }
	 document.querySelector('.wrapList').innerHTML +=`
	 <div class="subBanner">
		 
	 		<img src="./img/subbanner2.png">
	 	
	 	 <div class="subInfo"> 
	 		 당근알바 이용방법이 궁금하다면지금 바로 알아보세요!
	 	 </div>
	 	 <div>
	 		<button class="subBtn">이용방법 알아보기 </button>
	 	</div>
	  </div>

	 `
 }
 
 