function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5bkI0MlxsXN":
        Script1();
        break;
      case "6Z5fIv6s6lZ":
        Script2();
        break;
      case "6EBucd5tAnk":
        Script3();
        break;
      case "60AYoUUmHLS":
        Script4();
        break;
      case "5gi1ZVrAmdV":
        Script5();
        break;
      case "6fned9OF93w":
        Script6();
        break;
      case "6FM6CMUaZzD":
        Script7();
        break;
      case "5oDR3eV7z4h":
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
