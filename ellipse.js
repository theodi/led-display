$(document).ready(function () {
  $('.display').each(function () {
    var 
      $this = $(this),
      $next = $this.next('.display').eq(0),
      showAt = $this.attr('data-display-at') * 100,
      hideAt = $next.attr('data-display-at') * 100,
      effect = ($this.hasClass('up') || $this.hasClass('right') || $this.hasClass('down')) ? 'slide' : 'fade',
      nextEffect = ($next.hasClass('up') || $next.hasClass('right') || $next.hasClass('down')) ? 'slide' : 'fade',
      duration = ($this.attr('data-transition') || 0) * 1000,
      nextDuration = $next.attr('data-transition') * 1000,
      direction = $this.hasClass('up') ? 'down' : $this.hasClass('down') ? 'up' : 'right',
      nextDirection = $next.hasClass('up') ? 'up' : $next.hasClass('down') ? 'down' : 'left',
      showOpts = {
        effect: effect,
        duration: duration,
        direction: direction
      },
      hideOpts = {
        effect: nextEffect,
        duration: nextDuration,
        direction: nextDirection
      };
    $this
      .delay(showAt)
      .show(showOpts);
    if ($next.length > 0) {
      $this
        .delay(hideAt - showAt - duration)
        .hide(hideOpts);
    }
  });
});
