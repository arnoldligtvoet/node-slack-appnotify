const https = require('https');

const notify = (args) => {
    return new Promise((resolve, reject) => {
        if (!args) {
            reject('ERR: Missing configuration');
            return;
        }
        if (!args.webhookUrl) {
            reject('ERR: Missing webhookUrl');
            return;
        }
        if (!args.data || !args.data.text) {
            reject('ERR: Missing message');
            return;
        }

        const data = JSON.stringify({ text: args.data.text, attachments: args.data.attachments });
        
        const options = {
            hostname: 'slack.com/api/',
            port: 443,
            path: 'chat.postMessage',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': args.token
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
    notify
}
