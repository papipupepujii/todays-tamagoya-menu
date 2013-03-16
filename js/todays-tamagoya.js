	$(function(){
		$.ajax({
			type: "GET",
			url: "http://api.twitter.com/1/users/lookup.json",
			data: {"screen_name": "tamagoya_bot"},
			dataType: "json",
			timeout: 100000,
			success: function(json){
				$.each(json, function(){
					var menu = this.status.text;
					menu = menu.replace(" ", "<br/>");
					menu = menu.replace("　", "<br/>");
					menu = menu.replace("#tamagoya", "");
					$('#tweet').html(menu);
				})
			},
			error: function(){
				$('#tweet').html("読み込みに失敗しました。申し訳ございません。下部のリンクよりメニューをご確認ください。");
			}
		})
	});