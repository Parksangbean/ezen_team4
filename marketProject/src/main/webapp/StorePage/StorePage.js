console.log('js실행')

let productlist = []
		if (localStorage.getItem('StoreList') != null)
		{ 
		
			for(let item of JSON.parse(localStorage.getItem('StoreList')))
			{
				productlist.push(item)
			}			
		}
//console.log(productlist[0].adrres)
//console.log(productlist[0].title)
AllContentView();
function AllContentView(){
	console.log('입력')
	let AllContentView = document.querySelector('.AllContentView')
	console.log(AllContentView)
	let content = document.querySelector('.content')
	console.log(content)
	let html=``;
	for( let i = 0; i<productlist.length; i++){
		html +=`<div class="test1">
					<div><img class="nimg"src="./img/nonimg.jpg"></div>
					<div><span>${productlist[i].title}</span><span>${productlist[i].address}</span>
						<div>${productlist[i].content}</div>
						<span>${productlist[i].review},${productlist[i].custom}${productlist[i].productType}</span>
					</div>
				</div>`
	}
	content.innerHTML = html
}

function productView(){
	console.log('입력')
}
function restaurantView(){
	console.log('입력')
}
function CafeView(){
	console.log('입력')
}
function MoveView(){
	console.log('입력')
}
function beautyView(){
	console.log('입력')
}
function healthView(){
	console.log('입력')
}
