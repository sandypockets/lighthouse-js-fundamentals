// Programming Quiz: Facebook Friends (7-5)
// A facebook profile object, with functions to post messages, delete messages, and increase or decrease friend counts. 

var facebookProfile = {
  name: 'Kobe',
  friends: 100,
  messages: ['Hey', 'Hello', 'Hi', 'Hey there'],
  postMessage: function(text) {
    return this.messages.push(text);
  },
  deleteMessage: function(msgIndex){
    facebookProfile.messages.splice(msgIndex, 1);
  },
   addFriend: function() {
    return this.friends +1;
  },
  removeFriend: function() {
    return this.friends -1;
  }
}

// Debugging
// Adds a message to the messages value.
facebookProfile.postMessage('wow!');
// Deletes a message from the messages value. 
facebookProfile.deleteMessage('Hi');
// Prints all current messages, for debugging
console.log(facebookProfile.messages);
// Increases friend count by 1, then prints total to the console.
console.log(facebookProfile.addFriend());
// Decreeases friend count by 1, then prints total to the console.
console.log(facebookProfile.removeFriend());