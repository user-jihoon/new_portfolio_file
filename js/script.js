$(document).ready(function(){

            //section1 h1(GSAP)
            let logo_p = $("#logo p");
            gsap.to(logo_p,{
                y:0,
                opacity:1,
                duration: 1,
                stagger:{
                    each: .5,
                    amount: 1.5,
                    from: "random"
                }
            },2.5);

            //section1 header(GSAP)
            let header = $(".pc_tablet_nav ul li");
    
            gsap.to(header,{
                x:0,
                opacity:1,
                duration: 1,
                stagger:{
                    each: .5,
                    amount: 1,
                    from: "end"
                }
            },2.5);
    
    
               


            $(window).scroll(function(){
                let scrollTop = $(this).scrollTop();
    
                $("section").each(function(){
                    let this_offset_T = $(this).offset().top;
    
                    if(scrollTop > this_offset_T-200){
                        $(this).stop().addClass("show");
                    }
    
                    //section2
                    if($("#section4").hasClass("show")){
                        //section4 portfolio_item(GSAP)
                            let portfolio_item = $(".portfolio_item li");
                            gsap.to(portfolio_item,{
                                scale: 1,
                                opacity: 1,
                                duration: 2,
                                stagger:{
                                    each: .5,
                                    amount: 3,
                                    ease: "power 2.in",
                                    from:"random"
                                }
                    
                            },2);    
                    }
    
    
                    // console.log($("#section1").offset().top , scrollTop);
                    // console.log($("#section2").offset().top , scrollTop);
                    // console.log($("#section3").offset().top , scrollTop);
                    // console.log($("#section4").offset().top , scrollTop);
                });
            });


            $(".hamburger").click(function(){
                $(this).stop().toggleClass("on");


                if($(this).hasClass("on")){
                    $(".mobile_nav").stop().addClass("on")
                }else{
                    $(".mobile_nav").stop().removeClass("on");
                }
            });

            $("nav ul li").click(function(){
                let idx = $(this).index();
                let section_top = $("section").eq(idx).offset().top;

                $(".mobile_nav").removeClass("on");
                $(".hamburger").removeClass("on");
                $("html").stop().animate({scrollTop:section_top});
            });
    


});
