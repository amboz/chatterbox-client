// YOUR CODE HERE:
// $(document).ready(function() {

  var app = {};

  app.init = () => {

    app.fetch();
    // let context = this;
    // let messages = context.fetch().messages.data.results;

    // for (var i = 0; i < messages.length; i++) {
    //   renderMessage(messages[i]);
    // }

    
    
    $('form').on('submit', function (event) {
      
      console.log('This was clicked');

      console.log(this.data);
      app.handleSubmit();
    });

    $('.chat').on('click', function (event) {
      console.log('This was clicked');

      console.log(this.data);
      app.handleUsernameClick(event);
    });
  };

  app.send = (message) => {
    $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: 'http://parse.sfm6.hackreactor.com/chatterbox/classes/messages',
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message sent');
        app.fetch();
        console.log(data);
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message', data);
      }
    });

  };

  var message = {
    username: 'The Real Donald Trump',
    text: 'Yo sonn',
    roomname: '4chan'
  };

  app.fetch = () => {
    $.ajax({
      url: 'http://parse.sfm6.hackreactor.com/chatterbox/classes/messages',
      data: {order: '-createdAt'},
      success: function (data) {
        data['results'].sort(function(a, b) {
          return a.createdAt < b.createdAt ? -1 : 1;
        });
        console.log(data);
        data.results.forEach(function(item) {
          app.renderMessage(item);
        });
        
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
    if (message.username) {
      if (message.username.includes('<')) {
        message.username = message.username.replace('<', '');
      }   
    } 
    if (message.text) {
      if (message.text.includes('<')) {
        message.text = message.text.replace('<', '');
      }
    }

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
    //change message text from text to object
      //submit via .send()
  };

  $(document).ready(function() {
    app.init();


    // var messages = app.fetch().data;
    // console.log(messages, "hey");

    // messages.results.forEach(function(item) {
    //   app.renderMessage(item);
    // });

    // for (var i = 0; i < messages.length; i++) {
    //   renderMessage(messages[i]);
    // }
    // app.fetch();
    $('.chat').on('click', function (event) {
      console.log('This was clicked');

      console.log(this.data);
      app.handleUsernameClick(event);
    });
    
    $('#messageInput').on('submit', function (event) {
      
      console.log('This was clicked');

      console.log(this.data);
      app.handleSubmit();
    });
  });





