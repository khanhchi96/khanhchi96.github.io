let news=[
    {'image':'img/news-3.jpg', 'title': 'Chương trình ưu đãi tháng 01/2019', 'link':'https://www.facebook.com/Beonist.Tailoring/videos/259981804690919/'},
    {'image':'img/news-3.jpg', 'title': 'Chương trình ưu đãi tháng 01/2019', 'link':'https://www.facebook.com/Beonist.Tailoring/videos/259981804690919/'},
    {'image':'img/news-3.jpg', 'title': 'Chương trình ưu đãi tháng 01/2019', 'link':'https://www.facebook.com/Beonist.Tailoring/videos/259981804690919/'},
    {'image':'img/news-3.jpg', 'title': 'Chương trình ưu đãi tháng 01/2019', 'link':'https://www.facebook.com/Beonist.Tailoring/videos/259981804690919/'},
    {'image':'img/news-2.jpg', 'title': 'Chương trình ưu đãi tháng 02/2019', 'link':'https://www.facebook.com/Beonist.Tailoring/videos/259981804690919/'},
    {'image':'img/news-2.jpg', 'title': 'Chương trình ưu đãi tháng 02/2019', 'link':'https://www.facebook.com/Beonist.Tailoring/videos/259981804690919/'},
    {'image':'img/news-2.jpg', 'title': 'Chương trình ưu đãi tháng 02/2019', 'link':'https://www.facebook.com/Beonist.Tailoring/videos/259981804690919/'},
    {'image':'img/news-2.jpg', 'title': 'Chương trình ưu đãi tháng 02/2019', 'link':'https://www.facebook.com/Beonist.Tailoring/videos/259981804690919/'},
    {'image':'img/news-3.jpg', 'title': 'Chương trình ưu đãi tháng 03/2019', 'link':'https://www.facebook.com/Beonist.Tailoring/videos/259981804690919/'},
    {'image':'img/news-2.jpg', 'title': 'Chương trình ưu đãi tháng 03/2019', 'link':'https://www.facebook.com/Beonist.Tailoring/videos/259981804690919/'},
    {'image':'img/news-3.jpg', 'title': 'Chương trình ưu đãi tháng 03/2019', 'link':'https://www.facebook.com/Beonist.Tailoring/videos/259981804690919/'},
    {'image':'img/news-2.jpg', 'title': 'Chương trình ưu đãi tháng 03/2019', 'link':'https://www.facebook.com/Beonist.Tailoring/videos/259981804690919/'}

]
$(document).ready(function(){
    for(var i = 0; i<4; i++){
        $('.page1').append('<div class="older-news"><a href="'+news[i].link+'"><div class="older-news-image"><img src="'+ news[i].image+
            '" alt="news" title="news"/></div><div class="older-news-text"><h3>'+ news[i].title +'</h3></div></a></div>')
    }
    for(var i = 4; i<8; i++){
        $('.page2').append('<div class="older-news"><a href="'+news[i].link+'"><div class="older-news-image"><img src="'+ news[i].image+
            '" alt="news" title="news"/></div><div class="older-news-text"><h3>'+ news[i].title +'</h3></div></a></div>')
    }
    for(var i = 8; i<news.length; i++){
        $('.page3').append('<div class="older-news"><a href="'+news[i].link+'"><div class="older-news-image"><img src="'+ news[i].image+
            '" alt="news" title="news"/></div><div class="older-news-text"><h3>'+ news[i].title +'</h3></div></a></div>')
    }
    $('.pagination').children('a').eq(1).addClass('active');
    $('.page2').css('display', 'none');
    $('.page3').css('display', 'none');

    $(".pagination>a").click(function(event) {
            let n = event.target.id;
            if (n == 'prev'){
                let id = parseInt($('.active').attr('id')) - 1;
                console.log(id);
                $('.older').css('display', 'none');
                $('.page' + id).css('display', 'flex');
                $(".pagination>a").removeClass('active');
                $(".pagination").children('a').eq(id).addClass('active');
                $('#next').css('visibility', 'visible');
                if($('#1').hasClass('active')){$('#prev').css('visibility', 'hidden');}
            }
            else if (n == 'next'){
                let id = parseInt($('.active').attr('id')) + 1;
                console.log(id);
                $('.older').css('display', 'none');
                $('.page' + id).css('display', 'flex');
                $(".pagination>a").removeClass('active');
                $(".pagination").children('a').eq(id).addClass('active');
                $('#prev').css('visibility', 'visible');
                if($('#3').hasClass('active')){$('#next').css('visibility', 'hidden');}
            }
            else {
            $('.older').css('display', 'none');
            $('.page' + n ).css('display', 'flex');
            $(".pagination>a").removeClass('active');
            $(".pagination").children('a').eq(n).addClass('active');
            $('#prev').css('visibility', 'visible');
            $('#next').css('visibility', 'visible');
            if($('#1').hasClass('active')){$('#prev').css('visibility', 'hidden');}
            if($('#3').hasClass('active')){$('#next').css('visibility', 'hidden');}
            }
        });
    if($('#1').hasClass('active')){$('#prev').css('visibility', 'hidden')}
})
