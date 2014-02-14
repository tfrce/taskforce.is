/*globals $:true, _:true*/

_.mixin(_.string.exports());

$(function () {
  $('.github-project').each(function () {
    var self = this;
    var repo = $(this).data('repository');

    $.getJSON('http://contributary.herokuapp.com/contributors/' + repo,
        function (contributors) {
      var names = _.map(contributors, function (contributor) {
        return _.sprintf('<a href="https://github.com/%s">%s</a>',
          contributor.login, contributor.name || contributor.login);
      });

      $(self).find('.contributors').html(names.join(', '));
    });
  });
});
