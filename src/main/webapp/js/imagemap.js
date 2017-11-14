$(function(){
	/**部位マップをマウスオーバーで変色*/
	$('#search-box').ready(function(){
		$('#beef-map').mapster({
			singleSelect: true,
			clickNavigate: false,//クリックでリンクに飛ぶ機能
			reader_highlight:{altImage: 'beefRedMap2.png'},//マウスオーバー時の画像指定。
			mapKey:'region',//mapkeyを指定。HTML内でareaを個別に設定する際に識別するためのもの。
			fillColor:false,
			fillOpacity: 1//ロールオーバー時に乗っかる画像の透明度
		});
	});
});