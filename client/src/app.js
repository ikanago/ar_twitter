import "../assets/app.css";

console.log("App");
const inputTweet = 5; //APIから読み込むツイートの数
const url = `https://api-5tvwyzuz5q-ue.a.run.app/home_timeline?count=${inputTweet}`;
fetch(url)
    .then(res => res.json())
    .then(data => {
        const Timeline = document.getElementById("Timeline");
        const tweetsCount = 5;
        for (let i = 0; i < tweetsCount; i++) {
            console.log(data.tweets[i].text); //JSONを取得できているかコンソールで確認

            const wholetweet = document.createElement("div"); //大枠
                wholetweet.id = "wholetweet";
            const Name = document.createElement("div");
                Name.id = "Name";
            const Userid = document.createElement("div");
                Userid.id = "Userid";
            const Text = document.createElement("div");
                Text.id = "Text";
            const Icon = document.createElement("div");
                Icon.id = "iconbox";
            const image = document.createElement("img");
                image.src = data.tweets[i].user.profile_image_url_https;
                image.id = "iconimage"


            const name = document.createTextNode(data.tweets[i].user.name);
            const userid = document.createTextNode(data.tweets[i].user.screen_name);
            const text = document.createTextNode(data.tweets[i].text);
            
        

            Name.appendChild(name);
            Userid.appendChild(userid);
            Text.appendChild(text);
            Icon.appendChild(image);
            wholetweet.appendChild(Icon);
            wholetweet.appendChild(Name);
            wholetweet.appendChild(Userid);
            wholetweet.appendChild(Text);
            Timeline.appendChild(wholetweet);
        }
    });
