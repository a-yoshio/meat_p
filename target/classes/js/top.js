$(function(){
/**コンテキストパス取得*/
	var pathName= location.pathname;
	/**畜種名*/
	Nowlivestock= null;

	/**畜種ボタンクリックしたときの動作メソッド*/
	function livestockButtonEve(selecter){
		Nowlivestock= $(selecter).val();
		//部位マップ(白)の追加
		var appendText='<div class="map-box">';
		appendText+='<div id="part-title"><p style="display:inline">selectPart：</p><span id="part-name">全部</span></div>';
		appendText+='<div id="click_me_box"><img src="'+pathName+'img/click_me.png" id="click_me_img"></div>';
		appendText+='<img src="'+pathName+'img/'+Nowlivestock+'Map/'+Nowlivestock+'MapWhite.png" usemap="#'+Nowlivestock+'-map" id="'+Nowlivestock+'-map" alt="'+Nowlivestock+'" class="livestock-map">';
		$('.illust-map-group').empty().append(appendText);
		//戻るボタンの追加
		var appendRetturnButton='<img src="'+pathName+'img/return_button.png" name="return" id="return">';
		$('.return-button').empty().append(appendRetturnButton);
		//部位マップの領域指定追加
		var appendMap= '<map name="'+Nowlivestock+'-map">';
		$.getJSON(pathName+'rest/AllPartData',{'livestockName': Nowlivestock},function(partDataList){
			$.each(partDataList,function(i,partData){
				appendMap+='<area shape="'+partData.map_shape+'" coords="'+partData.map_coords+'" alt="chack" class="'+Nowlivestock+'-map" id="'+partData.id+'"/>';
			});
			appendMap+= '</map>';
			$('.map-config').empty().append(appendMap);
		});
	};
	
	/**部位マップ検索情報一覧作成、表示メソッド*/
	function searchPart(livestockName, partId){
		var appendTable='';
		//データテーブルの作成
		$.getJSON(pathName+'rest/'+livestockName, {'partId': partId}, function(data){
				appendTable+= '<table class="partNameTable"><tbody>';
				for(var i= 0;i< data.length;i++){
					appendTable+= '<tr class="partNameTableTr" id="'+data[i].id+'"><td class="partNameTableTd">';
					appendTable+= data[i].e_name+'</td><td class="partNameTableTd">'+data[i].j_name+'<hidden id="livestockId" value="'+data[i].livestock+'"></td><td class="partNameTableTd"><img src="'+data[i].picture+'"class="partNameTablePicture"></td></tr>';
				};
			appendTable+='</tbody></table></div>';
			$('.table-block').empty().append(appendTable);
			//データテーブルのCSS
			$('.table-block').css({'background-color': 'wheat'});
			$('.partNameTable').css({'width':'100%'},{'background-color':'tan'});
			$('.partNameTableTd').css({'width':'30%'},{'text-align':'left'},{'font-size': '60px'});
			$('.partNameTablePicture').css({'width':'80px'},{'height':'auto'});
		});
	};
	
	/**partIdから部位データを取得するメソッド*/
		function getPartData(partId){
		$.getJSON(pathName+'rest/findPartByPartId',{'livestockName': Nowlivestock, 'partId':partId}, function(data){
			console.log(data+"部位データが返ってくる");
			return data;
		});
	};
	
	/**イメージマップロールオーバー時の挙動メソッド*/
	function roleoverOnImageMap(imageMapData){
		var partId= $(imageMapData).attr("id");
		searchPart(Nowlivestock, partId);//部位検索結果出力
		$.getJSON(pathName+'rest/findPartByPartId',{'livestockName': Nowlivestock, 'partId':partId}, function(partData){
			$('#'+Nowlivestock+'-map').attr('src',pathName+'img/'+Nowlivestock+'Map/'+Nowlivestock+'_'+partData.e_name+'Map.png');//マップの色変更
			$('#part-name').text(partData.part_name);//選択部位名を表示
		});
	};
	
	/**クックパッドからスクレイピングして料理を取得するメソッド*/
	function getCookingMenu(meatJName){
		$.getJSON(pathName+'rest/cookingMenu',{'meatJName':meatJName},function(elementList){
			console.log(elementList);
			var appendText= '';
			var appendImage= '';
			$.each(elementList.imageElementList,function(i,data){
				appendImage+= data;
			});
			$('#cookingMenu-Image').append(appendImage);
			$.each(elementList.titleList,function(i,data){
				appendText+= data;
			});
			$('#cookingMenu-block').append(appendText);
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
	
	/**戻るボタンクリック*/
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
	
	/**部位データ一覧クリック*/
	$(document).on('click','.partNameTableTr',function(){
		$('#detail').fadeIn('fast');
		$('#gray_panel').fadeIn('fast');
		$('#back-detail').fadeIn('fast');
	});
	
	/**部位データ閉じるボタンクリック*/
	$(document).on('click', '#back-detail',function(){
		$('#detail').fadeOut('fast');
		$('#gray_panel').fadeOut('fast');
		$('#back-detail').fadeOut('fast');
	});
	
	/**畜種ごと部位マップをロールオーバー*/
	//牛
	$('.map-config').on('mouseenter','.beef-map',function(){
		roleoverOnImageMap(this);
	});
	
	//豚
	$('.map-config').on('mouseenter','.pork-map',function(){
		roleoverOnImageMap(this);
	});
	
	//鶏
	$('.map-config').on('mouseenter','.chiken-map',function(){
		roleoverOnImageMap(this);
	});
	
	/**お肉一覧クリック：お肉詳細データポップアップ出力*/
	$(document).on('click','.partNameTableTr',function(){
		var meatId= $(this).attr("id");
		var livestockId= $('hidden',this).attr('value');
		$.getJSON(pathName+'rest/detail',{'meatId': meatId,'livestockId': livestockId},function(meatData){
			$('#meat-ename').text(meatData.eName);
			$('#meat-jname').text(meatData.jName);
			$('#meat-livestockname').text(meatData.livestockEName);
			$('#meat-partname').text(meatData.partName);
			$('#meat-hardname').text(meatData.hardType);
			$('.meat-picture').attr('src',meatData.picture);
			$('#meat-description').text(meatData.description);
			getCookingMenu(meatData.jName);
		});
	});
	
	
	
});