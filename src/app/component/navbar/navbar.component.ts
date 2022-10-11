import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/Auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 islogged:boolean 
 isAdmin:boolean
  constructor( private Auth:AuthService) {
      this.islogged = this.Auth.isLogged();
      this.isAdmin = this.Auth.isAdmin();
   }

  ngOnInit(): void {
    this.Auth.getLoggedStatus().subscribe((data)=>{
      this.islogged = data
    })
    this.Auth.getUserRole().subscribe((data)=>{
      this.isAdmin = data
    })
  }

}
