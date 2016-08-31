$(document).ready(function() {});

//jQuery above, vanilla below

var listOfNnumbers = [30, 2, 5]; // array
console.log(listOfNnumbers);
console.log(listOfNnumbers[2]); // 5
var text = 'D3.js is sweet.';
console.log(text);
// create an object using an object literal:
var studioObjectLiteral = {
  name: 'hotbox',
  beatbox: '808',
  bass: 'moog',
  samples: 'sp-1200',
};
//create an object using an object constructor:
function studioObjectConstructor(studioname, beatbox, bass, samples) {
  this.studioname = studioname;
  this.beatbox = beatbox;
  this.bass = bass;
  this.samples = samples;
}
console.log(new studioObjectConstructor());
console.log(new studioObjectConstructor('southsound', '606', 'Prophet', 'MPC'));
var studioObject = {
  name: 'hotbox',
  beatbox: '808',
  bass: 'moog',
  samples: 'sp-1200',
};
console.log(studioObject);
studioObject.keys = 'nord';
console.log(studioObject);
var studioList = [studioObject];
console.log(studioList);
studioList.push({
  name: 'yotown',
  beatbox: 'er-1',
  bass: 'massive',
  samples: "volca sample"
});
console.log(studioList);
studioList.push({
  name: 'lablab'
});
console.log(studioList);
