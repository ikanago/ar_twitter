import "../assets/style.css";
import html2canvas from "html2canvas";
// import "aframe-html-shader";

console.log("App");
const inputTweet = 5; //APIから読み込むツイートの数
const url = `https://api-5tvwyzuz5q-ue.a.run.app/home_timeline?count=${inputTweet}`;
const url_demo = ""
fetch(url)
    .then(res => res.json())
    .then((data) => {
        const Timeline = document.getElementById("Timeline");
        const tweetsCount = 5;
        for (let i = 0; i < tweetsCount; i++) {
            console.log(data.tweets[i].text); //JSONを取得できているかコンソールで確認
            //document.getElementById("honbun").innerHTML = data.tweets[i].text; // この行は確認用

            const wholetweet = document.createElement("div"); //大枠
            wholetweet.id = "wholetweet";
            const Name = document.createElement("div");
            Name.id = "Name";
            const Userid = document.createElement("div");
            Userid.id = "Userid";
            const Text = document.createElement("div");
            Text.id = "Text";

            const name = document.createTextNode(data.tweets[i].user.name);
            const userid = document.createTextNode(
                data.tweets[i].user.screen_name
            );
            const text = document.createTextNode(data.tweets[i].text);

            Name.appendChild(name);
            Userid.appendChild(userid);
            Text.appendChild(text);
            wholetweet.appendChild(Name);
            wholetweet.appendChild(Userid);
            wholetweet.appendChild(Text);
            Timeline.appendChild(wholetweet);
        }
    })
    .then(() => {
        html2canvas(Timeline).then((canvas) => {
            var tl_canvas = document.getElementById("tl-canvas");
            console.log(canvas.width,"eeee")
            var image = canvas.getContext("2d").getImageData(0,0,canvas.width,canvas.height);
            tl_canvas.getContext("2d").putImageData(image, 0, 0);
        })
    }
        
    );
