let bestSeller=[
    {"image":"img/ao_khoac_1.jpg", "price":"2000000", "category": "Áo khoác", "id":"A0002"}, 
    {"image":"img/ao_khoac_2.jpg", "price":"3000000", "category": "Áo khoác", "id":"A0006"}, 
    {"image":"img/ao_khoac_3.jpg", "price":"4000000", "category": "Áo vest", "id":"V0009"}, 
    {"image":"img/ao_khoac_5.jpg", "price":"1900000", "category": "Áo vest", "id":"V0010"},
    {"image":"img/sp_1.jpg", "price":"2000000", "category": "Áo vest", "id":"V0001"}, 
    {"image":"img/sp_2.jpg", "price":"3000000", "category": "Áo sơ mi", "id":"S0003"}, 
    {"image":"img/sp_3.jpg", "price":"4000000", "category": "Quần tây", "id":"Q0005"}, 
    {"image":"img/sp_4.jpg", "price":"1900000", "category": "Quần tây", "id":"Q0004"}
]

$(document).ready(function() {
for (var i=0;i<bestSeller.length; i++) {
$(".slider").append($('<div class="slide" id="'+bestSeller[i].id+'"><img src="'+bestSeller[i].image+'" alt="" class="img-responsive"/>'+
    '<h1>'+bestSeller[i].category +' '+ bestSeller[i].id+'</h1><p>Giá: '+ bestSeller[i].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") +'VNĐ</p>'+
    '<button type="button" class="order">Đặt may</button><button type="button" style="margin-left:10px" class="view-detail">Xem thêm</button>'+
    '<div class="overlay"><div class="overlay-content"><h4>Mẫu áo được làm từ vải len lông cừu mềm mại và nhẹ giúp người mặc vận động dễ dàng cùng khả năng giữ nhiệt tốt, thoáng khí luôn sẵn sàng đương đầu với thời tiết giá lạnh của Hà Nội.</h4>'+
    '</div></div></div>'));
}

$('.slider').slick({
autoplay:true,
autoplaySpeed:1500,
arrows:true,
prevArrow: '<span class="slick-left"><i class="fa fa-chevron-left" aria-hidden="true"></i></span>',
nextArrow: '<span class="slick-right"><i class="fa fa-chevron-right" aria-hidden="true"></i></span>',

slidesToShow: 4,
slidesToScroll: 1,
infinite: true,
responsive: [
{
breakpoint: 1124,
settings: {
slidesToShow: 3,
slidesToScroll: 1,
}
},
{
breakpoint: 800,
settings: {
slidesToShow: 2,
slidesToScroll: 1,
}
},
{
breakpoint: 480,
settings: {
slidesToShow: 1,
slidesToScroll: 1,
}
}
]});
    
    $(".order").click(function(){
        $('#myModal').show();
        let id = $(this).parent().attr("id");
        $(".product-name").text($(`#${id}>h1`).text())
        $(".product-price").text($(`#${id}>p`).text())
        $(".product-image").text($(`#${id}>img`).attr('src'))
        // $(".product-name").text(this.parent().parent().find(h1).html())
        
    });

    $(".view-detail").click(function(){
        $('.modal-detail').css('display', 'block');
        let id = $(this).parent().attr("id");
        $(".product-detail-name").text($(`#${id}>h1`).text())
        $(".product-detail-price").text($(`#${id}>p`).text())
        $(".product-detail-image").html('<img src = "'+ $(`#${id}>img`).attr('src') + '"/>')
        $(".product-detail-image-mobile").html('<img src = "'+ $(`#${id}>img`).attr('src') + '"/>')
    });

    $(".order-from-detail-modal").click(function(){
        $('.modal-detail').css('display', 'none');
        $('#myModal').show();
        $(".product-name").text($(this).siblings('h3').text())
        $(".product-price").text($(this).siblings('p').eq(0).text())
        $(".product-image").text($(this).parent().siblings('div').children('img').attr('src'));
    });

});


let offsetTopAboutUs = $(".parallax-about-us").offset().top;
let offsetNews1 = $(".news-homepage").offset().top;
let offsetNews2 = $(".news-homepage-2").offset().top;

$(window).scroll(function() {
var scrollTop = $(window).scrollTop();
if (scrollTop > offsetTopAboutUs) {
$(".reservation-homepage").fadeIn(1500);
}
if (scrollTop > offsetNews1) {
$(".news-homepage-1-text").fadeIn(1000);
}



});
