Template.hello.onRendered(function() {
  // var ww = $(window).width(),
  //     wh = $(window).height(),
  //     positionX = 0,
  //     positionY = 0,
  //     title = $('.CT0-title');

  // $(window).on('mousemove', function(e) {
  //   positionX = (((ww / 2) - e.pageX) / 100) - (title.outerWidth() / 2)
  //   positionY = (((wh / 2) - e.pageY) / 50) - (title.outerHeight() / 2)
  //   // title.css({
  //   //   'transform': 'translate3d(' + positionX + 'px,' + positionY + 'px, 0)'
  //   // });
  //   TweenLite.to(title, 0.9, {x: positionX, y: positionY, force3D: true, autoRound: false, ease: Quart.easeOut});
  // });
  Session.set('videoActive', false)
});

Template.hello.events({
  'submit .newsletter-form': function(e) {
    e.preventDefault();
    var email = $('.newsletter-signup').val();
    Meteor.call('subscribeUser', email, function(result) {
      if(true) {
        console.log('it worked')
        $('.signup-message').text('Thanks for signing up!')
      } else {
        console.log('it didn\'t work')
        $('.signup-message').text('We\'re sorry, something went wrong!')
      }
    })
  },
  'click .play-container': function() {
    Session.set('videoActive', true)
  }
});

Template.hello.helpers({
  videoActive: function() {
    var active = Session.get('videoActive');
    if(active) {
      return true
    } else {
      return false
    }
  }
})