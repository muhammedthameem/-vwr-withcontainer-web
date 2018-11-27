

if ($(".pricing-tag").length > 0) {

    $(".pricing-tag").click(function () {

        $(this).toggleClass("change-tag");

    });
}


/*

if ($(".pricing-tag").length > 0) {

    $(".pricing-tag").click(function () {

        if ($(this).hasClass("change-tag")) {
            $(".pricing-tag").removeClass("change-tag");
        }
        else {
            $(".pricing-tag").removeClass("change-tag");
            $(this).toggleClass("change-tag");
        }

    });
}
*/


$( document ).ready(function() {
    count = 0;
    maxValue = 3;
    total = 9;
    classnamePrefix = 'br'

    exec = (value)=> {
        id = '.' + classnamePrefix + value
        $(id).toggle();
        $(".brh"+value).toggleClass("active");

        /* $(".sel-brand").toggle();*/

    }
});

/*$(".expand-h5").click(function(){
    $(this).toggleClass("up-arrow");
    $(".attributes-list").toggleClass("show-block");
});*/


if ($(".redirect-page").length > 0) {


    $(".redirect-page").keypress(function (e) {
        var code = e.keyCode ? e.keyCode : e.which;
        if (code.toString() == 13) {
            QLSearch(); // call the function to redirect to another page
            return false;
        }
    })

// Function that redirect the user to another page
    function QLSearch() {
        window.location = "search-result.html";
    }

}

/*
if ($("ul.attributes-list li").length > 0) {

    $("ul.attributes-list li").click(function () {
        $(this).toggleClass("active");
    });

}
*/

function idClick(id,totalSize){
    for(let i = 1 ; i <= 10 ; i++ ) {

        try {


            if(i === id ){


                // alert("reachec inside")
                if(document.getElementById(id.toString()).style.display !== 'table-row')
                    document.getElementById(id.toString()).style.display = 'table-row'
                else
                    document.getElementById(id.toString()).style.display = 'none'
            }
           /* else{
                // alert("reached disabled")
                document.getElementById(i.toString()).style.display = 'none';
            }*/
        }
        catch (err) {
            /*console.log(err);*/
        }

    }
}




(function ($) {
    "use strict";

    $('.cd-country').select2({
        minimumResultsForSearch: -1,
        width: 'resolve',
        dropdownCssClass: 'country-dropdown',
        templateSelection: function (country) {
            return $("<span><i class=\"flag flag-" + country.id.toLowerCase() + "\"></i></span>");
        },
        templateResult: function (data) {
            if (data.html) {
                return $(data.html);
            } else {
                return data.text;
            }

        },
        data: [
            {
                id: 'europe',
                text: "Europe",
                children: [
                    {
                        id: 'gb',
                        text: "United Kingdom",
                        html: '<li><i class="flag-inline-b flag flag-gb"></i><span class="text-inline-b">United Kingdom</span></li>'
                    },
                    {
                        id: 'fr',
                        text: "France",
                        html: '<li><i class="flag-inline-b flag flag-fr"></i><span class="text-inline-b">France</span></li>'
                    },
                    {
                        id: 'de',
                        text: "Germany",
                        html: '<li><i class="flag-inline-b flag flag-de"></i><span class="text-inline-b">Germany</span></li>'
                    },
                    {
                        id: 'es',
                        text: "Spain",
                        html: '<li><i class="flag-inline-b flag flag-es"></i><span class="text-inline-b">Spain</span></li>'
                    },
                    {
                        id: 'ch',
                        text: "Switzerland",
                        html: '<li><i class="flag-inline-b flag flag-ch"></i><span class="text-inline-b">Switzerland</span></li>'
                    }
                ]
            },
            {
                id: 'northamerica',
                text: "North America",
                children: [
                    {
                        id: 'us',
                        text: "USA",
                        selected: true,
                        html: '<li><i class="flag-inline-b flag flag-us"></i><span class="text-inline-b">USA</span></li>'
                    },
                    {
                        id: 'ca',
                        text: "Canada",
                        html: '<li><i class="flag-inline-b flag flag-ca"></i><span class="text-inline-b">Canada</span></li>'
                    }
                ]
            },
            {
                id: 'southamerica',
                text: "South America",
                children: [
                    {
                        id: 'br',
                        text: "Brazil",
                        html: '<li><i class="flag-inline-b flag flag-br"></i><span class="text-inline-b">Brazil</span></li>'
                    }
                ]
            },
            {
                id: 'asia',
                text: "Asia/Pacific",
                children: [
                    {
                        id: 'in',
                        text: "India",
                        html: '<li><i class="flag-inline-b flag flag-in"></i><span class="text-inline-b">India</span></li>'
                    },
                    {
                        id: 'cn',
                        text: "China",
                        html: '<li><i class="flag-inline-b flag flag-cn"></i><span class="text-inline-b">China</span></li>'
                    },
                    {
                        id: 'sg',
                        text: "Singapore",
                        html: '<li><i class="flag-inline-b flag flag-sg"></i><span class="text-inline-b">Singapore</span></li>'
                    }
                ]
            }
        ]
    });


    if ($(".animsition").length > 0){


    /*[ Load page ]
    ===========================================================*/
        $(".animsition").animsition({
            inClass: 'fade-in',
            outClass: 'fade-out',
            inDuration: 1500,
            outDuration: 800,
            linkElement: '.animsition-link',
            loading: true,
            loadingParentElement: 'html',
            loadingClass: 'animsition-loading-1',
            loadingInner: '<div data-loader="ball-scale"></div>',
            timeout: false,
            timeoutCountdown: 5000,
            onLoadEvent: true,
            browser: ['animation-duration', '-webkit-animation-duration'],
            overlay: false,
            overlayClass: 'animsition-overlay-slide',
            overlayParentElement: 'html',
            transition: function (url) {
                window.location.href = url;
            }
        });


    }



    /*[ Back to top ]
    ===========================================================*/
    var windowH = $(window).height()/2;

    $(window).on('scroll',function(){
        if ($(this).scrollTop() > windowH) {
            $("#myBtn").css('display','flex');
        } else {
            $("#myBtn").css('display','none');
        }
    });

    $('#myBtn').on("click", function(){
        $('html, body').animate({scrollTop: 0}, 300);
    });


    /*[ Show header dropdown ]
    ===========================================================*/
    $('.js-show-header-dropdown').on('click', function(){
        $(this).parent().find('.header-dropdown')
    });

    var menu = $('.js-show-header-dropdown');
    var sub_menu_is_showed = -1;

    for(var i=0; i<menu.length; i++){
        $(menu[i]).on('click', function(){

                if(jQuery.inArray( this, menu ) == sub_menu_is_showed){
                    $(this).parent().find('.header-dropdown').toggleClass('show-header-dropdown');
                    sub_menu_is_showed = -1;
                }
                else {
                    for (var i = 0; i < menu.length; i++) {
                        $(menu[i]).parent().find('.header-dropdown').removeClass("show-header-dropdown");
                    }

                    $(this).parent().find('.header-dropdown').toggleClass('show-header-dropdown');
                    sub_menu_is_showed = jQuery.inArray( this, menu );
                }
        });
    }

    $(".js-show-header-dropdown, .header-dropdown").click(function(event){
        event.stopPropagation();
    });

    $(window).on("click", function(){
        for (var i = 0; i < menu.length; i++) {
            $(menu[i]).parent().find('.header-dropdown').removeClass("show-header-dropdown");
        }
        sub_menu_is_showed = -1;
    });


    /*[ Scroll Hide Dropdown ]
    ===========================================================*/

    $(window).scroll(function(){
            if($(".category-btn").hasClass("show")){
                $(".dropdown-menu").removeClass("show");
            }

        });
    /*[ Scroll Hide Dropdown ]
    ===========================================================*/




     /*[ Fixed Header ]
    ===========================================================*/
    var posWrapHeader = $('.topbar').height();
    var header = $('.container-menu-header');

    $(window).on('scroll',function(){

        if($(this).scrollTop() >= posWrapHeader) {
            $('.header1').addClass('fixed-header');
            $(header).css('top',-posWrapHeader);
            $('.topbar-menu-search').show();
        }
        else {
            var x = - $(this).scrollTop();
            $(header).css('top',x);
            $('.header1').removeClass('fixed-header');
            $('.topbar-menu-search').hide();
        }

        if($(this).scrollTop() >= 200 && $(window).width() > 992) {
            $('.fixed-header2').addClass('show-fixed-header2');
            $('.header2').css('visibility','hidden');
            $('.header2').find('.header-dropdown').removeClass("show-header-dropdown");

        }
        else {
            $('.fixed-header2').removeClass('show-fixed-header2');
            $('.header2').css('visibility','visible');
            $('.fixed-header2').find('.header-dropdown').removeClass("show-header-dropdown");
        }

    });

    /*[ Show menu mobile ]
    ===========================================================*/
    $('.btn-show-menu-mobile').on('click', function(){
        $(this).toggleClass('is-active');
        $('.wrap-side-menu').slideToggle();
    });

    var arrowMainMenu = $('.arrow-main-menu');

    for(var i=0; i<arrowMainMenu.length; i++){
        $(arrowMainMenu[i]).on('click', function(){
            $(this).parent().find('.sub-menu').slideToggle();
            $(this).toggleClass('turn-arrow');
        })
    }

    $(window).resize(function(){
        if($(window).width() >= 992){
            if($('.wrap-side-menu').css('display') == 'block'){
                $('.wrap-side-menu').css('display','none');
                $('.btn-show-menu-mobile').toggleClass('is-active');
            }
            if($('.sub-menu').css('display') == 'block'){
                $('.sub-menu').css('display','none');
                $('.arrow-main-menu').removeClass('turn-arrow');
            }
        }
    });


    /*[ remove top noti ]
    ===========================================================*/
    $('.btn-romove-top-noti').on('click', function(){
        $(this).parent().remove();
    })


    /*[ Block2 button wishlist ]
    ===========================================================*/
    $('.block2-btn-addwishlist').on('click', function(e){
        e.preventDefault();
        $(this).addClass('block2-btn-towishlist');
        $(this).removeClass('block2-btn-addwishlist');
        $(this).off('click');
    });

    /*[ +/- num product ]
    ===========================================================*/
    $('.btn-num-product-down').on('click', function(e){
        e.preventDefault();
        var numProduct = Number($(this).next().val());
        if(numProduct > 1) $(this).next().val(numProduct - 1);
    });

    $('.btn-num-product-up').on('click', function(e){
        e.preventDefault();
        var numProduct = Number($(this).prev().val());
        $(this).prev().val(numProduct + 1);
    });


    /*[ Show content Product detail ]
    ===========================================================*/
    $('.active-dropdown-content .js-toggle-dropdown-content').toggleClass('show-dropdown-content');
    $('.active-dropdown-content .dropdown-content').slideToggle('fast');

    $('.js-toggle-dropdown-content').on('click', function(){
        $(this).toggleClass('show-dropdown-content');
        $(this).parent().find('.dropdown-content').slideToggle('fast');
    });


    /*[ Play video 01]
    ===========================================================*/
    var srcOld = $('.video-mo-01').children('iframe').attr('src');

    $('[data-target="#modal-video-01"]').on('click',function(){
        $('.video-mo-01').children('iframe')[0].src += "&autoplay=1";

        setTimeout(function(){
            $('.video-mo-01').css('opacity','1');
        },300);
    });

    $('[data-dismiss="modal"]').on('click',function(){
        $('.video-mo-01').children('iframe')[0].src = srcOld;
        $('.video-mo-01').css('opacity','0');
    });





    $(".tab_content").hide();
    $(".tab_content:first").show();

  /* if in tab mode */
    $("ul.tabs li").click(function() {

      $(".tab_content").hide();
      var activeTab = $(this).attr("rel");
      $("#"+activeTab).fadeIn();

      $("ul.tabs li").removeClass("active");
      $(this).addClass("active");

      $(".tab_drawer_heading").removeClass("d_active");
      $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");

    });
    /* if in drawer mode */
    $(".tab_drawer_heading").click(function() {

      $(".tab_content").hide();
      var d_activeTab = $(this).attr("rel");
      $("#"+d_activeTab).fadeIn();

      $(".tab_drawer_heading").removeClass("d_active");
      $(this).addClass("d_active");

      $("ul.tabs li").removeClass("active");
      $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
    });


    /* Extra class "tab_last"
       to add border to right side
       of last tab */
    $('ul.tabs li').last().addClass("tab_last");



})(jQuery);