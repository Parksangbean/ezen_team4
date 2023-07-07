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
	<div class="body"><!-- main start -->
		<div class="top_logo">
			<h3>동네 이웃들이<br/>자주 가는 동네 가게</h3> <br/>
			<p>우리 동네 사람들이<br/>이용하는 가게를 찾아보세요.</p>
		</div>
		<div><h3>다양한 동네가게를 볼 수 있어요</h3></div>
		<div class="category_menu">
			<button onclick="AllContent()">전체</button>
			<button onclick="()">식당</button>
			<button onclick="Cafe()">카페</button>
			<button onclick="Move()">용달/이사</button>
			<button onclick="()">뷰티/미용</button>
			<button onclick="health()">헬스/필라테스/요가</button>
		</div>
		<div class="content">
			<button>가게 등록</button>
		</div>
		<div><h3>동네 이웃이 남긴 후기를 찾아보세요</h3></div>
		<div class="review">
			<button>후기 등록</button>
		</div> 
	</div> <!-- main end -->
	<div class="footer">
		<div>
			<ul>
				<li>중고거래</li>
				<li>동네가게</li>
				<li>당근알바</li>
				<li>부동산 직거래</li>
				<li>중고차 직거래</li>
			</ul>
		</div>
		<div>
			<ul>
				<li>당근비지니스</li>
				<li>채팅하기</li>
			</ul>
		</div>
		<div>
			<ul>
				<li>자주 묻는 질문</li>
				<li>회사 소개</li>
				<li>인재 채용</li>
			</ul>
		</div>
	</div>
	<script src="StorePage.js" type="text/javascript"></script>
</body>
</html>