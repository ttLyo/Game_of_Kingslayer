var shijun =  this.document.getElementById("shijun")
var saima =  this.document.getElementById("saima")
var coldElement = this.document.getElementById("cold")
var hpDom = this.document.getElementById("hp")
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
//碰撞
//@params b dom to check
//@params len the size to check
function check_crash(b,len,callbak){
    if(Math.abs(shijun.offsetTop-b.offsetTop)<len)
    if(Math.abs(shijun.offsetLeft-b.offsetLeft)<len){
        shijun.style.left = b.offsetLeft-100+"px"
        if(callbak)callbak()
    }
}
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
    check_crash(saima,80,()=>{
        shijun.hp-=2
    })
    check_crash(document.getElementById("baijin"),80)
    check_crash(document.getElementById("xhl"),80)

    if(shijun.hp<=0){
        this.location.href="fail.html"
    }
    //通关
    if(Math.abs(shijun.offsetTop-350)<80)
    if(Math.abs(shijun.offsetLeft-950)<80){
        this.location.href="success.html"
        // this.clearInterval(check)
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
