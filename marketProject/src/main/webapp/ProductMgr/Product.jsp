<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link href="Product.css" rel="stylesheet">
</head>
<body>
	<%@include file="../header/header.jsp" %>
	<h1 class="toptitle">리스트 추가 페이지</h1>

	<div class="mgrWrap">
		<div class="mgrtop">
			<button class="selbtn" onclick="selectProduct(1)">동네가게</button>
			<button class="selbtn" onclick="selectProduct(2)">알바</button>
			<button class="selbtn" onclick="ViewList()">목록보기</button>
		</div>
		<div class="updateArea">
			
		</div>
	</div>


	<script type="text/javascript" src="Product.js"></script>
</body>
</html>