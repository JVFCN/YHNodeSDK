const express = require('express');
const OpenApi = require('../lib/OpenApi');
const Subscription = require('../lib/Subscription');

const app = express();
app.use(express.json());

const TOKEN = 'TOKEN';
const openApi = new OpenApi(TOKEN);
const subscription = new Subscription();

subscription.onMessageNormal((event) => {
    console.log('Received a normal message:', event);
    openApi.sendMessage(event.sender.senderId, 'user', {text: 'Hello! This is a normal message response.'});
});

subscription.onMessageInstruction((event) => {
    console.log(event);
    openApi.sendMarkdownMessage(event.sender.senderId, 'user', {text: 'Hello! This is a *markdown* message response.'});
});

subscription.onGroupJoin((event) => {
    console.log('A user joined the group:', event);
});

subscription.onGroupLeave((event) => {
    console.log('A user left the group:', event);
});
app.post('/sub', (req, res) => {
    subscription.listen(req.body);
    res.sendStatus(200);
});

const PORT = 7889;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});