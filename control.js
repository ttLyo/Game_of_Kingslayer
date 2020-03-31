var shijun =  this.document.getElementById("shijun")
var coldElement = this.document.getElementById("cold")
//闪现
let blinkCd = false
function blink(){
    let x = shijun.children[0].style.transform==''?150:-150
    shijun.style.left = parseFloat(shijun.style.left)+x+"px"
    blinkCd = true;
    coldElement.innerText = "冷却中"
    coldElement.style = ""
    setTimeout(() => {
        blinkCd = false;
        coldElement.innerText = "冷却完毕"
        coldElement.style = "color:red"
    }, 3000);
}
//检测位置是否合法
function check_in_view(node){
    if(parseInt(node.style.top)<0){
        node.style.top = "0px"
    }
    if(parseInt(node.style.top)>390){
        node.style.top = "390px"
    }
    if(parseInt(node.style.left)<0){
        node.style.left = "0px"
    }
    if(parseInt(node.style.left)>document.body.clientWidth-100){
        node.style.left = document.body.clientWidth-100+"px"
    }
}
//操作
function move(event) {
    var e = event || window.event || arguments.callee.caller.arguments[0];
    saimaTop = saima.offsetTop
    shijunTop = parseFloat(shijun.style.top)
    shijunLeft = parseFloat(shijun.style.left)
    document.onkeydown = null
    setTimeout(() => {
        document.onkeydown=move
    }, 100);
    if(!e){
        alert("浏览器不支持事件")
        return
    }
    if (e.key == 'w') { // w
        shijun.style.top=(shijunTop=shijunTop-25)+"px"
    }
    if (e.key == 'a') { // a
        shijun.style.left=shijunLeft-25+"px"
        shijun.children[0].style.transform = "rotateY(180deg)"
    }
    if (e.key == 'd') { // d
        shijun.style.left=shijunLeft+25+"px"
        shijun.children[0].style.transform = ""
    }
    if (e.key == 's') { // s
        shijun.style.top=(shijunTop=shijunTop+25)+"px"
    }
    check_in_view(shijun)
    if (e.key == 'q') { // s
        if(shijun.style.animation=="")
            shijun.style.animation = "aniShijun 2s linear infinite"
        else 
        shijun.style.animation = ""

    }
    if (e.key == ' ') { // s
        if(blinkCd)return
        blink()
    }
}; 
document.onkeydown = move