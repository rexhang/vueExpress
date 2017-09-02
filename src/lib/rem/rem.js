function remInit(){
    var deviceWidth = document.documentElement.clientWidth;
    console.log('deviceWidth: ' + deviceWidth);
    var screenWidth = screen.width;
    console.log('screenWidth: ' + screenWidth);
    if(screenWidth >= 768) { /*document.write('请使用手机设备访问本页面'); document.body.style.display = 'none';*/ };
    var devicePixelRatio = window.devicePixelRatio;
    console.log( 'devicePixelRatio: ' + devicePixelRatio );

    var width = window.document.documentElement.getBoundingClientRect().width;
    var height = window.document.documentElement.getBoundingClientRect().height;
    var unit = 75;
    var rem = width * unit / 750;
    window.document.documentElement.style.fontSize = rem + "px";
    window.document.documentElement.setAttribute('data-unit', unit);
    window.document.documentElement.setAttribute('data-dw', width);
    window.document.documentElement.setAttribute('data-dh', height);
    window.document.documentElement.setAttribute('data-author', 'rexhang');

    var myDpr;
    if(window.devicePixelRatio){
        myDpr = window.devicePixelRatio;
    } else{
        myDpr = 1;
    }
    window.document.documentElement.setAttribute('data-jsdpr', myDpr);
}

remInit();

window.addEventListener("resize", function() {
    remInit();
}, false);