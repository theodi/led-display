$(document).ready(function () {
  var marquee = function ($display, showOpts, hideOpts, loop) {
    if (loop > 0) {
      hideOpts.complete = marquee($display, showOpts, hideOpts, loop - 1);
      return function () {
        console.log('showing & hiding');
        console.log($display);
        $display
          .show(showOpts)
          .hide(hideOpts);
      };
    }
  };
  $('.display').each(function () {
    var 
      $this = $(this),
      $next = $this.next('.display').eq(0),
      showAt = $this.attr('data-display-at') * 1000,
      hideAt = $next.attr('data-display-at') * 1000,
      duration = ($this.attr('data-transition') || 0) * 1000,
      nextDuration = $next.attr('data-transition') * 1000,
      easing = ($this.hasClass('right') || $this.hasClass('left')) ? 'linear' : 'swing',
      nextEasing = ($next.hasClass('right') || $next.hasClass('left')) ? 'linear' : 'swing';
    if ($this.hasClass('up') || $this.hasClass('down') || $this.hasClass('downup')) {
      effect = 'slide';
    } else if ($this.hasClass('right')) {
      effect = 'slide';
    } else if ($this.hasClass('left')) {
      effect = 'blind';
    } else {
      effect = 'fade';
    }
    if ($next.hasClass('up') || $next.hasClass('down') || $next.hasClass('downup')) {
      nextEffect = 'slide';
    } else if ($next.hasClass('right')) {
      nextEffect = 'slide';
    } else if ($next.hasClass('left')) {
      nextEffect = 'blind';
    } else {
      nextEffect = 'fade';
    }
    if ($this.hasClass('up') || $this.hasClass('downup')) {
      direction = 'down';
    } else if ($this.hasClass('down')) {
      direction = 'up';
    } else if ($this.hasClass('left')) {
      direction = 'left';
    } else if ($this.hasClass('right')) {
      direction = 'right';
    }
    if ($next.hasClass('up')) {
      nextDirection = 'up';
    } else if ($next.hasClass('down') || $next.hasClass('downup')) {
      nextDirection = 'down';
    } else if ($next.hasClass('left')) {
      nextDirection = 'right';
    } else {
      nextDirection = 'left';
    }
    showOpts = {
      effect: effect,
      duration: duration,
      direction: direction,
      easing: easing
    };
    hideOpts = {
      effect: nextEffect,
      duration: nextDuration,
      direction: nextDirection,
      easing: nextEasing
    };
    $this
      .delay(showAt)
      .show(showOpts);
    if ($next.length > 0) {
      if ($next.hasClass('downup')) {
        $this
          .delay(hideAt - showAt - duration - nextDuration)
          .hide(hideOpts);
      } else if (nextEffect === 'slide' || nextEffect === 'blind') {
        $this
          .delay(hideAt - showAt - duration + nextDuration)
          .hide();
      }
    }
  });
});
