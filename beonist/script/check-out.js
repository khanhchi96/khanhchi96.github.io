let orderInfo = JSON.parse(localStorage.getItem("productGroup"));
        let groupPrice = [];
        $(document).ready(function() {
            for(var i=0; i < orderInfo.length; i++ ){
                $(".number-of-items").text('( ' + orderInfo.length + ' sản phẩm)');
                $(".cart-info").append($('<div class="item-info"><div class="product-image-cart"><img src="'+orderInfo[i].productImage+'"/></div><div class="cart-content">'+
                    '<div class="name-quantity-price"><h3 class="product-name-cart">'+orderInfo[i].productQuantity+'x '+orderInfo[i].productName+'</h3>'+
                    '<img class="product-image-cart-mobile" src="'+orderInfo[i].productImage+'"/>'+
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
                $('#bill-value').text(totalValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."));
                // $('#bill-value').text($('#total-value').text());

        
        })


        $('.btn-signup').click(function(){
            $('.btn-login').removeClass('btn-active');
            $('.btn-signup').addClass('btn-active');
            $('.signup').css('display', 'block');
            $('.login').css('display', 'none');
        })

        $('.btn-login').click(function(){
            $('.btn-signup').removeClass('btn-active');
            $('.btn-login').addClass('btn-active');
            $('.signup').css('display', 'none');
            $('.login').css('display', 'block');
        })

        $('.move-to-payment').click(function(){
                    location.href = "payment.html";
                });
        
        $(window).scroll(function(){
        if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
            $('.cart-value').addClass('fixed-bill');
        }
        else{
            $('.cart-value').removeClass('fixed-bill');
            $('.cart-value').css('position', 'absolute')
        }

        let d = $(document).height();
            let w = $(window).height();
            let s = $(this).scrollTop();
            let bottomBound = 350;

        if(d - (w + s) < bottomBound) { 
            $('.fixed-bill').css('margin-top', ((d-(w+s))-bottomBound ))
        } 
        else{
            $('.fixed-bill').css('position', 'fixed')    
        }
    })


            $(".mat-input").focus(function(){
                $(this).parent().addClass("is-active is-completed");
            });

            $(".mat-input").focusout(function(){
            if($(this).val() === "")
                $(this).parent().removeClass("is-completed");
            $(this).parent().removeClass("is-active");
            })
            