var DATA = {
  releases: 14,
  last_update: '1 day ago', // Probably need to gen this string via moment.js or something
  net_repos: 22,
  forks: 10,
  stars: 66,
  branches: 5
};

$(function() {
  // Build render func from template
  render = doT.template($('#report-widget-templ').text());

  $('#load-data').click(function() {
    //Simulate loading data, passing in cb
    ajaxLoad(function (data) {
      // Render Template after we loaded the data
      $('#report-widget-mount').html(render(data));
    });
  });

});

function ajaxLoad(cb) {
  // Inject data
  var loadTime = 1000;
  setTimeout(function() {
    cb(DATA);
  }, loadTime);
}
