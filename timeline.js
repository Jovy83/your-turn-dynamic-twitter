var user1 = {
  userName: '@elonmusk',
  displayName: 'Elon Musk',
  joinedDate: 'June 2009',
  followingCount: 103,
  followerCount: 47900000,
  avatarURL: 'assets/elonmusk.jpg',
  coverPhotoURL: 'assets/elonmusk-cover.jpeg',
  tweets: [
    {
      text: 'I admit to judging books by their cover',
      timestamp: '2/10/2021 00:01:20',
    },
    {
      text: 'Starship to the moon',
      timestamp: '2/09/2021 18:37:12',
    },
    {
      text: 'Out on launch pad, engine swap underway',
      timestamp: '2/09/2021 12:11:51',
    },
  ],
};

var user2 = {
  userName: '@BillGates',
  displayName: 'Bill Gates',
  joinedDate: 'June 2009',
  followingCount: 274,
  followerCount: 53800000,
  avatarURL: 'assets/billgates.jpg',
  coverPhotoURL: 'assets/billgates-cover.jpeg',
  tweets: [
    {
      text: 'Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? :/',
      timestamp: '2/10/2021 00:01:20',
    },
    {
      text: 'Should I start tweeting memes? Let me know in a comment.',
      timestamp: '2/09/2021 18:37:12',
    },
    {
      text: 'In 2020, I read a book every hour.',
      timestamp: '2/09/2021 12:11:51',
    },
  ],
};

const allUsers = [user1, user2];

// create an array which contains all tweets, including details on who tweeted said tweet
const allTweets = allUsers
  .map((user) => {
    const newTweetsArr = [];

    user.tweets.forEach((tweet) => {
      const newTweetObj = {
        text: tweet.text,
        timestamp: tweet.timestamp,
        userName: user.userName,
        displayName: user.displayName,
        avatarURL: user.avatarURL,
      };

      newTweetsArr.push(newTweetObj);
    });

    return newTweetsArr;
  })
  .flat();

// sort the tweets by latest first
allTweets.sort((a, b) => {
  return new Date(b.timestamp) - new Date(a.timestamp);
});

const main = document.querySelector('main');

// setup the main HTML element
main.innerHTML = `
${allTweets
  .map((tweet) => {
    return `
     <div class="tweet-div">
    <div class="avatar-div">
      <img src="${tweet.avatarURL}" alt="avatar" />
    </div>

    <div class="content-div">
      <div class="upper-div">
        <h3>${tweet.displayName}</h3>
        <i class="fas fa-check-circle"></i>
        <span class="gray">${tweet.userName}</span>
        <span class="gray">${new Date(
          tweet.timestamp
        ).toLocaleDateString()}</span>
        <i class="fas fa-ellipsis-h"></i>
      </div>
      <div class="text-div">
        <p>${tweet.text}</p>
      </div>
      <div class="stats-div">
        <div>
          <i class="far fa-comment"></i>
          <span class="gray">5.2k</span>
        </div>
        <div>
          <i class="fas fa-retweet"></i>
          <span class="gray">5.2k</span>
        </div>
        <div>
          <i class="far fa-heart"></i>
          <span class="gray">5.2k</span>
        </div>
        <div>
          <i class="fas fa-share-alt"></i>
        </div>
      </div>
    </div>
  </div>
     `;
  })
  .join('')}
`;
