<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

	
	<link href="/marketProject/loginPage/login.css" rel="stylesheet">


</head>
<body>
	<%@include file="../header/header.jsp" %>

	<div id=wrap><!-- 전체 레이아웃 -->
		
	
		<div class="img_logo">
			<img src="/marketProject/loginPage/img/당근마켓 로고.png">
		</div>
		
		<div id="login_box"><!-- 로그인 박스 -->
		
			<div class="manager_ID_box"><input class="manager_ID" type="text" placeholder="아이디"></div>
			<div class="manager_PWD_box"><input class="manager_PWD" type="password" placeholder="비밀번호"></div>
			
			<div class="manager_button_box">
				<button onclick="login()">로그인</button>
				<a href="../accountPage/account.jsp"><button onclick="account()">회원가입</button></a>
			</div>
		</div><!-- 로그인 박스 -->
	
	
	
	
	
	
	</div><!-- 전체 레이아웃 end -->


	<%@include file="../footer/footer.jsp" %>
	<script src="./login.js" type="text/javascript"></script>

</body>
</html>