// Avoid `console` errors in browsers that lack a console.
(function () {
  var method;
  var noop = function () {};
  var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
        console[method] = noop;
    }
}
}());

var request = new XMLHttpRequest();
request.onload = function() {
  var logins = '';
  var needLogins = 10;

  // get the file contents
  var fileContent = this.responseText;
  // split into lines
  var fileContentLines = fileContent.split( '\n' );

  for ( i=0; i <= needLogins; i++) {
    // get a random index (line number)
    var randomLineIndex = Math.floor( Math.random() * fileContentLines.length );
    // extract the value
    var randomLine = fileContentLines[ randomLineIndex ];
    randomLine = randomLine.replace(/\s/gi, '');
    randomLine = randomLine.replace(/\d\d\d/gi, '');
    var addNubmer = parseInt(randomBetween(10,99));
    if (randomLine.length < 7 ){
      randomLine = randomLine + addNubmer;
      randomLine = randomLine.replace(/\d\d\d/gi, '');


    } else if (  randomLine.match(/\d+/g)  )  {
      randomLine = randomLine + addNubmer;
      randomLine = randomLine.replace(/\d\d\d/gi, '');

    } else {
      randomLine = randomLine;
      randomLine = randomLine + addNubmer;
      randomLine = randomLine.replace(/\d\d\d/gi, '');

    }

    if (randomLine.length < 7 ) {
      i = i - 1;
    } else {
      logins = logins + '3: ' + randomLine + '<br />';
    }
  }



  // add the random line in a div
  document.getElementById( 'random-nicknames' ).innerHTML = logins;
};
request.open( 'GET', 'sorces.txt', true );
request.send();


function randomBetween(min, max) {
  if (min < 0) {
    return min + Math.random() * (Math.abs(min)+max);
  } else {
    return min + Math.random() * max;
  }
}
