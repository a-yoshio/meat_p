$(function(){
	/**コンテキストパス取得*/
	var pathName= location.pathname;
	/**畜種名*/
	Nowlivestock= null;
	
	/**畜種ボタンをマウスオーバーで変色*/
	$(document).on('mouseenter','.livestock-button',function(){
		$(this).css({'background-color':'sandybrown'});
	});
	$(document).on('mouseleave','.livestock-button',function(){
		$(this).css({'background-color':''});
	});

	/**部位マップ検索情報一覧作成、表示*/
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
	
	/**畜種ボタンクリックイベントメソッド*/
	function livestockButtonEve(selecter){
		Nowlivestock= $(selecter).val();
		//部位検索マップの追加HTML
		var appendText= '<div id="search-box">';
		appendText+='<div id="map-box">';
		appendText+='<img src="'+pathName+'img/'+Nowlivestock+'MapWhite.png" usemap="#'+Nowlivestock+'-map" id="'+Nowlivestock+'-map" alt="'+Nowlivestock+'お肉マップ"></div>';
		appendText+='</div>';
		$('.illust-map-group').empty().append(appendText);
		var appendRetturnButton='<img src="'+pathName+'img/return_button.png" name="return" id="return">';
		$('.return-button').empty().append(appendRetturnButton);
		$('#map-box').css({'background-color': 'white', 'height': '55%'});
		$('#result-box').css({'background-color': 'blurywood', 'height': 'auto'});
		$('#return').css({'height': '80%', 'width': 'auto'})
		$('#return-button').css({'height':'50px','cursor':'pointer'});
	}
	
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
	
	/**戻るボタン*/
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
	$('.map-config').on('click','.beefMap',function(){
		var partId= $(this).attr("id");
		searchPart(Nowlivestock, partId);
	});
	
	//豚
	$('.map-config').on('click','.porkMap',function(){
		var partId= $(this).attr("id");
		searchPart(Nowlivestock, partId);
	});
	
	//鶏
	$('.map-config').on('click','.chikenMap',function(){
		var partId= $(this).attr("id");
		searchPart(Nowlivestock, partId);
	});
	
});	