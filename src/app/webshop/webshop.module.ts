import { NgModule } from '@angular/core';
import {routedComponents, WebshopRoutingModule} from "./webshop.routing";
import {HeaderComponent} from "../shared/header/header.component";
import {MenuComponent} from "./menu/menu.component";
import {ItemsSidebarComponent} from "./pages/items/item-sidebar/item-sidebar.component";
import {LoginComponent} from "./pages/account/login/login.component";
import { ItemsComponent} from "./pages/items/items.component";
import { ItemsGridComponent} from "./pages/items/item-grid/item-grid.component";
import {TopHeaderComponent} from "./top-header/top-header.component";
import {ShoppingCartComponent} from "./pages/checkout/shopping-cart/shopping-cart.component";
import {WebshopComponent} from "./webshop.component";
import {FormsModule} from "@angular/forms";
import {CollapseModule, AlertModule, AccordionModule, PaginationModule, DatepickerModule} from "ng2-bootstrap";
import {BrowserModule} from "@angular/platform-browser";
import {AccountComponent} from "./pages/account/account.component";
import {CommonModule} from "@angular/common";
import {TreeViewComponent} from "../shared/tree-view/tree-view.component";
import {TreeCategoryComponent} from "../shared/tree-view/tree-category";
import {OrderConfirmationComponent} from "./pages/checkout/order-confirmation/order-confirmation.component";
import {CartItemsComponent} from "./pages/checkout/cart-items/cart-items.component";
import {SelectModule} from "ng2-select";
import {ItemDetailsComponent, SafePipe} from "./pages/item-details/item-details.component";
import {ItemFilterPipe} from "./pages/items/item-filter.pipe";
import {OrderHistoryComponent} from "./pages/account/order-history/order-history.component";
import {ChangeAddressComponent} from "./pages/account/change-address/change-address.component";
import {OrderDetailsComponent} from "./pages/account/order-details/order-details.component";
import {OrderSuccessComponent} from "./pages/checkout/order-result/order-success.component";

@NgModule({
  imports: [
    CommonModule,
    WebshopRoutingModule,
    FormsModule,
    BrowserModule,
    CollapseModule.forRoot(),
    AlertModule.forRoot(),
    AccordionModule.forRoot(),
    PaginationModule.forRoot(),
    SelectModule,
    DatepickerModule.forRoot()
  ],
  declarations: [
    routedComponents,
    WebshopComponent,
    HeaderComponent,
    MenuComponent,
    ItemsSidebarComponent,
    LoginComponent,
    ItemsComponent,
    ItemsGridComponent,
    TopHeaderComponent,
    ShoppingCartComponent,
    CartItemsComponent,
    AccountComponent,
    TreeViewComponent,
    TreeCategoryComponent,
    OrderConfirmationComponent,
    ItemDetailsComponent,
    ItemFilterPipe,
    SafePipe,
    OrderHistoryComponent,
    ChangeAddressComponent,
    OrderDetailsComponent,
    OrderSuccessComponent
  ]
})
export class WebshopModule { }
