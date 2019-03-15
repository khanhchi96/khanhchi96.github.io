
        let infoConfirmation = JSON.parse(localStorage.getItem("customerInfo"));

        let orderInfo = JSON.parse(localStorage.getItem("productGroup"));
        let groupPrice = [];
        $(document).ready(function() {
            $(".customer-info-confirmation").append('<p>Tên khách hàng: ' + infoConfirmation.name +'</p><p>Địa chỉ: ' + infoConfirmation.address+
            '</p><p>Số điện thoại: ' + infoConfirmation.phone +'</p><p>Phương thức thanh toán: '+ infoConfirmation.paymentMethod +'</p>');
            for(var i=0; i < orderInfo.length; i++ ){
                $(".order-info-confirmation").append($('<div class="item-info"><div class="product-image-cart"><img src="'+orderInfo[i].productImage+'"/></div><div class="cart-content">'+
                    '<div class="name-quantity-price"><img class="product-image-cart-mobile" src="'+orderInfo[i].productImage+'"/>'+
                    '<h3 class="product-name-cart"> '+orderInfo[i].productQuantity+'x '+orderInfo[i].productName+'</h3><br/><p class="product-price-cart"> '+
                    orderInfo[i].productPrice + '</p></div><p class="sodo">SỐ ĐO (cm): </p>'+
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
