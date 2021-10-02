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

const users = {
  user1,
  user2,
};

const main = document.querySelector('main');

// get the selected user based on the query string
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
const selectedUser = users[params['user']];

// utility functions
const numFormatter = (num) => {
  if (num > 999 && num < 1000000) {
    return (num / 1000).toFixed(0) + 'K'; // convert to K for number from > 1000 < 1 million
  } else if (num > 1000000) {
    return (num / 1000000).toFixed(0) + 'M'; // convert to M for number from > 1 million
  } else if (num < 900) {
    return num; // if value < 1000, nothing to do
  }
};

// setup the main HTML element
main.innerHTML = `
<div class="nav">
        <div class="nav-back-div">
          <i class="fas fa-arrow-left"></i>
        </div>

        <div class="nav-handle-div">
            <div>
                <h1>${selectedUser.displayName}</h1>
                <i class="fas fa-check-circle"></i>
            </div>
          <h4 class="gray">${selectedUser.tweets.length} Tweets</h4>
        </div>
      </div>

      <div class="hero-div">
        <img src="${selectedUser.coverPhotoURL}" alt="hero" />
      </div>

      <div class="avatar-following-div">
        <div class="floating-div">
          <img src="${selectedUser.avatarURL}" alt="avatar" />
          <button>Following</button>
        </div>
      </div>

      <div class="user-info-div">
        <div>
          <h2>${selectedUser.displayName}</h2>
          <i class="fas fa-check-circle verified"></i>
        </div>
        <div>
          <span class="gray">${selectedUser.userName}</span>
        </div>
        <div>
          <i class="fas fa-calendar calendar"></i>
          <span class="gray">Joined ${selectedUser.joinedDate}</span>
        </div>
        <span class="bold">${numFormatter(selectedUser.followingCount)}</span>
        <span class="gray">Following</span>
        <span class="bold">${numFormatter(selectedUser.followerCount)}</span>
        <span class="gray">Followers</span>
      </div>

      <div class="tab-div">
        <button class="tab active">Tweets</button>
        <button class="tab">Tweets & replies</button>
        <button class="tab">Media</button>
        <button class="tab">Likes</button>
      </div>

      ${selectedUser.tweets
        .map((tweet) => {
          return `
         <div class="tweet-div">
        <div class="avatar-div">
          <img src="${selectedUser.avatarURL}" alt="avatar" />
        </div>

        <div class="content-div">
          <div class="upper-div">
            <h3>${selectedUser.displayName}</h3>
            <i class="fas fa-check-circle"></i>
            <span class="gray">${selectedUser.userName}</span>
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
