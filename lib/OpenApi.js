const axios = require('axios');

class OpenApi {
    constructor(token) {
        this.token = token;
        this.baseUrl = 'https://chat-go.jwzhd.com/open-apis/v1';
    }

    async sendMessage(recvId, recvType, content) {
        return this._sendMessage(recvId, recvType, 'text', content);
    }

    async sendMarkdownMessage(recvId, recvType, content) {
        return this._sendMessage(recvId, recvType, 'markdown', content);
    }

    async _sendMessage(recvId, recvType, contentType, content) {
        const params = {
            recvId,
            recvType,
            contentType,
            content,
        };
        const headers = { 'Content-Type': 'application/json' };
        const response = await axios.post(
            `${this.baseUrl}/bot/send?token=${this.token}`,
            params,
            { headers }
        );
        return response.data;
    }

    async batchSendTextMessage(recvIds, recvType, content) {
        return this._batchSendMessage(recvIds, recvType, 'text', content);
    }

    async batchSendMarkdownMessage(recvIds, recvType, content) {
        return this._batchSendMessage(recvIds, recvType, 'markdown', content);
    }

    async _batchSendMessage(recvIds, recvType, contentType, content) {
        const params = {
            recvIds,
            recvType,
            contentType,
            content,
        };
        const headers = { 'Content-Type': 'application/json' };
        const response = await axios.post(
            `${this.baseUrl}/bot/batch_send?token=${this.token}`,
            params,
            { headers }
        );
        return response.data;
    }

    async editMessage(msgId, recvId, recvType, contentType, content) {
        const params = {
            msgId,
            recvId,
            recvType,
            contentType,
            content,
        };
        const headers = { 'Content-Type': 'application/json' };
        const response = await axios.post(
            `${this.baseUrl}/bot/edit?token=${this.token}`,
            params,
            { headers }
        );
        return response.data;
    }
}

module.exports = OpenApi;