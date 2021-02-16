// $(document).ready(function(){
//     // $("button").dblclick(function(){
//     //     $("p:first").fadeOut();
//     // });
//     // $("#tag").click(function(){
//     //     $("p:first").show();
//     // });
//     // $(".form").focus(function(){
//     //     $(".form").css({
//     //         color: "green",
//     //         background: "grey"
//     //     });
//     // });

//     // $("span").click(function(){
//     //     $("span").parents().css({
//     //         color: "green"
//     //     })
//     // $("span").click(function(){
//     //     $("span").parentsUntil("ul").css({
//     //         color: "green"
//     //     })
//     // $("span").parentsUntil("ul").css({
//     //     color: "green"
//     // })
//     })
    
// });

// $(document).ready(function(){

    // $("button").click(function(){
    //     $("li").parent().css({
    //         color: "red"
    //     })
    // })

    // $("span").click(function(){
    //     $("b").parents().css({
    //         color: "red"
    //     })
    // })

    // $("span").click(function(){
    //     $("span").parentUntil("div").css({
    //         color: "red"
    //     })
    // })

    // $("span").click(function(){
    //     $("span").children("ul").css({
    //         color: "red"
    //     })
    // })

    // $("button").click(function(){
    //     $("ul").toggle()
    // })

    // $("button").css("color","red")
    // $("#button").css("color", "blue")
    // $("#tag").css("color", "magenta")
    
    // $("button").click(function(){
    //     $("p").hide("slow")
    // })

    // $("#button").click(function(){
    //     $("p").show("fast")
    // })

    // $("#tag").click(function(){
    //     $("p:first").toggle("5000", function(){
    //         $("#tag").css("color", "yellow")
    //         console.log("toggle complete");
    //         alert("toggle successfully")
    //     })
    // })

    // $("button").click(function(){
    //     $("p").fadeOut("slow")
    // })

    // $("#button").click(function(){
    //     $("p").fadeIn("9000000")
    // })
    
    // $("#tag").click(function(){
    //     $("p").fadeToggle("fast", function(){
    //         $("#tag").css("color", "yellow")
    //         console.log("toggle complete");
    //         alert("toggle successfully")
    //     })

    // $("#tag").hover(function(){
    //     $("div").fadeTo("fast", 0.5, function(){
    //         console.log("toggle complete");
    //         alert("toggle successfully")
    //     })
    // })

    // $("button").click(function(){
    //     $("p").slideDown("slow")
    // })

    // $("#button").click(function(){
    //     $("p").slideUp("9000000")
    // })
    
    // $("#tag").click(function(){
    //     $("p").slideToggle("fast", function(){
    //         $("#tag").css("color", "yellow")
    //         console.log("toggle complete");
    //         alert("toggle successfully")
    //     })
    // })

    // $("button").click(function(){
    //     $("#image").animate({
    //         float: "left",
    //         overflow: "hidden",
    //         background: "magenta",
    //         width: "400px",
    //         padding: "10px",
    //         border: "1px solid #a29415"
    //       }, "slow");
    // })
    
    // $("#button").click(function(){
    //     // $("#image").stop()
    //     // $("#image").stop("goToEnd")
    //     $("#image").stop("stopAll")
    // })

    // CHAINING
    // $("h1").css("color", "red")
    // .slideUp(2000)
    // .slideDown(2000)
    // .hide("slow")
    // .show("fast");

// });

// WEDNESDAY

$(document).ready(function(){

    // $("div:first>#btn1").click(function(){
    //     $("#test").text("Text changed again twice")
    // })

    // $("div:first>#btn2").click(function(){
    //     $("#test").html("Text changed <b>again</b> <span>always</span>")
    // })

    // $("#two>button").click(function(){
    //     $("#test_two").val("Academy 4.0 Ladies")
    // })

    // $("#two_1").find("#btn4").click(function(){
    //     $("#enyata").attr("href", "https://facebook.com")
    //     $("#enyata").text("facebook.com")
    // })

    // $("#btn5").click(function(){
    //     $("#three>p").append(" <b>Appended text</b>")
    // })

    // $("#btn5").click(function(){
    //     $("#three>p").append(`
    //     <div>
    //     <ul>
    //     <li>appended text one</li>
    //     <li>appended text two</li>
    //     <li>appended text three</li>
    //     </ul>
    //     </div>
    //     `)
    // })

    // $("#btn6").click(function(){
    //     $("#three>ol").append("<li>appended text</li>")
    // })

    // $("#btn5").click(function(){
    //     $("#three>p").prepend(" <b>Appended text</b>")
    // })

    // $("#btn6").click(function(){
    //     $("#three>ol").prepend("<li>appended text</li>")
    // })

    // $("#btn7").click(function appendText(){
    //     var txt1 = "<p>Text created with HTML </p>"
    //     var txt2 = $("<p></p>").text("Text created with jQuery")
    //     var txt3 = document.createElement("p")
    //     txt3.innerHTML = "Text created with the DOM"
    //     $("body").append(txt1, txt2, txt3)
    // })

    // $("#four").css({
    //     "background-color": "yellow",
    //     "border": "1px solid black",
    //      height: "500px",
    //      width: "400px"
    // })

    // $("#btn8").click(function(){
    //     $("#four>div>img").before("<b>Before</b>")
    // })

    // $("#btn9").click(function(){
    //     $("#four>div>img").after("<i>After</i>")
    //   })

    // $("#btn10").click(function(){
    //     // $("#four").remove()
    //     // $("#four").empty()
    //     $("div").remove("#three, #four")
    // })

    })

    // $.noConflict();
    // let jq = $.noConflict();
    // jq(document).ready(function(){
    //     jq("#conflict>button").click(function(){
    //         jq("#conflict>p").text("jQuery is still working")
    //     })
    // })

    // $(document).ready(function(){
        
// })


    // CLASSWORK PRACTICE
    // $(document).ready(function(){
        // $(".first").addClass("first-div")

        // $("button").click(function(){
        //     // $(".first").remove()
        //     // $(".first").empty()
        //     // $("h1").remove(".one")
        // })
    
        // $("button").click(function(){
        //     $(".first").append("<p>Bad Baddo Baddest</p>")
        // })
    
        // $("button").click(function(){
        //     $(".first").prepend("<p>Bad Baddo Baddest</p>")
        // })
    
        // $("button").click(function(){
        //     $(".first").before("<p>Bad Baddo Baddest</p>")
        // })
    
        // $("button").click(function(){
        //     $(".first").after("<p>Bad Baddo Baddest</p>")
        // })

        // $("button").click(function(){
        //     $(".first>h1").html("<p>Bad Baddo Baddest</p>")
        // })

        // $("button").click(function(){
        //     $(".first>h1").text("<p>Bad Baddo Baddest</p>")
        // })

        // $("img").addClass("resize")
        // $("button").click(function(){
        // $("img").attr("src", "/assets/blue-picture.jpg")
        // })

    // })

        // $(document).ready(function(){
        //     $("#myInput").on("keyup", function(){
        //         let value = $(this).val().toLowerCase()
        //         $("#myTable tr").filter(function(){
        //             $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        //         })
        //     })

        // $("#mySecondInput").on("keyup", function(){
        //     let value = $(this).val().toLowerCase()
        //     $("#myList li").filter(function(){
        //         $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        //     })
        // })

    // })

// FRIDAY AJAX

$(document).ready(function(){

    // $("#ajax").load("https://v2.jokeapi.dev/joke/Programming?format=txt")

    // $.get(url, function()) first syntax
    // $get(url:link, function: function()) second syntax inside object

    // $.get("http://newsapi.org/v2/top-headlines -G \
    // -d country=us \
    // -d apiKey=27c4a49f467042b29eaa7ed40406ad14", function(data){
    //   let values = JSON.stringify(data);
    //   $("#ajax_one").text(values);
    // })


    // $("button").click(function(){
        // $.get({
        //     url: "http://newsapi.org/v2/top-headlines -G \
        //     -d sources=bbc-news \
        //     -d apiKey=27c4a49f467042b29eaa7ed40406ad14",
        //     success: function(data){
        //         let values = JSON.stringify(data);
        //         $("#ajax_one").text(values);
        //       }
        // })
    // })
    

    // $("button").click(function(){
    //     $.get({
    //         url: "https://restcountries.eu/rest/v2/all",
    //         success: function(data){
    //             var values = JSON.stringify(data);
    //             $("#ajax_one").text(values)
    //         }
    //     })
    // })

    // $("button").click(function(){
    //     $.post({
    //         url: "https://localhost:3050/v1/bookstore-api/auth/user/signup",
    //         data: {
    //             "first_name": "King",
    //             "last_name": "Elizabeth",
    //             "email": "omodaddy@gmail.com",
    //             "phone": "+2349058702551",
    //             "password": "omo"
    //         },
    //         success: function(data, status){
    //             var values = JSON.stringify(data)
    //             $("#ajax_two").text(values)
    //             console.log(data)
    //             console.log(status);
    //         }
    //     })
    // })

    // $.ajax({
    //     url: "https://v2.jokesapi.dev/joke/Programming?format=txt",
    //     method: "GET",
    //     success: function(data){
    //         $("#ajax_two").text(data)
    //     }
    // })

})


// SATURDAY PRACTISE
// $(document).ready(function(){
//     $("input").keyup(function(){
//         let value = $(this).val().toLowerCase()
//         $("li").filter(function(){
//             $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
//         })
//     })
// })

// jq = $.noConflict()
// jq(document).ready(function(){
//     jq("h1").addClass("color-text-change")
// })