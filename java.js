const scriptURL = 'https://script.google.com/macros/s/AKfycby5JUcOjQYF-LwUyq5tMUQu6I_xKILqUGUslLCHSamvj8-6xFijJ3KTFy3gVqNhHtxE/exec'

const form = document.forms['appointment']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
        