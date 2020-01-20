import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PanelComponent } from './pages/panel/panel.component';
import { RadicadosComponent } from './components/radicados/radicados.component';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'panel', component: PanelComponent }
];

@NgModule({
    imports: [
      RouterModule.forRoot(
        routes, { enableTracing: true}
      )
      // other imports here
    ],
})

export class AppRoutingModule { }
