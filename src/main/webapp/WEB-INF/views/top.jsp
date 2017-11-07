<%@ page contentType="text/html; charset=UTF-8"%>
<%@ include file="template/nav.jsp" %>
<body>
	<!-- header -->
	<%@ include file="template/header.jsp" %>
	<div class="container">
		<br>
		<br>
		<!--検索ブロック -->
		<div class="said-menu">
			<div class="">
			<h2>検索メニュー</h2>
			</div>
			<h3 class="sub-title">キーワード検索</h3><br>
			<form action="${pageContext.request.contextPath}/keySearch">
			<input name="keyword"/><br>
			<input type="submit" value="検索" class="button"><br>
			<hr>
			</form>
			<h3 class="sub-title">条件検索</h3>
			<h4 class="sub-menu">畜種</h4>
				<input type="radio" name="live-stock" value="0">牛肉<br>
				<input type="radio" name="live-stock" value="1">豚肉<br>
				<input type="radio" name="live-stock" value="2">鶏肉<br>
			<h4 class="sub-menu">硬さ</h4>
				<select name="hard-level">
					<option value="0">やわらかめ</option>
					<option value="1">ふつう</option>
					<option value="2">かため</option>
					<option value="3">骨付き</option>
				</select><br>
		<input type="submit" value="検索" class="button">
		</div>
		<!--main-->
		<div class="main">
			<h2 class="search-title">部位サーチ</h2>
			<div class="illust-map-group">
				<img src="${pageContext.request.contextPath}/img/beef.png" name="beef" class="illust">
				<img src="${pageContext.request.contextPath}/img/pork.png" name="pork" class="illust"><br>
				<img src="${pageContext.request.contextPath}/img/chicken.png" name="chicken" class="illust">
			</div>
		</div>
	</div>
</body>
</html>