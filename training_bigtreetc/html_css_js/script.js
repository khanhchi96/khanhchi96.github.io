
$('#btn').click(function(e){
    let isValid = true ;
    let a = $('#a').val().trim();
    let b = $('#b').val().trim();
    let c = $('#c').val().trim();
    let delta = (b*b - 4*a*c);
    if (isNaN(a) || isNaN(b) || isNaN(c) || a== '' || b =='' || c==''){isValid = false;  $('.error').text("Vui lòng nhập số")}
    else{ $('.error').text("")}

    if (isValid == false) e.preventDefault();
    else{
            $('#myModal').show();
            console.log(delta)
            console.log(a)
            console.log(b)
            console.log(c)
            
            if (delta < 0){
                $('#result').text('Phương trình vô nghiệm')
            }

            if (delta == 0){
                $('#result').html('Phương trình có nghiệm kép x<sub><small>1</small></sub> = x<sub><small>2</small></sub> = ' + (-(b)/(2*a)))
            }

            if (delta > 0){
                $('#result').html('Phương trình có 2 nghiệm: x<sub><small>1</small></sub> = ' + (((-b) + Math.sqrt(delta)) / (2 * a)) +
                                ', x<sub><small>2</small></sub> = ' +  (((-b) - Math.sqrt(delta)) / (2 * a)) ) 
            }
        }
})

$('#a').on('change', function(){
   if(isNaN($('#a').val().trim())){
       $('.error').text("Vui lòng nhập số")
   }
   else($('.error').text(""))
})

$('#b').on('change', function(){
    if(isNaN($('#b').val().trim())){
        $('.error').text("Vui lòng nhập số")
    }
 })

 $('#a').on('change', function(){
    if(isNaN($('#b').val().trim())){
        $('.error').text("Vui lòng nhập số")
    }
 })
