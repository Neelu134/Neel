document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('response').textContent = 'Love you sweetie... see you tomorrow';
});

document.getElementById('noButton').addEventListener('click', function() {
    // You can add some fun behavior here, like making the "No" button move around
    const noButton = document.getElementById('noButton');
    noButton.style.position = 'absolute';
    noButton.style.left = Math.random() * (window.innerWidth - noButton.offsetWidth) + 'px';
    noButton.style.top = Math.random() * (window.innerHeight - noButton.offsetHeight) + 'px';
});
