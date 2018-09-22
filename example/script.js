(async () => {
	const key = 'F';
	const scale = 'minor';

	const getNotes = (key, octave, scale) => {
		scale = scribble.scale(key + octave + ' ' + scale);
		const scaleSliced = scale.slice(0, 3);
		return [...scaleSliced, ...scaleSliced.reverse(), ...scaleSliced, ...scale.slice(4).reverse()];
	}
	scribble.clip({
		notes: getNotes(key, 3, scale),
		pattern: '[xx]',
		instrument: getToneMonoSynth('MonoSynth:BassGuitar') 
	}).start();

	scribble.clip({
		notes: getNotes(key, 4, scale),
		pattern: 'xx[-x]'.repeat(3) + 'xx[xx]',
		// In the following method '/samples/' is explicitly set as the second argument
		// because we are using a custom location for it
		// In most cases you ll just clone this repo in your public/ folder and if you did that, 
		// the default location would be used and you wont need to specify the second argument
		// sampler: await getSampler('korgBass', '/samples/')
		sampler: await getSampler('superSaw', '/samples/'),
		volume: -18,
		effects: ['Chorus']
	}).start();


	scribble.clip({
		notes: scribble.progression(key + '3 ' + scale, 'i VII VI VII'),
		pattern: 'x-xx-',
		sampler: await getSampler('piano', '/samples/')
	}).start();

	scribble.clip({
		notes: 'bb4 bb4 bb4 c4 bb4 bb4 bb4 db4',
		pattern: '--------[xx]',
		sampler: await getSampler('ciriusRez', '/samples/'),
		effects: ['PingPongDelay']
	}).start();

	scribble.clip({
		notes: getNotes(key, 3, scale),
		pattern: 'xx[-x]'.repeat(3) + 'xx[xx]',
		sampler: await getSampler('epicTranceLead', '/samples/'),
	}).start();

	Tone.Transport.bpm.value = 145;

	const btnStart = document.createElement('button');
	btnStart.innerHTML = 'Start';
	document.body.appendChild(btnStart);
	btnStart.onclick = function() {
		Tone.Transport.start();
	};

	const btnStop = document.createElement('button');
	btnStop.innerHTML = 'Stop';
	document.body.appendChild(btnStop);
	btnStop.onclick = function() {
		Tone.Transport.stop();
	};
})();
