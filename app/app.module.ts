import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {addProductsComponent} from './product/addProduct/addProduct.component';
import {showProductsComponent} from './product/showProduct/showProduct.component';
import {showProductListComponent} from './product/showProductList/showProductList.component';
import {ProductDataService} from './service/product-data.service';
import {TimeComponent} from './time/time.component';
import {FormsModule} from '@angular/forms';
import {MenuComponent} from './menu/menu.component';
import {Routes,RouterModule} from '@angular/router';

const appRoutes: Routes = [
	{path:'view', component:showProductsComponent},
	{path:'add',  component:addProductsComponent},
	{path:'list', component:showProductListComponent},
	{path:'', redirectTo:'/add',pathMatch:'full'}
];

@NgModule({
 declarations: [ AppComponent,
				addProductsComponent,
				showProductsComponent,
				showProductListComponent,
				TimeComponent,
				MenuComponent],
 imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
 bootstrap: [AppComponent],
 providers: [ProductDataService]
})
export class AppModule {
}