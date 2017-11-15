$(function(){
	/**コンテキストパス取得*/
	var pathName= location.pathname;
	
	/**データ一覧作成メソッド*/
	function appendText(data){
			var appendTable= '<table class="partNameTable"><tbody>';
			for(var i= 0;i< data.length;i++){
				appendTable+= '<tr data-href="'+pathName+'detail?meatId='+data[i].id+'&livestockId='+data[i].livestock+'" class="partNameTableTr"><td class="partNameTableTd">'+data[i].e_name+'</td><td class="partNameTableTd">'+data[i].j_name+'</td><td class="partNameTableTd"><img src="'+data[i].picture+'"class="partNameTablePicture"></td></tr>';
			};
			appendTable+='</tbody></table></div>';
			$('.table-block').append(appendTable);
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
		};

	/**検索ボタンクリック*/
	$('#search-button').on('click',function(){
		//畜種検索
		var selectLivestock= '';
		var checkLivestockList= $('.search-livestock:checked').map(function(livestockId){
			selectLivestock+= $(this).attr('name')+' ';
			return $(this).val();
		});
		$('.search-livestock:checked').prop('checked',false);
		//かたさ検索
		var hardLevel= $('#search-hardLevel').val();
		var hardLevelText= $('#search-hardLevel option:selected').text();
		//キーワード検索
		var keyword= $("#search-keyword").val();
		
		//お肉データ取得
		var appendConditionContents= '<h3 class="conditon-label">条件指定  ';
		$('.table-block').empty();
		//選択された畜種の数がなしか、ありか。
		if(0 == checkLivestockList.size()){
			$.getJSON(pathName+'rest/keyword',{'livestockId':'', 'hardLev':hardLevel, 'keyword':keyword},function(data){
				appendText(data);
				appendConditionContents +='畜種：'+selectLivestock+' かたさ：'+hardLevelText+'<br> キーワード：'+keyword+'</h3>'; 
				$('.illust-map-group').empty().append(appendConditionContents);
				$('.illust-map-group').css({'height':'auto'},{'text-align':'left'});
			});
		}else{
		$.each(checkLivestockList,function(index, livestockName){
			$.getJSON(pathName+'rest/keyword',{'livestockId':livestockName, 'hardLev':hardLevel, 'keyword':keyword},function(data){
					appendText(data);
			});
		});
		appendConditionContents +='畜種：'+selectLivestock+' かたさ：'+hardLevelText+' キーワード：'+keyword+'</h3>'; 
		$('.illust-map-group').empty().append(appendConditionContents);
		$('.illust-map-group').css({'height':'auto'});
		};
	});
});