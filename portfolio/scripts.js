function Readmore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Klik hier voor de betekenis van de scores";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Betekenis van de scores verkleinen";
      moreText.style.display = "inline";
    }
  }
  function Readmorevoorbeeld() {
    var dots = document.getElementById("dotss");
    var moreText = document.getElementById("mores");
    var btnText = document.getElementById("myBtn1");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Klik hier voor meer tekst!";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Klik hier om de tekst weg te halen";
      moreText.style.display = "inline";
    }
  }
  document.querySelector("html")

lang="text/javascript">
fetch('https://api.covid19api.com/summary')
.then(function(resp) { return resp.json() })
.then(function(data) {
console.log(data);
console.log(data.Countries[122].Country);
console.log(data.Countries[122].TotalDeaths);
document.getElementById("land").innerHTML = (data.Countries[122].Country);
document.getElementById("datum").innerHTML = (data.Countries[122].Date);
document.getElementById("besmettingen").innerHTML = (data.Countries[122].TotalConfirmed);
document.getElementById("doden").innerHTML = (data.Countries[122].TotalDeaths);
document.getElementById("nbesmettingen").innerHTML = (data.Countries[122].NewConfirmed);
})
.catch(function() {});

document.addEventListener('DOMContentLoaded', createGrid);

let numberToTextObj = {
0: 'twelve',
1: 'one',
2: 'two',
3: 'three',
4: 'four',
5: 'five',
6: 'six',
7: 'seven',
8: 'eight',
9: 'nine',
10: 'ten',
11: 'eleven',
12: 'twelve',
13: 'thirteen',
14: 'fourteen',
15: 'quarter',
16: 'sixteen',
17: 'seventeen',
18: 'eighteen',
19: 'nineteen',
20: 'twenty',
21: 'twentyone',
22: 'twentytwo',
23: 'twentythree',
24: 'twentyfour',
25: 'twentyfive',
26: 'twentysix',
27: 'twentyseven',
28: 'twentyeight',
29: 'twentynine',
30: 'half',
};
let alphabets = [
'a',
'b',
'c',
'd',
'e',
'f',
'g',
'h',
'i',
'j',
'k',
'l',
'm',
'n',
'o',
'p',
'q',
'r',
's',
't',
'u',
'v',
'w',
'x',
'y',
'z',
];
let checkboxValue = document.getElementById('theme-checkbox');
checkboxValue.addEventListener('change', () => {
if (checkboxValue.checked) document.body.classList.add('dark');
else document.body.classList.remove('dark');
});
let createGrid = () => {
let grid = document.getElementById('clock-grid');
let gridChild;
for (i = 1; i <= 121; i++) {
gridChild = document.createElement('span');
gridChild.textContent = alphabets[getRandomNumber(0, 25)].toUpperCase();
gridChild.setAttribute('id', 'child-' + i);
grid.appendChild(gridChild);
}
let time = convertTimeToText();
addTimeToGrid(time);
setInterval(() => {
if (time !== convertTimeToText()) {
time = convertTimeToText();
updateGrid();
}
}, 1000);
};
let updateGrid = () => {
for (i = 1; i <= 121; i++) {
gridChild = document.getElementById('child-' + i);
gridChild.textContent = alphabets[getRandomNumber(0, 25)].toUpperCase();
gridChild.classList.remove('time');
}
let time = convertTimeToText();
addTimeToGrid(time);
};
let getRandomNumber = (min, max) => {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
};
let convertTimeToText = () => {
let hours = new Date().getHours() > 12 ? new Date().getHours() - 12 : new Date().getHours();
let mins = new Date().getMinutes();
let time;
let hoursText;
let minutesText;
if (mins === 0) {
hoursText = numberToTextObj[hours];
time = 'its ' + hoursText + ' oclock';                            }
if (mins > 0 && mins <= 30) {
minutesText = numberToTextObj[mins];
hoursText = numberToTextObj[hours];
time = 'its ' + minutesText + ' past ' + hoursText;                            }
if (mins > 30) {
minutesText = numberToTextObj[60 - mins];
hoursText = numberToTextObj[hours + 1];
time = 'its ' + minutesText + ' to ' + hoursText;                            }
if (hours === 12 && mins === 0) {
time = 'its noon';                            }
if (hours === 00 && mins === 0) {
time = 'its midnight';                            }
return time;
};
let addTimeToGrid = time => {
let strings = time.split(' ');
let temp,
randomNumber = 0;
strings.forEach((string, index, strings) => {
temp = string.split('');
if (index == 0) {
while (randomNumber == 0 || (randomNumber > 11 - string.length && randomNumber <= 11)) {
randomNumber = getRandomNumber(1, 20 - string.length);
}
}
if (index == 1) {
while (
randomNumber == 0 ||
(randomNumber > 33 - string.length && randomNumber <= 33) ||
(randomNumber > 44 - string.length && randomNumber <= 44)
) {
randomNumber = getRandomNumber(31, 50 - string.length);
}
}

if (index == 2) {
while (
randomNumber == 0 ||
(randomNumber > 66 - string.length && randomNumber <= 66) ||
(randomNumber > 77 - string.length && randomNumber <= 77)
) {
randomNumber = getRandomNumber(61, 80 - string.length);
}
}

if (index == 3) {
while (
randomNumber == 0 ||
(randomNumber > 99 - string.length && randomNumber <= 99) ||
(randomNumber > 110 - string.length && randomNumber <= 110)
) {
randomNumber = getRandomNumber(91, 121 - string.length);
}
}
temp.forEach(char => {
let childElement = document.getElementById('child-' + randomNumber);
childElement.textContent = char.toUpperCase();
childElement.classList.add('time');
randomNumber++;
});
randomNumber = 0;
});
};

