$(document).ready(function(){

  let score = 0;

  function getScore(score) {
    scorePercent = score/10 * 100;

    if (scorePercent <= 30) {
      $("#results p").html("You scored" + scorePercent + ". Are you truly a fan?")
      
    } else if (scorePercent > 30 && scorePercent <= 50) {
      $("#results p").html("Nice one. You scored" + scorePercent + ". I think you can do better")
    } else {
      $("#results p").html("Wow! You scored" + scorePercent + ". See you at Old Trafford!")
    }

    $('#bal').animate({bottom: '400px'}, 3000, function(){
                $('#bal').animate({left: '750px'}, 3000);
                $('#bal').animate({left: '250px'}, 3000);
            })
        
    }

  $("#landing-page-btn").click(function(){
    $("#landing-page").hide()
    $("#questions-div").show()
  })

  $("input").click(function(){
    // let correctAnswer = $(".answer")
    if ($("input.className") === "answer") {
      score += 1;
    }
    // return score;
  })

  $("#submit").click(function(){
    $("#form").hide().trigger('reset')
    getScore(score)
  })


})