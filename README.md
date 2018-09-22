
# sampler [WIP]
Samplers, [Tone.js mono synths](http://tonejs.github.io/Presets/) and sounds for Scribbletune Live!

#### How to use

Clone this repo in your public folder of your server. As of now it exposes a couple of global methods that you can use. 

### Sampler
These are sampled wav files mapped to notes and are free to use in your projects. You can use these in your `clip` method with the global `getSampler` method

```
scribble.clip({
	notes: 'C4',
	pattern: 'x',
	sampler: getSampler('piano') // a second param can be provided for the path for serving the samples
}).start();
```
You can substitute `piano` to any of the following:
- celestialPad
- ciriusRez
- epicTranceLead
- jarblePerator
- korgBass
- piano
- psyTranceBass
- superSaw

### Tone MonoSynths

For synth presets of Tone.js, I ve put together few of these for you to use by calling the global `getToneMonoSynth` method in your scripts while creating clips with an `instrument`. Make sure to pull the tone-mono-synths.js file in your HTML via a SCRIPT tag.

```
scribble.clip({
	notes: 'C2',
	pattern: '[xx]',
	instrument: getToneMonoSynth('MonoSynth:BassGuitar') 
}).start();
```
You can substitute the colon separated preset with the following values. The left side of the colon is the name of the Synth to use and the right is the optional Preset you'd like to use

- FMSynth:
	- ElectricCello,
	- Kalimba,
	- ThinSaws

- MonoSynth:
	- BassGuitar,
	- BrassCircuit,
	- Pianoetta,
	- Pizz

- NoiseSynth:
	- Gravel,
	- Train

- Synth:
	- Lectric,
	- Marimba,
	- Steelpan,
	- SuperSaw
