$(function(){
	/**コンテキストパス取得*/
	var pathName= location.pathname;
	
	/**畜種ボタンクリックイベントメソッド*/
	function livestockButtonEve(selecter){
		var Nowlivestock= $(selecter).val();
		//部位検索マップの追加HTML
		var appendText= '<div id="search-box">';
		appendText+='<div id="map-box">';
		appendText+='<input type="image" src="'+pathName+'img/'+Nowlivestock+'Map.png" name="livestock-map" id="livestock-map" value="'+Nowlivestock+'"></div>';
		appendText+='<div id="result-box">';
		appendText+='</div></div>';
		appendText+='<div id="return-button">';
		appendText+= '<input type="image" src="'+pathName+'img/returnButton.png" name="return" id="return"></div>';
		//部位検索マップCSS
		$('.illust-map-group').empty().append(appendText);
		$('#search-box').css({'background-color': 'wheat', 'height': '450px' });
		$('#livestock-map').css({'width': '80%', 'height': 'auto'});
		$('#map-box').css({'background-color': 'white', 'height': '55%'});
		$('#result-box').css({'background-color': 'blurywood', 'height': '40%'});
		$('#return').css({'height': '80%', 'width': 'auto'})
		$('#return-button').css({'height':'50px'});
	}
	
	/**畜種ボタンクリック*/
	$('.illust-map-group').on('click','#beef-button',function(){
		livestockButtonEve(this);
	});
	
	$('.illust-map-group').on('click','#pork-button',function(){
		livestockButtonEve(this);
	});
	
	$('.illust-map-group').on('click','#chiken-button',function(){
		livestockButtonEve(this);
	});
	
	/**戻るボタン*/
	$('.illust-map-group').on('click','#return-button',function(){
		//畜種ボタンの生成
		var appendText='<input type="image" src="'+pathName+'/img/beefMarkButton.png" name="beef" class="livestock-button" id="beef-button" value="beef">';
		appendText+= '<input type="image" src="'+pathName+'/img/porkMarkButton.png" name="pork" class="livestock-button" id="pork-button" value="pork"><br>';
		appendText+= '<input type="image" src="'+pathName+'/img/chikenMarkButton.png" name="chiken" class="livestock-button" id="chiken-button" value="chiken">';
		$(".illust-map-group").empty().append(appendText);
		//畜種ボタンCSS
		$(".illust-map-group").css({'display': 'box', 'width': '100%'});
	});
	

});	