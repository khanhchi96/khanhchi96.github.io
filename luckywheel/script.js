let padding = {top:20, right:40, bottom:0, left:0},
            w = 550 - padding.left - padding.right,
            h = 550 - padding.top  - padding.bottom,
            r = Math.min(w, h)/2,
            rotation = 0,
            oldrotation = 0,
            picked = 100000,
            oldpick = [],
            color = d3.scale.category20()
            // .range([d3.rgb("#116208"), d3.rgb('#129724'), d3.rgb("#268052"), d3.rgb('#101161'), d3.rgb('#fe7906'),
            // d3.rgb('#129724'), d3.rgb('#fe7906') ]);
        
        let data = [
                    {"label":"100",  "value":100,  "result":"You have won 100 points!"}, 
                    {"label":"500",  "value":500,  "result":"You have won 500 points!"},
                    {"label":"800",  "value":800,  "result":"You have won 800 points!"}, 
                    {"label":"200",  "value":200,  "result":"You have won 200 points!"}, 
                    {"label":"LOSE TURN",  "value":1,  "result":"Sorry, you have lost a turn!"}, 
                    {"label":"2000",  "value":2000,  "result":"Wow, you have won 2000 points!"}, 
                    {"label":"-300",  "value":-300,  "result":"You have lost 300 points!"}, 
                    {"label":"-700",  "value":-700,  "result":"You have lost 700 points!"}, 
                    {"label":"-400",  "value":-400,  "result":"You have lost 400 points!"}, 
                    {"label":"900",  "value":900,  "result":"You have won 900 points!"}, 
                    {"label":"-1000",  "value":-1000,  "result":"You have lost 1000 points!"}, 
                    {"label":"WIN ALL POINTS",  "value":0,  "result":"Oops! You've lost all points!"},
                    {"label":"600",  "value":600,  "result":"You have won 600 points!"}, 
                    {"label":"-100",  "value":-100,  "result":"You have lost 100 points!"},
                    {"label":"1500",  "value":1500,  "result":"You have won 1500 points!"}, 
                    {"label":"STOP",  "value":-1,  "result":"Sorry, your game has stopped! Please come back later!"}, 
                    {"label":"-1000",  "value":-1000,  "result":"You have lost 1000 points!"},
                    {"label":"-900",  "value":-900,  "result":"You have lost 900 points!"},  
                    {"label":"-200",  "value":-200,  "result":"You have lost 200 points!"}, 
                    {"label":"-500",  "value":-500,  "result":"You have lost 500 points!"},
                    {"label":"700",  "value":700,  "result":"You have won 700 points!"},
                    {"label":"300",  "value":300,  "result":"You have won 300 points!"}
        ];
        
        let svg = d3.select('#chart')
            .append("svg")
            .data([data])
            .attr("width",  w + padding.left + padding.right)
            .attr("height", h + padding.top + padding.bottom)
            .call(responsivefy);
     
           
        
        let container = svg.append("g")
            .attr("class", "chartholder")
            .attr("transform", "translate(" + (w/2 + padding.left) + "," + (h/2 + padding.top) + ")");
        let vis = container.append("g");
            
        let pie = d3.layout.pie().sort(null).value(function(d){return 1;});
        // declare an arc generator function
        let arc = d3.svg.arc().outerRadius(r);
        // select paths, use arc generator to draw
        let arcs = vis.selectAll("g.slice")
            .data(pie)
            .enter()
            .append("g")
            .attr("class", "slice");


            
        arcs.append("path")
            .attr("fill", function(d, i){ return color(i) })
            .attr("d", function (d) { return arc(d); });



            

        // add the text
        arcs.append("text").attr("transform", function(d){
                d.innerRadius = 0;
                d.outerRadius = r;
                d.angle = (d.startAngle + d.endAngle)/2;
                
                return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")translate(" + (d.outerRadius -10) +")";
            })
            .attr("text-anchor", "end")
            .text( function(d, i) {
                return data[i].label;
            });
            
            
        let arr = [];
        container.on("click", spin);
        function spin(d){
            container.on("click", null);
          
            console.log("OldPick: " + oldpick.length, "Data length: " + data.length);
            if(oldpick.length == data.length){
                console.log("done");
                container.on("click", null);
                return;
            }
            let  ps       = 360/data.length,
                 pieslice = Math.round(1440/data.length),
                 rng      = Math.floor((Math.random() * 1440) + 360);
                
            rotation = (Math.round(rng / ps) * ps);
            
            picked = Math.round(data.length - (rotation % 360)/ps);
            console.log(picked)
            picked = picked >= data.length ? (picked % data.length) : picked;
            if(oldpick.indexOf(picked) !== -1){
                d3.select(this).call(spin);
                return;
            } else {
                oldpick.push(picked);
                
            }
            
            rotation += 90 - Math.round(ps/2);
            vis.transition()
                .duration(4000)
                .attrTween("transform", rotTween)
                .each("end", function(){
                    //mark question as seen
                    d3.select(".slice:nth-child(" + (picked + 1) + ") path")
                        // .attr("fill", "#fff");/*to mau o duoc chon */
                    //populate question
                    d3.select("#result")
                        .text(data[picked].label);
                        d3.select("#ketqua h1").text(data[picked].result);
                        if (window.innerWidth < 800){
                            document.getElementById("myModal").style.display = "inline-block";
                            d3.select("#notification").text(data[picked].result);
                        }
                    oldrotation = rotation;

                
                    let a;
                    if (data[picked].label != "LOSE TURN" && data[picked].label != "LOSE ALL POINTS" && data[picked].label != "STOP"){
                        a = parseInt(data[picked].label)}
                        else{a=0};
                    if (data[picked].label == "LOSE ALL POINTS"){
                        document.getElementById("result2").innerHTML = 0;
                    }
                    if (data[picked].label == "STOP"){
                        document.getElementById("count").innerHTML = "0"; 
                        return;}
                    arr.push(a);
                    
                    
                    if(arr.length===10){document.getElementById("count").innerHTML = "0"; 
                    return;}
                    container.on("click", spin);
                    // let sum = arr.reduce((x, y) => x + y);
                    //     console.log(arr);
                        document.getElementById("count").innerHTML = 10 - arr.length;
                        let b = parseInt(document.getElementById("result2").innerHTML) || 0;
                        
                      
                        // document.getElementById("result2").innerHTML= b + a;
                        document.getElementById("result2").innerHTML= b + a;
                        localStorage.setItem("points", b+a);
                    
                });
                
        }
      
        svg.append("g")
            .attr("transform", "translate(" + (w + padding.left + padding.right) + "," + ((h/2)+padding.top) + ")")
            .append("path")
            .attr("d", "M-" + (r*.15) + ",0L0," + (r*.05) + "L0,-" + (r*.05) + "Z")
            .style({"fill":"red"}); /*pointer*/
        container.append("circle")
            .attr("cx", 0)
            .attr("cy", 0)
            .attr("r", 60)
            .style({"fill":"white","cursor":"pointer"});/* css cho spin*/
        container.append("text")
            .attr("x", 0)
            .attr("y", 15)
            .attr("text-anchor", "middle")
            .text("PLAY")
            .style({"font-weight":"bold", "font-size":"30px"});
        
        
        function rotTween(to) {
          let i = d3.interpolate(oldrotation % 360, rotation);
          return function(t) {
            return "rotate(" + i(t) + ")";
          };
        }
        
        
        function getRandomNumbers(){
            let array = new Uint16Array(1000);
            let scale = d3.scale.linear().range([360, 1440]).domain([0, 100000]);
            if(window.hasOwnProperty("crypto") && typeof window.crypto.getRandomValues === "function"){
                window.crypto.getRandomValues(array);
                console.log("works");
            } else {
                for(var i=0; i < 1000; i++){
                    array[i] = Math.floor(Math.random() * 100000) + 1;
                }
            }
            return array;
        }
   
        let modal = document.getElementById('myModal');
                window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
                }
    
        function hide(){
            document.getElementById("myModal").style.display = "none";
        }
            //make svg responsive
                function responsivefy(svg) {
            var container = d3.select(svg.node().parentNode),
                width = parseInt(svg.style("width")),
                height = parseInt(svg.style("height")),
                aspect = width / height;
            svg.attr("viewBox", "0 0 " + width + " " + height)
                .attr("preserveAspectRatio", "xMinYMid")
                .call(resize);
            d3.select(window).on("resize." + container.attr("id"), resize);
            // get width of container and resize svg to fit it
            function resize() {
                var targetWidth = parseInt(container.style("width"));
                svg.attr("width", targetWidth);
                svg.attr("height", Math.round(targetWidth / aspect));
            }
            }
                   
        if (typeof(Storage) !== "undefined") {        
            document.getElementById("result2").innerHTML = localStorage.getItem("points");
            } else {
            document.getElementById("result2").innerHTML = "Sorry, your browser does not support Web Storage...";
            }
