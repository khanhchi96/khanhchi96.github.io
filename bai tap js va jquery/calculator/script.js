let lastPress = false;
let mathString = {};
let memory = [];
let memoryResult = [];
const line1 = $('#line1');
const line2 = $('#line2');
const dot = $('#dot');
const whiteButton = $('.white');


$(document).ready(function(){
    reset();
});

function press(button){
    if (lastPress)line2.text('');
    line2.text(line2.text() + $(button).val());
    lastPress = false;
    if (line2.text().match(/\./g)){
        dot.prop("disabled", true);
    }
    else{dot.prop("disabled", false);}
}

function cal(button){
    whiteButton.prop("disabled",false);
    line1.html(line1.text() + line2.text() +' <small>' + $(button).html() + '</small>');
    if (mathString.length > 0){
        mathString = mathString + line2.text() + $(button).val();
    }
    else{
        mathString = line2.text() + $(button).val();
    }
    lastPress = true;
}

function sum(){
    line1.html(line1.html() + ' ' + line2.text());
    line2.text(eval(mathString + line2.text()));
    roundDecimal();
    line1.text('');
    lastPress = true;
    mathString = {};
}


whiteButton.click(function(){
    // let dotCount = line2.text().match(/\./g) || {};
    if (line2.text().toString().length >= 13){
        whiteButton.prop("disabled",true);
        lastPress = true;
    }
});



function sqr(){
    line1.text(line1.text() + 'sqr(' + line2.text() + ')');
    if (mathString.length>0){
        line2.text(eval(mathString + Math.pow(line2.text(), 2)))
    } else{
        line2.text(Math.pow(line2.text(), 2))
    }
    roundDecimal();
    line1.text('');
    mathString = {};
    lastPress = true;
    whiteButton.prop("disabled",false);
}

function sqrt(){
    line1.text(line1.text() + '√(' + line2.text() + ')');
    if (mathString.length>0){
        line2.text(eval(mathString + Math.sqrt(line2.text())))
    } else{
        line2.text(Math.sqrt(line2.text()))
    }
    roundDecimal();
    line1.text('');
    mathString = {};
    lastPress = true;
}

function inverse(){
    line1.text(line1.text() + '1/(' + line2.text() + ')');
    if (mathString.length>0){
        line2.text(eval(mathString + '1/(' + line2.text() + ')'))
    } else{
        line2.text(eval('1/(' + line2.text() + ')'))
    }
    roundDecimal();
    line1.text('');
    mathString = {};
    lastPress = true;
}

function percentage(){
    line1.text(line1.text() + ' ' + line2.text() + '%');
    if (mathString.length>0){
        line2.text(eval(mathString + (line2.text() / 100)))
    } else{
        line2.text(eval((line2.text() / 100)))
    }
    roundDecimal();
    line1.text('');
    mathString = {};
    lastPress = true;
}

function changeSide(){
    line2.text(eval(0 - line2.text()));
}

function roundDecimal(){
    if (line2.text().toString().length >= 13){
        if(line2.text().match(/[e]/g) ){
            line2.text(parseFloat(line2.text()).toPrecision(6));
        }

        else if(line2.text().match(/\./g)){
            let res = line2.text().split('.');
            let beforeDecimal = res[0];
            line2.text(parseFloat(line2.text()).toFixed(13 - beforeDecimal.toString().length))
        }

        else{
            line2.text(parseFloat(parseInt(line2.text()).toExponential()).toPrecision(6));
        }
    }
}

function backSpace() {
    line2.text(line2.text().substr(0,  line2.text().toString().length - 1));
}

function reset(){
    line1.text('');
    line2.text('0');
    lastPress = true;
}

const memoryRecall = $('#memory-recall');
const memoryClear = $('#memory-clear');
const showMemory = $('#show-memory');
const memoryBoard = $('.show-memory');
$('#memory-plus').click(function(){
    memory.push(parseInt(line2.text()));
    memoryRecall.addClass('active');
    memoryClear.addClass('active');
    showMemory.addClass('active');
    lastPress = true;
    let sumMemory = memory.reduce(function(a, b) { return a + b; }, 0);
    memoryResult.splice(memoryResult.length -1, 1, sumMemory);
    appendMemory();
});

$('#memory-minus').click(function(){
    memory.push(parseInt(0 - line2.text()));
    memoryRecall.addClass('active');
    memoryClear.addClass('active');
    showMemory.addClass('active');
    lastPress = true;
    let sumMemory = memory.reduce(function(a, b) { return a + b; }, 0);
    memoryResult.splice(memoryResult.length -1, 1, sumMemory);
    appendMemory();
});

memoryRecall.click(function(){
    line2.text(memoryResult[memoryResult.length - 1]);
    lastPress = true;
});

memoryClear.click(function(){
    memory = []; memoryResult=[];
    memoryRecall.removeClass('active');
    memoryClear.removeClass('active');
    showMemory.removeClass('active');
    lastPress = true;
});

$('#save-to-memory').click(function(){
    memoryRecall.addClass('active');
    memoryClear.addClass('active');
    showMemory.addClass('active');
    memoryResult.push(parseInt(line2.text()));
    memory.push(parseInt(line2.text()));
    lastPress = true;
    appendMemory();
});

showMemory.click(function(){
    if($(this).hasClass("active")){
        $('.button-container').toggle();
        memoryBoard.toggle();}
});

function appendMemory(){
    memoryBoard.empty();
    for(var i=memoryResult.length - 1; i>=0; i--){
        memoryBoard.append('<p>'+ memoryResult[i]+'</p>');
    }
}