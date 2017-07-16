function addComment() {
  event.preventDefault()
  var bodyText = document.getElementById("commentText").value
  var commenter = document.getElementById("commenterName").value

  var commentBody = createCommentBody(bodyText)
  var commenterLabel = createCommenterLabel(commenter)
  postNewComment(commentBody, commenterLabel)
}

function createCommentBody(comment) {
  var bodyDiv = document.createElement('div')
  var bodyPara = document.createElement('p')
  bodyPara.innerHTML = comment
  bodyDiv.appendChild(bodyPara)
  return bodyDiv
}

function createCommentLabel(commenter) {
  var commenterDiv = document.createElement('div')
  var commenterLabel = document.createElement('p')
  commenterLabel.innerHTML = commenter
  var commenterName = document.createElement('span')
  commenterDiv.appendChild(commenterName)
  commenterDiv.appendChild(commenterLabel)
  return commenterDiv
}

function postNewComment(body, commenter) {
  var commentsDiv = document.getElementById('comments')
  var newCommentsDiv = document.createElement('div')
  newCommentsDiv.appendChild(body)
  newCommentsDiv.appendChild(commentor)
  commentsDiv.appendChild(newCommentsDiv)
}
