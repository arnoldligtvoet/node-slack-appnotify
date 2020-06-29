const https = require('https');

const appnotify = (args) => {
    return new Promise((resolve, reject) => {
        if (!args) {
            reject('ERR: Missing configuration');
            return;
        }
        if (!args.token) {
            reject('ERR: Missing token');
            return;
        }
        if (!args.channel) {
            reject('ERR: Missing channel');
            return;
        }
        if (!args.data || !args.data.text) {
            reject('ERR: Missing message');
            return;
        }

        const data = JSON.stringify({ channel: args.channel, text: args.data.text, attachments: args.data.attachments });
        
        const options = {
            hostname: 'slack.com',
            port: 443,
            path: '/api/chat.postMessage',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + args.token
            }
        };
        const req = https.request(options,
            res => res.statusCode === 200 ?
                resolve('OK') :
                reject(`ERR: ${res.statusCode}`)
        );

        req.write(data);
        req.end();
    });
}

module.exports = {
    appnotify
}
