$(function(){
	/**コンテキストパス取得*/
	var pathName= location.pathname.split('/',1);
	console.log(pathName+"切り出しました。");
	
	/**畜種アイコンの表示*/
	$(window).ready(function(){
    var livestockName= $('#livestockName').val();
	$('.livestock-icon-block').empty().append('<img src="'+pathName+'img/'+livestockName+'_icon.png" id="livestock_icon">');
	});
});