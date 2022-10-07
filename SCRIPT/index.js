const select = document.getElementById('selection')

select.addEventListener('change', function () {
  if (select.value == 'cesar') {
    steps.style.display = 'flex'
  } else {
    steps.style.display = 'none'
  }
})
