import {NgModule, LOCALE_ID} from '@angular/core';
import { CommonModule } from '@angular/common';
import {routedComponents, AdminRoutingModule} from "./admin.routing";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {AdminComponent} from "./admin.component";
import {AdminLoginComponent} from "./pages/admin-login/admin-login.component";
import {AdminHomeComponent} from "./pages/admin-home/admin-home.component";
import {AdminNavigationComponent} from "./navigation/admin-nav.component";
import {AdminItemComponent} from "./pages/admin-item/admin-item.component";
import {AdminService} from "../shared/services/admin/admin.service";
import {AdminAdminsComponent} from "./pages/admin-admins/admin-admins.component";
import {AlertModule} from "ng2-bootstrap";
import {AdminItemsetComponent} from "./pages/admin-itemset/admin-itemset.component";
import {AdminManageComponent} from "./pages/admin-manage/admin-manage.component";

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    BrowserModule,
    AlertModule.forRoot(),
  ],
  declarations: [
    routedComponents,
    AdminComponent,
    AdminLoginComponent,
    AdminHomeComponent,
    AdminNavigationComponent,
    AdminItemComponent,
    AdminItemsetComponent,
    AdminManageComponent,
    AdminAdminsComponent
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "de-DE" },
    AdminService
  ],
})
export class AdminModule { }
