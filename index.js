window.onload=function(){
    let shijun =  this.document.getElementById("shijun")
    let saima =  this.document.getElementById("saima")
    let coldElement = this.document.getElementById("cold")
    let hpDom = this.document.getElementById("hp")
    shijun._hp=100
    this.Object.defineProperty(shijun,"hp",{
        get:function(){
            return this._hp
        },
        set:function(value){
            hpDom.style.color = "rgb("+(100-value)*2.55+","+value*2.55+",0)"
            hpDom.innerText = value
            this._hp = value
        }
    })
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
    //碰撞
    var check = setInterval(() => {
        //被射中
        if(Math.abs(shijun.offsetTop-135)<45){
            let jian = document.getElementsByClassName("jian")
            if(jian.length>0){
                if(Math.abs(shijun.offsetLeft-jian[0].offsetLeft)<140){
                    jian[0].remove()
                    shijun.hp-=20
                }
            }
        }
        //被烧到
        let fire = document.getElementsByClassName("fireOfXHL")
        if(fire.length>0){
            if(Math.abs(shijun.offsetLeft-480)<80){
                shijun.hp-=10
                // this.clearInterval(check)
            }
        }
        //被阻挡
        if(Math.abs(shijun.offsetTop-saima.offsetTop)<80)
        if(Math.abs(shijun.offsetLeft-saima.offsetLeft)<80){
            shijun.style.left = "600px"
            shijun.hp-=2
            // this.clearInterval(check)
        }
        if(shijun.hp<=0){
            this.location.href="fail.html"
        }
        //通关
        if(Math.abs(shijun.offsetTop-350)<80)
        if(Math.abs(shijun.offsetLeft-950)<80){
            this.location.href="success.html"
            // this.clearInterval(check)
        }
        if(shijun.hp<=0){
            this.location.href="fail.html"
        }
    }, 100);
    //火焰
    let fire
    setInterval(() => {
        fire = this.document.createElement("div")
        fire.classList="fireOfXHL image"
        fire.style.zIndex=-1
        this.document.body.appendChild(fire)
        setTimeout(()=>{fire.remove()},2000)
    }, 3500);
    //射击
    let jian
    setInterval(() => {
        if(jian)jian.remove()
        jian = this.document.createElement("img")
        jian.src = "./image/jian.jpg"
        jian.classList="jian image"
        this.document.body.appendChild(jian)
    }, 2000);
}