const container = document.querySelector('.social__comments');
const commentCounter = document.querySelector('.social__comment-count');
const commentLoader = document.querySelector('.comments-loader');

commentCounter.classList.add('hidden');
commentLoader.classList.add('hidden');

const createComment = (commentsData) => commentsData.map((properties) => {
  const {avatar, name, message} = properties;
  const comment = document.createElement('li');
  comment.innerHTML = '<img class="social__picture" src="" alt="" width="35" height="35"><p class="social__text"></p>';
  comment.classList.add('social__comment');
  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;
  return comment;
});

const renderComments = (commentsData) => {
  container.querySelectorAll('.social__comment').forEach((commentsItem) => commentsItem.remove());
  container.append(...createComment(commentsData));
};

export {renderComments};
