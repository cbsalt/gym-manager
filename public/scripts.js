const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
  card.addEventListener('click', function() {
    const projectId = card.getAttribute('id');
    window.location.href = `/project?id=${projectId}`

  })
}
