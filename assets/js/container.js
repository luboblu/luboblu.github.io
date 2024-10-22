$(function(){
	$('#contents div[id !="tab1"]').hide();
	$("a").click(function(){
		$("#contents div").hide();
		$($(this).attr("href")).show();
		$(".current").removeClass("current");
		$(this).addClass("current");

		return false;
	});
});