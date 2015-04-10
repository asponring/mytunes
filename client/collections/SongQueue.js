// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(params){
    this.on( 'add', this.enqueue, this );
    this.on( 'dequeue', this.dequeue, this );
    this.on( 'ended', this.playNext, this );
  },

  enqueue: function() {
    if (this.length === 1) {
      this.playFirst();
    }
  },

  dequeue: function(song) {
    if( this.at(0) === song ){
      this.shift();
      if( this.length >= 1 ){
        this.playFirst();
      } else {
        this.trigger('stop');
      }
    } else {
      this.remove(song);
    }
  },

  playNext: function() {

  },

  playFirst: function() {
    this.at(0).play();
  }

});
