<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

	<link href="/marketProject/accountPage/account.css" rel="stylesheet">

</head>
<body>

	<div id="wrap"><!-- 전체 레이아웃 -->
	
		<div class="img_logo"><!-- 이미지 삽입구역 -->
			<img src="/marketProject/loginPage/img/당근마켓 로고.png">
		</div>
	
	
		<div id="main_Account_Field"><!-- 회원가입 -->
		
			<div id="name_Box">
				<span class="guide_InputBox">성명<span class="point_name"></span></span> <input onkeyup="name_Check()" class="name_Input_Text" type="text">
			</div>
		
			<div id="id_Box">
				<span class="guide_InputBox">아이디<span class="point_id"></span></span>
				<span>
					<input onkeyup="ID_check()" class="id_Input_Text" type="text">
					<button onclick="id_DuplicationCheck()" class="id_CheckButton">중복검사</button>
				</span>
			</div>
			
			<div id="pwd_Box">
				<span class="guide_InputBox">비밀번호<span class="point_pwd">( 8자리 이상 )</span></span> <input onkeyup="pwd_Check()" class="pwd_Input_Text" type="text">
			</div>
			
			
			<div id="pwd_Check_Box">
				<span class="guide_InputBox">비밀번호확인<span class="point_pwd_check"></span></span>
				<span>
					<input onkeyup="pwd_AgreementChangecheck()" class="pwd_Check_Text" type="text">
					<button onclick="pwd_AgreementCheck()" class="pwd_CheckButton">일치확인</button>
				</span>
			</div>
			
		</div><!-- 회원가입 end-->


		<div onclick="compliteAccount()" id="account_Button">회원가입</div>
	
	</div><!-- 전체 레이아웃 end -->





	<script src="./account.js" type="text/javascript"></script>
</body>
</html>