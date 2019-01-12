let COLUMN_TYPE = ['todo1', 'planning1', 'doing1', 'done1'];

let DB = {
    getData: function (){
        if (typeof(Storage) !== "undefined") {
    let data;
    try {
        data = JSON.parse(localStorage.getItem('list')) || {};
        return data;
    }catch(error){
        data = {};
        alert('Sorry! No Web Storage support..');
    return {};
    }
    
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
                let delPosition = $(`#${columnType} .item`).index(del);
                list[columnType].splice(delPosition, 1);
                DB.setData(list);
                del.remove();
                $('#myModal').hide();
               
                document.getElementById(columnType + 'a').innerText = ' (' + $(`#${columnType} .item`).length + ')';
                document.getElementById(columnType + 'b').style.display="block"
            });
           
            
            $('#cancel, #close').on('click', function(){
                $('#myModal').hide();
            }); 
            
        }



        function newJob (obj){
            let jobName = $('#' + `${obj.id}2`).val();
            let item ='<div class="item"><div class="item-content"><span onclick="deleteJob(this)"><i class="fas fa-trash-alt"></i></span><p class="nd">' + jobName +'</p></div></div>';
            if(jobName.trim() !== ''){
            if (!list[`${obj.id}1`]) list[`${obj.id}1`] = [];
           list[`${obj.id}1`].push(item);
           DB.setData(list);
            $('#' + `${obj.id}1`).append(item);
            $('#' + `${obj.id}2`).val('');
            
            
            document.getElementById(`${obj.id}1a`).innerHTML = ' (' + $(`#${obj.id}1 .item`).length +')';
                
            if( $(`#${obj.id}1 .item`).length ==  document.getElementById(`${obj.id}1c`).value){
                document.getElementById(obj.id + 'b').style.display='none';
            }
        
           
        }};


        function addJob(e, type, input){
            let newItem = $(input).val();
            let addedItem='<div class="item"><div class="item-content"><span onclick="deleteJob(this)"><i class="fas fa-trash-alt"></i></span><p class="nd">' +  newItem +'</p></div></div>';
            let event=window.event || e;
            if(event.keyCode === 13 && newItem.trim() !== ''){
                if(!list[type]) list[type] = [];
                list[type].push(addedItem);
                DB.setData(list);
                $('#' + type).append(addedItem);   
                $(input).val('');
                
                
                document.getElementById(`${type}a`).innerHTML = ' (' + $(`#${type} .item`).length + ')';
                
                if( $(`#${type} .item`).length ==  document.getElementById(`${type}c`).value){
                    document.getElementById(type + 'b').style.display='none';
                }
          
            }
                $('#done2').val($('#done2').val().substr(0, 62));
                $('#doing2').val($('#doing2').val().substr(0, 62));
                $('#planning2').val($('#planning2').val().substr(0, 62));
                $('#todo2').val($('#todo2').val().substr(0, 62));
        };
            
                
        // function count(){
        //     document.getElementById('todo1a').innerHTML = list['#todo1a .item'].length;
        // }
       

            $( function() {

                COLUMN_TYPE.forEach(function(type){
                    let columnType = list[type] || [];
                   
                    columnType.forEach(function(job){
                        $('#' + type).append(job);
                        document.getElementById(type + 'a').innerHTML = ' (' + $('#' + type + ' .item').length +')';
                        if($('#' + type + ' .item').length == document.getElementById(type + 'c').value){
                            document.getElementById(type + 'b').style.display='none'
                        }
                        else{document.getElementById(type + 'b').style.display='block'}
                    })
                });


              $( ".sorted-list" ).sortable({
                connectWith: ".sorted-list", 
                placeholder: "ui-state-highlight",
                start: function (event, ui){
                    $(ui.item[0]).addClass('dragging');
                ui.item.oldColumnType = ui.item.parent().attr('id');
                ui.item.oldItemPosition = ui.item.index();
                    
                },
                stop: function (event, ui){
                    $(ui.item[0]).removeClass('dragging');

                    let a = ui.item;
                    let oldColumnType = a.oldColumnType;
                    let oldItemPosition = a.oldItemPosition;
                    let newColumnType = a.parent().attr('id');
                    let newItemPosition = a.index();

                    let html = a[0].outerHTML;  
                    
                    if(!list[oldColumnType]) list[oldColumnType] = [];
                    list[oldColumnType].splice(oldItemPosition-1, 1);
                    if(!list[newColumnType]) list[newColumnType] = [];
                    list[newColumnType].splice(newItemPosition-1, 0, html);
                
                    DB.setData(list);
                    document.getElementById(`${oldColumnType}a`).innerHTML = ' (' + $(`#${oldColumnType} .item`).length + ')';
                    
                        document.getElementById(oldColumnType + 'b').style.display='block';
                    
                    document.getElementById(`${newColumnType}a`).innerHTML = ' (' + $(`#${newColumnType} .item`).length + ')';
                    if( $(`#${newColumnType} .item`).length ==  document.getElementById(`${newColumnType}c`).value){
                        document.getElementById(newColumnType + 'b').style.display='none';
                    }
                },
              });
            } );


        document.getElementById("todo1c").value = getSavedValue("todo1c");   
        document.getElementById("planning1c").value = getSavedValue("planning1c"); 
        document.getElementById("doing1c").value = getSavedValue("doing1c");  
          
        function saveValue(e){
            let id = e.id;  
            let val = e.value; 
            let newid = id.replace('c', '')
            localStorage.setItem(id, val);// ghi de len gia tri co san
            if (val > $(`#${newid} .item`).length){
                document.getElementById(`${newid}b`).style.display='block';
            }
            else{document.getElementById(`${newid}b`).style.display='none';}
        }

       
        function getSavedValue  (v){
            if (localStorage.getItem(v) === null) {
                return "";
            }
            return localStorage.getItem(v);
        }