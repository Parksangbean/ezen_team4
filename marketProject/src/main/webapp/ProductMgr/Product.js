/**
 * 
 */

 // prattime title,address,payUnit,pay
 
 
let target = 1
function selectProduct(_num)
{
	let area = document.querySelector('.updateArea')
	
	if(_num == 1) //동네가게
	{
		document.querySelector('.viewbtn').innerHTML = `가게목록`
		target=2
		area.innerHTML =`<div class="Sinfoarea">
				<h3>동네가게 리스트에 추가</h3>
				<input class="inputtitle" type="text" placeholder="제목 입력"> <input
					class="inputaddress" type="text" placeholder="주소 입력">
				<textarea class="inputcontent" cols="44" rows="8"
					placeholder="내용 입력"></textarea>
				<input class="inputtype" type="text" placeholder="제품 종류 입력">
			</div>
			<div class="btnarea">
				<button class="selbtn" onclick="cancleList()">취소</button>
				<button class="selbtn" onclick="partSubmitBtn(1)">추가</button>
			</div>`
		
	}
	else // 알바
	{
		document.querySelector('.viewbtn').innerHTML = `알바목록`
		target = 3
		area.innerHTML = `<div class="Pinfoarea"> 
			<h3>알바 리스트에 추가</h3>
			<input class="inputtitle" type="text" placeholder="제목 입력">
			<input class="inputaddress" type="text" placeholder="주소 입력">
		</div>
		
		<div class="payarea">
		<select name="지불단위" class="dropunit">
		<option value="일급"> 일급 </option>
		<option value="시급"> 시급 </option>
		<option value="주급"> 주급 </option>
		<option value="월급"> 월급 </option>
		<option value="연봉"> 연봉 </option>
			</select>
			<input class="inputpay"type="text" placeholder="지불 금액">
		</div>
		<div class="btnarea">
		<button class="selbtn" onclick="cancleList()">취소 </button>
		<button class="selbtn" onclick="partSubmitBtn(2)">추가</button>
		 </div>
	
		`
		
	}
}
function cancleList()
{
	document.querySelector('.viewbtn').innerHTML = `홈페이지`
	document.querySelector('.updateArea').innerHTML = `` 
}
function ViewList() // 1 홈 2 동네가게 3 알바리스트
{
	if(target == 1)
	{
		location.href="../MainPage/MainPage.jsp"
	}
	else if(target ==2 )
	{
		location.href="../StorePage/StorePage.jsp"
	}
	else
	{
		location.href="../PartTime/PartTime.jsp"
	}
}
function partSubmitBtn(_num)
{
	
	if(_num == 1) //
	{
		
		if(document.querySelector('.inputtitle').value == "" ||
		document.querySelector('.inputaddress').value == "" ||
		document.querySelector('.inputcontent').value == "" ||
		document.querySelector('.inputtype').value == "")
		{
			alert('필수사항 미기입')
			return
		}
		let productlist = []
		if (localStorage.getItem('StoreList') != null)
		{ 
		
			for(let item of JSON.parse(localStorage.getItem('StoreList')))
			{
				productlist.push(item)
			}			
		}
		productlist.push({
			imgPath:"./img/nonimg.jpg",
			title: document.querySelector('.input title').value,
			address: document.querySelector('.inputaddress').value,
			content: document.querySelector('.inputcontent').value,
			review:0 ,
			custom : 0,
			productType : document.querySelector('.inputtype').value,
		})
		localStorage.setItem('StoreList',JSON.stringify(productlist))
		//입력 후 초기화
		document.querySelector('.inputtitle').value = "" 
		document.querySelector('.inputaddress').value = "" 
		document.querySelector('.inputcontent').value = "" 
		document.querySelector('.inputtype').value = ""
	}
	else //알바리스트에 추가
	{
		
		let productlist = []
		let select_drop = document.querySelector('.dropunit')
		
		if(document.querySelector('.inputtitle').value == "" ||
		document.querySelector('.inputaddress').value == "" ||
		 
		document.querySelector('.inputpay').value == "")
		{
			alert('필수사항 미기입')
			return
		}
		
		if (localStorage.getItem('PartTimeList') != null)
		{
		
			for(let item of JSON.parse(localStorage.getItem('PartTimeList')))
			{
				productlist.push(item)
			}			
		}
		
		
		productlist.push({
			imgPath:"./img/nonimg.jpg",
			title: document.querySelector('.inputtitle').value,
			address: document.querySelector('.inputaddress').value,
			payUnit: select_drop.options[select_drop.options.selectedIndex].value,
			pay:Number(document.querySelector('.inputpay').value)
		})
		localStorage.setItem('PartTimeList',JSON.stringify(productlist))
		
		document.querySelector('.inputtitle').value = ""
		document.querySelector('.inputaddress').value = ""
		document.querySelector('.inputpay').value = ""
	}
}