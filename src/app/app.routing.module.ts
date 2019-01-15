import { AboutComponent } from './components/pages/about.component';
import { HomeComponent } from './components/pages/home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }
]
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}