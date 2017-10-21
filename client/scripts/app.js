// YOUR CODE HERE:
var app = {};

app.init = () => { 
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

app.fetch = () => {
  $.ajax({
    success: function (data) {
      console.log('chatterbox: Messages retrieved');
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
      <span class="username">' + message.username + ': </span>\
      ' + message.text + '\
    </section>\
  ');
};

app.renderRoom = (roomName) => {
  $('#roomSelect').append('<option value="beverages">' + roomName + '</option>');
};










