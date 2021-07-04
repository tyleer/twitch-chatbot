const tmi = require('tmi.js');

const client = new tmi.Client({
    options: { debug: true },
    connection: {
        secure: true,
        reconnect: true
    },
    identity: {
        username: "", //Twitch kullanıcı adınız!
        password: "" //Oauth key (README kısmında nasıl alacağınız mevcuttur.)
    },
    channels: [""] //katılınacak kanalların adları Örn: ["Kanal1", "Kanal2", "Kanal3"] bu şekilde olmalıdır kesinlikle dikkat edin! 
});

client.connect();

client.on("message", (channel, tags, message, self) => {
    if (self) return; // bot kendi gönderdiği mesajları görmezden gelir.

    if (message == "selam") {
        client.say(channel, "@" + tags["username"] + " Selam, hoş geldin");
    }

    if (message == "slm") {
        client.say(channel, "@" + tags["username"] + " Selam, hoş geldin");
    }

    if (message == 'sa') {
        client.say(channel, "As hg");
    }

    if (message == 'merhaba') {
        client.say(channel, "Merhaba, hg");
    }

    if (message == 'naber') {
        client.say(channel, "iyi sen");
    }

});