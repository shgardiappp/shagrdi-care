import { CouriersComponent } from './components/couriers/couriers.component';
import { CustomersComponent } from './components/customers/customers.component';
import { OrdersdataviewComponent } from './components/ordersdataview/ordersdataview.component';
import { OrdersComponent } from './components/orders/orders.component';
import { FooddataviewComponent } from './components/fooddataview/fooddataview.component';
import { CompenstaionComponent } from './components/compenstaion/compenstaion.component';
import { FoodComponent } from './components/food/food.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  {path:'' , redirectTo:'food' , pathMatch:'full'},
  {path:'food' , canActivate:[AuthGuard] , component:FoodComponent},
  {path:'orders' , canActivate:[AuthGuard] , component:OrdersComponent},
  {path:'compenstaion' , canActivate:[AuthGuard] , component:CompenstaionComponent},
  {path:'food/:type' , canActivate:[AuthGuard] , component:FooddataviewComponent},
  {path:'orders/:type' , canActivate:[AuthGuard] , component:OrdersdataviewComponent},

  {path:'customers' , canActivate:[AuthGuard] , component:CustomersComponent},
  {path:'couriers' , canActivate:[AuthGuard] , component:CouriersComponent},

  {path:'login' , component:LoginComponent},
  {path:'register' , component:RegisterComponent},



  {path:'**' , component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
