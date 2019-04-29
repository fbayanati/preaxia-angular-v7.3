import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreaxiaLoginComponent } from './preaxia-login/preaxia-login.component';

const routes: Routes = [
	{
		path: '',
		component: PreaxiaLoginComponent
  },
  {
      path: '**',
      redirectTo: '',
      pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreaxiaLoginRoutingModule { }
