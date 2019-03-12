let d = document.getElementById("day");
        let m = document.getElementById("month");
        let y = document.getElementById("year");
        function birthday() {
            for (i = 1; i <= 31; i++) {
                d.insertAdjacentHTML('beforeend', `
             <option value="${i}">${i}</option>
            `)
            }
            for (i = 1; i <= 12; i++) {
                m.insertAdjacentHTML('beforeend', `
             <option value="${i}">${i}</option>
            `)
            }
            let n = 2000;
            for (i = 0; i <= 60; i++) {
                y.insertAdjacentHTML('beforeend', `
             <option value="${n - i}">${n - i}</option>
            `)
            }
        }
        function show1() {
            document.getElementById('gioitinh').style.display = 'none';
        }
        function show2() {
            document.getElementById('gioitinh').style.display = 'inline-block';
        }
        
        function goto(obj) {
            document.getElementById('phone1').style.display= 'none';
            document.getElementById('email1').style.display= 'none';
            document.getElementById('password1').style.display= 'none';
            document.getElementById('facebook1').style.display= 'none';
            document.getElementById(`${obj.id}1`).style.display="inline-block";
        };
    
        let isValid = true;
        $('#form-register').on('submit', function () {
            
            if ($('#lastname').val().trim() == "" || $('#firstname').val().trim() == "") {
                $('#firstname').next('span').text('Hãy điền đầy đủ họ tên!')
                isValid = false;
            } else {
                $('#firstname').next('span').text('');
            }
            let ngay = $('#day').val();
            let thang = $('#month').val();
            let nam = $('#year').val();
            if (isNaN(ngay) || isNaN(thang) || isNaN(nam)) {
                $('#year').next('span').text(' Hãy điền đầy đủ ngày tháng năm sinh!')
                isValid = false;
            } else {
                $('#year').next('span').text('');
            }

            
            if (!$("input[name='gender']:checked").val()) {
                document.getElementById('chi').innerHTML = ' Hãy chọn giới tính';
                isValid = false;
            }
            else {
                document.getElementById('chi').innerHTML = '';
                if($('#LGBT').prop('checked')){
            if ($('#gioitinh').val() == "Chọn giới tính ...") {
                document.getElementById('chi').innerHTML = ' Hãy chọn giới tính!';
                isValid = false;
            }
            else {
                document.getElementById('chi').innerHTML = '';
            }}
            }
            
            let didong = $('#phone').val().trim();
            didong = didong.replace('(+84)', '0');
            didong = didong.replace('+84', '0');
            didong = didong.replace('0084', '0');
            didong = didong.replace(/ /g, '');
            if (didong != '') {
                let firstNumber = didong.substring(0, 2);
                if ((firstNumber == '09' || firstNumber == '08' || firstNumber == '07' || firstNumber == '05' || firstNumber == '03') && didong.length == 10) { $('#phone').next('span').text(''); }
                else {
                    $('#phone').next('span').text('Hãy điền đúng số điện thoại!');
                    isValid = false;
                }
            }

            if ($('#email').val().match(/^((([!#$%&'*+\-/=?^_`{|}~\w])|([!#$%&'*+\-/=?^_`{|}~\w][!#$%&'*+\-/=?^_`{|}~\.\w]{0,}[!#$%&'*+\-/=?^_`{|}~\w]))[@]\w+([-.]\w+)*\.\w+([-.]\w+)*)$/) == null) {
                $('#email').next('span').text(' Hãy điền địa chỉ email! Mẫu email: id@example.com')
                isValid = false;
            } else {
                $('#email').next('span').text('');
            }

            if (didong != '') {
            if ($('#facebook').val().match(/(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[?\w\-]*\/)?(?:profile.php\?id=(?=\d.*))?([\w\-]*)?/) == null) {
                $('#facebook').next('span').text(' Hãy điền địa chỉ facebook hợp lệ!')
                isValid = false;
            } else {
                $('#facebook').next('span').text('');
            }
            }

            if ($('#password').val().match(/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])[\w\d!@#$%_]{6,40}$/) == null) {
                $('#password').next('span').text('Hãy điền mật khẩu đúng quy định!')
                isValid = false;
            } else {
                $('#password').next('span').text('');
            }

            if ($('#confirm').val() !== $('#password').val()) {
                $('#confirm').next('span').text('Mật khẩu không khớp!')
                isValid = false;
            } else {
                $('#confirm').next('span').text('');
            }
            return isValid;
        });
        