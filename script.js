// Set the target date and time
// const targetDate = new Date("2024-12-31T23:59:59").getTime();
const now = new Date().getTime();
const targetDate = now + 30 * 60 * 1000;

function updateCountdown() {
  const currentTime = new Date().getTime();
  const timeLeft = targetDate - currentTime;

  if (timeLeft > 0) {
    // Calculate remaining time
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Update HTML elements
    document.getElementById("days").textContent = days + "0";
    document.getElementById("hours").textContent = hours + "0";
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  } else {
    // Countdown has ended
    document.getElementById("countdown").innerHTML =
      "<p>The countdown is over!</p>";
    clearInterval(countdownInterval);
  }
}

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Initial call to display immediately
updateCountdown();
