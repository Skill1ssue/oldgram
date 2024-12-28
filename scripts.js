// Data
const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

// Variables
const $mainContainer = document.getElementById("main-container")

// Functions

function addLikes (index) {
  posts[index].likes++
  const elem = "likes-count" + index
  const target = document.getElementById(elem)
  target.innerHTML = posts[index].likes + " likes"
}

// For loop 

for (let index = 0; index < posts.length; index++) {
  $mainContainer.innerHTML += `
  <article>
      <div class="head">
        <img src="${posts[index].avatar}" alt="user picture" class="user_picture">
        <div class="user_info">
          <span class="user_name">${posts[index].name}</span>
          <span class="user_location">${posts[index].location}</span>
        </div>
      </div>
      <div class="img">
        <img id="post-image" ondblclick="addLikes(${index})" src="${posts[index].post}" alt="post image">
      </div>
      <div class="icons">
        <img onclick="addLikes(${index})" src="/images/like.png" alt="like icon image" class="icon">
        <img src="/images/comment.png" alt="comment icon image" class="icon">
        <img src="/images/share.png" alt="share icon image" class="icon">
      </div>
      <span id="likes-count${index}" class="likes">${posts[index].likes} likes</span>
      <span class="comment">
        <span class="user_name">${posts[index].username}</span>
        <span class="user_comment">${posts[index].comment}</span>
      </span>
    </article>`
}

console.log(posts[0].likes)
