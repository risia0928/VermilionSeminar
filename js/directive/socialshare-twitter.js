angular.module('tweet', []).
	directive('tweet', ['$window',
		function($window) {
			return {
				restrict: 'EA',
				scope: {
					text: '='
				},
				link: function(scope, element, attrs) {
					if(!$window.twttr) {
						// Load Twitter SDK
						$.getScript('//platform.twitter.com/widgets.js', function() {
							renderTweetButton();
						});
					} else {
						renderTweetButton();
					}
					function renderTweetButton() {
						element.html('<a href="https://twitter.com/share" class="twitter-share-button" width="100px" data-text="' + scope.text + '">Tweet</a>');
						$window.twttr.widgets.load(element.parent()[0]);
					}
				}
			};
		}
	]);