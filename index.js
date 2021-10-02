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

const main = document.querySelector('main');
const navHandleH1 = document.getElementById('nav-handle')
const navNumberOfTweetsH4 = document.getElementById('nav-number-of-tweets')
const heroBannerImg = document.getElementById('hero-banner')
const avatarImg = document.getElementById('avatar')
const profileNameH2 = document.getElementById('profile-name')
const profileHandleSpan = document.getElementById('profile-handle')
const joinDateSpan = document.getElementById('join-date')
const followingCountSpan = document.getElementById('following-count')
const followerCountSpan = document.getElementById('follower-count')
const tweetAvatarImg = document.getElementById('tweet-avatar')
const tweetProfileNameH3 = document.getElementById('tweet-profile-name')
const tweetProfileHandleSpan = document.getElementById('tweet-profile-handle')
const tweetProfileDateSpan = document.getElementById('tweet-profile-date')
const tweetTextParagraph = document.getElementById('tweet-text')

// setup the main HTML element

// main.innerHTML = `

// `;
