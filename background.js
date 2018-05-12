console.log("background.js")
let winArr = []

var urlDog = chrome.runtime.getURL("./start_01.mp3");
var urlCat = chrome.runtime.getURL("./end_01.mp3");
var bark = new Pizzicato.Sound(urlDog, function() {
});

var meow = new Pizzicato.Sound(urlCat, function() {
});

chrome.runtime.onMessage.addListener(
    function(req, sender, sendResponse){
        try {

        }catch(e){
            console.log(e)
        }
        createPage(req);
        console.log(req)
    }
)

function createPage(words){
    _width = Math.floor(1280 * Math.random())
    _height = Math.floor(840 * Math.random())
    _left = Math.floor(640 * Math.random())
    _top = Math.floor(420 * Math.random())

    if(words == "customer" || words =="service"){
        var _link = createLink()
        var _winConfig = {
            url:_link,
            top:_top,
            left:_left,
            width:_width,
            height:_height,
            type:"popup"
            // active:true
        }
        chrome.windows.create(_winConfig, function(win){
            console.log("Open link:", _link)
            // console.log(win)
            winArr.push(win.tabs[0].id)
            bark.play();
            // console.log(winArr.tabs[0].id)
        })
    } else if(words == "reality"){
        meow.play()
        closeAll()
    }
}


function createLink(){
    links = ["http://img2.utuku.china.com/563x0/toutiao/20170704/9dfad124-d482-4a27-9730-2129079348d3.jpg",
    "https://ctl.s6img.com/society6/img/-a2kDpplKIs7Tm7_VlXE_kRNGP8/h_264,w_264/shams/standard/top/~artwork,fw_6114,fh_3508,fx_1558,fy_134,iw_3099,ih_3276/s6-original-art-uploads/society6/uploads/misc/87e4cf2ec7694a4e8d0ead0d623b364a/~~/cry-here-shams.jpg?wait=0&attempt=0",
    "https://i.gifer.com/DIGR.gif",
    "https://s9.rr.itc.cn/r/wapChange/20173_28_12/a6h98j1687809169542.jpg",
    "http://dreamcatcherreality.com/wp-content/uploads/2016/08/Power-of-Lucid-Dreaming.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4rJ5zatzJ9gTwp0QXyQyUMS37v7R9wSaaNlQrtJHy7Rp1RKOdLw"]

    return links[Math.floor(Math.random()*links.length)] // pick a link randomly
}

function closeAll() {

    chrome.tabs.remove(winArr, function() {
        console.log("Close All")
        winArr=[]
    })


}
