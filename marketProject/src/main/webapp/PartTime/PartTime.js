/**
 * 
 */



 let listItem = []
 /*listItem.push(
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
 )*/
 let rand = Math.random()*80+10
 console.log(rand)
 
for(let i = 0 ; i<rand;i++)
  listItem.push(
	 {
		 imgPath:"./img/nonimg.jpg",
		 title:"롤 브론즈~챌린저 대리 구함",
		 address:"현주소 브론즈",
		 payUnit:"시급",
		 pay:Math.random()*900000+10
		 
	 }
 )
 let page = 0
 console.log(listItem.length)
 loadList()
 

 function loadList()
 {
	 //document.querySelector('.wrapList').
	 let la = document.createElement('div')
	 la.className = 'listArea'+page
	 la.className += ' listArea'
	 document.querySelector('.partTimeArea').appendChild(la)
	 let getArea = document.querySelector(".listArea"+page)
	 let startP = page*10
	 let endP = startP+10
	 if(endP > listItem.length)
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
		 document.querySelector('.partItem'+i).style.animationFillMode = 'forwards';
		 
		 //animation-fill-mode
		 
		 
		 
		 
		 
		}
		let tmparray = []
		for(let i =startP;i<endP;i++)
		{
			tmparray.push(i)
		}
		
		let inter1 = setInterval(function(){
			
			let a = Math.floor(Math.random()*tmparray.length)
			let _str1 = '.partItem'+tmparray[a]
			document.querySelector(_str1).animate([
			 {
				 opacity:0,
			 },
			 
			 {
				 opacity:1,
				 
			 },],600).finished.then(function(){
				 document.querySelector(_str1).style.opacity = 1
			 })
			console.log(tmparray)
			tmparray.splice(a,1)
			
			if(tmparray.length == 0)
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



function detectBottom() {
    
    let innerHeight = window.innerHeight
    let scrollHeight = document.body.scrollHeight

    if (pageYOffset >= scrollHeight-innerHeight) {
        return true;
    } else {
        return false;
    }
}

addEventListener("scroll", (event) => {
	if(detectBottom() && Math.ceil(listItem.length/10)>page)
	{
		loadList();
	}
});

 