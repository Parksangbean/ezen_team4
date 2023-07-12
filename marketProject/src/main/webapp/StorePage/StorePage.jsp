<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link href="StorePage.css" rel="stylesheet">
</head>
<body>
	<%@include file="../header/header.jsp" %>
	<div class="body"><!-- main start -->
		<div class="top_logo">
			<div class="text">
				<h3>동네 이웃들이<br/>자주 가는 동네 가게</h3> <br/>
				<p>우리 동네 사람들이<br/>이용하는 가게를 찾아보세요.</p>
			</div>
		</div>
		<div><h3>다양한 동네가게를 볼 수 있어요</h3></div>
		<div class="category_menu">
			<button class="AllContent" onclick="AllContentView()">전체</button>
			<button class="restaurant" onclick="restaurantView()">식당</button>
			<button class="Cafe" onclick="CafeView()">카페</button>
			<button class="Move" onclick="MoveView()">용달/이사</button>
			<button class="beauty" onclick="beautyView()">뷰티/미용</button>
			<button class="health" onclick="healthView()">헬스/필라테스/요가</button>
		</div>
		<div class="contentBox">
			<div class="content">
				
				<!--
				
					게시물이 출력되는 구역
					 
				 -->
			</div>
			<button onclick="regist()"class="sum" type="button">가게 등록</button>
		</div>
		<div><h3>동네 이웃이 남긴 후기를 찾아보세요</h3></div>
		<div class="reviewBox">
			<div class="review"></div>
			<button class="review_btn" type="button">후기 등록</button>
		</div> 
	</div> <!-- main end -->
	<div class="footer">
	</div>
	<script src="StorePage.js" type="text/javascript"></script>
</body>
</html>