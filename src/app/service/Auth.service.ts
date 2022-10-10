import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserLogin, UserRegister } from '../model/user';
import { APIResponse } from '../ViewModel/Apiresult';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  logged: BehaviorSubject<boolean>
  admin: BehaviorSubject<boolean>
  constructor(private http: HttpClient) {
    this.logged = new BehaviorSubject<boolean>(this.isLogged())
    // this.setLoggedStatus(this.isLogged())
    this.admin = new BehaviorSubject<boolean>(this.isAdmin())
  }
  setLoggedStatus(status: boolean) {
    this.logged.next(status)
  }
  getLoggedStatus() {
    return this.logged.asObservable()
  }

  login(user: UserLogin) {
    console.log(user);
    if (user.UserName == "admin") {
      this.isAdmin()
    }
    return this.http.post<APIResponse<string>>(`${environment.APIURl}/User/Login`, user)
  }
  register(user: UserRegister) {
    console.log(user);
    return this.http.post<APIResponse<boolean>>(`${environment.APIURl}/User/POST`, user)
  }
  logout() {
    let options = {
      headers: new HttpHeaders({
        'Content-Type': "application/json",
        'token': this.getToken()!
      })
    }
    return this.http.post(`${environment.APIURl}/User/logout`, {}, options)
  }
  isLogged(): boolean {
    console.log(localStorage.getItem("token"));
    if (localStorage.getItem("token") == null) return false
    else return true
  }

  isAdmin(): boolean {
    console.log("user is admin");
    //&& localStorage.getItem("UserName") != "admin" 
    if (localStorage.getItem("token") == null) return false
    else {
      console.log("user is admin");
      return true;
    }
  }

  setToken(token: string) {
    localStorage.setItem("token", token)
  }
  getToken(): string | null {
    return localStorage.getItem("token")
  }
  removeToken() {
    localStorage.removeItem("token")
  }
}
