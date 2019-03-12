
        function GetURLParameter(sParam)
        {
            let sPageURL = window.location.search.substring(1);
            let sURLVariables = sPageURL.split('&');
            for (i = 0; i < sURLVariables.length; i++)
            {
                let sParameterName = sURLVariables[i].split('=');
                if (sParameterName[0] == sParam)
                {
                    return decodeURIComponent(sParameterName[1]);
                }
            }
        }
        
        let lastname = GetURLParameter('lastname');
        let middlename= GetURLParameter('middlename');
        let firstname = GetURLParameter('firstname');
        let day = GetURLParameter('day');
        let month = GetURLParameter('month');
        let year = GetURLParameter('year');
        let gender= GetURLParameter('gender');
        let LGBT=GetURLParameter('LGBT');
        let address = GetURLParameter('address');
        let phone = GetURLParameter('phone');
        let email = GetURLParameter('email');
        
        
        document.getElementById("name").innerHTML="Họ tên: " + lastname + " " + middlename + " " + firstname;
        document.getElementById("birthday").innerHTML="Ngày sinh: " + day + " tháng " + month + " năm " + year; 
        function gioitinh(){
            if (gender=="on"){document.getElementById("gender").innerHTML="Giới tính: " + LGBT.split("+").join(" ")}
            else {document.getElementById("gender").innerHTML="Giới tính: " + gender}
        }
        document.getElementById("address").innerHTML="Địa chỉ: " + address.split("+").join(" ");
        document.getElementById("phone").innerHTML="Số điện thoại: " + phone.split("+").join(" ");
        document.getElementById("email").innerHTML="Email: " + email;
            </script>