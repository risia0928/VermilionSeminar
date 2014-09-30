var app = angular.module("app",[
	"ngRoute",
	"ngAnimate",
	"google-maps",
	"fbLike",
	"tweet",
	"googlePlus"
	]);
app.config(['$locationProvider',"$routeProvider",function($locationProvider,$routeProvider) {
	//$locationProvider.html5Mode(true);
	$routeProvider.
		when("/", {
			templateUrl: "views/top.html",
			controller: "TopCtrl",
			slug: "top",
			title:"TOP | ヴァーミリオンゼミナール"
		}).when("/program", {
			templateUrl: "views/program.html",
			slug: "program",
			title:"プログラム | ヴァーミリオンゼミナール"
		}).when("/entry", {
			templateUrl: "views/entry.html",
			controller: "EntryCtrl",
			slug: "entry",
			title:"エントリー | ヴァーミリオンゼミナール"
		}).when("/venue", {
			templateUrl: "views/venue.html",
			controller: "VenueCtrl",
			slug: "venue",
			title:"会場案内 | ヴァーミリオンゼミナール"
		}).when("/guest", {
			templateUrl: "views/guest.html",
			controller: "GuestCtrl",
			slug: "guest",
			title:"出演者 | ヴァーミリオンゼミナール"
		}).otherwise({
			redirectTo: "/"
		});
}]);

app.controller('main',
	['$scope','$http', '$location','$route','$routeParams','$rootScope','$injector','$sce',
	function($scope,$http,$location,$route,$routeParams,$rootScope,$injector,$sce){

	$rootScope.appUrl = $location.protocol() + "://" + $location.host() + "/VermilionSeminar";

	//タイトルの変更
	$scope.$on('$routeChangeSuccess', function(){
		$scope.title = $route.current.title;
		$scope.slug = $route.current.slug;
		window.scrollTo(0,1);
	});


}]);

app.controller("TopCtrl", function($scope, $http ) {

});

//エントリー
app.controller("EntryCtrl", function($scope, $http ) {
	$scope.selectedLeague = "";
	$scope.league = [
		{num:1,label:"ブロンズE"},{num:2,label:"ブロンズD"},{num:3,label:"ブロンズC"},{num:4,label:"ブロンズB"},{num:5,label:"ブロンズA"},
		{num:6,label:"シルバーE"},{num:7,label:"シルバーD"},{num:8,label:"シルバーC"},{num:9,label:"シルバーB"},{num:10,label:"シルバーA"},
		{num:11,label:"ゴールドE"},{num:12,label:"ゴールドD"},{num:13,label:"ゴールドC"},{num:14,label:"ゴールドB"},{num:15,label:"ゴールドA"},
		{num:16,label:"プラチナE"},{num:17,label:"プラチナD"},{num:18,label:"プラチナC"},{num:19,label:"プラチナB"},{num:20,label:"プラチナA"},
		{num:21,label:"オリハルコンE"},{num:22,label:"オリハルコンD"},{num:23,label:"オリハルコンC"},{num:24,label:"オリハルコンB"},{num:25,label:"オリハルコンA"},
		{num:26,label:"ヴァーミリオンE"},{num:27,label:"ヴァーミリオンD"},{num:28,label:"ヴァーミリオンC"},{num:29,label:"ヴァーミリオンB"},{num:30,label:"ヴァーミリオンA"},{num:31,label:"ヴァーミリオンS"}
	];
});

//出演者
app.controller("GuestCtrl", function($scope, $http,$rootScope,$route,$routeParams) {
	$scope.guest = [
		{
			"name": "リシア♪",
			"image": "icon_001.jpeg",
			"deck":"ソエル超魔、毘沙門ラグナ、ニャルキュベ",
			"twitter":"lilacrain__3576",
			"description":"trifortの誇るポンコツtrifortの誇るポンコツtrifortの誇るポンコツtrifortの誇るポンコツtrifortの誇るポンコツtrifortの誇るポンコツtrifortの誇るポンコツtrifortの誇るポンコツtrifortの誇るポンコツtrifortの誇るポンコツtrifortの誇るポンコツtrifortの誇るポンコツtrifortの誇るポンコツtrifortの誇るポンコツ",
		},
		{
			"name": "にしみや",
			"image": "icon_002.jpeg",
			"deck":"あああああああ",
			"twitter":"lilacrain__3576",
			"description":"trifortの誇るポンコツその②",
		}
	];
});
//会場案内
app.controller("VenueCtrl", function($scope, $http) {
	/**********************************
	Google Maps for AngularJSを使用
	座標軸等の設定を仕込む。詳しくは下記リンク参照
	https://angular-ui.github.io/angular-google-maps/#!/
	***********************************/
	$scope.map = {
		center: {
			latitude: 45,
			longitude: -73
		},
		zoom: 8
	};
});