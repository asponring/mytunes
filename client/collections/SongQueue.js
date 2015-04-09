// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(params){
    this.on('add', function(song){
      if (this.length === 1) {
        this.playFirst(song);
      }
    }, this);

    this.on('ended', function(song){
      this.shift();

      if (this.length >= 1) {
        this.playFirst();
      }
    }, this);

    this.on('dequeue', function(song){
      this.remove(song);

      // if (this.length >= 1) {
      //   this.playFirst();
      // }
    }, this);

  },


  playFirst: function() {
    console.log('played');
  }

});
