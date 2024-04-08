function countdown() {
    const endDate = new Date("2024-05-31 00:00:00").getTime();

    const timer = setInterval(function() {
        const now = new Date().getTime();
        const distance = endDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days < 10 ? "0" + days : days;
        document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
        document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
        document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;

        if (distance < 0) {
            clearInterval(timer);
            document.getElementById("countdown").innerHTML = "<p>Countdown expired!</p>";
        }
    }, 1000);
}

countdown();
document.addEventListener("DOMContentLoaded", function() {
    const countdownElement = document.getElementById("countdown");
    const countdownDate = new Date("May 1, 2024 00:00:00").getTime(); // Change to your desired end date

    function updateCountdown() {
        const currentTime = new Date().getTime();
        const distance = countdownDate - currentTime;

        const days = Math.max(Math.min(Math.floor(distance / (1000 * 60 * 60 * 24)), 30), 0); // Ensure days is between 0 and 30
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `
            <div>
                <span>${days}</span>
                <div class="timer-label">Days</div>
            </div>
            <div>
                <span>${hours}</span>
                <div class="timer-label">Hours</div>
            </div>
            <div>
                <span>${minutes}</span>
                <div class="timer-label">Minutes</div>
            </div>
            <div>
                <span>${seconds}</span>
                <div class="timer-label">Seconds</div>
            </div>
        `;
    }

    updateCountdown(); // Initial call to update countdown immediately

    // Update countdown every second
    setInterval(updateCountdown, 1000);
});

// Get a reference to the comment form
const commentForm = document.getElementById('comment-form');

// Add an event listener for form submission
commentForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the input values
    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;

    // Create a new comment element
    const newComment = document.createElement('div');
    newComment.classList.add('comment');
    newComment.innerHTML = `
        <p class="comment-author">${name}</p>
        <p class="comment-text">${comment}</p>
    `;

    // Append the new comment to the comments container
    const commentsContainer = document.getElementById('comments-container');
    commentsContainer.appendChild(newComment);

    // Clear the form inputs
    document.getElementById('name').value = '';
    document.getElementById('comment').value = '';
});
