
$(document).ready(function() {
    var folderHeight = [];
    var h = document.documentElement.clientHeight;

    function screenHeight(){                                            // sets article blocks to screen height
        let l = document.getElementsByClassName("folder");
        for(var i = 0; i < l.length; i++){
            l[i].style.height = h+"px";
        }
    }
    screenHeight();

    for(x=1; x<9; x++){
        // $(".tab"+x).css("left", (10 * x)+"%");                       
        $(".tab"+x).css("margin-left", (10 * x)+"%");                   // function to move tabs rightward
        folderHeight[x] = $(".project"+x).offset().top;                 // function to dynamically create variables and set them to their respective div-distance to top
    }
    console.log(folderHeight[1]);
    console.log(folderHeight[2]);
    console.log(folderHeight[3]);
    console.log(folderHeight[4]);
    console.log(folderHeight[5]);
    console.log(folderHeight[6]);
    console.log(folderHeight[7]);
    console.log(folderHeight[8]);

    window.onscroll = function(){                                       // function to switch 'tabs' from fixed to static 
        var scrolled = document.body.scrollTop;
        console.log(scrolled);
        for(x=1; x<9; x++){
            if ((folderHeight[x] - h) < scrolled){ 
                // $(".tab"+x).css("display", "static");
                document.getElementsByClassName("tab"+x)[0].style.position = "static";
            }
            else if ((folderHeight[x] - h) > scrolled){ 
                // $(".tab"+x).css("display", "static");
                document.getElementsByClassName("tab"+x)[0].style.position = "fixed";
            }
        }
    }

});