$(document).ready(function() {
    //set the date to Xmas
    var year = new Date().getFullYear();
    var endDate = new Date(year + "/12/25").getTime();
    //countdown every second
    function countdown() {
        //get today's date
        var today = new Date().getTime();
        
        //find the distance between today and end date
        var distance = endDate - today;

        //calculate days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var sec = Math.floor((distance % (1000 * 60)) / 1000);

        //insert into the respective html tags, add a leading 0 when the number is < 10.
        $(".days").text(days.toString().padStart(2, "0"));
        $(".hours").text(hours.toString().padStart(2, "0"));
        $(".mins").text(mins.toString().padStart(2, "0"));
        $(".sec").text(sec.toString().padStart(2, "0"));

        //if it's christmas
        if (distance < 0) {
            clearInterval(countdown);
            $("h1").html("Marry Christmas!!");
            $(".days, .hours, .mins, .sec").text("00");
        }
    }    
    setInterval(countdown, 1000);
    //call the function so it runs immediately
    countdown(); 
});

/*
notes: setInterval runs with one sec delay, 
so instead of var ct = setInterval(function(){...}), 
write the function itself, then: 
    setInterval(function, 1000);
    function() 
    call the function in the next line.
*/