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


            $(".portfolio_item li").each(function(index){

                $(this).stop().css({transition: index*0.5+"s"});
            });

            $(window).scroll(function(){
                let scrollTop = $(this).scrollTop();
    
                $("section").each(function(){
                    let this_offset_T = $(this).offset().top;
    
                    if(scrollTop > this_offset_T-200){
                        $(this).stop().addClass("show");
                    }
    
                    //section4
                    const portfolio_item = $(".portfolio_item li");
                    if($("#section4").hasClass("show")){
                        //section4 portfolio_item(GSAP)                      
                            gsap.to(portfolio_item,{
                                opacity: 1,
                                scale: 1,
                                stagger:{
                                    each: 1,
                                    amount: 1,
                                    from:"start"
                                }
                            },2);    
                    }
    
    
                    // console.log($("#section1").offset().top , scrollTop);
                    // console.log($("#section2").offset().top , scrollTop);
                    // console.log($("#section3").offset().top , scrollTop);
                    // console.log($("#section4").offset().top , scrollTop);
                });
            });


            //portfolio_item li
            $(".portfolio_item li").mouseenter(function(){
                $(".portfolio_item li").stop().removeClass("on");
                $(this).stop().addClass("on");
            });
            $(".portfolio_item li").mouseleave(function(){
                $(".portfolio_item li").stop().removeClass("on");
            });


            //햄버거 버튼
            $(".hamburger").click(function(){
                $(this).stop().toggleClass("on");


                if($(this).hasClass("on")){
                    $(".mobile_nav").stop().addClass("on")
                }else{
                    $(".mobile_nav").stop().removeClass("on");
                }
            });

            // 네이게이션
            $("nav ul li").click(function(){
                let idx = $(this).index();
                let section_top = $("section").eq(idx).offset().top;

                $(".mobile_nav").removeClass("on");
                $(".hamburger").removeClass("on");
                $("html").stop().animate({scrollTop:section_top});
            });
    


});
