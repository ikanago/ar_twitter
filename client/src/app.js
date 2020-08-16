import "../assets/style.css";
import html2canvas from "html2canvas";
// import "aframe-html-shader";

console.log("App");
const inputTweet = 5; //APIから読み込むツイートの数
const url = `https://api-5tvwyzuz5q-ue.a.run.app/home_timeline?count=${inputTweet}`;
const url_demo = "";
/*fetch(url)
    .then(res => res.json())
    */
   const mockP = new Promise((resolve, reject) => {
       if ('OK') {
            resolve(1);
        } else {
            reject(new Error('error'));
        }
   })
   mockP.then(() => { 
        const data = getMockJson();
        console.log(data)
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
        html2canvas(Timeline, {width: 1200, height: 3000}).then(canvas => {
            var tl_canvas = document.getElementById("tl-canvas");
            console.log(canvas.width, "eeee");
            var image = canvas
                .getContext("2d")
                .getImageData(0, 0, canvas.width, canvas.height);
            tl_canvas.getContext("2d").putImageData(image, 0, 0);
        })
    .then(() => {
        Timeline.style.display = "none";
    } 
    );
    });

function getMockJson() {
    return {
        "tweets": [
            {
                "created_at": "Wed Oct 10 20:19:24 +0000 2018",
                "id": 1050118621198921728,
                "id_str": "1050118621198921728",
                "text": "これが一番目のツイート。",
                "truncated": true,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [
                        {
                            "url": "https://t.co/MkGjXf9aXm",
                            "expanded_url": "https://twitter.com/i/web/status/1050118621198921728",
                            "display_url": "twitter.com/i/web/status/1…",
                            "indices": [117, 140]
                        }
                    ]
                },
                "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 6253282,
                    "id_str": "6253282",
                    "name": "Twitter API",
                    "screen_name": "TwitterAPI",
                    "location": "San Francisco, CA",
                    "description": "The Real Twitter API. Tweets about API changes, service issues and our Developer Platform. Don't get an answer? It's on my website.",
                    "url": "https://t.co/8IkCzCDr19",
                    "entities": {
                        "url": {
                            "urls": [
                                {
                                    "url": "https://t.co/8IkCzCDr19",
                                    "expanded_url": "https://developer.twitter.com",
                                    "display_url": "developer.twitter.com",
                                    "indices": [0, 23]
                                }
                            ]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 6128663,
                    "friends_count": 12,
                    "listed_count": 12900,
                    "created_at": "Wed May 23 06:01:13 +0000 2007",
                    "favourites_count": 32,
                    "utc_offset": null,
                    "time_zone": null,
                    "geo_enabled": null,
                    "verified": true,
                    "statuses_count": 3659,
                    "lang": "null",
                    "contributors_enabled": null,
                    "is_translator": null,
                    "is_translation_enabled": null,
                    "profile_background_color": "null",
                    "profile_background_image_url": "null",
                    "profile_background_image_url_https": "null",
                    "profile_background_tile": null,
                    "profile_image_url": "null",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/942858479592554497/BbazLO9L_normal.jpg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/6253282/1497491515",
                    "profile_link_color": "null",
                    "profile_sidebar_border_color": "null",
                    "profile_sidebar_fill_color": "null",
                    "profile_text_color": "null",
                    "profile_use_background_image": null,
                    "has_extended_profile": null,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": null,
                    "follow_request_sent": null,
                    "notifications": null,
                    "translator_type": "null"
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 161,
                "favorite_count": 296,
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "possibly_sensitive_appealable": false,
                "lang": "en"
            },
            {
                "created_at": "Wed Oct 10 20:19:24 +0000 2018",
                "id": 1050118621198921728,
                "id_str": "1050118621198921728",
                "text": "nibannme",
                "truncated": true,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [
                        {
                            "url": "https://t.co/MkGjXf9aXm",
                            "expanded_url": "https://twitter.com/i/web/status/1050118621198921728",
                            "display_url": "twitter.com/i/web/status/1…",
                            "indices": [117, 140]
                        }
                    ]
                },
                "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 6253282,
                    "id_str": "6253282",
                    "name": "Twitter API",
                    "screen_name": "TwitterAPI",
                    "location": "San Francisco, CA",
                    "description": "The Real Twitter API. Tweets about API changes, service issues and our Developer Platform. Don't get an answer? It's on my website.",
                    "url": "https://t.co/8IkCzCDr19",
                    "entities": {
                        "url": {
                            "urls": [
                                {
                                    "url": "https://t.co/8IkCzCDr19",
                                    "expanded_url": "https://developer.twitter.com",
                                    "display_url": "developer.twitter.com",
                                    "indices": [0, 23]
                                }
                            ]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 6128663,
                    "friends_count": 12,
                    "listed_count": 12900,
                    "created_at": "Wed May 23 06:01:13 +0000 2007",
                    "favourites_count": 32,
                    "utc_offset": null,
                    "time_zone": null,
                    "geo_enabled": null,
                    "verified": true,
                    "statuses_count": 3659,
                    "lang": "null",
                    "contributors_enabled": null,
                    "is_translator": null,
                    "is_translation_enabled": null,
                    "profile_background_color": "null",
                    "profile_background_image_url": "null",
                    "profile_background_image_url_https": "null",
                    "profile_background_tile": null,
                    "profile_image_url": "null",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/942858479592554497/BbazLO9L_normal.jpg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/6253282/1497491515",
                    "profile_link_color": "null",
                    "profile_sidebar_border_color": "null",
                    "profile_sidebar_fill_color": "null",
                    "profile_text_color": "null",
                    "profile_use_background_image": null,
                    "has_extended_profile": null,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": null,
                    "follow_request_sent": null,
                    "notifications": null,
                    "translator_type": "null"
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 161,
                "favorite_count": 296,
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "possibly_sensitive_appealable": false,
                "lang": "en"
            },
            {
                "created_at": "Wed Oct 10 20:19:24 +0000 2018",
                "id": 1050118621198921728,
                "id_str": "1050118621198921728",
                "text": "three wow wow",
                "truncated": true,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [
                        {
                            "url": "https://t.co/MkGjXf9aXm",
                            "expanded_url": "https://twitter.com/i/web/status/1050118621198921728",
                            "display_url": "twitter.com/i/web/status/1…",
                            "indices": [117, 140]
                        }
                    ]
                },
                "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 6253282,
                    "id_str": "6253282",
                    "name": "nyamu",
                    "screen_name": "nyamu",
                    "location": "San Francisco, CA",
                    "description": "The Real Twitter API. Tweets about API changes, service issues and our Developer Platform. Don't get an answer? It's on my website.",
                    "url": "https://t.co/8IkCzCDr19",
                    "entities": {
                        "url": {
                            "urls": [
                                {
                                    "url": "https://t.co/8IkCzCDr19",
                                    "expanded_url": "https://developer.twitter.com",
                                    "display_url": "developer.twitter.com",
                                    "indices": [0, 23]
                                }
                            ]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 6128663,
                    "friends_count": 12,
                    "listed_count": 12900,
                    "created_at": "Wed May 23 06:01:13 +0000 2007",
                    "favourites_count": 32,
                    "utc_offset": null,
                    "time_zone": null,
                    "geo_enabled": null,
                    "verified": true,
                    "statuses_count": 3659,
                    "lang": "null",
                    "contributors_enabled": null,
                    "is_translator": null,
                    "is_translation_enabled": null,
                    "profile_background_color": "null",
                    "profile_background_image_url": "null",
                    "profile_background_image_url_https": "null",
                    "profile_background_tile": null,
                    "profile_image_url": "null",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/942858479592554497/BbazLO9L_normal.jpg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/6253282/1497491515",
                    "profile_link_color": "null",
                    "profile_sidebar_border_color": "null",
                    "profile_sidebar_fill_color": "null",
                    "profile_text_color": "null",
                    "profile_use_background_image": null,
                    "has_extended_profile": null,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": null,
                    "follow_request_sent": null,
                    "notifications": null,
                    "translator_type": "null"
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 161,
                "favorite_count": 296,
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "possibly_sensitive_appealable": false,
                "lang": "en"
            },
            {
                "created_at": "Wed Oct 10 20:19:24 +0000 2018",
                "id": 1050118621198921728,
                "id_str": "1050118621198921728",
                "text": "これが4番目のツイート。きもちいいいい朝だ。ぽきた。魔剤ンゴw",
                "truncated": true,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [
                        {
                            "url": "https://t.co/MkGjXf9aXm",
                            "expanded_url": "https://twitter.com/i/web/status/1050118621198921728",
                            "display_url": "twitter.com/i/web/status/1…",
                            "indices": [117, 140]
                        }
                    ]
                },
                "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 6253282,
                    "id_str": "6253282",
                    "name": "4浪仮面",
                    "screen_name": "kamen",
                    "location": "San Francisco, CA",
                    "description": "The Real Twitter API. Tweets about API changes, service issues and our Developer Platform. Don't get an answer? It's on my website.",
                    "url": "https://t.co/8IkCzCDr19",
                    "entities": {
                        "url": {
                            "urls": [
                                {
                                    "url": "https://t.co/8IkCzCDr19",
                                    "expanded_url": "https://developer.twitter.com",
                                    "display_url": "developer.twitter.com",
                                    "indices": [0, 23]
                                }
                            ]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 6128663,
                    "friends_count": 12,
                    "listed_count": 12900,
                    "created_at": "Wed May 23 06:01:13 +0000 2007",
                    "favourites_count": 32,
                    "utc_offset": null,
                    "time_zone": null,
                    "geo_enabled": null,
                    "verified": true,
                    "statuses_count": 3659,
                    "lang": "null",
                    "contributors_enabled": null,
                    "is_translator": null,
                    "is_translation_enabled": null,
                    "profile_background_color": "null",
                    "profile_background_image_url": "null",
                    "profile_background_image_url_https": "null",
                    "profile_background_tile": null,
                    "profile_image_url": "null",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/942858479592554497/BbazLO9L_normal.jpg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/6253282/1497491515",
                    "profile_link_color": "null",
                    "profile_sidebar_border_color": "null",
                    "profile_sidebar_fill_color": "null",
                    "profile_text_color": "null",
                    "profile_use_background_image": null,
                    "has_extended_profile": null,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": null,
                    "follow_request_sent": null,
                    "notifications": null,
                    "translator_type": "null"
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 161,
                "favorite_count": 296,
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "possibly_sensitive_appealable": false,
                "lang": "en"
            },
            {
                "created_at": "Wed Oct 10 20:19:24 +0000 2018",
                "id": 1050118621198921728,
                "id_str": "1050118621198921728",
                "text": "これが5番目のツイート。",
                "truncated": true,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [
                        {
                            "url": "https://t.co/MkGjXf9aXm",
                            "expanded_url": "https://twitter.com/i/web/status/1050118621198921728",
                            "display_url": "twitter.com/i/web/status/1…",
                            "indices": [117, 140]
                        }
                    ]
                },
                "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 6253282,
                    "id_str": "6253282",
                    "name": "第五夫人",
                    "screen_name": "fujin",
                    "location": "San Francisco, CA",
                    "description": "The Real Twitter API. Tweets about API changes, service issues and our Developer Platform. Don't get an answer? It's on my website.",
                    "url": "https://t.co/8IkCzCDr19",
                    "entities": {
                        "url": {
                            "urls": [
                                {
                                    "url": "https://t.co/8IkCzCDr19",
                                    "expanded_url": "https://developer.twitter.com",
                                    "display_url": "developer.twitter.com",
                                    "indices": [0, 23]
                                }
                            ]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 6128663,
                    "friends_count": 12,
                    "listed_count": 12900,
                    "created_at": "Wed May 23 06:01:13 +0000 2007",
                    "favourites_count": 32,
                    "utc_offset": null,
                    "time_zone": null,
                    "geo_enabled": null,
                    "verified": true,
                    "statuses_count": 3659,
                    "lang": "null",
                    "contributors_enabled": null,
                    "is_translator": null,
                    "is_translation_enabled": null,
                    "profile_background_color": "null",
                    "profile_background_image_url": "null",
                    "profile_background_image_url_https": "null",
                    "profile_background_tile": null,
                    "profile_image_url": "null",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/942858479592554497/BbazLO9L_normal.jpg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/6253282/1497491515",
                    "profile_link_color": "null",
                    "profile_sidebar_border_color": "null",
                    "profile_sidebar_fill_color": "null",
                    "profile_text_color": "null",
                    "profile_use_background_image": null,
                    "has_extended_profile": null,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": null,
                    "follow_request_sent": null,
                    "notifications": null,
                    "translator_type": "null"
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 161,
                "favorite_count": 296,
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "possibly_sensitive_appealable": false,
                "lang": "en"
            },
            {
                "created_at": "Wed Oct 10 20:19:24 +0000 2018",
                "id": 1050118621198921728,
                "id_str": "1050118621198921728",
                "text": "これが6番目のツイート。",
                "truncated": true,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [
                        {
                            "url": "https://t.co/MkGjXf9aXm",
                            "expanded_url": "https://twitter.com/i/web/status/1050118621198921728",
                            "display_url": "twitter.com/i/web/status/1…",
                            "indices": [117, 140]
                        }
                    ]
                },
                "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 6253282,
                    "id_str": "6253282",
                    "name": "6浪",
                    "screen_name": "全人類がっこうぐらしを見ろ",
                    "location": "San Francisco, CA",
                    "description": "The Real Twitter API. Tweets about API changes, service issues and our Developer Platform. Don't get an answer? It's on my website.",
                    "url": "https://t.co/8IkCzCDr19",
                    "entities": {
                        "url": {
                            "urls": [
                                {
                                    "url": "https://t.co/8IkCzCDr19",
                                    "expanded_url": "https://developer.twitter.com",
                                    "display_url": "developer.twitter.com",
                                    "indices": [0, 23]
                                }
                            ]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 6128663,
                    "friends_count": 12,
                    "listed_count": 12900,
                    "created_at": "Wed May 23 06:01:13 +0000 2007",
                    "favourites_count": 32,
                    "utc_offset": null,
                    "time_zone": null,
                    "geo_enabled": null,
                    "verified": true,
                    "statuses_count": 3659,
                    "lang": "null",
                    "contributors_enabled": null,
                    "is_translator": null,
                    "is_translation_enabled": null,
                    "profile_background_color": "null",
                    "profile_background_image_url": "null",
                    "profile_background_image_url_https": "null",
                    "profile_background_tile": null,
                    "profile_image_url": "null",
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/942858479592554497/BbazLO9L_normal.jpg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/6253282/1497491515",
                    "profile_link_color": "null",
                    "profile_sidebar_border_color": "null",
                    "profile_sidebar_fill_color": "null",
                    "profile_text_color": "null",
                    "profile_use_background_image": null,
                    "has_extended_profile": null,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": null,
                    "follow_request_sent": null,
                    "notifications": null,
                    "translator_type": "null"
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 161,
                "favorite_count": 296,
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "possibly_sensitive_appealable": false,
                "lang": "en"
            }
        ]
    }
    
}