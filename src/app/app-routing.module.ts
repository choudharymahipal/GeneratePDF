import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampleComponent } from './Components/sample/sample.component';
import { HomeComponent } from './home/home.component';
import { ImageComponent } from './Components/image/image.component';
import { PageLayoutComponent } from './Components/page-layout/page-layout.component';
import { TableComponent } from './Components/table/table.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'example/sample', component: SampleComponent },
  { path: 'example/image', component: ImageComponent },
  { path: 'example/pagelayout', component: PageLayoutComponent },
  { path: 'example/tables', component: TableComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
