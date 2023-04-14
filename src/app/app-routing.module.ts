import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PayComponent } from './pay/pay.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'payment', component: PayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
