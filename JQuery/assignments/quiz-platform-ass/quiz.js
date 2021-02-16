$(document).ready(function(){

  let score = 0;
  $("img").addClass("resize");

  $("#landing-page-btn").click(function(e){
    e.preventDefault()
    $("#landing-page").hide()
    $("#questions-div").show()
  })

  $("input").click(function(e){
    e.preventDefault()
    if ($(this.className) === "answer") {
      score++;
    }
    return score;
  })

  $("#submit").click(function(e){
    e.preventDefault()
    $("#form").hide()
    $("#results").show()

    scorePercent = (score / 10 ) * 100;

    if (scorePercent <= 30) {
      $("#results p").html("You scored " + scorePercent + "%. Are you truly a fan?")  
      $("#low-score").show().animate({
        float: "left",
            overflow: "hidden",
            background: "magenta",
            width: "50%",
            padding: "10px",
      }, "slow")          
    } else {
      $("#results p").html("Wow! You scored" + scorePercent + ". See you at Old Trafford!")
      $("#high-score").show().animate({
        float: "left",
            overflow: "hidden",
            background: "magenta",
            width: "50%",
            padding: "10px",
      }, "slow")
      
    }     
  })    

}) 





