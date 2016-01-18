$('#flip-one').bind('click', function() {
    $('#flip-one .card').toggleClass('flipped');
});
$('#flip-two').bind('click', function() {
    $('#flip-two .card').toggleClass('flipped');
});
$('#flip-three').bind('click', function() {
    $('#flip-three .card').toggleClass('flipped');
});


$(".connect a[href^='http://']").attr("target","_blank");

$( '.voice-slideshow' ).cycle();

$(function() {
	var win;
	$(".back .circle, .speak-up-link").each(function(i, item) {

		
		$(this).bind("click", function() {
			if (win)
			{
				win.close();
			}

			show_text = $(this).find("p").text().replace(/ #CARcrisis/g, '');

			var param = $.param({
				url: "http://ow.ly/wloDg",
				via: "unocha",
				hashtags: "CARcrisis",
				text: show_text
			});


			win = window.open("https://twitter.com/intent/tweet?" + param, "twitter", "height=300,width=600,modal=yes,alwaysRaised=yes");
			win.focus();
		})

		
		//$(this).appendTo($link);
	});
});
/*
var map = L.mapbox.map('map', 'reliefweb.66vzehfr', {
    //zoomControl: false
})
    .setView([6.5, 20.6167], 7);

map.scrollWheelZoom.disable();
map.dragging.disable();
*/

function load_images() {

	var preloaded_image =  [
		["section#sec-eight", "http://ocha.smugmug.com/photos/i-6H3mn2s/0/O/i-6H3mn2s.jpg"], /*1st*/
		["section#sec-second-img", "http://ocha.smugmug.com/photos/i-DTtwK8j/0/O/i-DTtwK8j.jpg"], /*2nd*/
		["section#sec-two-cutout", "http://ocha.smugmug.com/photos/i-tnJxHrJ/0/O/i-tnJxHrJ.png"],
		["section#sec-two", "http://ocha.smugmug.com/photos/i-L6TdvBJ/0/O/i-L6TdvBJ.jpg"], /*3rd*/
	  ["section#sec-three", "http://ocha.smugmug.com/photos/i-BXP6SZx/0/O/i-BXP6SZx.jpg"], /*4th*/
	  ["section#sec-four", "http://ocha.smugmug.com/photos/i-KxtmnCL/0/O/i-KxtmnCL.jpg"], /*5th*/
	  ["section#sec-five-pre", "http://ocha.smugmug.com/photos/i-f892rjW/0/O/i-f892rjW.png"],
	  ["section#sec-five", "http://ocha.smugmug.com/photos/i-cPMBNNt/0/O/i-cPMBNNt.jpg"],
	  ["section#sec-six", "http://ocha.smugmug.com/photos/i-2qHPSng/0/O/i-2qHPSng.jpg"], /*6th*/
	  ["section#sec-nine", "http://ocha.smugmug.com/photos/i-cPMBNNt/0/O/i-cPMBNNt.jpg"], /*7th*/
	  ["section#sec-eleven", "http://ocha.smugmug.com/photos/i-bXqGdzc/0/O/i-bXqGdzc.jpg"] /*8th*/
	];
		$(preloaded_image).each(function(i, item) {
			
			$(item[0]).css("backgroundImage", "url('" + item[1] + "')");

			var value = parseInt((i+1) * 100/preloaded_image.length);
			$(".knob").val(value).trigger('change');
			//$(".knob");

			if (value >= 100)
			{

				$("section").css("visibility", "visible");
				$("#preloader").fadeOut("slow");

				$("#sec-seven").show();
				/* skrollr_obj.destroy();
				skrollr.init({
					constants: {
	                    box: '200p'
	                }
	       	 	}); */

				var s = skrollr.init({
		                constants: {
		                        box: '200p'
		                },
		                render: function(data) {
		                	$("body").css("overflow", "auto");
		                	
		                }
		        });
				skrollr.menu.init(s);
			}
		}); 

}
