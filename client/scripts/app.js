// YOUR CODE HERE:
// $(document).ready(function() {

  var app = {};

  app.init = () => { 

    $('.chat').on('click', function (event) {
      console.log('This was clicked');

      console.log(this.data);
      app.handleUsernameClick(event);
    });
  };

  app.send = (message) => {
    // let message = {
    //   username: 'shawndrost',
    //   text: 'trololo',
    //   roomname: '4chan'
    // };
    $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: 'http://parse.sfm6.hackreactor.com/chatterbox/classes/messages',
      type: 'POST',
      data: message,
      contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message sent');
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message', data);
      }
    });

  };

  // var message = {
  //   username: 'The Real Donald Trump',
  //   text: 'Yo sonn',
  //   roomname: '4chan'
  // };

  app.fetch = () => {
    $.ajax({
      url: 'http://parse.sfm6.hackreactor.com/chatterbox/classes/messages',
      success: function (data) {
        console.log(data);
        
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to retrieve message', data);
      }
    });
  };

  app.clearMessages = () => {
    $('#chats').html('');
  };

  app.renderMessage = (message) => {
    $('#chats').prepend('\
      <section class="chat">\
        <div class="username" data-username="' + message.username + '">' + message.username + ': </div>\
        ' + message.text + '\
      </section>\
    ');

    $('.username').on('click', function (event) {
      console.log('This was clicked');

      console.log(this.data);
      app.handleUsernameClick(event);
    });
  };

  app.renderRoom = (roomName) => {
    $('#roomSelect').append('<option value="' + roomName + '">' + roomName + '</option>');
  };

  app.handleUsernameClick = (event) => {
    console.log(event);
    console.log(this);
    $('#friendList').append('<span>' + $(event).target.childNodes[0].data + '   |   </span>');

  };

  app.handleSubmit = (event) => {
    
  };

  $(document).ready(function() {
    
    // app.fetch();
    $('.chat').on('click', function (event) {
      console.log('This was clicked');

      console.log(this.data);
      app.handleUsernameClick(event);
    });
    
    $('form').on('submit', function (event) {
      console.log('This was clicked');

      console.log(this.data);
      app.handleSubmit();
    });
  });





