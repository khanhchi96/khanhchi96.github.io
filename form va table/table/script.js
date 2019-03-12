function sorttable(n, obj) {
    let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    let a = document.getElementById(`${obj.id}1`);
    table = document.getElementById("myTable");
    switching = true;
    dir = "asc"; 
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("td")[n];
        y = rows[i + 1].getElementsByTagName("td")[n];
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldSwitch= true;
            a.innerHTML='<i class="fas fa-angle-double-up"></i>';
        
            break;
    
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            a.innerHTML='<i class="fas fa-angle-double-down"></i>';
            break;
          }
        }
       
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount ++;   
      } else {
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }

  function goto(obj) {
    document.getElementById('name1').style.display= 'none';
    document.getElementById('image1').style.display= 'none';
    document.getElementById('birth1').style.display= 'none';
    document.getElementById('gender1').style.display= 'none';
    document.getElementById('email1').style.display= 'none';
    document.getElementById('phone1').style.display= 'none';
    document.getElementById(`${obj.id}1`).style.display="inline-block";
};