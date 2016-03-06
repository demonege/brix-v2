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

});