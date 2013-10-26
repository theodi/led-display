$(document).ready(function () {
  $('.display').each(function () {
    var 
      $this = $(this),
      showAt = $this.attr('data-display-at'),
      hideAt = $this.next('.display').eq(0).attr('data-display-at');
    $this
      .delay(showAt)
      .show({
        effect: 'fade',
        duration: 10000
      });
    if ($this.next('.display').length > 0) {
      $this
        .delay(hideAt - showAt)
        .hide({
          effect: 'fade',
          duration: 10000
        });
    }
  });
});
