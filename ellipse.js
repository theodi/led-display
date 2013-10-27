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
      effect = ($this.hasClass('up') || $this.hasClass('right') || $this.hasClass('down')) ? 'slide' : 'fade',
      nextEffect = ($next.hasClass('up') || $next.hasClass('right') || $next.hasClass('down')) ? 'slide' : 'fade',
      duration = ($this.attr('data-transition') || 0) * 1000,
      nextDuration = $next.attr('data-transition') * 1000,
      direction = $this.hasClass('up') ? 'down' : $this.hasClass('down') ? 'up' : 'right',
      nextDirection = $next.hasClass('up') ? 'up' : $next.hasClass('down') ? 'down' : 'left',
      easing = $this.hasClass('right') ? 'linear' : 'swing',
      nextEasing = $next.hasClass('right') ? 'linear' : 'swing',
      showOpts = {
        effect: effect,
        duration: duration,
        direction: direction,
        easing: easing
      },
      hideOpts = {
        effect: nextEffect,
        duration: nextDuration,
        direction: nextDirection,
        easing: nextEasing
      };
    if ($this.hasClass('multiline')) {
      $this.show();
    } else {
      $this
        .delay(showAt)
        .show(showOpts);
      if ($this.hasClass('line')) {
        hideOpts = {
            effect: 'slide',
            duration: duration,
            direction: 'left',
            easing: 'linear'
        };
        // hideOpts.complete = marquee($this, showOpts, hideOpts, 10);
        console.log('hiding');
        console.log($this);
        $this
          .hide(hideOpts);
      } else if ($next.length > 0) {
        $this
          .delay(hideAt - showAt - duration)
          .hide(hideOpts);
      }
    }
  });
});
