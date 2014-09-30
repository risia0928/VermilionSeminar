angular.module('fbLike', []).
	directive('fbLike', ['$window',
		function($window) {
			return {
				restrict: 'AE',
				scope: {
					appid: '='
				},
				link: function(scope, element, attrs) {
					if(!$window.FB) {
						// Facebook SDKのロード
						$.getScript('//connect.facebook.net/en_jp/sdk.js', function() {
							$window.FB.init({
								appId: scope.appid,		// AppID
								xfbml: true,			// XFBMLでパースするかどうか
								version: 'v2.0'			// SDKのバージョン
							});
							renderLikeButton();
						});
					} else {
						renderLikeButton();
					}
					//　ボタンのレンダリング
					function renderLikeButton() {
						element.html('<div class="fb-like" data-layout="button_count" data-action="like" data-show-faces="true" data-share="true"></div>');
						$window.FB.XFBML.parse(element.parent()[0]);
					}
				}
			};
		}
	]);