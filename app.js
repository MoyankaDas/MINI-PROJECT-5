function initialize(){
    let html=document.querySelector("#html");
    let css=document.querySelector("#css");
    let js=document.querySelector("#js");
    let code=document.querySelector("#code").contentWindow.document;
    document.body.onkeyup=function(){
        code.open();
        code.writeln( 
            html.value+`<style>${css.value}</style>`+`<script>${js.value}</script>`
        );
        code.close();
    }
};
initialize();

let col1=document.querySelector("#col1");
function col11(){
    col1.style.color=col1.style.color=="white"?"red":"white";
} 
setInterval(col11,1000);

let col2=document.querySelector("#col2");
function col22(){
    col2.style.color=col2.style.color=="white"?"red":"white";
} 
setInterval(col22,1000);

let col3=document.querySelector("#col3");
function col33(){
    col3.style.color=col3.style.color=="white"?"red":"white";
} 
setInterval(col33,1000);

let col4=document.querySelector("#col4");
function col44(){
    col4.style.color=col4.style.color=="white"?"red":"white";
} 
setInterval(col44,1000);