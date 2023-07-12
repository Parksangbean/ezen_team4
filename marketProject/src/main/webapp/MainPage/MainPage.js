let timgList=['timg1.png','timg2.png','timg3.png','timg4.png','timg5.png']
console.log('js 실행')
let viewtimg =0;
setInterval(()=>{
	let top_img = document.querySelector('.top_img');
		viewtimg++
		if(viewtimg>=timgList.length){viewtimg=0;}
		top_img.src=`./img/${timgList[viewtimg]}`;
},3000);
