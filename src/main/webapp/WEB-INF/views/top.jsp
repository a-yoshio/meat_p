<%@ page contentType="text/html; charset=UTF-8"%>
<%@ include file="template/nav.jsp" %>
<body>
	<script type="text/javascript" src="${pageContext.request.contextPath}/js/top.js"></script>
	<script src="${pageContext.request.contextPath}/js/search.js"></script>
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
			<form action="${pageContext.request.contextPath}/search">
			<h3 class="sub-title">条件検索</h3>
			<h4 class="sub-menu">畜種</h4>
				<input type="checkbox" name="live-stock" class="search-livestock" value="0">牛肉<br>
				<input type="checkbox" name="live-stock" class="search-livestock" value="1">豚肉<br>
				<input type="checkbox" name="live-stock" class="search-livestock" value="2">鶏肉<br>
			<h4 class="sub-menu">硬さ</h4>
				<select name="hard-level" id="search-hardLevel">
					<option value="" selected></option>
					<option value="0">やわらかめ</option>
					<option value="1">ふつう</option>
					<option value="2">かため</option>
					<option value="3">骨付き</option>
				</select><br>
			<h3 class="sub-title">キーワード検索</h3>
			<input name="keyword" id="search-keyword"/><br>
			<br>
		<input type="button" value="検索" class="button" id="search-button">
		</form>
		</div>
		<!--main-->
		<div class="main">
			<h2 class="search-title">部位サーチ</h2>
			<div class="illust-map-group">
				<input type="image" src="${pageContext.request.contextPath}/img/beefMarkButton.png" name="beef" class="livestock-button" id="beef-button" value="beef">
				<input type="image" src="${pageContext.request.contextPath}/img/porkMarkButton.png" name="pork" class="livestock-button" id="pork-button" value="pork"><br>
				<input type="image" src="${pageContext.request.contextPath}/img/chikenMarkButton.png" name="chiken" class="livestock-button" id="chiken-button" value="chiken"><br>
			</div>
			<div class="table-block"></div>
			<div class="return-button"></div>
		</div>
	</div>
	<div class="map-config">
		<map name="beef-map">
			<area shape="poly" coords="93,59,74,79,89,87,105,67,105,67" alt="chack" class="beefMap" id="0"/>
		</map>
		<map name="pork-map">
			
		</map>
		<map name="chiken-map">
			 
		</map>
	</div>
</body>
</html>