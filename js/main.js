// Makes n into the day of the week

var d = new Date();
var weekday = new Array(7);
weekday[0] =  "Söndag";
weekday[1] = "Måndag";
weekday[2] = "Tisdag";
weekday[3] = "Onsdag";
weekday[4] = "Torsdag";
weekday[5] = "Fredag";
weekday[6] = "Lördag";

var n = weekday[d.getDay()];


// Clock function

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    $(".time").text(h + ":" + m + ":" + s);
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

//Class 7A times

function nextClass7A(){

//Gets the hours and minutes

  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();

// Monday goes here

if (n === "Måndag") {
  if (h < 8 || h == 8 || h == 9 && m < 35 ){
    var a7 = "Mentorstid  09:00";
  } else if (h == 9 && m >= 35 || h == 10 && m < 25) {
    var a7 = "Engelska  09:55";
  } else if (h == 10 && m >= 25 || h == 11 && m < 15) {
    var a7 = "SO  10:45";
  } else if (h == 11 && m >= 15 || h == 12 && m < 45) {
    var a7 = "Svenska  12:05";
  } else if (h == 12 && m >= 45 || h == 13 || h == 14 && m < 40) {
    var a7 = "Musik / NO  13:10";
  } else if (h == 14 && m >= 40 || h == 15) {
    var a7 = "Språk Spanska  15:05";
  } else if (h > 15 ) {
    var a7 = "Slut för idag  15:50";
  } else {
    var a7 = "Slut för idag";
  };
};

//Tuesday goes here

if (n === "Tisdag") {
  if (h < 8 || h == 8 && m < 30 ){
    var a7 = "Språk  08:00";
  } else if (h == 8 && m >= 30 || h == 9 && m < 20) {
    var a7 = "Språk  08:50";
  } else if (h == 9 && m >= 20 || h == 10 || h == 11 && m < 25) {
    var a7 = "Slöjd  / Musik / NO 10:15";
  } else if (h == 11 && m >= 25 || h == 12 || h == 13 && m < 20) {
    var a7 = "SO  12:50";
  } else if (h == 13 && m >= 20 || h == 14) {
    var a7 = "Matematik  13:40";
  } else if (h > 14 ) {
    var a7 = "Slut för idag  14:30";
  } else {
    var a7 = "Slut för idag";
  };
};

//Wednesday goes here

if (n === "Onsdag") {
  if (h < 8 || h == 8 && m < 50 ){
    var a7 = "Matematik  08:00";
  } else if (h == 8 && m >= 50 || h == 9 || h == 10 && m < 05) {
    var a7 = "Idrott  09:25";
  } else if (h == 10 && m >= 05 || h == 11 && m < 10) {
    var a7 = "Bild  10:40";
  } else if (h == 11 && m >= 10 || h == 12 && m < 45) {
    var a7 = "Engelska  12:25";
  } else if (h == 12 && m >= 45 || h == 13) {
    var a7 = "Svenska  13:15";
  } else if (h == 14) {
    var a7 = "Språk Tyska  14:20"
  } else if (h > 14 ) {
    var a7 = "Slut för idag  15:05";
  } else {
    var a7 = "Slut för idag";
  };
};

//Thursday goes here

if (n === "Torsdag") {
  if (h < 8 || h == 8 || h == 9 && m < 20 ){
    var a7 = "HKK / Slöjd / NO  08:00";
  } else if (h == 9 && m >= 20 || h == 10 && m < 10) {
    var a7 = "Språk  09:50";
  } else if (h == 10 && m >= 10 || h == 11 && m < 10) {
    var a7 = "Idrott  10:50";
  } else if (h == 11 && m >= 10 || h == 12 && m < 45) {
    var a7 = "SO  12:30";
  } else if (h == 12 && m >= 45 || h == 13 && m < 45) {
    var a7 = "Mentorstid  13:20";
  } else if (h == 13 && m >= 45 || h == 14 ) {
    var a7 = "Elevens val  14:15"
  } else if (h > 14 ) {
    var a7 = "Slut för idag 15:30";
  } else {
    var a7 = "Slut för idag";
  };
};

//Friday goes here

  if (n === "Fredag") {
    if (h < 8 || h == 8 || h == 9 && m < 10){
      var a7 = "Religion  08:15";
    } else if (h == 9 && m >= 10 || h == 10 && m < 10) {
      var a7 = "Matematik  09:30";
    } else if (h == 10 && m >= 10 || h == 11 && m < 10) {
      var a7 = "Slöjd / NO  10:15 / 10:20";
    } else if (h == 11 && m >= 10 || h == 12 && m < 45) {
      var a7 = "NO 11:55";
    } else if (h == 12 && m >= 45 || h == 13 && m < 40) {
      var a7 = "Svenska  12:55";
    } else if (h == 13 && m >= 40 || h == 14) {
      var a7 = "Engelska  13:50"
    } else if (h >= 14  ) {
      var a7 = "Trevlig helg!";
    } else {
      var a7 = "Trevlig helg!";
    };
  };

  if (n === "Lördag" || n === "Söndag") {
    var a7 = "Trevlig helg!"
  };

setTimeout(nextClass7A , 5000)

  $("#7A").text(a7);
}

// Class 7B times

function nextClass7B(){

//Gets the hours and minutes

  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();

  // Monday goes here

  if (n === "Måndag") {
    if (h < 8 || h == 8 || h == 9 && m < 35 ){
      var a7 = "Mentorstid  09:00";
    } else if (h == 9 && m >= 35 || h == 10 && m < 25) {
      var a7 = "Språk  09:50";
    } else if (h == 10 && m >= 25 || h == 11 && m < 10) {
      var a7 = "Engelska  10:45";
    } else if (h == 11 && m >= 10 || h == 12 && m < 45) {
      var a7 = "Svenska  12:05";
    } else if (h == 12 && m >= 45 || h == 13 || h == 14 && m < 40) {
      var a7 = "Musik / NO  13:10";
    } else if (h >= 14 && m >= 40 || h == 15 || h >= 16 ) {
      var a7 = "Slut för idag  15:00";
    } else {
      var a7 = "Slut för idag";
    };
  };

  //Tuesday goes here

  if (n === "Tisdag") {
    if (h < 8 || h == 8 && m < 30 ){
      var a7 = "Språk  08:00";
    } else if (h == 8 && m >= 30 || h == 9 && m < 40) {
      var a7 = "Idrott  09:00";
    } else if (h == 9 && m >= 40 || h == 10 || h == 11 && m < 25) {
      var a7 = "Slöjd  / Musik / NO 10:15";
    } else if (h == 11 && m >= 25 || h == 12 || h == 13 && m < 20) {
      var a7 = "Engelska  12:45";
    } else if (h == 13 && m >= 20 || h == 14 && m < 20) {
      var a7 = "Matematik  13:40";
    } else if (h >= 14 ) {
      var a7 = "Slut för idag  14:30";
    } else {
      var a7 = "Slut för idag";
    };
  };

  //Wednesday goes here

  if (n === "Onsdag") {
    if (h < 8 || h == 8 && m < 50 ){
      var a7 = "Matematik  08:00";
    } else if (h == 8 && m >= 50 || h == 9 && m < 40) {
      var a7 = "Bild  09:10";
    } else if (h == 9 && m >= 40 || h == 10 || h == 11 && m < 10) {
      var a7 = "SO  09:55";
    } else if (h == 11 && m >= 10 || h == 12 && m < 45) {
      var a7 = "Idrott  12:00";
    } else if (h == 12 && m >= 40 || h == 13 ) {
      var a7 = "Svenska  13:15";
    } else if (h == 14) {
      var a7 = "Språk Tyska  14:20"
    } else if (h >= 15 ) {
      var a7 = "Slut för idag  15:05";
    } else {
      var a7 = "Slut för idag";
    };
  };

  //Thursday goes here

  if (n === "Torsdag") {
    if (h < 8 || h == 8 || h == 9 && m < 20 ){
      var a7 = "HKK / Slöjd / NO  08:00";
    } else if (h == 9 && m >= 20 || h == 10 && m < 20) {
      var a7 = "Språk  09:50";
    } else if (h == 10 && m >= 20 || h == 11 && m < 40) {
      var a7 = "SO  10:40";
    } else if (h == 11 && m >= 40 || h == 12) {
      var a7 = "Språk  12:30";
    } else if (h == 13 && m >= 0 || h == 13 && m < 55) {
      var a7 = "Mentorstid  13:20";
    } else if (h == 13 && m >= 55 || h == 14 || h == 15 && m < 10) {
      var a7 = "Elevens val  14:15"
    } else if (h == 15 && m >= 10 || h > 15 ) {
      var a7 = "Slut för idag 15:30";
    } else {
      var a7 = "Slut för idag";
    };
  };

  //Friday goes here

    if (n === "Fredag") {
      if (h < 8 || h == 9) {
        var a7 = "Matematik  09:30";
      } else if (h == 10 && m >= 0 || h == 11 && m < 10) {
        var a7 = "Slöjd  10:15  / NO  10:20";
      } else if (h == 11 && m >= 10 || h == 12 && m < 35) {
        var a7 = "NO  11:55";
      } else if (h == 12 && m >= 35 || h == 13 && m < 30) {
        var a7 = "Svenska  12:55";
      } else if (h == 13 && m >= 30 || h == 14 && m < 15) {
        var a7 = "SO  13:50";
      } else if (h == 14 && m >= 15 || h == 15 && m < 15) {
        var a7 = "Engelska  14:35"
      } else if (h >= 15 && m >= 15 || h > 15  ) {
        var a7 = "Trevlig helg!";
      } else {
        var a7 = "Trevlig helg!";
      };
    };

  if (n === "Lördag" || n === "Söndag") {
    var a7 = "Trevlig helg!"
  };

  $("#7B").text(a7);
}

// Class 8A times

function nextClass8A(){

//Gets the hours and minutes

  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();

// Monday goes here


if (n === "Måndag") {
  if (h < 8 || h == 8 && m < 45 ){
    var a7 = "Disa pojkar  08:00";
  } else if (h == 8 && m >= 45 || h == 09 && m < 35) {
    var a7 = "Mentorstid  09:00";
  } else if (h == 9 && m >= 35 || h == 10 && m < 25) {
    var a7 = "Svenska  09:55";
  } else if (h == 10 && m >= 25 || h == 11 && m < 25) {
    var a7 = "NO  10:45";
  } else if (h == 11 && m >= 25 || h == 12 && m < 55) {
    var a7 = "Språk  12:15";
  } else if (h == 12 && m >= 55 || h == 13 && m < 45) {
    var a7 = "SO  13:15"
  } else if (h == 13 && m >= 45 || h == 14 && m < 30) {
    var a7 = "SO  13:15"
  } else if (h >= 14 && m >= 30 || h > 14 ) {
    var a7 = "Slut för idag  14:40";
  } else {
    var a7 = "Slut för idag";
  };
};

//Tuesday goes here

if (n === "Tisdag") {
  if (h < 8 || h == 8 && m < 40 ){
    var a7 = "Idrott  08:00";
  } else if (h == 8 && m >= 40 || h == 9 || h == 10 && m < 10) {
    var a7 = "Språk  09:35";
  } else if (h == 10 && m >= 10) {
    var a7 = "SO  10:30";
  } else if (h == 11 || h == 12 && m < 25) {
    var a7 = "Matematik  11:50";
  } else if (h == 12 && m >= 25 || h == 13 && m < 20) {
    var a7 = "NO  12:45";
  } else if (h == 13 && m >= 20 || h == 14 && m < 15) {
    var a7 = "Engelska 13:50"
  } else if (h == 14 && m >= 15 || h > 14) {
    var a7 = "Slut för idag  14:25";
  } else {
    var a7 = "Slut för idag";
  };
};

//Wednesday goes here

if (n === "Onsdag") {
  if (h < 8 || h == 8 || h == 9 && m < 25 ){
    var a7 = "SO  08:15";
  } else if (h == 9 && m >= 25 || h == 10 && m < 10) {
    var a7 = "Matematik  09:50";
  } else if (h == 10 && m >= 30 || h == 11 && m < 10) {
    var a7 = "NO  10:55";
  } else if (h == 11 && m >= 35 || h == 12 || h == 13 && m < 40) {
    var a7 = "Idrott  13:00";
  } else if (h == 13 && m >= 40 || h == 14) {
    var a7 = "SO  14:20";
  } else if (h > 14) {
    var a7 = "Slut för idag  15:15"
  } else {
    var a7 = "Slut för idag";
  };
};

//Thursday goes here

if (n === "Torsdag") {
  if (h < 8 || h == 8 && m < 55 ){
    var a7 = "Språk  08:00";
  } else if (h == 8 && m >= 55 || h == 9 && m < 35) {
    var a7 = "Bild  09:05";
  } else if (h == 9 && m >= 35 || h == 10 && m < 20) {
    var a7 = "Svenska  09:55";
  } else if (h == 10 && m >= 20 || h == 11 && m < 30) {
    var a7 = "NO  10:45";
  } else if (h == 11 && m >= 30 || h == 12 && m < 55) {
    var a7 = "Musik  12:30";
  } else if (h == 12 && m >= 55 || h == 13 && m < 55) {
    var a7 = "Mentorstid  13:20"
  } else if (h == 13 && m >= 55 || h == 14 || h == 15 && m < 10) {
    var a7 = "E-val  14:15"
  } else if (h >= 15 && m >= 10 || h >= 16) {
    var a7 = "Slut för idag  15:30";
  } else {
    var a7 = "Slut för idag";
  };
};

//Friday goes here

  if (n === "Fredag") {
    if (h < 8 || h == 8 && m < 40 ){
      var a7 = "Engelska  08:00";
    } else if (h == 8 && m >= 40 || h == 9 && m < 50) {
      var a7 = "Matematik  09:05";
    } else if (h == 9 && m >= 50 || h == 10 && m < 50) {
      var a7 = "Svenska  10:20";
    } else if (h == 10 && m >= 50 || h == 11 || h == 12 || h == 13 && m < 35) {
      var a7 = "HKK  12:05 / Slöjd  12:25";
    } else if (h >= 13 && m >= 35 || h > 13 ) {
      var a7 = "Trevlig helg!";
    } else {
      var a7 = "Trevlig helg!";
    };
  };

  if (n === "Lördag" || n === "Söndag") {
    var a7 = "Trevlig helg!"
  };

  $("#8A").text(a7);
}

// Class 8B times

function nextClass8B(){

//Gets the hours and minutes

  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();

  // Monday goes here

  if (n === "Måndag") {
    if (h < 8 || h == 8 && m < 45 ){
      var a7 = "Disa pojkar  08:00";
    } else if (h == 8 && m >= 45 || h == 09 && m < 35) {
      var a7 = "Mentorstid  09:00";
    } else if (h == 9 && m >= 35 || h == 10 && m < 25) {
      var a7 = "Svenska  09:55";
    } else if (h == 10 && m >= 25 || h == 11 && m < 25) {
      var a7 = "NO  10:45";
    } else if (h == 11 && m >= 25 || h == 12 && m < 55) {
      var a7 = "Språk  12:15";
    } else if (h == 12 && m >= 55 || h == 13 && m < 45) {
      var a7 = "Engelska  13:15"
    } else if (h == 13 && m >= 45 || h == 14) {
      var a7 = "Idrott  13:15"
    } else if (h > 14 ) {
      var a7 = "Slut för idag  15:05";
    } else {
      var a7 = "Slut för idag";
    };
  };

  //Tuesday goes here

  if (n === "Tisdag") {
    if (h < 8 || h == 8 && m < 30 ){
      var a7 = "Musik  08:00";
    } else if (h == 8 && m >= 30 || h == 9 && m < 15) {
      var a7 = "Engelska 08:50";
    } else if (h == 9 && m >= 15 || h == 10 && m < 15) {
      var a7 = "Språk  09:35";
    } else if (h == 10 && m >= 15 || h == 11 && m < 05) {
      var a7 = "Matematik  10:35";
    } else if (h == 11 && m >= 05 || h == 12 && m < 30) {
      var a7 = "SO  11:55";
    } else if (h == 12 && m >= 30 || h == 13) {
      var a7 = "NO  13:35"
    } else if (h > 13) {
      var a7 = "Slut för idag  14:25";
    } else {
      var a7 = "Slut för idag";
    };
  };

  //Wednesday goes here

  if (n === "Onsdag") {
    if (h < 8 || h == 8 | h == 9 || h == 10 && m < 40 ){
      var a7 = "Matematik  09:50";
    } else if (h == 10 && m >= 40 || h == 11 || h == 12 && m < 20) {
      var a7 = "SO  11:50";
    } else if (h == 12 && m >= 20 || h == 13 && m < 30) {
      var a7 = "NO  12:40";
    } else if (h == 13 && m >= 30 || h == 14 && m < 30) {
      var a7 = "Idrott  14:00";
    } else if (h >= 14 && m >= 30 || h > 14) {
      var a7 = "Slut för idag  14:50"
    } else {
      var a7 = "Slut för idag";
    };
  };

  //Thursday goes here

  if (n === "Torsdag") {
    if (h < 8 || h == 8 && m < 45 ){
      var a7 = "Språk  08:00";
    } else if (h == 8 && m >= 45 || h == 9 && m < 35) {
      var a7 = "SO  09:00";
    } else if (h == 9 && m >= 35 || h == 10 && m < 20) {
      var a7 = "Svenska  09:55";
    } else if (h == 10 && m >= 20 || h == 11 && m < 10) {
      var a7 = "Bild  10:40";
    } else if (h == 11 && m >= 10 || h == 12 ) {
      var a7 = "Engelska  12:25";
    } else if (h == 13 && m >= 0 || h == 13 && m < 55) {
      var a7 = "Mentorstid  13:20"
    } else if (h == 13 && m >= 55 || h == 14 || h == 15 && m < 10) {
      var a7 = "E-val  14:15"
    } else if (h >= 15 && m >= 10 || h > 15 ) {
      var a7 = "Slut för idag  15:30";
    } else {
      var a7 = "Slut för idag";
    };
  };

  //Friday goes here

    if (n === "Fredag") {
      if (h < 8 || h == 8 && m < 30 ){
        var a7 = "Matematik  08:00";
      } else if (h == 8 && m >= 30 || h == 9 && m < 15) {
        var a7 = "NO  08:45";
      } else if (h == 9 && m >= 15 || h == 10 && m < 5) {
        var a7 = "SO  09:35";
      } else if (h == 10 && m >= 5 || h == 11 || h == 12 || h == 13 && m < 35) {
        var a7 = "HKK  12:05 / Slöjd  12:25";
      } else if (h >= 13 && m >= 35 || h > 13) {
        var a7 = "Trevlig helg!";
      } else {
        var a7 = "Trevlig helg!";
      };
    };

  if (n === "Lördag" || n === "Söndag") {
    var a7 = "Trevlig helg!"
  };

  $("#8B").text(a7);
}

// Class 9A times

function nextClass9A(){

//Gets the hours and minutes

  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();

  // Monday goes here

  if (n === "Måndag") {
    if (h < 8 || h == 8 || h == 9 && m < 35 ){
      var a7 = "Mentorstid  09:00";
    } else if (h == 9 && m >= 35 || h == 10 && m < 30) {
      var a7 = "SO  09:55";
    } else if (h == 10 && m >= 30 || h == 11 && m < 35) {
      var a7 = "Idrott  10:55";
    } else if (h == 11 && m >= 35 || h == 12 || h == 13 && m < 15) {
      var a7 = "Matematik  12:35";
    } else if (h == 13 && m >= 15 || h == 14 && m < 20) {
      var a7 = "Språk  13:35";
    } else if (h == 14 && m >= 20 ) {
      var a7 = "Musik   14:45"
    } else if (h >= 15) {
      var a7 = "Slut för idag  15:25";
    } else {
      var a7 = "Slut för idag";
    };
  };

  //Tuesday goes here

  if (n === "Tisdag") {
    if (h < 8 || h == 8 || h == 9 && m < 30 ){
      var a7 = "HKK  8:00 / Slöjd 8:40";
    } else if (h == 9 && m >= 30 || h == 10 && m < 40) {
      var a7 = "Bild  9:50";
    } else if (h == 10 && m >= 40 || h == 11 && m < 55) {
      var a7 = "Svenska  11:30";
    } else if (h == 11 && m >= 55 || h == 12 || h == 13 && m < 05) {
      var a7 = "Matte  12:15";
    } else if (h == 13 && m >= 05 ) {
      var a7 = "Språk  13:25 / (Franska 13:30)";
    } else if (h >= 14) {
      var a7 = "Slut för idag  14:25";
    } else {
      var a7 = "Slut för idag";
    };
  };

  //Wednesday goes here

  if (n === "Onsdag") {
    if (h < 8 || h == 8 || h == 9 && m < 15 ){
      var a7 = "HKK  08:00 / Slöjd 08:15";
    } else if (h == 9 && m >= 15 || h == 10 && m < 35) {
      var a7 = "Svenska  09:50";
    } else if (h == 10 && m >= 35 || h == 11 && m < 25) {
      var a7 = "Engelska  10:55";
    } else if (h == 11 && m >= 25 || h == 12 || h == 13 && m < 15) {
      var a7 = "NO  12:25";
    } else if (h == 13 && m >= 15 || h == 14 && m < 30) {
      var a7 = "NO  13:50";
    } else if (h >= 14 && m >= 30 || h > 14) {
      var a7 = "Slut för idag  14:50";
    } else {
      var a7 = "Slut för idag";
    };
  };

  //Thursday goes here

  if (n === "Torsdag") {
    if (h < 8 || h == 8 && m < 30 ){
      var a7 = "SO  08:00";
    } else if (h == 8 && m >= 30 || h == 9 && m < 20) {
      var a7 = "Engelska  08:50";
    } else if (h == 9 && m >= 20 || h == 10 && m < 15) {
      var a7 = "SO  09:40";
    } else if (h == 10 && m >= 15 || h == 11 && m < 25) {
      var a7 = "Språk  10:45";
    } else if (h == 11 && m >= 25 || h == 12 || h == 13 && m < 5) {
      var a7 = "NO  12:15";
    } else if (h == 13 && m >= 5 || h == 13 && m < 55) {
      var a7 = "Mentorstid  13:20"
    } else if (h == 13 && m >= 55 || h == 14 || h == 15 && m < 10) {
      var a7 = "E-val  14:15"
    } else if (h >= 15 && m >= 10 || h > 15) {
      var a7 = "Slut för idag  15:30";
    } else {
      var a7 = "Slut för idag";
    };
  };

  //Friday goes here

    if (n === "Fredag") {
      if (h < 8 || h == 8 && m < 40 ){
        var a7 = "NO  08:00";
      } else if (h == 8 && m >= 40 || h == 9 && m < 50) {
        var a7 = "Svenska  09:00";
      } else if (h == 9 && m >= 50 || h == 10 && m < 50) {
        var a7 = "Matematik  10:20";
      } else if (h == 10 && m >= 50 || h == 12 && m < 35) {
        var a7 = "Engelska  12:05";
      } else if (h == 12 && m >= 35 || h == 13 && m < 45) {
        var a7 = "Idrott  13:05";
      } else if (h == 13 && m >= 45 || h == 14 && m < 40) {
        var a7 = "SO  14:20";
      } else if (h >= 14 && m >= 40 ) {
        var a7 = "Trevlig helg!";
      } else {
        var a7 = "Trevlig helg!";
      };
    };

  if (n === "Lördag" || n === "Söndag") {
    var a7 = "Trevlig helg!"
  };

  $("#9A").text(a7);
}

// Class 9B times

function nextClass9B(){

//Gets the hours and minutes

  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();

  // Monday goes here

  if (n === "Måndag") {
    if (h < 8 || h == 8 || h == 9 && m < 35 ){
      var a7 = "Mentorstid  09:00";
    } else if (h == 9 && m >= 35 || h == 10 && m < 30) {
      var a7 = "Idrott  09:55";
    } else if (h == 10 && m >= 30 || h == 11 && m < 35) {
      var a7 = "Musik  11:40";
    } else if (h == 12 && m >= 10 || h == 12 && m < 55) {
      var a7 = "SO  12:30";
    } else if (h == 12 && m >= 55 || h == 13 || h == 14 && m < 20) {
      var a7 = "Språk  13:35";
    } else if (h == 14 && m >= 20 ) {
      var a7 = "Engelska 14:50"
    } else if (h >= 15) {
      var a7 = "Slut för idag  15:25";
    } else {
      var a7 = "Slut för idag";
    };
  };

  //Tuesday goes here

  if (n === "Tisdag") {
    if (h < 8 || h == 8 || h == 9 && m < 30 ){
      var a7 = "HKK  8:00 / Slöjd 8:40";
    } else if (h == 9 && m >= 30 || h == 10 && m < 40) {
      var a7 = "NO  9:50";
    } else if (h == 10 && m >= 40 || h == 11 && m < 55) {
      var a7 = "Svenska  11:30";
    } else if (h == 11 && m >= 55 || h == 12 || h == 13 && m < 05) {
      var a7 = "Bild  12:15";
    } else if (h == 13 && m >= 05 ) {
      var a7 = "Språk  13:25 / (Franska 13:30)";
    } else if (h >= 14) {
      var a7 = "Slut för idag  14:25";
    } else {
      var a7 = "Slut för idag";
    };
  };

  //Wednesday goes here

  if (n === "Onsdag") {
    if (h < 8 || h == 8 || h == 9 && m < 15 ){
      var a7 = "HKK  08:00 / Slöjd 08:15";
    } else if (h == 9 && m >= 15 || h == 10 && m < 35) {
      var a7 = "Svenska  09:50";
    } else if (h == 10 && m >= 35 || h == 11 && m < 30) {
      var a7 = "Matematik  10:50";
    } else if (h == 11 && m >= 30 || h == 12 || h == 13 && m < 15) {
      var a7 = "SO  12:40";
    } else if (h == 13 && m >= 15 || h == 14 && m < 15) {
      var a7 = "NO  13:35";
    } else if (h == 14 && m >= 15) {
      var a7 = "Engelska  14:35";
    } else if (h >= 15) {
      var a7 = "Slut för idag 15:25";
    } else {
      var a7 = "Slut för idag";
    };
  };

  //Thursday goes here

  if (n === "Torsdag") {
    if (h < 8 || h == 8 && m >= 50 ){
      var a7 = "Idrott 08:10";
    } else if (h == 8 && m >= 50 || h == 9 || h == 10 && m < 20 ) {
      var a7 = "NO  09:30";
    } else if (h == 10 && m >= 20 || h == 11 && m < 25) {
      var a7 = "Språk  10:45";
    } else if (h == 11 && m >= 25 || h == 12) {
      var a7 = "Matematik  12:20";
    } else if (h == 13 && m >= 0 || h == 13 && m < 55) {
      var a7 = "Mentorstid  13:20"
    } else if (h == 13 && m >= 55 || h == 14 || h == 15 && m < 10) {
      var a7 = "E-val  14:15"
    } else if (h >= 15 && m >= 10 || h > 15 ) {
      var a7 = "Slut för idag  15:30";
    } else {
      var a7 = "Slut för idag";
    };
  };

  //Friday goes here

    if (n === "Fredag") {
      if (h < 8 || h == 8 || h == 9 && m < 50 ){
        var a7 = "Svenska 09:00";
      } else if (h == 9 && m >= 50 || h == 10 && m < 30) {
        var a7 = "Engelska  10:05";
      } else if (h == 10 && m >= 30 || h == 11 && m < 10) {
        var a7 = "SO  10:50";
      } else if (h == 11 && m >= 10 || h == 12 && m < 35) {
        var a7 = "SO  12:00";
      } else if (h == 12 && m >= 35 || h == 13 && m < 45) {
        var a7 = "NO  12:55";
      } else if (h == 13 && m >= 45 || h == 14 && m < 45) {
        var a7 = "Matematik  14:05";
      } else if (h >= 14 && m >= 45 ) {
        var a7 = "Trevlig helg!";
      } else {
        var a7 = "Trevlig helg!";
      };
    };

  if (n === "Lördag" || n === "Söndag") {
    var a7 = "Trevlig helg!"
  };

  $("#9B").text(a7);
}

// Extra schedules when pressed

function imageSwitch(){
  $(".schedulewrapper").hide();
  $(".klasswrap").on("click", function(){
    $(this).find('.schedulewrapper').slideToggle(200);

});
}

// Makes sure everything updates

function update(){
  setInterval(nextClass7A, 30000);
  setInterval(nextClass7B, 30000);
  setInterval(nextClass8A, 30000);
  setInterval(nextClass8B, 30000);
  setInterval(nextClass9A, 30000);
  setInterval(nextClass9B, 30000);
}

$(document).ready(startTime);
$(document).ready(update);
$(document).ready(nextClass7A)
$(document).ready(nextClass7B)
$(document).ready(nextClass8A)
$(document).ready(nextClass8B)
$(document).ready(nextClass9A)
$(document).ready(nextClass9B)
$(document).ready(imageSwitch)
