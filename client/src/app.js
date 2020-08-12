console.log("App");


const url = "https://api.github.com/users/mralexgray/repos";
fetch(url)
    .then(res => res.json())
    .then(data => {
        var Timeline = document.getElementById('Timeline');
        for (let i = 0; i < 5; i++) {
            console.log(data.tweets[i].text); //JSONを取得できているかコンソールで確認
            document.getElementById('honbun').innerHTML = data.tweets[i].text; // この行は確認用

            var wholetweet = document.createElement('div'); //大枠
            wholetweet.id = "wholetweet";
            var Name = document.createElement('div');
            Name.id = "Name";
            var Userid = document.createElement('div');
            Userid.id = "Userid";
            var Text = document.createElement('div');
            Text.id = "Text";


            var name = document.createTextNode(data.tweets[i].user.name);
            var userid = document.createTextNode(data.tweets[i].user.screen_name);
            var text = document.createTextNode(data.tweets[i].text);


            Name.appendChild(name)
            Userid.appendChild(userid);
            Text.appendChild(text);
            wholetweet.appendChild(Name);
            wholetweet.appendChild(Userid);
            wholetweet.appendChild(Text);
            Timeline.appendChild(wholetweet);

        }

    });