setTimeout(function() {
    const text = document.getElementById('logo');
    text.innerHTML = 'V<span>L</span>X';
    setTimeout(function() {
        text.innerHTML = 'V<span> L </span>X';
        setTimeout(function() {
            text.innerHTML = 'V<span> L  </span>X';
            setTimeout(function() {
                text.innerHTML = 'VYLEX';
            }, 1000);
        }, 500);
    }, 500);
}, 1500);

const ourTeamLink = document.querySelector('.link[data-target="team"]');
const teamInfo = document.getElementById('teamInfo');

ourTeamLink.addEventListener('click', function (event) {
    event.preventDefault();

    if (teamInfo.style.opacity === '0' || teamInfo.style.opacity === '') {
        teamInfo.style.display = 'block';

        // Triggering a reflow to ensure the transition will work on subsequent clicks
        void teamInfo.offsetWidth;

        teamInfo.style.opacity = '1';
    } else {
        teamInfo.style.opacity = '0';

        setTimeout(() => {
            teamInfo.style.display = 'none';
        }, 300); // Adjust the duration to match your CSS transition duration
    }
});
