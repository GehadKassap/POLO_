$(document).ready(function(){
  //for  company section and progress bar //
  $(".skills .skill .skillBar .skillPer").each(function(){

    var skill = $(this);
    var skillVal = skill.attr('per');
     skill.css("width" , skillVal);
  $({animatedValue : 0}).animate({animatedValue :skillVal} ,{duration :5000 , step : function(){
     skill.attr('per' , Math.floor(this.animatedValue))} , complete : function(){
  skill.attr('per' , Math.floor(this.animatedValue))} })

});
//hover on nav items
$("nav ul li a[href='#subMenu']").hover(function(){
//    let aHref =  $(this).attr("href") ; 
//    console.log(aHref);
   $("nav #subMenu ul").css({ "display":"block", "background-color" : "white"});
   $("nav #subMenu ul li ").addClass("colorHover")
} , function(){
    $("nav #subMenu ul").css({ "display":"none"});

});
$("nav ul li a[href='#subMenuFeature']").hover(function(){
       $("nav #subMenuFeature ul").css({ "display":"block", "background-color" : "white"});
       $("nav #subMenuFeature ul li ").addClass("colorHover")
    } , function(){
        $("nav #subMenuFeature ul").css({ "display":"none"});
    
    });
    $("nav ul li a[href='#subMenuElement']").hover(function(){
        $("nav #subMenuElement").css({ "display":"block"});
        $("nav .ele").css( "background-color" , "white")
        $("nav #subMenuElement ul li ").addClass("colorHover")
     } , function(){
         $("nav #subMenuElement").css({ "display":"none"});
     
     });
     $("nav ul li a[href='#subMenuPg']").hover(function(){
        $("nav #subMenuPg ul").css({ "display":"block", "background-color" : "white"});
        $("nav #subMenuPg ul li ").addClass("colorHover")
     } , function(){
         $("nav #subMenuPg ul").css({ "display":"none"});
     
     })

// for navbar scroll ; 
$(window).scroll(function(){


   let wScroll =   $(window).scrollTop();
   let companyOffset = $("#company").offset().top;

   if(wScroll > companyOffset -600)
   {
    $("nav ul li a , nav #logo ").css("color" ,"black");
       $("nav").addClass("navModidy");
       $("#btnScroll").fadeIn(2000)
   }
   else 
   {
    $("nav ul li a , nav #logo ").css("color" ,"white");
    $("nav").removeClass("navModidy");
    $("#btnScroll").fadeOut(2000)

   }
//    console.log(company)
});
//scroll the content  section 
$(window).scroll(function(){
    let wScroll =   $(window).scrollTop();
    let servicesOffset = $("#servicesSection").offset().top;
    if(wScroll >servicesOffset -200)
    {
        $(" #servicesSection .content .fade1").fadeIn(200 , function(){
            $(" #servicesSection .content .fade2").fadeIn(400 , function(){
                $(" #servicesSection .content .fade3").fadeIn(400, function(){
                    $(" #servicesSection .content .fade4").fadeIn(300 , function(){
                        $(" #servicesSection .content .fade5").fadeIn(300 ,function(){
                            $(" #servicesSection .content .fade6").fadeIn(300 , function(){
                                $(" #servicesSection .content .fade7").fadeIn(300 , function(){
                                    $(" #servicesSection .content .fade8").fadeIn(300 , function(){
                                        $(" #servicesSection .content .fade9").fadeIn(200)
                                    });
                                });
                            }) ;
                        });
                    });
                });
            });
        });
    }
});


// AOS.init();
// scroll top to header smoothly
$("#btnScroll").click(function(){
    $(this).css("border" ,"1px solid  rgb(179,181,183)")
$("html , body").animate({scrollTop : `0px`} , 1000)
});
// hover on button scroll 
$("#btnScroll").hover(function(){
    $(this).css("background-color" , "blue")
} , function(){
    $(this).css("background-color" , "rgb(179,181,183)")

});
  
// for counter section 
$(window).scroll(function(){
   var  conterOffset =  $("#counter").offset().top;
   var  windowScroll = $(window).scrollTop();


   var  counters = document.querySelectorAll(".counterNumbers");
   const speed = 200 ;
  
   if(windowScroll > conterOffset-400)
   {

       counters.forEach(counter => {
        const updateCount = () => {

         const  dataTarget = +counter.getAttribute("data-target"); // + to change typr of from string to numbers
         const count = +counter.innerText // + to change typr of from string to numbers
         const incrementedNumbers = dataTarget / speed ; 
         if(count < dataTarget)
         {
         counter.innerText = count + incrementedNumbers;
         setTimeout(updateCount, 40)
         }
         else 
         {
             count.innerText =dataTarget
         }
        }
        updateCount();
    });


    
   };
}) ; 

//// button on navbar responsive

$("#btnResponsive").click(function(){
   $("nav").toggleClass("navRespon") ; 


});
});