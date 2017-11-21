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
					<table id="detail-table">
								<tr>
									<td class="detail-td" id="detail-meat-name" colspan="2"><c:out value="${meat.eName}"/><br>
																<c:out value="${meat.jName}"/></td>
									<td class="detail-td"><div id="detail-meat-property"><span id="detail-font">部位:<c:out value="${meat.partName}"/><br>
													              かたさ：<c:out value="${meat.hardType}"/><br>
									                                                  人気度：<c:out value="${meat.point}"/></span></div></td>
								</tr>
								<tr>
									<td rowspan="2" id="picture-td" colspan="2"><img src="${meat.picture}" name="picture" class="meat-picture"></td>
									<td class="detail-title" id="comment-td" colspan="2">
									<pre><c:out value="${meat.description}"/></pre></td>
								</tr>
						<tfoot>
							<tr><td><br></td></tr>
						</tfoot>
					</table>
				<br>
				<a href="javascript:history.back()"><img src="${pageContext.request.contextPath}/img/return_button.png"></a>
		   </div>
</body>
</html>