document.getElementById('list').addEventListener('click', delegation, false)

function delegation (event) {
  var content = event.target.getAttribute('data-content')
  if (content) {
    document.getElementById('chosen').innerText = content
  }
}
