
        $(document).ready(function(){
            $('.datepicker').datepicker();
            $('.timepicker').timepicker();

            $('#date').mousedown(function(){
            $('#date').siblings('span').text('')
        })
            $('#time').mousedown(function(){
            $('#time').siblings('span').text('')
        })
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


let reservationInfo={};
        $('#click-to-reserve').click(function (e) {
            validationInfo();
            let isValid = true;
            if ($('#date').val()  == "" ){
                $('#date').siblings('span').text('Vui lòng cung cấp đầy đủ thông tin!')
                isValid = false;    
            }
            if ($('#time').val()  == "" ){
                $('#time').siblings('span').text('Vui lòng cung cấp đầy đủ thông tin!')
                isValid = false;    
            }
        if (isValid == false) e.preventDefault();

        else {
            reservationInfo = JSON.parse(localStorage.getItem('reservationInfo')) || {};
                reservationInfo.name = $('#customer-name').val();
                reservationInfo.date = $('#date').val();
                reservationInfo.phone = $('#customer-phone').val();
                reservationInfo.address = $('#customer-address').val();
                reservationInfo.note = $('#note').val();
            localStorage.setItem('reservationInfo', JSON.stringify(reservationInfo));
            location.href = "reservation-confirm.html";
        }
    })
