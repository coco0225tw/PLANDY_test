//音效
var screen_audio=new Audio("https://monoame.com/awi_class/ballsound/click18.wav");
var home_audio=new Audio("https://monoame.com/awi_class/ballsound/click23.wav");
var button_audio=new Audio("https://monoame.com/awi_class/ballsound/click14.wav");
var wiggle_audio=new Audio("https://monoame.com/awi_class/ballsound/phonevi.mp3");



// ------------------------------------------------------
//改頁面，記得css上面要加position
var page=0;
$(".cat1").click(function(){
  screen_audio.play();
  page=8;
  $(".pages").css("left","-"+page*100+"%");
});
$(".cat2").click(function(){
  screen_audio.play();
  page=1;
  $(".pages").css("left","-"+page*100+"%");
});
$(".cat3").click(function(){
  screen_audio.play();
  page=2;
  $(".pages").css("left","-"+page*100+"%");
});
$(".cat4").click(function(){
  screen_audio.play();
  page=3;
  $(".pages").css("left","-"+page*100+"%");
});
$(".cat5").click(function(){
  screen_audio.play();
  page=4;
  $(".pages").css("left","-"+page*100+"%");
});
$(".cat6").click(function(){
  screen_audio.play();
  page=5;
  $(".pages").css("left","-"+page*100+"%");
});
$(".cat7").click(function(){
  screen_audio.play();
  page=6;
  $(".pages").css("left","-"+page*100+"%");
});
$(".cat8").click(function(){
  screen_audio.play();
  page=7;
  $(".pages").css("left","-"+page*100+"%");
});
$(".diary").click(function(){
  screen_audio.play();
  page=10;
  $(".pages").css("left","-"+page*100+"%");
});
$(".submit1").click(function(){
  screen_audio.play();
  page=11;
  $(".pages").css("left","-"+page*100+"%");
});
$(".tree").click(function(){
  screen_audio.play();
  page=11;
  $(".pages").css("left","-"+page*100+"%");
});
$(".sug").click(function(){
  screen_audio.play();
  page=12;
  $(".pages").css("left","-"+page*100+"%");
});
$(".submit2").click(function(){
  screen_audio.play();
  page=9;
  $(".pages").css("left","-"+page*100+"%");
});
$(".call").click(function(){
  screen_audio.play();
  page=6;
  $(".pages").css("left","-"+page*100+"%");
});

$(".consult").click(function(){
  screen_audio.play();
  page=2;
  $(".pages").css("left","-"+page*100+"%");
});
$(".article").click(function(){
  screen_audio.play();
  page=4;
  $(".pages").css("left","-"+page*100+"%");
});
$(".speech").click(function(){
  screen_audio.play();
  page=3;
  $(".pages").css("left","-"+page*100+"%");
});
$(".backtodiary").click(function(){
  screen_audio.play();
  page=10;
  $(".pages").css("left","-"+page*100+"%");
});

$(".button").click(function(){
  home_audio.play();
  page=0;
  $(".pages").css("left","");
});


// -------------------------------------------
var diary = [];
// myJSON = JSON.stringify(diary);
  // diary = [""]
// diary=["今天....."];

// ---------------------------------------------------
var num =  parseInt($("#input_content").val().length)
function check(){
  if (parseInt($("#input_content").val().length)<10){
        $(".text").text("要不要再多分享一些事呢?");
        $(".text").css("color","#ac6c40");
        $(".imgtree").attr("src","https://res.cloudinary.com/dpnpf9chb/image/upload/v1639285282/code/2021%E6%95%99%E8%82%B2%E8%97%8D%E5%9C%96%C2%B7%E8%87%AA%E5%B7%B1%E7%95%AB-PACEDEMI%20%E6%8F%90%E6%A1%88%E7%AB%B6%E8%B3%BD/Asset_1_tnewct.svg");
      }else {
        $(".text").text("很棒哦~分享了很多故事");
        $(".text").css("color","#ac6c40");
        $(".imgtree").attr("src","https://res.cloudinary.com/dpnpf9chb/image/upload/v1639285295/code/2021%E6%95%99%E8%82%B2%E8%97%8D%E5%9C%96%C2%B7%E8%87%AA%E5%B7%B1%E7%95%AB-PACEDEMI%20%E6%8F%90%E6%A1%88%E7%AB%B6%E8%B3%BD/Asset_1_fzryrm.svg");
      }
  // $("#input_content").val("");
}



$(".done").click(function(){
  //推入資料
  diary.push({
  diary: $("#input_content").val()});
  check();
})




// ----------------------------------------
var num1=0
function click1(num_var){
  num1=num1+num_var
}
function checknotecat1(){
  if (num1% 2 == 0){
        $( ".specific1" ).css("display","none")
      }else {
       $( ".specific1" ).css("display","block")
      }
}

$("#switch1").click(
  function(){
    click1(+1);
    checknotecat1();
  }
)

// +-------------------------
// ----------------------------------------
var num2=0
function click2(num_var){
  num2=num2+num_var
}
function checknotecat2(){
  if (num2% 2 == 0){
        $( ".specific2" ).css("display","none")
      }else {
       $( ".specific2" ).css("display","block")
      }
}
$("#switch2").click(
  function(){
    click2(+1);
    checknotecat2();
  }
)