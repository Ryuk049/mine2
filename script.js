document.addEventListener('DOMContentLoaded', () => {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const messageDiv = document.getElementById('message');
    const proposalSong = document.getElementById('proposalSong');
    let isYesClicked = false;
    let noClickCount = 0;

    yesButton.addEventListener('click', () => {
        isYesClicked = true;
        messageDiv.textContent = 'Stillll....Wanna be Yours!';
        messageDiv.style.color = '#32cd32';
        noButton.style.display = 'none'; // Hide the no button once yes is clicked
        proposalSong.play(); // Play the proposal song
    });

    noButton.addEventListener('click', () => {
        if (!isYesClicked) {
            noClickCount += 1;

            if (noClickCount > 1) {
                alert("Efforts are nothing when u r not the person that she wants:)!!");
            } else {
                const container = document.querySelector('.container');
                const containerRect = container.getBoundingClientRect();
                const maxX = containerRect.width - noButton.offsetWidth;
                const maxY = containerRect.height - noButton.offsetHeight;
                const randomX = Math.floor(Math.random() * maxX);
                const randomY = Math.floor(Math.random() * maxY);
                noButton.style.position = 'absolute';
                noButton.style.left = `${randomX}px`;
                noButton.style.top = `${randomY}px`;
            }
        } else {
            messageDiv.textContent = 'Oh no, please give me a chance to change your mind!';
            messageDiv.style.color = '#ff4500';
        }
    });
});
