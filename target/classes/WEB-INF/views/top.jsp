<%@ page contentType="text/html; charset=UTF-8"%>
<%@ include file="template/nav.jsp" %>
<body>
	<!-- header -->
	<%@ include file="template/header.jsp" %>
	<div id="detail" style="display: none">
			<table id="detail-table">
						<tr>
							<td class="detail-td" id="detail-meat-name" colspan="2"><span id="meat-ename"></span><br>
														<span id="meat-jname"></span></td>
							<td class="detail-td"><div id="detail-meat-property"><span id="detail-font">畜種：<span id="meat-livestockname"></span><br>
												     部位:<span id="meat-partname"></span><br>
											              かたさ：<span id="meat-hardname"></span><br></span></div>
<!-- 							                                                  人気度：<span id="meat-point"></span></span></div></td> -->
						</tr>
						<tr>
							<td rowspan="2" id="picture-td" colspan="2"><img src="" name="picture" class="meat-picture"></td>
							<td class="detail-title" id="comment-td" colspan="2">
							<pre id="meat-description"></pre></td>
						</tr>
				<tfoot>
					<tr><td colspan="2"></td><td><div style="display: none" id="back-detail"><img src="${pageContext.request.contextPath}/img/details_return_button.png"></div></td></tr>
				</tfoot>
			</table>
	</div>
	<div id="gray_panel" style="display: none">
	</div>
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
				<div class="search_livestock_block">
				</div>
			<h4 class="sub-menu">硬さ</h4>
			<div class="search_hardLevel_block">
			</div>
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
			</div>
			<div class="table-block"></div>
			<div class="return-button"></div>
		</div>
	</div>
	<div class="map-config">
		<map name="beef-map">
		</map>
		<map name="pork-map">
		</map>
		<map name="chiken-map">
		</map>
	</div>
	<script type="text/javascript" src="${pageContext.request.contextPath}/js/top.js"></script>
	<script src="${pageContext.request.contextPath}/js/search.js"></script>
	<script src="${pageContext.request.contextPath}/js/detail.js"></script>
</body>
</html>