/*
hide()
show()
toggle()

slideUp()
slideDown()
slideToggle()

fadeIn()
fadeOut()
fadeToggle()
fadeTo(dur,opacity)

css  --> setter , getter
callback functions
chaining
animate()




//exers1

$(".wrapper").animate({width:"100%"},2000);
$(".wrapper").animate({height:window.innerHeight},2000,function(){
    $(".wrapper h1").fadeIn(1000,function(){
        $(".wrapper .item").fadeIn(1000)
    })


});


*/

// var lis = $(".color-ul li");
// lis.eq(0).css("backgroundColor", "red");
// lis.eq(1).css("backgroundColor", "#09c");
// lis.eq(2).css("backgroundColor", "orange");
// lis.eq(3).css("backgroundColor", "brown");

// $(".color-ul li").click(function() {
//   var color = $(this).css("backgroundColor");
//   $(".change").css("color", color);
// });

$("#event #event-overlay span").css("cursor", "Hand");
$("#singers h3").click(function() {
  $(this)
    .siblings()
    .slideToggle(700);
  $(this)
    .parent("div")
    .siblings()
    .children("div")
    .slideUp(700);
});
let date1 = new Date(2018, 12, 17);
console.log(date1);
timer();
function timer() {
  let d = new Date();
  let difference = d.getTime() - date1.getTime();

  let seconds = Math.floor(difference / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);

  hours %= 24;
  minutes %= 60;
  seconds %= 60;

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  hours = hours + " H";
  days = days + " D";
  seconds = seconds + " S";
  minutes = minutes + " M";

  $("#counter #days h3").html(days);
  $("#counter #hours h3").html(hours);
  $("#counter #mins h3").html(minutes);
  $("#counter #secs h3").html(seconds);
  setTimeout(timer, 1000);
}

$("#open-nav").click(() => {
  $("#mySidenav").animate({ marginLeft: 0 }, 500);
  $("#open-nav").animate({ marginLeft: 240 }, 500);
});

$("#close").click(() => {
  $("#mySidenav").animate({ marginLeft: -240 }, 500);
  $("#open-nav").animate({ marginLeft: 0 }, 500);
});

$("#mySidenav a").click(function() {
  let href = $(this).attr("href");
  let offset = $(href).offset().top;
  $("body").animate({ scrollTop: offset }, 1000);
});
