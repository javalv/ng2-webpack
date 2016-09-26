import {Injectable} from "@angular/core";
import {HttpService} from "../common/core/http.service";
@Injectable()
export class HeroesService extends HttpService{

    getCrises(result:any) {
        return new Promise<string>(resolve => {
            setTimeout(() => {
                if(result){
                    console.log("service: " + super.getName());
                    resolve(result);
                }else{

                }

            }, 1000);
        });
    }


}