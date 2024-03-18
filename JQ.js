// $ is called a selecter and it is used to access an ID from the html document. (document.getElementByID)
// $(element name 1, 2, 3, ...) == document.getElementByTagName(element name)
// fadeToggle is a function from jquery library
// class names start with "."
// id names start with "#"
// jquery selectors need unique id's
// $("parent tag > child tag > another child tag")


// $(document).ready(function(){
//     // Fades an image in and out
//     function func1(){
//         $("#portrait").fadeToggle(3000);
//     }

//     function func2(){
//         $("div").css('background-color','orange');
//         $("#p1").css('font-style','italic');
//     }

//     function opentab(){
//         $(".tab-links").removeClass("active-link");
//         $(".tab-contents").removeClass("active-tab");
//     }

$(document).ready(function(){
    // Attach click event listener to tabs
    $(".tab-links").click(function() {
        $(".tab-links").removeClass("active-link");
        $(".tab-contents").removeClass("active-tab");
        $(this).addClass("active-link");
        // Get the data-id attribute value of the clicked tab link
        var tabId = $(this).data("id");
        // Add active class to the corresponding tab content
        $("#" + tabId).addClass("active-tab");
    });

    // Hovering over a button
    $(".btn.btn2").mouseenter(function(){
        // $("button").css('opacity', '50%');
        $(this).animate({
            opacity: 0.5 // 50% opacity
        }, 200); // 500 milliseconds
    });
    $(".btn.btn2").mouseleave(function(){
        // $("button").css('opacity', '100%');
        $(this).animate({
            opacity: 1 // 100% opacity
        }, 200); // 500 milliseconds
    });
});
