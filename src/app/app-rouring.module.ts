import {  createComponent, NgModule} from "@angular/core";
import {  RouterModule,Routes} from "@angular/router";
import { CreateProductComponent } from "./component/create-product/create-product.component";
import { CreateStudentComponent } from "./component/create-student/create-student.component";
import { DashbourdLayoutComponent } from "./component/dashbourd-layout/dashbourd-layout.component";
import { DashbourdComponent } from "./component/dashbourd/dashbourd.component";
import { AuthGuard } from "./component/guard/auth.guard";
import { HomeComponent } from "./component/home/home.component";
import { LoginComponent } from "./component/login/login.component";
import { LogoutComponent } from "./component/logout/logout.component";
import { MainLayoutComponent } from "./component/main-layout/main-layout.component";
import { NotfoundComponent } from "./component/notfound/notfound.component";
import { ProductDetailsComponent } from "./component/product-details/product-details.component";
import { ProductParentComponent } from "./component/product-parent/product-parent.component";
import { ProductlistComponent } from "./component/productlist/productlist.component";
import { ProfileComponent } from "./component/Profile/Profile.component";
import { RegisterComponent } from "./component/register/register.component";
import { StudentListComponent } from "./component/student-list/student-list.component";
import { StudentComponent } from "./component/Student/Student.component";

let routes:Routes=[
    {path:'',component:MainLayoutComponent,
    children:[
        {path :"",redirectTo:"/home",pathMatch:"full"},
        {path:"home",component:HomeComponent},
        {path:'product',component:ProductParentComponent},
        {path:'product/:pid',component:ProductDetailsComponent},
        {path:'login',component:LoginComponent},
        {path:'register',component:RegisterComponent},
        {path:'profile',component:ProfileComponent},
        {path:'logout',component:LogoutComponent},
        
    ]},
    {path:'students',component:MainLayoutComponent,children:[
        {path:'',component:StudentListComponent,pathMatch:"full"},
        {path:'create',component:CreateStudentComponent,pathMatch:"full"},
        {path:':id',component:StudentComponent,pathMatch:"full"},
    ]},
    {path:'dashbourd',component:DashbourdLayoutComponent,
    children:[
        // {path :"dashbourd",redirectTo:"/dashbourd/home",pathMatch:"full"},
        {path:"home",component:DashbourdComponent},//dashbourd/home
        {path:'create',component:CreateProductComponent},
        {path:'product',component:ProductlistComponent, canActivate:[AuthGuard]},
    ]},

    {path:'**',component:NotfoundComponent}

]


@NgModule(
    {
        exports:[RouterModule],
        imports:[RouterModule.forRoot(routes)]
    }
)
export class AppRoutingModule{

}