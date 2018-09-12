scribble.clip({
	notes: scribble.scale('F4 minor').slice(0, 3),
	pattern: '[xxx]',
	// In the following method '/samples/' is explicitly set as the second argument
	// because we are using a custom location for it
	// In most cases you ll just clone this repo in your public/ folder and if you did that, 
	// the default location would be used and you wont need to specify the second argument
	sampler: getSampler('korgBass', '/samples/')
}).start();

document.querySelector('#startBtn').addEventListener('click', function() {
	Tone.Transport.start();
});
