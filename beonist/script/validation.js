function validationInfo(){
    let isValid = true;
    if ($('#customer-name').val().match('^[a-zA-Z ]+$') == null){
        $('#customer-name').siblings('span').text('Hãy điền đúng thông tin!')
        isValid = false;
    }

    if ($('#customer-address').val().trim() == ''){
        $('#customer-address').siblings('span').text('Hãy điền thông tin này!')
        isValid = false;
    }

    if ($('#customer-phone').val().match('^[0]{1}[19]{1}[0-9]{8,9}$') == null){
        $('#customer-phone').siblings('span').text('Hãy điền đúng thông tin!')
        isValid = false;
    }
}

function validationPayment(){
    let isValid = true;
    // if (!$("input[name='payment']:checked").val()) {
    //     $('.warning').text('Hãy chọn phương thức thanh toán!');
    //     isValid = false;   
    // } 
    if ($('#bank-card').prop('checked') && !$("input[name='card']:checked").val()){
        $('.warning').text('Hãy chọn phương thức thanh toán!');
        isValid = false;
    }
    
    if ($('#bank-card').prop('checked') && ($('#visa').prop('checked') || $('#mastercard').prop('checked') || $('#amex').prop('checked') || $('#domestic').prop('checked'))  
    && $('#number').val().match("^((67\d{2})|(4\d{3})|(5[1-5]\d{2})|(6011))-?\s?\d{4}-?\s?\d{4}-?\s?\d{4}|3[4,7]\d{13}$") == null){
        $('#number').siblings('span').text('Hãy điền đúng thông tin!');
        isValid = false;
    }

    if ($('#bank-card').prop('checked') && ($('#visa').prop('checked') || $('#mastercard').prop('checked') || $('#amex').prop('checked') || $('#domestic').prop('checked'))  
    && $('#name').val().match("[A-Z ]+") == null){
        $('#name').siblings('span').text('Hãy điền đúng thông tin!');
        isValid = false;
    }

    if ($('#bank-card').prop('checked') && ($('#visa').prop('checked') || $('#mastercard').prop('checked') || $('#amex').prop('checked') || $('#domestic').prop('checked'))  
    && $('#date').val().match("(((0[123456789]|10|11|12)([/])(([1][9][0-9][0-9])|([2][0-9][0-9][0-9]))))") == null){
        $('#date').siblings('span').text('Hãy điền đúng thông tin!');
        isValid = false;
    }
}