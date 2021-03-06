let orderInfo = JSON.parse(localStorage.getItem("productGroup"));

let groupPrice = [];
let numberOfItems = [];
let count = 0
        $(document).ready(function() {
            count = JSON.parse(localStorage.getItem('count')) || 0;
            for(var i=0; i < orderInfo.length; i++ ){
                
                numberOfItems.push(parseInt(orderInfo[i].productQuantity));
                $(".number-of-items").text('( ' + numberOfItems.reduce(function(a, b) { return a + b; }) + ' sản phẩm)');
                localStorage.setItem('count', JSON.stringify($(".number-of-items").text().match(/\d/g).join("")));
                $(".cart-info").append($('<div class="item-info"><div class="product-image-cart"><img src="'+orderInfo[i].productImage+'"/></div><div class="cart-content">'+
                    '<div class="name-quantity-price"><img class="product-image-cart-mobile" src="'+orderInfo[i].productImage+'"/>'+
                    '<h3 class="product-name-cart">'+orderInfo[i].productName+'</h3>'+
                    '<p class="quantity">Số lượng: <button type="button" class="sub">-</button>'+
                    '<input type="number" value="'+orderInfo[i].productQuantity+'" min="1" max="10"/><button type="button" class="add">+</button>'+
                    '<p class="product-price-cart">'+orderInfo[i].productPrice+
                    '</p><span class="trash"><i class="fas fa-trash-alt"></i></span></div>'+
                    '<p class="sodo">SỐ ĐO (cm): </p>'+
                    '<div class="measurements-cart"><div>Cổ: '+orderInfo[i].neck+'</div>'+ 
                    '<div>Ngực: '+orderInfo[i].chest+'</div><div>Eo: '+orderInfo[i].belly+'</div>'+ 
                    '<div>Vai: '+orderInfo[i].shoulder+'</div><div>Dài tay: '+orderInfo[i].arm+'</div>'+ 
                    '<div>Bắp tay: '+orderInfo[i].biceps+'</div><div>Lưng: '+orderInfo[i].back+'</div>'+ 
                    '<div>Mông: '+orderInfo[i].butt+'</div><div>Đùi: '+orderInfo[i].thigh+'</div>'+ 
                    '<div>Gối: '+orderInfo[i].knee+'</div><div>Dài quần: '+orderInfo[i].pantLength+'</div></div></div>'

                ))
                        
                let priceString;
                let quantityString
                priceString = orderInfo[i].productPrice.match(/\d/g).join("");
                quantityString = orderInfo[i].productQuantity
                
                let value=parseInt(priceString)*parseInt(quantityString);
                groupPrice.push(value);
                
            }
            
            let totalValue = 0;
                totalValue = groupPrice.reduce(function(a, b) { return a + b; }, 0);
                $('#total-value').text(totalValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."));
                $('#bill-value').text($('#total-value').text());
                // console.log($('#total-value').text())
          
                    $('.fa-trash-alt').click(function(){
                        let deleteItem = $(this).parent().parent().parent().parent();
                        let deleteName =  $(this).parent().siblings("h3").text();
                        let deletePrice = $(this).parent().siblings(".product-price-cart").text().match(/\d/g).join("");
                        let deleteNumber = $(this).parent().siblings("p").children('input').val();
                        $('#delete-modal').show();
                        
                        $('#deleteconfirm').click(function(){
                        
                        // let newNumber = parseInt($(".number-of-items").text().match(/\d/g).join("")) - parseInt(deleteNumber)
                        $(".number-of-items").text('( ' + (parseInt($(".number-of-items").text().match(/\d/g).join("")) - parseInt(deleteNumber)) + ' sản phẩm)');
                        localStorage.setItem('count', JSON.stringify($(".number-of-items").text().match(/\d/g).join("")));
                        // console.log(deleteNumber);
                        $('#total-value').text((parseInt($('#total-value').text().match(/\d/g).join("")) - parseInt(deletePrice)*parseInt(deleteNumber)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."));
                        $('#bill-value').text($('#total-value').text());
                        
                        deleteItem.remove();
                        orderInfo = orderInfo.filter(obj => obj.productName !== deleteName);
                        // console.log(orderInfo);
                        localStorage.setItem('productGroup', JSON.stringify(orderInfo));
                        $('#delete-modal').hide();
                        
                        })
                        $('#cancel, #close').click(function(){
                            $('#delete-modal').hide();
                        }); 
                    })
                

            $('.add').click(function () {
                if ($(this).prev('input').val() < 10) {
               
                    let itemPosition = orderInfo.findIndex(x => x.productName == $(this).parent().siblings('h3').text());
                    
                        $(this).prev('input').val(parseInt($(this).prev('input').val()) + 1);
                        let plusPrice = $(this).parent().siblings('p').text().match(/\d/g).join("");
                        // console.log(plusPrice)
                        // $(".number-of-items").text('( ' + (parseInt($(".number-of-items").text().match(/\d/g).join("")) + 1) + ' sản phẩm)');
                        // console.log(parseInt(plusPrice)/parseInt($(this).prev('input').val() -1));
                        
                        // $(this).parent().siblings('p').text('Giá: '+ (parseInt(plusPrice) + parseInt(plusPrice)/(parseInt($(this).prev('input').val()) -1)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") +'VNĐ');
                        
                        $(".number-of-items").text('( ' + (parseInt($(".number-of-items").text().match(/\d/g).join("")) + 1) + ' sản phẩm)');      
                        localStorage.setItem('count', JSON.stringify($(".number-of-items").text().match(/\d/g).join("")));
                        $('#total-value').text((parseInt($('#total-value').text().match(/\d/g).join("")) + parseInt(plusPrice)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."));
                        $('#bill-value').text($('#total-value').text());
                        orderInfo[itemPosition].productQuantity = $(this).prev('input').val();
                        // orderInfo[itemPosition].productPrice = $(this).parent().siblings('p').text();
                        localStorage.setItem('productGroup', JSON.stringify(orderInfo));
                       

                        // console.log($('.add').prev('input').val())
        
                    }
                    
                });
                $('.sub').click(function () {
                    if ($(this).next('input').val() > 1) {
                    
                        if ($(this).next('input').val() > 1) $(this).next().val(parseInt($(this).next('input').val()) - 1);
                        let minusPrice = $(this).parent().siblings('p').text().match(/\d/g).join("");
                        // $(this).parent().siblings('p').text('Giá: '+ (parseInt(minusPrice) - parseInt(minusPrice)/(parseInt($(this).next('input').val()) + 1)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") +'VNĐ');
                        $(".number-of-items").text('( ' + (parseInt($(".number-of-items").text().match(/\d/g).join("")) - 1) + ' sản phẩm)');
                        localStorage.setItem('count', JSON.stringify($(".number-of-items").text().match(/\d/g).join("")));
                        $('#total-value').text((parseInt($('#total-value').text().match(/\d/g).join("")) - parseInt(minusPrice)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."));
                        $('#bill-value').text($('#total-value').text());

                        // hien thi gia tong san pham sau khi tru
                        // $('#total-value').text((parseInt($('#total-value').text().match(/\d/g).join("")) - parseInt(minusPrice)/(parseInt($(this).next('input').val()) + 1)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."));

                        let itemPosition = orderInfo.findIndex(x => x.productName == $(this).parent().siblings('h3').text());
                        orderInfo[itemPosition].productQuantity = $(this).next('input').val();
                        // orderInfo[itemPosition].productPrice = $(this).parent().siblings('p').text();
                        localStorage.setItem('productGroup', JSON.stringify(orderInfo));
                        }
                });
                
        })

        $('.check-out-button').click(function(){
                    location.href = "check-out.html";
                });

        $(window).scroll(function(){
        if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
            $('.cart-value').addClass('fixed-bill');
        }
        else{
            $('.cart-value').removeClass('fixed-bill');
        }
    })
