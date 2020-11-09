//code for navbar from maximize library

$(document).ready(function(){
    $(".sidenav").sidenav();
});


// code obtained from https://codepen.io/opznhaarlems/pen/mKymJy

function processImageUpload(e) {

    var $target = $($(this).data('target'));
    var $preview = $($(this).data('preview'));
  
    var maxWidth = +($(this).data('max-width') || 800);
    var maxHeight = +($(this).data('max-height') || 600);
    var targetMime = $(this).data('mime') || 'image/jpeg';

    var files = e.target.files;
	  var imageTypes = {
		  	'image/jpeg': 'jpg',
  			'image/gif': 'gif',
  			'image/png': 'png'
	  };
  
    if ( !files.length || !imageTypes[files[0].type] ) {
        $target.val('');
        $preview.html('<span class="mdi mdi-image mdi-48px"></span>');
        return;
    }
  
    var reader = new FileReader();
		reader.onload = function() {
        var img = document.createElement("img");
        img.onload = function() {
          var resizedImg = imageToDataUri(img, maxWidth, maxHeight, targetMime);
          $target.val(resizedImg);
          $preview.html('<img src="' + resizedImg + '">');
        }
        img.src = event.target.result;
    };
    reader.readAsDataURL(files[0]);
}

function imageToDataUri(img, maxWidth, maxHeight, targetMime) {

    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var width = img.width;
    var height = img.height;

    if (width > height) {
        if (width > maxWidth) {
            height *= maxWidth / width;
            width = maxWidth;
        }
    } else {
        if (height > maxHeight) {
            width *= maxHeight / height;
            height = maxHeight;
        }
    }
    canvas.width = width;
    canvas.height = height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, width, height);

    return canvas.toDataURL(targetMime);
}

$(document).on('change', 'input[type="file"][data-preview]', processImageUpload);