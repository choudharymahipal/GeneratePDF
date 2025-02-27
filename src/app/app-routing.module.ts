import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampleComponent } from './Components/sample/sample.component';
import { HomeComponent } from './home/home.component';
import { ImageComponent } from './Components/image/image.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'example/sample', component: SampleComponent },
  { path: 'example/image', component: ImageComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
