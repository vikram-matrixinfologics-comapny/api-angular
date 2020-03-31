import { Component, OnInit } from '@angular/core';
import { TokenService } from '../_service/token.service';
import { Router } from '@angular/router';
import { AuthService } from '../_service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 public loggedIn:boolean;
  constructor(
  	private Auth: AuthService,
    private router: Router,
    private Token: TokenService
    ) { }

  ngOnInit(): void {
  	this.Auth.authStatus.subscribe(value => this.loggedIn = value);
  }

  logout(event:MouseEvent){
  	event.preventDefault;
  	this.Token.remove();
  	this.Auth.changeAuthStatus(false);
    this.router.navigateByUrl('/login');
  }

}
