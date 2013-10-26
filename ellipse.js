$(document).ready(function () {
  $('.display').each(function () {
    var 
      $this = $(this),
      $next = $this.next('.display').eq(0),
      showAt = $this.attr('data-display-at') * 1000,
      hideAt = $next.attr('data-display-at') * 1000,
      effect = ($this.hasClass('up') || $this.hasClass('right')) ? 'slide' : 'fade',
      duration = ($this.attr('data-transition') || 0) * 1000,
      nextDuration = $next.attr('data-transition') * 1000,
      direction = $this.hasClass('up') ? 'down' : 'right',
      showOpts = {
        effect: effect,
        duration: duration,
        direction: direction
      },
      hideOpts = {
        effect: effect,
        duration: nextDuration,
        direction: direction === 'down' ? 'up' : 'left'
      };
    console.log(showOpts);
    console.log(hideOpts);
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
