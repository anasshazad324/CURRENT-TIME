
setInterval(()=>{
    let mydate = new Date()
    let time = mydate.toLocaleTimeString()
    document.getElementById("time").innerHTML = time
},1000)