let info = {};
    let productGroup=[];
        $('.submit-to-order').on('submit', function (e) {
            let isValid = true;
            $('.measurements').each(function(){
            if ($.trim($(this).val()) == "" || $(this).val().match(/^\d+$/) == null){
                $('.error').text('Vui lòng cung cấp đầy đủ số đo!')
                isValid = false;
                
            } else {
                $('.error').text('');
            }
        });
        if (isValid == false) e.preventDefault();

        else {
            info.productName = $(".product-name").text(); // string
            info.productPrice = $(".product-price").text();  
            info.productImage = $(".product-image").text();  
            info.note = $(".note").val();
            info.neck = $("#neck").val();
            info.chest = $("#chest").val();
            info.belly = $("#belly").val();
            info.shoulder = $("#shoulder").val();
            info.arm = $("#arm").val();
            info.biceps = $("#biceps").val();
            info.back = $("#back").val();
            info.butt = $("#butt").val();
            info.thigh = $("#thigh").val();
            info.knee = $("#knee").val();
            info.pantLength = $("#pant-length").val();
            // console.log(JSON.stringify(productGroup))
            // store it into locale storage as a string  
            productGroup = JSON.parse(localStorage.getItem('productGroup'));
    // Push the new data (whether it be an object or anything else) onto the array
    productGroup.push(info);
    // Alert the array value
    console.log(productGroup);  // Should be something like [Object array]
    // Re-serialize the array back into a string and store it in localStorage
    localStorage.setItem('productGroup', JSON.stringify(productGroup));
        }
        
        // localStorage.setItem("productGroup", JSON.stringify(productGroup));
            
            

    });