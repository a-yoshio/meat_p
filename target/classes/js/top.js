$(function(){
	/**コンテキストパス取得*/
	var pathName= location.pathname;
	/**畜種名*/
	Nowlivestock= null;
	

	/**畜種ボタンクリックしたときの動作メソッド*/
	function livestockButtonEve(selecter){
		Nowlivestock= $(selecter).val();
		//部位マップ(白)の追加
		var appendText= '<div id="search-box">';
		appendText+='<div id="map-box">';
		appendText+='<img src="'+pathName+'img/'+Nowlivestock+'Map/'+Nowlivestock+'MapWhite.png" usemap="#'+Nowlivestock+'-map" id="'+Nowlivestock+'-map" alt="'+Nowlivestock+'お肉マップ"></div>';
		appendText+='</div>';
		$('.illust-map-group').empty().append(appendText);
		//戻るボタンの追加
		var appendRetturnButton='<img src="'+pathName+'img/return_button.png" name="return" id="return">';
		$('.return-button').empty().append(appendRetturnButton);
		//部位マップの領域指定追加
		var appendMap= '<map name="'+Nowlivestock+'-map">';
		$.getJSON(pathName+'rest/AllPartData',{'livestockName': Nowlivestock},function(partDataList){
			$.each(partDataList,function(i,partData){
				var eName = '\''+partData.e_name+'\'';
				var livetockName='\''+Nowlivestock+'\'';
				appendMap+='<area shape="'+partData.map_shape+'" coords="'+partData.map_coords+'" alt="chack" class="'+Nowlivestock+'-map" id="'+partData.id+'" value="'+eName+'" onmouseover="mapMouseover('+eName+','+livetockName+')"/>';
			});
			appendMap+= '</map>';
			$('.map-config').empty().append(appendMap);
		});
		$('#map-box').css({'background-color': 'white', 'height': '55%'});
		$('#result-box').css({'background-color': 'blurywood', 'height': 'auto'});
		$('#return').css({'height': '80%', 'width': 'auto'})
		$('#return-button').css({'height':'50px','cursor':'pointer'});
	};
	
	/**部位マップ検索情報一覧作成、表示メソッド*/
	function searchPart(livestockName, partId){
		var appendTable='';
		//データテーブルの作成
		$.getJSON(pathName+'rest/'+livestockName, {'partId': partId}, function(data){
				appendTable+= '<table class="partNameTable"><tbody>';
				for(var i= 0;i< data.length;i++){
					appendTable+= '<tr data-href="'+pathName+'detail?meatId='+data[i].id+'&livestockId='+data[i].livestock+'" class="partNameTableTr"><td class="partNameTableTd">'+data[i].e_name+'</td><td class="partNameTableTd">'+data[i].j_name+'</td><td class="partNameTableTd"><img src="'+data[i].picture+'"class="partNameTablePicture"></td></tr>';
				};
			appendTable+='</tbody></table></div>';
			$('.table-block').empty().append(appendTable);
			//データテーブルのCSS
			$('.table-block').css({'background-color': 'wheat'});
			$('.partNameTable').css({'width':'100%'},{'background-color':'tan'});
			$('.partNameTableTd').css({'width':'30%'},{'text-align':'left'},{'font-size': '60px'});
			$('.partNameTablePicture').css({'width':'80px'},{'height':'auto'});
			//テーブルの行をクリックするとリンク先へ飛べるコード
			$('tbody tr[data-href]').addClass('clickable').click( function() {
				window.location = $(this).attr('data-href');
				}).find('a').hover( function() {
				$(this).parents('tr').unbind('click');
				}, function() {
				$(this).parents('tr').click( function() {
				window.location = $(this).attr('data-href');
				});
				});
			});
	};
	
	/**partIdから部位データを取得するメソッド*/
	function getPartData(partId){
		$.getJSON(pathName+'rest/findPartByPartId',{'livestockName': Nowlivestock, 'partId':partId}, function(data){
			return data;
		});
	};
	
	
	
	/**検索条件用畜種名とボタンを取得*/
	$.getJSON(pathName+'rest/allLivestock', function(data){
		var appendText= '';
		var appendButton= '';
		$.each(data,function(i, livestockData){
			appendText += '<input type="checkbox" name="'+livestockData.name+'" class="search-livestock" value="'+livestockData.id+'">'+livestockData.name+'<br>';
			appendButton += '<input type="image" src="'+pathName+'img/'+livestockData.e_name+'MarkButton.png" name="'+livestockData.e_name+'" class="livestock-button" id="'+livestockData.e_name+'-button" value="'+livestockData.e_name+'">'
		});
		$('.search_livestock_block').empty().append(appendText);
		$('.illust-map-group').empty().append(appendButton);
	});
	
	/**かたさ条件取得*/
	$.getJSON(pathName+'rest/allHardLevel', function(data){
		var appendText='<select name="hard-level" id="search-hardLevel"> ';
		appendText+= '<option value="" selected></option>';
		$.each(data,function(i, hardLevelData){
			appendText+= '<option name="hard-level"value="'+hardLevelData.id+'">'+hardLevelData.name+'</option>';
		});
		appendText+= '</select><br>';
		$('.search_hardLevel_block').empty().append(appendText);
	});

	/**畜種ボタンをマウスオーバーで変色*/
	$(document).on('mouseenter','.livestock-button',function(){
		$(this).css({'background-color':'sandybrown'});
	});
	$(document).on('mouseleave','.livestock-button',function(){
		$(this).css({'background-color':''});
	});
	
	/**畜種ボタンクリック*/
	$('.illust-map-group').on('click','#beef-button',function(){
		livestockButtonEve(this);
		 var livestockName= $(this).val();
		searchPart(livestockName, "");
	});
	$('.illust-map-group').on('click','#pork-button',function(){
		livestockButtonEve(this);
		var livestockName= $(this).val();
		searchPart(livestockName, "");
	});
	$('.illust-map-group').on('click','#chiken-button',function(){
		livestockButtonEve(this);
		var livestockName= $(this).val();
		searchPart(livestockName, "");
	});
	
	/**戻るボタン作成*/
	$('.return-button').on('click','#return',function(){
		//畜種ボタンの生成
		var appendText='<input type="image" src="'+pathName+'/img/beefMarkButton.png" name="beef" class="livestock-button" id="beef-button" value="beef">';
		appendText+= '<input type="image" src="'+pathName+'/img/porkMarkButton.png" name="pork" class="livestock-button" id="pork-button" value="pork"><br>';
		appendText+= '<input type="image" src="'+pathName+'/img/chikenMarkButton.png" name="chiken" class="livestock-button" id="chiken-button" value="chiken">';
		$(".illust-map-group").empty().append(appendText);
		//畜種ボタンCSS
		$(".illust-map-group").css({'display': 'box', 'width': '100%'});
		$('.table-block').empty();
		$('.return-button').empty();
	});
	

	/**部位データ一覧をマウスオーバーで変色*/
	$(document).on('mouseenter','.partNameTableTr',function(){
		$(this).css({'background-color':'sandybrown', 'cursor':'pointer'});
	});
	$(document).on('mouseleave','.partNameTableTr',function(){
		$(this).css({'background-color':''});
	});
	
	
	/**部位マップをクリックすると部位検索結果が下に表示される*/
	//牛
	$('.map-config').on('mouseenter','.beef-map',function(){
		var partId= $(this).attr("id");
		searchPart(Nowlivestock, partId);
	});
	
	//豚
	$('.map-config').on('mouseenter','.pork-map',function(){
		var partId= $(this).attr("id");
		searchPart(Nowlivestock, partId);
	});
	
	//鶏
	$('.map-config').on('click','.chikenMap',function(){
		var partId= $(this).attr("id");
		searchPart(Nowlivestock, partId);
	});
	
});