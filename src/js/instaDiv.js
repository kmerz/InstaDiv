	var imagecount = 50; // how many recent images do you want to have from instagram
	var images = [];
	var instagramuserid = "371308"; // this is my id from Instagram, you shure use yours
	var accesstoken = "371308.3de11e3.ef32cf78df594bae90b4b7bea836bfcf"; // my token, you should use yours 

$(function() {
	
    $.ajax({
    	type: "GET",
        dataType: "jsonp",
        cache: false,
        processData: true,
        url: "https://api.instagram.com/v1/users/"+instagramuserid+"/media/recent/?access_token="+accesstoken+"&count="+imagecount,
        success: function(data) {
					for(var element = 0; element < 3; element++) {
	    	        for (var i in data.data) {
					      if(data.data.hasOwnProperty(i)){  
					      	images.push(data.data[i].images.thumbnail.url);
							}
						}
					}
					for(var element in images) {
						if(images.hasOwnProperty(element) && (typeof images[element] != 'function')){  
							$(".insta_div").append("<p class='crop_thumb'><img class='image_thumb' src='"+images[element]+"' /></p>"); 
					}
				}
			}

    });

    $('.insta_div').css('width', window.innerWidth+150); // 150 for thumbnail size, 350 for low resolution, 450 for high resolutiom
  	$('.insta_div').css('height', window.innerHeight+150); // 150 for thumbnail size, 350 for low resolution, 450 for high resolutiom

});

$(window).resize(function() {

  $('.insta_div').css('width', window.innerWidth+150); // 150 for thumbnail size, 350 for low resolution, 450 for high resolutiom
  	$('.insta_div').css('height', window.innerHeight+150); // 150 for thumbnail size, 350 for low resolution, 450 for high resolutiom


});

