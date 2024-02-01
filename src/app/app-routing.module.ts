import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'add-form',
    loadChildren: () => import('./pages/add-form/add-form.module').then( m => m.AddFormPageModule)
  },
  {
    path: 'all-data',
    loadChildren: () => import('./pages/all-data/all-data.module').then( m => m.AllDataPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
