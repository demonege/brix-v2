jQuery(document).ready(function(){

	//Slider Element container and picture width
    var cotainerwidth = jQuery('.slider-content .wrapper .container').children();
    cotainerwidth = cotainerwidth.length * jQuery(cotainerwidth[0]).width();
    jQuery('.slider-content .wrapper .container').css({"width": cotainerwidth + 'px'})


    var picturewidth = jQuery('.wrapper').width();
    var sliderElemen = jQuery('.slider-content .wrapper .container').children();
    var translateValue = picturewidth;
    var i = 0;
    jQuery(sliderElemen).each(function(){
        jQuery(sliderElemen[i]).css({"width": picturewidth + 'px'});
        i++;
    });

	var sliderIndex = 0;
	var sliderPlace = sliderElemen.length;
	var sliderStrg = true;
      setInterval(function aktion() {
      		if(sliderStrg) {
      			sliderIndex = changePic(++sliderIndex);
      		} else {
      			sliderIndex = changePic(--sliderIndex);
      		}

      		if(sliderIndex == 4) {
      			sliderStrg = false;
      		}

      		if(sliderIndex == 0) {
      			sliderStrg = true;
      		}
      }, 4000);

    function changePic(index) {
        var picture = jQuery('.slider-content .wrapper .container').children();
        if(index >=  picture.length)
        {
            index = 0;
        }
        else if(index < 0)
        {
            index = picture.length-1;
        }

        picture.each(function(i, el){
            if(i == index )
            {
                jQuery(el).addClass('show');

                var translateX = translateValue * (i);
                jQuery('.slider-content .wrapper .container').css({"transform": "translateX(" + -translateX + 'px)'});
            }
            else
            {
                jQuery(el).removeClass('show');
            }
        });
        return index;
    };

    //Layer ansicht for angebote.phtml
    var angebote = jQuery('.angebot-container');
    jQuery(angebote).each(function(i,el){
        jQuery(el).click(function(){
            jQuery.post(window.location.origin,{id: jQuery(angebote[i]).attr('id')}).done(function(data) {
                var angebotdata = jQuery(data).find('.layer-angebot');
                jQuery('.layer-angebot').html(angebotdata);
                jQuery('.layer-angebot').addClass('active');
            });
        });
    });

    //Layer ansicht for angebote.phtml
    var impression = jQuery('.impression-container');
    jQuery(impression).each(function(i,el){
        jQuery(el).click(function(){
            jQuery.post(window.location.origin,{imagecount: jQuery(impression[i]).attr('id')}).done(function(data) {
                var impressiondata = jQuery(data).find('.impression-layer');
                jQuery('.impression-layer').html(impressiondata);
                jQuery('.impression-layer').addClass('active');
            });
        });
    });
});

//function for close layer
function closeLayer()
{
  jQuery('.layer-angebot').removeClass('active');
  jQuery('.impression-layer').removeClass('active');
}

//Slieder Element Layer
    var cotainerwidth = jQuery('.impression-layer .wrapper .image-container').children();
    cotainerwidth = cotainerwidth.length * jQuery(cotainerwidth[0]).width();
    jQuery('.impression-layer .wrapper .image-container').css({"width": cotainerwidth + 'px'})

    var picturewidth = jQuery('.wrapper').width();
    var sliderElemen = jQuery('.impression-layer .wrapper .image-container').children();
    var translateValue = picturewidth;
    var i = 0;
    jQuery(sliderElemen).each(function(){
        jQuery(sliderElemen[i]).css({"width": picturewidth + 'px'});
        i++;
    });

    //Slider Layer element
    var sliderIndex = 0;
    jQuery('.left-arrow').click(function(){
        sliderIndex = changeLayerPic(--sliderIndex)
    });

    jQuery('.right-arrow').click(function(){
        sliderIndex = changeLayerPic(++sliderIndex)
    });

    function changeLayerPic(index) {
        var picture = jQuery('.impression-layer .wrapper .image-container').children();
        if(index >=  picture.length)
        {
            index = 0;
        }
        else if(index < 0)
        {
            index = picture.length-1;
        }

        picture.each(function(i, el){
            if(i == index )
            {
                jQuery(el).addClass('show');

                var translateX = translateValue * (i);
                jQuery('.impression-layer .wrapper .image-container').css({"transform": "translateX(" + -translateX + 'px)'});
            }
            else
            {
                jQuery(el).removeClass('show');
            }
        });
        return index;
    };