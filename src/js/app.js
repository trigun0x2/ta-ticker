var TA = window.TA;

class TwitchFeed {
  constructor() {
    this.settings = {
      feedUrl = "https://twitrss.me/twitter_user_to_rss/?user=trigun0x2"
    }
    TA.init(() => {
      TA.settings.get(')
    });
  };

  getRSS() {
    $.get(this.feedUrl, (data) => {
      let channel = $(data).find("channel");
      console.log(channel);
      $(channel).find("item").each((index, tweet) => {
        let tweetText = $(tweet).find("title").text();
        $("#news-ticker").append(`<li>${tweetText}</li>`);
      });
    });
  }
}

var feed = new TwitchFeed();
jQuery('#news-ticker').webTicker();
