class Subscription {
    constructor() {
        this.onMessageNormalSubscriber = null;
        this.onMessageInstructionSubscriber = null;
        this.onGroupJoinSubscriber = null;
        this.onGroupLeaveSubscriber = null;
        this.onBotFollowedSubscriber = null;
        this.onBotUnfollowedSubscriber = null;
        this.onButtonReportInlineSubscriber = null;
    }

    listen(request) {
        const eventType = request.header.eventType;
        const event = request.event;

        switch (eventType) {
            case 'message.receive.normal':
                this.onMessageNormalSubscriber(event);
                break;
            case 'message.receive.instruction':
                this.onMessageInstructionSubscriber(event);
                break;
            case 'group.join':
                this.onGroupJoinSubscriber(event);
                break;
            case 'group.leave':
                this.onGroupLeaveSubscriber(event);
                break;
            case 'bot.followed':
                this.onBotFollowedSubscriber(event);
                break;
            case 'bot.unfollowed':
                this.onBotUnfollowedSubscriber(event);
                break;
            case 'button.report.inline':
                this.onButtonReportInlineSubscriber(event);
                break;
        }
    }

    onMessageNormal(func) {
        this.onMessageNormalSubscriber = func;
        return func;
    }

    onMessageInstruction(func) {
        this.onMessageInstructionSubscriber = func;
        return func;
    }

    onGroupJoin(func) {
        this.onGroupJoinSubscriber = func;
        return func;
    }

    onGroupLeave(func) {
        this.onGroupLeaveSubscriber = func;
        return func;
    }

    onBotFollowed(func) {
        this.onBotFollowedSubscriber = func;
        return func;
    }

    onBotUnfollowed(func) {
        this.onBotUnfollowedSubscriber = func;
        return func;
    }

    onButtonReportInline(func) {
        this.onButtonReportInlineSubscriber = func;
        return func;
    }
}

module.exports = Subscription;