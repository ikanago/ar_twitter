console.log("App");


const url = "https://api.github.com/users/mralexgray/repos";
fetch(url)
    .then(res => res.json())
    .then(data => {
        const Timeline = document.getElementById('Timeline');
        const TweetsCount =5;
        for (let i = 0; i < TweetsCount; i++) {
            console.log(data.tweets[i].text); //JSONを取得できているかコンソールで確認
            document.getElementById('honbun').innerHTML = data.tweets[i].text; // この行は確認用

            const wholetweet = document.createElement('div'); //大枠
            wholetweet.id = "wholetweet";
            const Name = document.createElement('div');
            Name.id = "Name";
            const Userid = document.createElement('div');
            Userid.id = "Userid";
            const Text = document.createElement('div');
            Text.id = "Text";


            const name = document.createTextNode(data.tweets[i].user.name);
            const userid = document.createTextNode(data.tweets[i].user.screen_name);
            const text = document.createTextNode(data.tweets[i].text);


            Name.appendChild(name)
            Userid.appendChild(userid);
            Text.appendChild(text);
            wholetweet.appendChild(Name);
            wholetweet.appendChild(Userid);
            wholetweet.appendChild(Text);
            Timeline.appendChild(wholetweet);

        }

    });

    