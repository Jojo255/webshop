import {Injectable} from "@angular/core";
import {Http, Response, RequestOptions, Headers} from "@angular/http";
import {Item} from "../../models/shop/item";
import {Observable} from "rxjs";
import {AuthenticationService} from "../authentication/authentication.service";
import {AdminAuthenticationService} from "../authentication/admin-authentication.service";

@Injectable()
export class AdminService {
    constructor(private http: Http, private adminAuthService: AdminAuthenticationService) { }

    createItem(item: Item) : Observable<any> {
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.adminAuthService.adminToken });
        let options = new RequestOptions({ headers: headers });

        return this.http.put('/api/v1/admin/item', item, options).map((response: Response) => response.text());
    }

    createItemset(item: Item) : Observable<any> {
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.adminAuthService.adminToken });
        let options = new RequestOptions({ headers: headers });

        return this.http.put('/api/v1/admin/itemSet', item, options).map((response: Response) => response.text());
    }

    getAllAdmins() : Observable<any> {
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.adminAuthService.adminToken });
        let options = new RequestOptions({ headers: headers });

        return this.http.get('/api/v1/admin/users/admin', options).map((response: Response) => response.json());
    }

    upload(file: FormData, artNo: number) : Observable<any> {
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.adminAuthService.adminToken });
        let options = new RequestOptions({ headers: headers });

        console.log(this.adminAuthService.adminToken);

        return this.http.post(`/api/v1/file/upload/${artNo}`, file, options).map((response: Response) => response.text());
    }

}