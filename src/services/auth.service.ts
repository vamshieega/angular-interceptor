import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router, private toastr: AlertService) { }

  loginUser(user: any) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      observe: 'response' as 'response'
    };
    return this.http.post<any>(environment.apiUrl + 'credentials/login', user, httpOptions).subscribe((res: HttpResponse<any>) => {
      this.toastr.showSuccess(res.body.message);
      console.log(res);
      let token = res.headers.get('x-access-token')
      localStorage.setItem('token', `${token}`)
      this.router.navigate(['/home']);
    },
      error => {
        this.toastr.showError(error.error.message);
      }
    )
  }
  fetchUserOrder() {
    return this.http.get<any>(environment.apiUrl + 'crm/detailedOrderDetails?orderId=da325a38-4a6c-4783-8ba8-d3c35e0dbaa0');
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }

  getToken() {
    return localStorage.getItem('token')
  }
}
