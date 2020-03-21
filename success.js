window.onload=function(){
    //以下是按时间显示各部分内容
    document.getElementById("title1").style.opacity=1
    setTimeout(() => {
        document.getElementById("title2").style.opacity=1
    }, 1500);
    setTimeout(() => {
        document.getElementById("content").style.opacity=1
    }, 4200);
    setTimeout(() => {
        document.getElementById("tobe").style="left:10px;opacity:1;"
    }, 5500);
    setTimeout(() => {
        let img = document.getElementsByTagName("img")//.style = "filter: grayscale(100%);-webkit-filter: grayscale(100%);"
        for(let i of img){
            // if(i.id="tobe")continue
            i.style.filter = "grayscale(100%)"
        }
        //本想显示歌词的但是不好玩就算了
        // let lyric = "I'll be the roundabout/n \
        // The words will make you out and out/n \
        // And spend the day your way/n \
        // Call it morning driving thru the sound and in and out the valley/n \
        // The music dance and sing/n \
        // They make the children really ring/n \
        // I'll spend the day your way/n \
        // Call it morning driving thru the sound and in and out the valley/n \
        // In and around the lake/n \
        // Mountains come out of the sky and they stand there/n \
        // One mile over we'll be there and we'll see you/n \
        // Ten true summers we'll be there and laughing too/n \
        // Twenty four before my love you'll see/n \
        // I'll be there with you"
        // lyric = lyric.split("/n")
    }, 7000);
    setTimeout(() => {
        document.getElementById("thanks").style="opacity:1;"
        document.getElementById("by").style="opacity:1;"
        document.getElementById("tips").style="opacity:1;"
    }, 7500);
}