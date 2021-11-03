var XMLHttpRequest = require('xhr2');
const requestURL = 'https://api.dev-capitalix.com/trading/symbols-sentiments'
const xhr = new XMLHttpRequest()
xhr.open('GET', requestURL)
xhr.send()
console.log(xhr.responseText)

