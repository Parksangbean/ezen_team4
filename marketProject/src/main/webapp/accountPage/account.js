let accountMemberList = [{Mname : "manager",Mid : "manager",Mpwd : "manager"}]
// 가입된 객체형태의 회원을 담는 배열(회원리스트)
// + 관리자 계정생성

let accountMember = {	// 개인별 회원정보 객체
	Mname : "",	// 회원성명
	Mid : "",	// 회원아이디
	Mpwd : ""	// 회원비밀번호
}

// 쿠키에 올려져있는 값을 accountMemberList에 대입
// 회원가입 페이지에 들어오면 accountMemberList는 초기화 되어있음
accountMemberList = JSON.parse(localStorage.getItem('accountMemberList'))

for(let i=0; i<accountMemberList.length; i++){
	
}

let nameCheck = false	// 이름 공백검사	/ true시 사용가능
let idCheck = false		// 아이디 중복검사,6자리 이상	/ true시 사용가능
let pwd = false			// 비밀번호 8자리 이상	/ true시 사용가능
let pwdAgreementCheck = false	// 비밀번호 확인 검사	/ true시 사용가능

// 이름 확인
function name_Check(){
	
	// 이름입력칸이 공백이아니면(==입력이 들어가면) 이름체크함수 실행
	let inputName = document.querySelector('.name_Input_Text').value
	
	// 입력칸이 공백으로 변경될 시
	if(inputName == ''){
		nameCheck = false		// 유효성 불합격
		add_name_pointDelete()	//녹색체크표시 삭제
		return
	}
	
	nameCheck = true 	//유효성 합격
	add_name_point()	//녹색 체크표시
}


let temporaryID = '' //유효성 합격된 아이디를 임시저장하기위한 변수 생성
// 아이디 중복검사
function id_DuplicationCheck(){
	
	let accountID = document.querySelector('.id_Input_Text').value
	let id_existCheck = 0
	
	// 회원리스트를 모두 조회하여 이미 가입된 중복아이디가 있는지 확인
	for(let i=0; i<accountMemberList.length; i++){
		if(accountMemberList[i].Mid==accountID){
			id_existCheck++
		}
	}
	
	if(id_existCheck!=0){
		alert('이미 가입된 아이디입니다')
		document.querySelector('.id_Input_Text').value = ''
	}else{
		alert('사용 가능한 아이디입니다.')
			idCheck=true	//유효성 합격
			add_id_point()	//녹색 체크표시
			temporaryID = accountID	//임시 아이디 저장
	}
	
	
	
}

// 유효성 검사가완료된 아이디가 변경되는 경우
function ID_check(){
	
	// 아이디 유효성검사가 true가 아니면 함수를 실행하지 않음
	if(idCheck=false){
		return
	}
	idCheck = false			// 유효성 검사 미실시로 인한 불합격
	add_id_pointDelete()	// 녹색 체크표시 삭제
}








let temporaryPWD = '' //유효성 합격된 비밀번호를 임시저장하기위한 변수 생성
// 비밀번호 확인
function pwd_Check(){
	
	//비밀번호 입력칸에 조작이 이뤄질 시 동시에 비밀번호확인 녹색표시 삭제
	//(비밀번호확인 중복검사 재실시해야함)
	//유효성 검사 미실시로 인한 불합격
	add_pwd_Check_pointDelete()
	pwdAgreementCheck = false
	
	let inputPwd = document.querySelector('.pwd_Input_Text').value
	
	// 비밀번호 입력길이가 8자 미만일 시
	if(inputPwd.length<8){
		pwd = false				// 유효성 검사 미실시로 인한 불합격
		add_pwd_pointDelete()	// 녹색 체크표시 삭제
		
		//녹색표시 삭제 후 원래의 글귀 넣기
		document.querySelector('.point_pwd').innerHTML = `( 8자리 이상 )`
		return
	}
	
	pwd = true		// 유효성 검사 합격
	add_pwd_point()	// 녹색 체크표시
}






let pwd_Agreement = ''//유효성 합격된 비밀번호확인을 임시저장하기위한 변수 생성
// 비밀번호와 비밀번호확인 일치하는지 확인
function pwd_AgreementCheck(){
	
	if(pwd == false){
		alert('비밀번호를 확인해주십시오')
		add_pwd_Check_pointDelete()
		return
	}
	
	
	let accountPwd = document.querySelector('.pwd_Input_Text').value
	let accountPwdCheck = document.querySelector('.pwd_Check_Text').value
	
	let pwd_existCheck = 0
	
	for(let i=0; i<accountMemberList.length; i++){
		if(accountPwd != accountPwdCheck){
			pwd_existCheck++
			add_pwd_Check_pointDelete()
			alert('비밀번호가 일치하지 않습니다')
			return
		}
	}
	
	if(pwd_existCheck == 0){
		alert('비밀번호가 일치합니다')
		pwdAgreementCheck = true	//유효성 합격
		add_pwd_Check_point()		//녹색 체크표시
		pwd_Agreement = accountPwdCheck
	}

}

// 유효성 검사가완료된 비밀번호확인이 변경되는 경우
function pwd_AgreementChangecheck(){
	
	// 아이디 유효성검사가 true가 아니면 함수를 실행하지 않음
	if(pwdAgreementCheck=false){
		return
	}
	pwdAgreementCheck = false	// 유효성 검사 미실시로 인한 불합격
	add_pwd_Check_pointDelete()	// 녹색 체크표시 삭제
}


/* 유효성검사가 완료하였을 때 녹색 체크표시 */
function add_name_point(){
	
	let nameImgBox = document.querySelector('.point_name')
	nameImgBox.innerHTML = `<img class="img_checkBox" src="/marketProject/accountPage/img/체크표시.jpg">`
}

function add_id_point(){
	let idImgBox = document.querySelector('.point_id')
	idImgBox.innerHTML = `<img class="img_checkBox" src="/marketProject/accountPage/img/체크표시.jpg">`
}

function add_pwd_point(){
	let pwdImgBox = document.querySelector('.point_pwd')
	pwdImgBox.innerHTML = `<img class="img_checkBox" src="/marketProject/accountPage/img/체크표시.jpg">`
}

function add_pwd_Check_point(){
	let pwdcheckImgBox = document.querySelector('.point_pwd_check')
	pwdcheckImgBox.innerHTML = `<img class="img_checkBox" src="/marketProject/accountPage/img/체크표시.jpg">`
}
/* 유효성검사가 완료하였을 때 녹색 체크표시 end */


/* 녹색 체크표시를 지우는 기능 */
function add_name_pointDelete(){
	let nameImgBox = document.querySelector('.point_name')
	nameImgBox.innerHTML = ``
}
function add_id_pointDelete(){
	let idImgBox = document.querySelector('.point_id')
	idImgBox.innerHTML = ``
}
function add_pwd_pointDelete(){
	let pwdImgBox = document.querySelector('.point_pwd')
	pwdImgBox.innerHTML = ``
}
function add_pwd_Check_pointDelete(){
	let pwdcheckImgBox = document.querySelector('.point_pwd_check')
	pwdcheckImgBox.innerHTML = ``
}


/* 회원가입 모든 조건 충족여부 확인시 회원가입 진행 */
/* 회원가입 버튼 클릭 */
function compliteAccount(){

	if(nameCheck == true && idCheck == true && pwd == true && pwdAgreementCheck == true){
		alert('회원가입이 완료되었습니다')
		accountMember.Mname = document.querySelector('.name_Input_Text').value
		accountMember.Mid = document.querySelector('.id_Input_Text').value
		accountMember.Mpwd = document.querySelector('.pwd_Check_Text').value
	
		accountMemberList.push(accountMember)
		
		localStorage.setItem('accountMemberList', JSON.stringify(accountMemberList))
	}
	
	/* main페이지 a태그로 이동 */
}














