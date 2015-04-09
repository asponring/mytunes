// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.render();
    this.collection.on('add', function(model){
      // this.playerView.setSong(model.get('currentSong'));
      this.render();
    }, this);

    this.collection.on('ended', function(model){
      // this.playerView.setSong(model.get('currentSong'));
      this.render();
    }, this);
  },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<th>Playlist</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  },

  events: {
    // 'enqueue': function() { console.log('enqueue'); this.render(); },
    // 'dequeue': function() { console.log('dequeue'); this.render(); },
    'click': function() { this.render(); }
  }

});
