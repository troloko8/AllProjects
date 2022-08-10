$(function () {

  var itemAct = function (index) {
    $('.slider')
      .find('.slider__item')
      .eq(index)
      .addClass('act')
      .siblings()
      .removeClass('act')
  }

  var slideRight = function () {
    $('.slider')
      .find('.act')
      .next()
      .addClass('act')
      .siblings()
      .removeClass('act');
  }

  var slideLeft = function () {
    $('.slider')
      .find('.act')
      .prev()
      .addClass('act')
      .siblings()
      .removeClass('act');
  }


  $('.slider__item').on('mouseover', function (e) {
    e.preventDefault();

    var $this = $(this),
      index = $this.index(),
      list = $('.slider__list'),
      lastItem = list.find('.slider__item').last(),
      lastPrevItem = lastItem.prev().index();
    itemAct(index);

    if (index < lastItem.index()) {
      value = -24 * (index - 1) + '%';
    } else {
      value = -24 * (lastPrevItem - 1) + '%';
    }

    if (parseInt(value) < 0) {
      list.css('transform', 'translateX(' + value + ')');
    } else {
      list.css('transform', 'translateX(' + 0 + ')');
    }

  })

  const md = new MobileDetect(window.navigator.userAgent);
  const isMobile = md.mobile();

  if (isMobile) {
    $('.slider__item').eq(0).addClass('act');

    $('.slider').swipe({
      swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
  
        var $this = $(this),
          list = $this.find('.slider__list'),
          active = $this.find('.act'),
          nextItem = active.next(),
          prevItem = active.prev(),
          indexNext = nextItem.index();
        indexPrev = prevItem.index();
  
        const ul = document.querySelector('.slider__list');
        var indexTransform = Number(ul.style.webkitTransform.replace(/\D+/g, ""))
  
  
        lastItem = list.find('.slider__item').last();
        firstItem = list.find('.slider__item').first();
  
  

        if (indexNext == 1) {
          console.log(indexTransform)
          valueRight = -12 * indexNext + '%';
        } else {
  
          if (indexNext <= lastItem.index()) {
            valueRight = (-indexTransform -25) + '%';
          }
    
          if (indexPrev > firstItem.index()) {
            valueLeft = (-indexTransform + 25) + '%';
          } else {
            valueLeft = 0;
          }
        }
  
  
  
        if (nextItem.length) {
          if (direction == 'left') {
            slideRight()
            list.css('transform', 'translateX(' + valueRight + ')');
          }
        }
  
        if (prevItem.length) {
          if (direction == 'right') {
            slideLeft()
            list.css('transform', 'translateX(' + valueLeft + ')');
          }
        }
      }
    });
  }



});