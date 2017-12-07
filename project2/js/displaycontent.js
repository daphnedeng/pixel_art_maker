$(document).ready(function(){
    //add 20px margin-bottom to the container
    $(".howItWorkContainer").css({
        "margin-bottom": "20px"
    }); 
    //运行时，allresults.html自动生成，页面变成3x3
    /* $(selector).action()
    选择.howItWorkContainer,并复制它. get the 1st cloned element.  */
    var newRow = $(".howItWorkContainer").clone(); //复制品
    var i = 0;
    for (i = 0; i < 2; i++) {
        //clone newRow twice, and put them on top of the orignal .howItWorkContainer (insert them into DOM)
        $("#allResults").prepend(newRow.clone()); //复制newRow两次 ->把这两次复制出来的元素放进DOM里
    }
    
    $(".colm").click(function() {
        window.location = "./singleResult.html";
    });
    
}); 
    
