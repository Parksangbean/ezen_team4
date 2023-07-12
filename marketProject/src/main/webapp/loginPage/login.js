
// 배열 생성하여 쿠키값 초기화 
let no = JSON.parse(localStorage.getItem('accountMemberList'))
console.log(no)

let inputMainID = document.querySelector('.manager_ID')
let inputMainPWD = document.querySelector('.manager_PWD')

// 관리자 아이디, 비밀번호가 같으면 관리자 계정 로그인
if(no[0].Mid==inputMainID && no[0].Mpwd==inputMainPWD){
	
}


function login(){
	
let inputID = document.querySelector('.manager_ID').value
let inputPWD = document.querySelector('.manager_PWD').value
	
	for(let i=0; i<no.length; i++){
		if(no[i].Mid==inputID && no[i].Mpwd==inputPWD){
			alert('로그인 되었습니다')
			/*메인페이지 a태그 이동*/
			return
		}
	}
	
	alert('아이디 또는 비밀번호를 확인해주세요')
	inputID = ''
	inputPWD = ''
}

function account(){
	/*회원가입페이지 a태그 이동*/
}
