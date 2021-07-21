import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  customerStatus : any;
  restaurantStatus :any;
  orderDetails : any;  
  orderDate:any;
  constructor(  private auth : AuthService,private router : Router) { }

  ngOnInit(): void {
   this.userinfo()
  } 
 
  userinfo(){ 
    this.auth.fetchUserOrder().subscribe(data =>{
     this.customerStatus = data.data.customerStatus ; 
      this.restaurantStatus = data.data.restaurantStatus; 
      this.orderDetails = data.data.orderDetails;
      this.orderDate = data.data.orderDate; 
   })
  }

  logout(){ 
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
