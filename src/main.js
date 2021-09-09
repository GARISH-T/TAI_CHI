let html = document.querySelector("#html");
let style = document.querySelector("#style");
let n = 0;
let string = `
/*画一个太极图
 *首先需要一个div
 *再把div变成一个圆
*/
#div1{
    width:200px;
    height:200px;
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    border-style: none;
}
/*太极分两仪
 *两仪为阴阳
 *是一黑一白
*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
#div1::before{
    height: 100px;
    width: 100px;
    border-radius: 50%;
    background: #fff;
    top:0;
    left:0;
    left:50%;
    transform: translateX(-50%);
}
#div1::after{
    height: 100px;
    width: 100px;
    border-radius: 50%;
    background: #000;
    bottom:0;
    left:0;
    left:50%;
    transform: translateX(-50%);
}
/*阳中有阴
 *阴中有阳
*/
#div1::before{
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
#div1::after{
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
`

let string2 = ``;
let step = () => {
    setTimeout(() => {
        if (string[n] === "\n") {
            string2 += "<br>";
        } else if (string[n] === " ") {
            string2 += "&nbsp;";
        } else {
            string2 += string[n];
        }
        if (n < string.length - 1) {
            n += 1;
            step();
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
    }, 20)
    window.scrollTo(0, 99999);
    html.scrollTo(0, 99999);
}

step()