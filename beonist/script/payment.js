
        $('input[name=payment]').click(function(){
            $('.warning').text('')
    })
    $('#customer-address').keydown(function(){
        $('#customer-address').siblings('span').text('')
    })
    $('#customer-name').keydown(function(){
        $('#customer-name').siblings('span').text('')
    })
    $('#customer-phone').keydown(function(){
        $('#customer-phone').siblings('span').text('')
    })
    $('#name').keydown(function(){
        $('#name').siblings('span').text('')
    })
    $('#number').keydown(function(){
        $('#number').siblings('span').text('')
    })
    $('#date').keydown(function(){
        $('#date').siblings('span').text('')
    })

let customerInfo = {};

$('#complete').click(function (e) {
        validationInfo();
        validationPayment();
        let isValid = true;
        if (!$("input[name='payment']:checked").val()) {
            $('.warning').text('Hãy chọn phương thức thanh toán!');
            isValid = false;   
        } 
    if (isValid == false){e.preventDefault();}
    else {
        customerInfo = JSON.parse(localStorage.getItem('customerInfo')) || {};
        customerInfo.name = $('#customer-name').val();
        customerInfo.address = $('#customer-address').val();
        customerInfo.phone = $('#customer-phone').val();
        customerInfo.paymentMethod = $("input[name='payment']:checked").val();
        localStorage.setItem('customerInfo', JSON.stringify(customerInfo));
        window.location.href = "confirm.html";
    }
})

function show1(){
    $('.transfer-info').css('display', 'block');
    $('.bank-card-option').css('display', 'none');
    $('.bank-card-info').css('display', 'none');
    scrollBottom();
}
function show2(){
    $('.bank-card-option').css('display', 'block');
    $('.transfer-info').css('display', 'none');
    scrollBottom();
}

function show3(){
    $('.transfer-info').css('display', 'none');
    $('.bank-card-option').css('display', 'none');
    $('.bank-card-info').css('display', 'none');
}

function show4(){
    $('.bank-card-info').css('display', 'block');
    scrollBottom();
}
        