const url = "https://api.github.com/users/mralexgray/repos";
    fetch(url)
        .then(res => res.json())
        .then(data => {
            const firstElement = data[0];
            if (firstElement["hoge"] === undefined) {
                console.error("hoge is undefined");
            }
            else {
                console.log(firstElement["hoge"]);
            }
       });
