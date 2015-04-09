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

    // this.on("enqueue", function() {
    //   console.log("testing enqueue listener");
    // }, this);

    this.on('dequeue', function(song){
      this.remove(song);
    }, this);

    // this.on('enqueue', function(song){
    //   console.log(this);
    //   this.add(song);
    //   console.log(this);
    // }, this);

  },


  playFirst: function() {
    this.at(0).play();
  }

});
