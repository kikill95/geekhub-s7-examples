// example 1

var comments = [
  {
    message: 'First message',
    user: 'Kirill',
    comments: [
      {
        message: 'Question 1',
        user: 'Denys',
        comments: []
      },
      {
        message: 'Answer 1',
        user: 'Kirill',
        comments: [
          {
            message: 'What?',
            user: 'Kina',
            comments: []
          },
          {
            message: 'Yeah!',
            user: 'Kirill',
            comments: []
          },
          {
            message: 'Ok...',
            user: 'Kina',
            comments: []
          }
        ]
      },
      {
        message: 'Question 2',
        user: 'Denys',
        comments: []
      },
      {
        message: 'Answer 2',
        user: 'Kirill',
        comments: []
      }
    ]
  },
  {
    message: 'Second message',
    user: 'Kirill',
    comments: []
  },
  {
    message: 'Third message',
    user: 'Kirill',
    comments: []
  }
]

function getMessages (arrayOfComments) {
  arrayOfComments.forEach(function (comment) {
    console.log(comment.message)
    if (comment.comments.length > 0) {
      getMessages(comment.comments)
    }
  })
}

getMessages(comments)

// example 2
function factorial(number) {
  console.log(number)
  if (number <= 0) {
    return 1
  } else {
    return (number * factorial(number - 1))
  }
}

console.log(factorial(6))
