var myRec = new p5.SpeechRec(); // new P5.SpeechRec object
myRec.continuous = true; // do continuous recognition
myRec.interimResults = true; // allow partial recognition (faster, less accurate)


var result;

let canvasWidth = 100;
let canvasHeight = 100;


function setup() {
  let c = createCanvas(canvasWidth, canvasHeight);
  c.position (0,0)


  myRec.onResult = showResult;
  myRec.start();
  // 	// mic = new p5.AudioIn();
  // 	// mic.start();
}


function draw(){
  // setTimeout(timetoLeave, 15000);
  // setTimeout(letGo,26000)
}
var numberOfTimes = 0;

function showResult() {
  // recognition system will often append words into phrases.
  // so hack here is to only use the last word:
  //if (myRec.resultValue == true) {
  //text(myRec.resultString, width / 2, height / 2);


  var mostrecentword = myRec.resultString.split(' ').pop();
  console.log(mostrecentword)

  let msg = mostrecentword
  chrome.runtime.sendMessage(msg,function(){
  })

//第一步，进入spiritslist
  if (mostrecentword.indexOf("connect") !== -1 || mostrecentword.indexOf("me") !== -1  ){
    console.log(myRec.resultString);
    //换logo
     //导入语
    setTimeout(function(){
     $("#postlks li:first-child").replaceWith("<h1>Where do Vanished objects go?</h1>")
   }, 1000);
    setTimeout(function(){
    $("#postlks li:nth-child(2)").replaceWith("<h1>Into non-being, which is to say, everything.</h1>");
  }, 2000);
     //搜索栏更新
      document.getElementById('query').placeholder = "search spiritslist";
     //连接状态
     setTimeout(haveawalk,2500);

  } // 咒语con't: with nothing
  else if (mostrecentword.indexOf("nothing") !== -1){
      console.log(myRec.resultString);
      okok();
    }   // 咒语con't: with everything
    else if (mostrecentword.indexOf("everything") !== -1 ){
        console.log(myRec.resultString);
       $(".walkMe").remove();
       $("#logo a").replaceWith('<img src="https://www.spirit.com/Spirit101/assets/images/freespirit.png" height="100" width="150">');


       $('#about_craigslist li:nth-of-type(1)').html('about spiritslist');
       $('#about_craigslist li:nth-of-type(2)').html('spiritslist is hiring');
       $('#about_craigslist li:nth-of-type(3)').html('spiritslist events');
       $('#about_craigslist li:nth-of-type(4)').html('spiritslist blog');
       $('#about_craigslist li:nth-of-type(5)').html('best-of-spiritslist');
       $('#about_craigslist li:nth-of-type(6)').html('spiritslist TV');
       $('#about_craigslist li:nth-of-type(7)').html('"spiritslist Joe"');
       $('#about_craigslist li:nth-of-type(8)').html('spirit connects');

       $('#topban .area').html('New York: What do you want to know?')

       $('#sss h4').html('Options for Offering');
       $('#sss h4').addClass('shake-opacity shake-constant')
       $('#ccc,#bbb,#forums,#hhh,#ppp,#jjj,#ggg,#rrr').hide();

  } //service
    else if (mostrecentword.indexOf("reset") !== -1 ){
      $('#ccc,#bbb,#forums,#hhh,#ppp,#jjj,#ggg,#rrr').hide();
    } // 第一项
    else if (mostrecentword.indexOf("lost") !== -1 || mostrecentword.indexOf("cat") !== -1 || mostrecentword.indexOf("general") !== -1){
      console.log(myRec.resultString);
      $('#ccc').show();
    } //
    else if (mostrecentword.indexOf("boyfriend") !== -1 || mostrecentword.indexOf("pretty") !== -1 || mostrecentword.indexOf("general") !== -1){
      console.log(myRec.resultString);
      $('#bbb,#ppp').show();
    } //

    else if (mostrecentword.indexOf("job") !== -1 || mostrecentword.indexOf("new") !== -1 ){
      console.log(myRec.resultString);
      $('#jjj').show();
      $('#rrr').show();
    }

  else if (mostrecentword.indexOf("sister") !== -1 ){
    console.log(myRec.resultString);
    $('#forums, #ccc').show();

  } //
  // else if (mostrecentword.indexOf("ready") !== -1  ) {
  //
  //   numberOfTimes = numberOfTimes + 1;
  //   var numberOfElementsToShake = 2 * numberOfTimes;
  //
  //   $('h4').slice(0,numberOfElementsToShake).addClass('shake-chunk shake-constant');
  //   setTimeout(function(){
  //     $('h4').removeClass('shake-chunk shake-constant' );
  //   }, 3000);
  //
  //   if (numberOfTimes === 1) {
  //     // this is the first time someone said ‘talk’ or 'me'
  //   } else if (numberOfTimes === 2) {
    //
    //   // this is the second time...
    // } else {
    //   // third time or more,
    // }
    // console.log(myRec.resultString);
    //document.getElementsByClassName('txt')[0].innerText = "WOW"
    // document.getElementsByClassName('txt')[0].style.backgroundColor = "orange" }

   else if (mostrecentword.indexOf("customer") !== -1 || mostrecentword.indexOf("service") !== -1) {
		console.log(myRec.resultString);
    // function createTab(){
    //   chrome.tabs.create({url:"https://www.google.com/"});//should be in background?
    // }
		//setTimeout(pleaseLeave, 1500);
 } else {
		return;
	}
}


function haveawalk(){
  var post = document.getElementById('postlks')
  var walkMe = document.createElement('h1')
  walkMe.innerText="Connecting......";
  walkMe.classList.add('walkMe', 'animated', 'zoomIn');
  post.appendChild(walkMe);

}
var j=0;
function okok(){
  var addheart = document.getElementsByTagName('td')
  for ( var i = 0; i< addheart.length; i++) {
    addheart[i].classList.add('popheart');
  }
   $('.popheart:eq(0), .popheart:eq(1)').html('<a></a>');
   $('.popheart a').replaceWith('<a>🔮</a>');
}
