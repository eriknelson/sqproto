var data = {
  name: 'erik'
};

$(function() {
  render = doT.template($('#report-widget-templ').text());
  $('#report-widget-mount').html(render(data));
});
