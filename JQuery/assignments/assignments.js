// TUESDAY ASSIGNMENT

$(document).ready(function(){

    // $("h1").hover(function(){
    //     $("h1").fadeOut("slow")
    // })

    // $("#first-btn").click(function(){
    //     $("li:first").html("AMALA")
    // })

    // $("#first-btn").dblclick(function(){
    //     $("li:eq(4)").html("Chicken")
    //     .addClass("color-text-change")
    //     .slideUp("slow")
    //     .slideDown("9000000000000000")
    // })

    // $("ul:first").mouseenter(function(){
    //     $("ul:first").children().html("Food is ready")
    // })

    // $("ul:first").mouseleave(function(){
    //     $("ul:first").children().html("Food has finished")
    // })

    // $("#flavour:first").dblclick(function(){
    //     $(this).siblings().hide()
    // })

    // $("#first-btn").dblclick(function(){
    //     $("li").last().hide()
    // })   // why did it hide the first and not the last

    // $("#form-input").keypress(function(){
    //     $("#form-btn").hide()
    // })

    // $("#form-input").keyup(function(){
    //     $("#form-btn").show()
    // })

    // $("#form-input").keydown(function(){
    //     $(this).addClass("input")
    // })

    // $("li").filter("#flavour").mousedown(function(){
    //     $("#flavour").html("Not Available")
    //     .addClass("color-text-change")
    // })

    // $("li").filter("#flavour").mouseup(function(){
    //     $("#flavour").hide("slow")
    // })

    // $("#focus-blur-test").focus(function(){
    //     $("#focus-btn").addClass("button-change")
    // })

    // $("#focus-blur-test").blur(function(){
    //     alert("Please type something")
    // })

    // $("img").addClass("resize").click(function(){
    //     $(this).animate({
    //         left: "80%",
    //         width: "200px",
    //         height: "250px", 
    //         "border-radius": "50%"
    //     }, "slow", function(){
    //         alert("Show off's over!")
    //     })
    // })
    
    // $("#toggle-btn").click(function(){
    //     $("#time").html(new Date($.now())).toggle()
    // })

    // $("form").submit(function(){
    //     alert("Successful");
    // })

    // $("#ice-cream").hover(function(){
    //     $("ul:eq(1)").parent().addClass("color-text-change")
    // })

    // NOT WORKING

    // $("body").scroll(function(){
    //     $("li").addClass("color-text-change")
    // })
    
    // $("body").keypress(function(){
    //     $("div").find("img").stop("stopAll")
    // })

    // $("li:first").click(function(){
    //     $("li:first").parentsUntil("div")
    //     .addClass("color-text-change")
    // })
    
    // $("li:first").click(function(){
    //     $("ol").parent()
    //     .addClass("color-text-change")
    // })

}) 

    // WEDNESDAY ASSIGNMENT

    // const jq = $.noConflict();
    // const arr = ['UI/UX Design','HTML', 'CSS', 'Javascript']
    // jq(document).ready(function(){
    //     jq("button").click(function(){
    //         jq.each(arr, function(index, value){
    //             jq("div>p:first").after(`We learnt about ${value} last month <br>`)
    //         })
    //     })
    // })

    $(document).ready(function(){
    // checking type
    // console.log($.isArray([1,2,3]));
    // console.log($.isNumeric("34"));
    // console.log($.isFunction(function() {}));
    // console.log($.isFunction("34"));
    // console.log($.type("100"));
    // console.log($.type(100));
    // console.log($.type(false));

    // using filter
    // $("button").click(function(){
    //     const filterArr = [1,2,3,4,5,6,7,8,9,0];
    //     const newArray = $.grep(filterArr, function(index, value){
    //     return value%2 === 0
    // })
    //     $("div>p:first").html(JSON.stringify(newArray))
    // })

    // // using map
    // $("button").click(function(){
    //     const mapArr = [1,2,3,4,5,6,7,8,9,0];
    //     const newArray = $.map(mapArr, function(index, value){
    //     return value ** 2
    // })
    //     $("div>p:last").html(JSON.stringify(newArray))
    // })

    // return current date and time
    // $("button").click(function(){
    //     $("div>p").html(new Date($.now()))
    // })

    // $("button").click(function(){
    //     $("*").addClass("color-text-change")
    // })

    // $("button").click(function(){
    //     $("p:contains("Another").addClass("color-text-change")
    // })


    //DIDN'T WORK
    // check to see if an element is a descendant of the other
    // console.log($.contains(document.body, document.div)); 
    // console.log($.contains(document.body, document.querySelector("div") ))

    //  $("img").addClass("resize").click(function(){
    //     $(this).animate({
    //         left: "80%",
    //         width: "200px",
    //         height: "250px", 
    //         "border-radius": "50%"
    //     })
    // })

    // $("button").click(function(){
    //     $(":animated").hide()
    // })

    // $("button").dblclick(function(){
    //     $("div").clone("div p:first").html("p:last")
    // })

})

// THURSDAY ASSIGNMENT
$(document).ready(function(){

    $("#submit-btn").click(function(){
        let cell1 = $("#name").val();
        let cell2 = $("#category").val();
        let cell3 = $("#type").val();
        let cell4 = $("#rating").val();
        let inputs = "<tr></td>" + cell1 + "</td><td>" + cell2 + "</td><td>" + cell3 + "</td><td>" + cell4 + "</td><td><input id='delete' type='button' name='delete' value='Delete'></td></tr>"
        $("tbody").append(inputs)
       
        $(".table-div").show()
        $("form").trigger("reset");       

    })

    $("#delete").click(function(){
        $(this).parents('tr').remove();
    })
        
    $("#myInput").on("keyup", function(){
        let value = $(this).val().toLowerCase()
        $("#tbody tr").filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        })
    })

    $("#sort-btn").click(function(){
        let compare_rows = function (a,b){
          let a_val = $(a).text().toLowerCase();
          let b_val = $(b).text().toLowerCase();
          if (a_val>b_val){
            return 1;
          }
          if (a_val<b_val){
            return -1;
          }
          return 0;
        };

        $("tr").sort(compare_rows).appendTo("tbody");
    
})
})

