/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***************************************************!*\
  !*** ./src/polyfill/BroadcastChannelSingleTab.ts ***!
  \***************************************************/
function main() {
    if ("BroadcastChannel" in window) {
        return;
    }
    const subscriptions = new Map();
    window.BroadcastChannel = class BroadcastChannel {
        constructor(name) {
            this.name = name;
            const subscription = subscriptions.get(name);
            if (!subscription) {
                subscriptions.set(name, new Set());
            }
            subscriptions.get(name).add(this);
        }
        postMessage(message) {
            setTimeout(() => {
                subscriptions.get(this.name).forEach((bc) => {
                    var _a;
                    if (bc === this) {
                        return;
                    }
                    (_a = bc.onmessage) === null || _a === void 0 ? void 0 : _a.call(bc, { data: message });
                });
            }, 0);
        }
        close() {
            subscriptions.get(this.name).delete(this);
        }
    };
}
main();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvYWRjYXN0LWNoYW5uZWwtc2luZ2xlLXRhYi1wb2x5ZmlsbC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQWdCQSxTQUFTLElBQUk7SUFDWCxJQUFJLGtCQUFrQixJQUFJLE1BQU0sRUFBRTtRQUNoQyxPQUFPO0tBQ1I7SUFFRCxNQUFNLGFBQWEsR0FBRyxJQUFJLEdBQUcsRUFBb0IsQ0FBQztJQUVqRCxNQUFjLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxnQkFBZ0I7UUFJdkQsWUFBNkIsSUFBWTtZQUFaLFNBQUksR0FBSixJQUFJLENBQVE7WUFDdkMsTUFBTSxZQUFZLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3QyxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNqQixhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUM7YUFDcEM7WUFFRCxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQyxDQUFDO1FBRU0sV0FBVyxDQUFDLE9BQVk7WUFFN0IsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDZCxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRTs7b0JBQzNDLElBQUksRUFBRSxLQUFLLElBQUksRUFBRTt3QkFDZixPQUFPO3FCQUNSO29CQUVELFFBQUUsQ0FBQyxTQUFTLCtDQUFaLEVBQUUsRUFBYSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO2dCQUNwQyxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNSLENBQUM7UUFFTSxLQUFLO1lBQ1YsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdDLENBQUM7S0FDRixDQUFDO0FBQ0osQ0FBQztBQUVELElBQUksRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGtpZS10b29scy9zZXJ2ZXJsZXNzLWxvZ2ljLXNhbmRib3gvLi9zcmMvcG9seWZpbGwvQnJvYWRjYXN0Q2hhbm5lbFNpbmdsZVRhYi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMjEgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmZ1bmN0aW9uIG1haW4oKSB7XG4gIGlmIChcIkJyb2FkY2FzdENoYW5uZWxcIiBpbiB3aW5kb3cpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBzdWJzY3JpcHRpb25zID0gbmV3IE1hcDxzdHJpbmcsIFNldDxhbnk+PigpO1xuXG4gICh3aW5kb3cgYXMgYW55KS5Ccm9hZGNhc3RDaGFubmVsID0gY2xhc3MgQnJvYWRjYXN0Q2hhbm5lbCB7XG4gICAgcHVibGljIG9ubWVzc2FnZTogKCh0aGlzOiBCcm9hZGNhc3RDaGFubmVsLCBldjogTWVzc2FnZUV2ZW50KSA9PiBhbnkpIHwgbnVsbDtcbiAgICBwdWJsaWMgb25tZXNzYWdlZXJyb3I6ICgodGhpczogQnJvYWRjYXN0Q2hhbm5lbCwgZXY6IE1lc3NhZ2VFdmVudCkgPT4gYW55KSB8IG51bGw7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IG5hbWU6IHN0cmluZykge1xuICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gc3Vic2NyaXB0aW9ucy5nZXQobmFtZSk7XG4gICAgICBpZiAoIXN1YnNjcmlwdGlvbikge1xuICAgICAgICBzdWJzY3JpcHRpb25zLnNldChuYW1lLCBuZXcgU2V0KCkpO1xuICAgICAgfVxuXG4gICAgICBzdWJzY3JpcHRpb25zLmdldChuYW1lKSEuYWRkKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBwb3N0TWVzc2FnZShtZXNzYWdlOiBhbnkpOiB2b2lkIHtcbiAgICAgIC8vRklYTUU6IFRoaXMgY291bGQgYmUgb25lIG1lc3NhZ2UgcGVyIGBzZXRUaW1lb3V0YCwgYnV0IGl0J3MgZmluZSBmb3Igbm93LlxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHN1YnNjcmlwdGlvbnMuZ2V0KHRoaXMubmFtZSkhLmZvckVhY2goKGJjKSA9PiB7XG4gICAgICAgICAgaWYgKGJjID09PSB0aGlzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYmMub25tZXNzYWdlPy4oeyBkYXRhOiBtZXNzYWdlIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0sIDApO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbG9zZSgpOiB2b2lkIHtcbiAgICAgIHN1YnNjcmlwdGlvbnMuZ2V0KHRoaXMubmFtZSkhLmRlbGV0ZSh0aGlzKTtcbiAgICB9XG4gIH07XG59XG5cbm1haW4oKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==