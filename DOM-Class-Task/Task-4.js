let tweet = document.getElementById('tweet')
let count = document.getElementById('count')

tweet.addEventListener('input', function() {
   let message = tweet.value
   count.textContent = `${tweet.value.length}`
})

