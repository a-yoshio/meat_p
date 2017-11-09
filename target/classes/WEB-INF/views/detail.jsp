<%@ page contentType="text/html; charset=UTF-8"%>
<%@ include file="template/nav.jsp" %>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/detail.js">
<!--

//-->
</script>
<body>
<!-- header -->
<%@ include file="template/header.jsp" %>
	<div class="container">
				<h2>詳細</h2>
				<input type="hidden" value="${meat.livestockEName}" id="livestockName">
				<table class="detail-table">
						<thead>
						<tr>
							<td class="icon-td"><div class="livestock-icon-block"></div></td>
							<td colspan="2" class="detail-headline"><c:out value="${meat.eName}"/></td>
						</tr>
						<tr>
							<td></td>
							<td colspan="2" class="detail-headline" id="subheadline"><c:out value="${meat.jName}"/></td>
						</tr>
						<tr></tr>
						</thead>
						<tr>
							<td rowspan="4" id="picture-td"><img src="${meat.picture}" name="picture" class="meat-picture"></td>
						</tr>
						<tr>
							<td class="detail-title">部位:</td>
							<td colspan="2" class="detail-contents"><c:out value="${meat.partName}"/></td>
						</tr>
						<tr>
							<td class="detail-title">かたさ:</td>
							<td colspan="2" class="detail-contents"><c:out value="${meat.hardType}"/></td>
						</tr>
						<tr>
							<td class="detail-title">人気度：</td>
							<td colspan="2" class="detail-contents"><c:out value="${meat.point}"/></td>
						</tr>
						<tr>
							<td class="detail-title" id="comment-title">コメント</td>
							<td colspan="4"></td>
						</tr>
						<tr>
							<td colspan="5" rowspan="2" class="detail-contents"><c:out value="${meat.description}"/></td>
						</tr>
				</table>
				<br>
				<a href="javascript:history.back()"><img src="${pageContext.request.contextPath}/img/return_button.png"></a>
		</div>
</body>
</html>