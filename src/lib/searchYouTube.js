var searchYouTube = (query, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: { 
      q: 'cool cats',
      max: 5,
      key: window.YOUTUBE_API_KEY
    },
    success: function(data) {
      console.log('success!');
    },
    type: ''
  });
};

window.searchYouTube = searchYouTube;
