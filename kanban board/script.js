let COLUMN_TYPE = ['todo1', 'planning1', 'doing1', 'done1'];
let DB = {
    getData: function (){
        if (typeof(Storage) !== "undefined") {
    let data;
    try {
        data = JSON.parse(localStorage.getItem('list')) || {};
    }catch(error){
        data = {};
    }

    return data;
    
        } else {
    alert('Sorry! No Web Storage support..');
    return {};
}
    },
    setData: function(data){
        localStorage.setItem('list', JSON.stringify(data));

    }
}

let list = DB.getData();


        function deleteJob (span){
            let btn = $('#deleteconfirm')
            let del = $(span).parent().parent();
            $('#myModal').show();          
            btn.off('click');  
            btn.on('click', function(){    
                let columnType = del.parent().attr('id');
                let delPosition = $('#' + columnType + '.item').index(del);
                list[columnType].splice(delPosition, 1);
                DB.setData(list);
                del.remove();
                $('#myModal').hide();
            });
            $('#cancel, #close').on('click', function(){
                $('#myModal').hide();
            }); 
        }


        function newJob (obj){
            let jobName = $('#' + `${obj.id}2`).val();
            let item ='<div class="item"><div class="item-content"><span onclick="deleteJob(this)"><i class="fas fa-trash-alt"></i></span><p class="nd">' + jobName +'</p></div></div>';
           if (!list[`${obj.id}1`]) list[`${obj.id}1`] = [];
           list[`${obj.id}1`].push(item);
           DB.setData(list);
           
            $('#' + `${obj.id}1`).append(item);
            $('#' + `${obj.id}2`).val('')

        }

        function displayWordCounter(){
                $('#done2').val($('#done2').val().substr(0, 62));
                $('#doing2').val($('#doing2').val().substr(0, 62));
                $('#planning2').val($('#planning2').val().substr(0, 62));
                $('#todo2').val($('#todo2').val().substr(0, 62));
                
        }
        
       

            $( function() {

                COLUMN_TYPE.forEach(function(type){
                    let columnType = list[type] || [];
                    columnType.forEach(function(job){
                        $('#' + type).append(job);
                    })
                });

              $( ".sorted-list" ).sortable({
                connectWith: ".sorted-list",
                placeholder: "ui-state-highlight",
                start: function(event, ui){
                    $(ui.item[0]).addClass('dragging');
                },
                stop: function(event, ui){
                    $(ui.item[0]).removeClass('dragging');
                }
              });
            } );