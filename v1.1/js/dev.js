function printArticle(articleName) {
	var printContents = document.getElementById(articleName).innerHTML;
	var originalContents = document.body.innerHTML;
	document.body.innerHTML = printContents;
	window.print();
	document.body.innerHTML = originalContents;
}






function changeCSS(cssFile, cssLinkIndex) {
	var oldlink = document.getElementsByTagName("link").item(2),
		newlink = document.createElement("link");

	if (document.getElementById("contraste").checked) {

		newlink.setAttribute("rel", "stylesheet");
		newlink.setAttribute("type", "text/css");
		newlink.setAttribute("href", "css/contrast.css");
		document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
		window.reload;
	} else {}



}






if (window.matchMedia("(min-width: 960px)").matches && window.matchMedia("(min-height: 600px)").matches) {

	/* Fonciton de menu flottant */

	/*jslint browser: true*/
	/*global $, jQuery, alert*/
	$(function () {

		var $sidebar = $("#sommaire"),
			$window = $(window),
			offset = $sidebar.offset(),
			topPadding = 0;

		$window.scroll(function () {
			if ($window.scrollTop() > offset.top) {
				$sidebar.stop().animate({
					marginTop: $window.scrollTop() - offset.top + topPadding
				});

			} else {
				$sidebar.stop().animate({
					marginTop: 0
				});
			}
		});
	});

	/* Fonciton de changement de classe pour le lien vers l'article affiché à l'écran*/

	/*jslint browser: true*/
	/*global $, jQuery, alert*/

	$(document).ready(function () {
		$(document).on("scroll", onScroll);

		$('a[href^="#"]').on('click', function (e) {
			e.preventDefault();
			$(document).off("scroll");

			$('a').each(function () {
				$(this).removeClass('active');
			});
			$(this).addClass('active');

			var target = this.hash;
			$target = $(target);
			$('html, body').stop().animate({
				'scrollTop': $target.offset().top
			}, 500, 'swing', function () {
				window.location.hash = target;
				$(document).on("scroll", onScroll);
			});
		});
	});

	function onScroll(event) {
		var scrollPosition = $(document).scrollTop();
		$('nav a').each(function () {
			var currentLink = $(this);
			var refElement = $(currentLink.attr("href"));
			if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
				$('nav ul li a').removeClass("active");
				currentLink.addClass("active");
			} else {
				currentLink.removeClass("active");
			}
		});
	}

} else if (window.matchMedia("(min-width: 640px)").matches) {
	/* L'affichage est inférieur à 640px de large */
} else {

}