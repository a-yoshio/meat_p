<%@ page contentType="text/html; charset=UTF-8"%>
<%@ include file="template/nav.jsp" %>

<body>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/test.js"></script>
	<!-- header -->
	<div class="container">
	<div class="mapArea">
		<img src="/meat_pat/img/beefMapWhite.png" alt="beefお肉マップ" usemap="#beef-map" id="beef-map">
		<map name="beef-map"> <area shape="poly" coords="93,59,74,79,89,87,105,67,105,67" onmouseover="mouseover('neck')" onmouseout="mouseout()" alt="neck" class="part" id="neck"></map>
	</div>
	</div>
	<script>
	function mouseover(id){	
			$('#beef-map').attr('src','/meat_pat/img/beefMap_'+id+'.png');
		};
	function mouseout(){
		$('#beef-map').attr('src','/meat_pat/img/beefMapWhite.png');
		};
	
	</script>
</body>
</html>