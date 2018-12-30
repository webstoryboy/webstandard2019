//라이트박스
$(".lightbox").lightGallery({
    thumbnail: true,
    autoplay: true,
    pause: 3000,
    progressBar: true
}); 

//윈도우 팝업
$(".window").click(function(e){
    e.preventDefault();
    //window.open("파일명", "팝업이름", "옵션설정");
    //옵션 : left, top, width, height, status, toolbor, location, menubar, scrollbars, fullscreen, channelmode
    window.open('sample_popup.html', 'popup01', 'width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=no');
});

//레이어 팝업
$(".layer").click(function(e){
    e.preventDefault();
    $("#layer").css("display","block");
    // $("#modal").show();
    // $("#modal").fadeIn();
    // $("#modal").slideDown();
});
$("#layer .close").click(function(e){
    e.preventDefault();
    $("#layer").css("display","none");
    // $("#modal").hide();
    // $("#modal").fadeOut();
    // $("#modal").slideUp();
});

//탭 메뉴
var $tab_list = $('.tab_menu');

$tab_list.find('ul ul').hide();
$tab_list.find('li.active>ul').show();

function tabMenu(e){
    e.preventDefault();
    var $this = $(this);
    $this.next('ul').show().parent('li').addClass('active').siblings('li').removeClass('active').find('>ul').hide();
}
$tab_list.find('>ul>li>a').click(tabMenu).focus(tabMenu);

//배너
$('.ban').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true
});

//갤러리
$('.gallery_img').slick({
    dots: true,
    fade: true,
    pauseOnHover: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 300,
    slidesToShow: 1
});

$('.pause').on('click', function(){
    $('.gallery_img').slick('slickPause');
});

$('.play').on('click', function(){
    $('.gallery_img').slick('slickPlay');
});

$('.prev').on('click', function(){
    $('.gallery_img').slick('slickPrev');
});

$('.next').on('click', function(){
    $('.gallery_img').slick('slickNext');
});

//전체 메뉴
$(".tit .btn").click(function(){
    //$("#cont_nav").css("display","block");
    //$("#cont_nav").show();
    //$("#cont_nav").fadeIn();
    //$("#cont_nav").slideDown();
    //$("#cont_nav").toggle();
    //$("#cont_nav").fadeToggle();
    $("#cont_nav").slideToggle();
    $(this).toggleClass("on");
});