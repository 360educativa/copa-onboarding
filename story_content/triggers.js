function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5ZnTF0cE99a":
        Script1();
        break;
      case "6i2DdalrPRV":
        Script2();
        break;
      case "5dAIdYFXXEk":
        Script3();
        break;
      case "68LgiWQvcmr":
        Script4();
        break;
      case "5XnUjBwxsq5":
        Script5();
        break;
      case "5vbWmqNLrio":
        Script6();
        break;
      case "6pwppYCqNY7":
        Script7();
        break;
      case "5t581wHusva":
        Script8();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  player.once(() => {
const target = object('5cQpPHJkxaM');
const duration = 750;
const easing = 'ease-out';
const id = '6hvv0r843vn';
const pulseAmount = 0.03;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  player.once(() => {
const target = object('5t0LIjUmzzq');
const duration = 750;
const easing = 'ease-out';
const id = '5zf48K40Gif';
const pulseAmount = 0.03;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script3 = function()
{
  const target = object('5cQpPHJkxaM');
const duration = 750;
const easing = 'ease-out';
const id = '6hvv0r843vn';
const pulseAmount = 0.03;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('5t0LIjUmzzq');
const duration = 750;
const easing = 'ease-out';
const id = '5zf48K40Gif';
const pulseAmount = 0.03;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  player.once(() => {
const target = object('5r6Vz38Xldq');
const duration = 750;
const easing = 'ease-out';
const id = '6VhsKgPsUqd';
const pulseAmount = 0.03;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script6 = function()
{
  player.once(() => {
const target = object('6pphcyoKs1o');
const duration = 750;
const easing = 'ease-out';
const id = '5WeIn3SZCSC';
const pulseAmount = 0.03;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script7 = function()
{
  const target = object('5r6Vz38Xldq');
const duration = 750;
const easing = 'ease-out';
const id = '6VhsKgPsUqd';
const pulseAmount = 0.03;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script8 = function()
{
  const target = object('6pphcyoKs1o');
const duration = 750;
const easing = 'ease-out';
const id = '5WeIn3SZCSC';
const pulseAmount = 0.03;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

};
