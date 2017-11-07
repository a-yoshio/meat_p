<%@ page contentType="text/html; charset=UTF-8"%>
<%@ include file="template/nav.jsp" %>
<body>
<!-- header -->
<%@ include file="template/header.jsp" %>
	<div class="container">
				<h2>詳細</h2>
				<table class="detail-table">
						<tr>
							<td colspan="2" rowspan="3"><img src="${pageContext.request.contextPath}/img/beef.png" name="beef" class="illust"></td>
							<td>名前:</td>
							<td>🐂</td>
							<td>肩ロース</td>
						</tr>
						<tr>
							<td>部位:</td>
							<td colspan="2">肩</td>
						</tr>
						<tr>
							<td>かたさ:</td>
							<td colspan="2">硬い</td>
						</tr>
						<tr>
							<td>コメント</td>
							<td colspan="4"></td>
						</tr>
						<tr>
							<td colspan="5" rowspan="2">とてもおいしいです。とてもおいしいです。</td>
						</tr>
				</table>
				<br>
				<button class="return-button">戻る</button>
		</div>
</body>
</html>