import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }
 getDetails(userName,password){
return "test";
	/*return this.http.post('/api/login',{
		userName,
		password
	}).subscribe(data => {
		console.log(data," server ")
	}) */
}

}
