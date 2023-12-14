var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ErrorHandler, Injectable } from '@angular/core';
import Bugsnag, { Client } from '@bugsnag/js';
let BugsnagErrorHandler = class BugsnagErrorHandler extends ErrorHandler {
    constructor(client) {
        super();
        if (client) {
            this.bugsnagClient = client;
        }
        else {
            this.bugsnagClient = Bugsnag._client;
        }
    }
    handleError(error) {
        const handledState = {
            severity: 'error',
            severityReason: { type: 'unhandledException' },
            unhandled: true
        };
        const event = this.bugsnagClient.Event.create(error, true, handledState, 'angular error handler', 1);
        if (error.ngDebugContext) {
            event.addMetadata('angular', {
                component: error.ngDebugContext.component,
                context: error.ngDebugContext.context
            });
        }
        this.bugsnagClient._notify(event);
        ErrorHandler.prototype.handleError.call(this, error);
    }
};
BugsnagErrorHandler = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Client])
], BugsnagErrorHandler);
export { BugsnagErrorHandler };
const ɵ0 = (client) => {
    return new BugsnagErrorHandler(client);
};
const plugin = {
    load: ɵ0,
    name: 'Angular'
};
export default plugin;
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoic3JjLyIsInNvdXJjZXMiOlsiaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFDeEQsT0FBTyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQVUsTUFBTSxhQUFhLENBQUE7QUFHckQsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBb0IsU0FBUSxZQUFZO0lBRW5ELFlBQWEsTUFBZTtRQUMxQixLQUFLLEVBQUUsQ0FBQTtRQUNQLElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUE7U0FDNUI7YUFBTTtZQUNMLElBQUksQ0FBQyxhQUFhLEdBQUssT0FBZSxDQUFDLE9BQWtCLENBQUE7U0FDMUQ7SUFDSCxDQUFDO0lBRU0sV0FBVyxDQUFFLEtBQVU7UUFDNUIsTUFBTSxZQUFZLEdBQUc7WUFDbkIsUUFBUSxFQUFFLE9BQU87WUFDakIsY0FBYyxFQUFFLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixFQUFFO1lBQzlDLFNBQVMsRUFBRSxJQUFJO1NBQ2hCLENBQUE7UUFFRCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQzNDLEtBQUssRUFDTCxJQUFJLEVBQ0osWUFBWSxFQUNaLHVCQUF1QixFQUN2QixDQUFDLENBQ0YsQ0FBQTtRQUVELElBQUksS0FBSyxDQUFDLGNBQWMsRUFBRTtZQUN4QixLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRTtnQkFDM0IsU0FBUyxFQUFFLEtBQUssQ0FBQyxjQUFjLENBQUMsU0FBUztnQkFDekMsT0FBTyxFQUFFLEtBQUssQ0FBQyxjQUFjLENBQUMsT0FBTzthQUN0QyxDQUFDLENBQUE7U0FDSDtRQUVELElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ2pDLFlBQVksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUE7SUFDdEQsQ0FBQztDQUNGLENBQUE7QUFwQ1ksbUJBQW1CO0lBRC9CLFVBQVUsRUFBRTtxQ0FHVyxNQUFNO0dBRmpCLG1CQUFtQixDQW9DL0I7U0FwQ1ksbUJBQW1CO1dBdUN4QixDQUFDLE1BQWMsRUFBZ0IsRUFBRTtJQUNyQyxPQUFPLElBQUksbUJBQW1CLENBQUMsTUFBTSxDQUFDLENBQUE7QUFDeEMsQ0FBQztBQUhILE1BQU0sTUFBTSxHQUFXO0lBQ3JCLElBQUksSUFFSDtJQUNELElBQUksRUFBRSxTQUFTO0NBQ2hCLENBQUE7QUFFRCxlQUFlLE1BQU0sQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVycm9ySGFuZGxlciwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCBCdWdzbmFnLCB7IENsaWVudCwgUGx1Z2luIH0gZnJvbSAnQGJ1Z3NuYWcvanMnXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBCdWdzbmFnRXJyb3JIYW5kbGVyIGV4dGVuZHMgRXJyb3JIYW5kbGVyIHtcclxuICBwdWJsaWMgYnVnc25hZ0NsaWVudDogQ2xpZW50O1xyXG4gIGNvbnN0cnVjdG9yIChjbGllbnQ/OiBDbGllbnQpIHtcclxuICAgIHN1cGVyKClcclxuICAgIGlmIChjbGllbnQpIHtcclxuICAgICAgdGhpcy5idWdzbmFnQ2xpZW50ID0gY2xpZW50XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmJ1Z3NuYWdDbGllbnQgPSAoKEJ1Z3NuYWcgYXMgYW55KS5fY2xpZW50IGFzIENsaWVudClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBoYW5kbGVFcnJvciAoZXJyb3I6IGFueSk6IHZvaWQge1xyXG4gICAgY29uc3QgaGFuZGxlZFN0YXRlID0ge1xyXG4gICAgICBzZXZlcml0eTogJ2Vycm9yJyxcclxuICAgICAgc2V2ZXJpdHlSZWFzb246IHsgdHlwZTogJ3VuaGFuZGxlZEV4Y2VwdGlvbicgfSxcclxuICAgICAgdW5oYW5kbGVkOiB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZXZlbnQgPSB0aGlzLmJ1Z3NuYWdDbGllbnQuRXZlbnQuY3JlYXRlKFxyXG4gICAgICBlcnJvcixcclxuICAgICAgdHJ1ZSxcclxuICAgICAgaGFuZGxlZFN0YXRlLFxyXG4gICAgICAnYW5ndWxhciBlcnJvciBoYW5kbGVyJyxcclxuICAgICAgMVxyXG4gICAgKVxyXG5cclxuICAgIGlmIChlcnJvci5uZ0RlYnVnQ29udGV4dCkge1xyXG4gICAgICBldmVudC5hZGRNZXRhZGF0YSgnYW5ndWxhcicsIHtcclxuICAgICAgICBjb21wb25lbnQ6IGVycm9yLm5nRGVidWdDb250ZXh0LmNvbXBvbmVudCxcclxuICAgICAgICBjb250ZXh0OiBlcnJvci5uZ0RlYnVnQ29udGV4dC5jb250ZXh0XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5idWdzbmFnQ2xpZW50Ll9ub3RpZnkoZXZlbnQpXHJcbiAgICBFcnJvckhhbmRsZXIucHJvdG90eXBlLmhhbmRsZUVycm9yLmNhbGwodGhpcywgZXJyb3IpXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBwbHVnaW46IFBsdWdpbiA9IHtcclxuICBsb2FkOiAoY2xpZW50OiBDbGllbnQpOiBFcnJvckhhbmRsZXIgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBCdWdzbmFnRXJyb3JIYW5kbGVyKGNsaWVudClcclxuICB9LFxyXG4gIG5hbWU6ICdBbmd1bGFyJ1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwbHVnaW5cclxuIl19