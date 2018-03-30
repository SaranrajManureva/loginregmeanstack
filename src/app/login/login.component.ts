import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 constructor(private Auth: AuthService) { }
// constructor() { }
  ngOnInit() {
  }
  login(event) {
  event.preventDefault();
	const target =event.target;
	const userName = target.querySelector('#username').value;
	const password = target.querySelector('#password').value; 
 	//this.Auth.getDetails(userName,password)
console.log(userName,password);
 
  }

}
