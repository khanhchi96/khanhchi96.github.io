
        let coat=[
            {"image":"img/ao_khoac_1.jpg", "length": "long", "type": "single-row", "pattern": "", "color":"black grey", "priceRange":"2to3", "price":"2000000", "id":"0002"}, 
            {"image":"img/ao_khoac_2.jpg", "length": "short", "type": "single-row", "pattern": "", "color":"black brown", "priceRange":"2to3", "price":"3000000", "id":"0006"}, 
            {"image":"img/ao_khoac_3.jpg", "length": "long", "type": "single-row", "pattern": "", "color":"black brown", "priceRange":"over3", "price":"4000000", "id":"0009"}, 
            {"image":"img/ao_khoac_5.jpg", "length": "short", "type": "single-row", "pattern": "", "color":"black blue", "priceRange":"under2", "price":"1900000", "id":"0010"},
            {"image":"img/sp_1.jpg", "length": "short", "type": "single-row", "pattern": "", "color":"black", "priceRange":"2to3", "price":"2000000", "id":"0001"}, 
            {"image":"img/sp_2.jpg", "length": "short", "type": "double-row", "pattern": "", "color":"black", "priceRange":"2to3", "price":"3000000", "id":"0003"}, 
            {"image":"img/sp_3.jpg", "length": "short", "type": "single-row", "pattern": "", "color":"black grey", "priceRange":"over3", "price":"4000000", "id":"0005"}, 
            {"image":"img/sp_4.jpg", "length": "short", "type": "single-row", "pattern": "", "color":"black", "priceRange":"under2", "price":"1900000", "id":"0004"}
        ]

        $(document).ready(function() {
        for (var i=0;i<coat.length; i++) {
        $(".products-page-content").append($('<div id="'+ coat[i].id +'"class="product-wrap" data-category="'+ coat[i].length +' '+ coat[i].type+' '+
            coat[i].pattern +' '+ coat[i].color +' '+ coat[i].priceRange +' '+ '" data-price="'+coat[i].price+ '" data-number="'+coat[i].id+
             '"><img src="' + coat[i].image + '"/><h1>Áo khoác A'+ coat[i].id +'</h1>'+
            '<p>Giá: ' + coat[i].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") +
            ' VNĐ</p><div class="button-wrap"><button type="button" class="order">Đặt may</button><button type="button" class="view-detail">Xem thêm</button></div></div>'));
        $('.product-total-number').text('(' + coat.length + ' sản phẩm)');
        }
            
            $(".order").click(function(){
                $('#myModal').show();
                let id = $(this).parent().parent().attr("id");
                $(".product-name").text($(`#${id}>h1`).text())
                $(".product-price").text($(`#${id}>p`).text())
                $(".product-image").text($(`#${id}>img`).attr('src'))
                // $(".product-name").text(this.parent().parent().find(h1).html())
                
            });


            $(".view-detail").click(function(){
                $('.modal-detail').css('display', 'block');
                let id = $(this).parent().parent().attr("id");
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

       

        var $filterCheckboxes = $('input[type="checkbox"]');

$filterCheckboxes.on('change', function() {

  var selectedFilters = {};

  $filterCheckboxes.filter(':checked').each(function() {

    if (!selectedFilters.hasOwnProperty(this.name)) {
      selectedFilters[this.name] = [];
    }

    selectedFilters[this.name].push(this.value);

  });

  var $filteredResults = $('.product-wrap');


  $.each(selectedFilters, function(name, filterValues) {

    $filteredResults = $filteredResults.filter(function() {

      var matched = false,
        currentFilterValues = $(this).data('category').split(' ');

      $.each(currentFilterValues, function(_, currentFilterValue) {

        if ($.inArray(currentFilterValue, filterValues) != -1) {
          matched = true;
          return false;
        }
      });

      return matched;

    });
  });

  $('.product-wrap').hide().filter($filteredResults).show();

});



$(".sorting").on("change", function() {

var sortingMethod = $(this).val();

if(sortingMethod == 'newest')
{
    newest();
}
else if(sortingMethod == 'l2h')
{
    lowToHigh();
}
else if(sortingMethod == 'h2l')
{
    highToLow();
}

});

function newest()
{
var products = $('.product-wrap');
products.sort(function(a, b){ return $(b).data("number")-$(a).data("number")});
$(".products-page-content").html(products);

}


function lowToHigh()
{
var products = $('.product-wrap');
products.sort(function(a, b){ return $(a).data("price")-$(b).data("price")});
$(".products-page-content").html(products);

}

function highToLow()
{
var products = $('.product-wrap');
products.sort(function(a, b){ return $(b).data("price") - $(a).data("price")});
$(".products-page-content").html(products);

}

            $("#showFilter").click(function(){
                $(".refine").show();
            });
            
            $("#filter").click(function(){
                $(".refine").hide();
            });
            
            
            
            
    

    