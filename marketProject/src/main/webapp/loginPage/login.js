
// 배열 생성하여 쿠키값 초기화 
let no = JSON.parse(localStorage.getItem('accountMemberList'))

let inputMainID = document.querySelector('.manager_ID')
let inputMainPWD = document.querySelector('.manager_PWD')


if(no == null){
	no = []
}

console.log(no)
function login(){
	
let inputID = document.querySelector('.manager_ID').value
let inputPWD = document.querySelector('.manager_PWD').value
	
	for(let i=0; i<no.length; i++){
		if(no[i].Mid==inputID && no[i].Mpwd==inputPWD){
			alert('로그인 되었습니다')
			 location.href = '../MainPage/MainPage.jsp' //경로이동
			return
		}
	}
	
	alert('아이디 또는 비밀번호를 확인해주세요')
	inputID = ''
	inputPWD = ''
}
