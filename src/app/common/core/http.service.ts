import { Injectable, Optional } from '@angular/core';

export class HttpServiceConfig {
    host = '192.168.0.10';
}

@Injectable()
export class HttpService {

    private _host = 'localhost';

    constructor(@Optional() config: HttpServiceConfig) {
        if (config) { this._host = config.host; }
    }

    public getName() {

        return "http://" + this._host ;
    }
}
