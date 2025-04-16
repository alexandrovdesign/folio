// Время
function updateClock() {
	const now = new Date();
	const hours = String(now.getHours()).padStart(2, '0');
	const minutes = String(now.getMinutes()).padStart(2, '0');
	const seconds = String(now.getSeconds()).padStart(2, '0');
	
	const timeString = `${hours}:${minutes}:${seconds}`;
	document.getElementById('clock').textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock();

// Cсылки
document.querySelectorAll('a').forEach(link => {
	const isExternal = link.hostname && link.hostname !== location.hostname;
	if (isExternal) {
		link.setAttribute('target', '_blank');
		link.setAttribute('rel', 'noopener noreferrer');
	}
});

function goBack() {
	if (document.referrer) {
		window.history.back();
	} else {
		window.location.href = '/';
	}
}

// Header scroll-transform
window.addEventListener('scroll', function () {
	const header = document.querySelector('.header');
	if (window.scrollY >= 660) {
		header.style.padding = '20px 40px 0 40px';
	} else {
		header.style.padding = '20px 20px 0 20px';
	}
});

// Header animation
window.addEventListener('load', () => {
	document.body.classList.add('loaded');

	const subtitle = document.querySelector('.subtitle-text');

	subtitle.classList.remove('animate-margin');
	void subtitle.offsetWidth;
	subtitle.classList.add('animate-margin'); //
});