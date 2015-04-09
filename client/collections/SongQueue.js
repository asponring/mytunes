// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  // isPlaying: false,
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
    }, this);
  },

  playFirst: function() {
    this.at(0).play();
  }

});
