
$('.measurements').each(function(){
    $(this).keydown(function(){
    $(this).css('border', '1px solid #000');
})})


let info = {};
    let productGroup=[];
    let itemCount = JSON.parse(localStorage.getItem('count')) || 0;
    // let itemCount = 0;
        $('#add-to-cart').click(function (e) {
            let isValid = true;
            let sizeData = [];
                $('.measurements').each(function(){
                    sizeData.push($(this).val());
                });
            for (i = 0; i<sizeData.length; i++){
                if(sizeData[i].match('^[1-9]+[0-9]*$') == null){
                    $('.error').text('Vui lòng cung cấp đầy đủ số đo!')
                    $('.measurements').eq(i).css('border', '1px solid red');
                    isValid = false;
                } 
            }
            
        if (isValid == false) e.preventDefault();

        else {
            info.productName = $(".product-name").text(); // string
            info.productPrice = $(".product-price").text();  
            info.productImage = $(".product-image").text();  
            info.productQuantity = 1; 
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
             
            productGroup = JSON.parse(localStorage.getItem('productGroup')) || [];
    // Push the new data (whether it be an object or anything else) onto the array
    productGroup.push(info);
    itemCount = parseInt(itemCount) + 1;
    localStorage.setItem('count', JSON.stringify(itemCount));
    // $('.cart-icon').css('display', 'block');
    $('.cart-icon').html('<i class="fas fa-shopping-cart"></i><span> ('+ itemCount +')</span>');
    console.log(productGroup.length);
    localStorage.setItem('productGroup', JSON.stringify(productGroup));
    
    // console.log(itemCount);
    // localStorage.setItem('itemCount', JSON.stringify(productGroup.length));
    $('#myModal').hide();
    $('#noti').hide().fadeIn(800).delay(2000).fadeOut(800);
        }
    });

    
    $(document).ready(function() {
        // itemCount = JSON.parse(localStorage.getItem('itemCount')) || 0;
            $('.cart-icon').html('<i class="fas fa-shopping-cart"></i><span> ('+ itemCount +')</span>');
        
    })

    let modal = document.getElementById('myModal');
    let modalDetail = document.getElementById('modal-detail-id');
    let deleteModal = document.getElementById('delete-modal');

                window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
                if (event.target == modalDetail) {
                    modalDetail.style.display = "none";
                }
                if (event.target == deleteModal) {
                    deleteModal.style.display = "none";
                }
                }

        function hide(){
            $('#myModal').hide();
        }

        $('.cart-icon').click(function(){
                    location.href = "cart.html";
                });

