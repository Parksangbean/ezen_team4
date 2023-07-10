/**
 * 
 */

 // prattime title,address,payUnit,pay
 
 
 
function selectProduct(_num)
{
	let area = document.querySelector('.mgrWrap')
	if(_num == 1) //동네가게
	{
		
	}
	else // 알바
	{
		area.innerHTML = `<div class="inputWrap" ><div class="infoarea"> 
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
		<button class="submit" onclick="partSubmitBtn(1)">취소 </button>
		<button class="submit" onclick="partSubmitBtn(2)">확인</button>
		 </div>
		 </div>
		`
		
	}
}
let productlist = []
function partSubmitBtn(_num)
{
	if(_num == 1) // 취소
	{
		
		console.log()
		
	}
	else
	{
		let select_drop = document.querySelector('.dropunit')
		productlist.push(JSON.parse(localStorage.getItem('PartTiemList')))
		
		productlist.push({
			title: document.querySelector('.inputtitle').value,
			address: document.querySelector('.inputaddress').value,
			payUnit: select_drop.options[select_drop.options.selectedIndex].value,
			pay:Number(document.querySelector('.inputpay').value)
		})
		localStorage.setItem('PartTimeList',JSON.stringify(productlist))
	}
}