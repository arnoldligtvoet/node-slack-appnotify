# node-slack-appnotify

Simple slack notification module (yet an other one cloned from another one)

## Usage

```javascript
import { notify } from 'node-slack-appnotify';

notify({
  token: 'YOUR OAUTH TOKEN', // starts with "xoxb-"
  channel: 'CHANNEL NAME', // without #
  data: {
    text: 'Hello',
    attachments: [
      {
        "text": "some attachment text"
      }
    ] 
  }
});
```
Configure your app the allow sending of messages: https://api.slack.com/tutorials/message-action

The `data` property takes the same configuration you find in the docs here: https://api.slack.com/docs/messages

More information on setting up webhooks: https://api.slack.com/incoming-webhooks

Builder for creating your own configuration: https://api.slack.com/docs/messages/builder

Ohh and the `notify()` function is a promise ..

Based on : https://github.com/chrisakakay/node-slack-notify
