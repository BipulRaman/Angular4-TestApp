import { Routes, RouterModule } from '@angular/router';
// import ComponentOne from './components/component-one/component-one';
// import ComponentTwo from './components/component-two/component-two';
// import ChildOne from './components/child-one/child-one';
// import ChildTwo from './components/child-two/child-two';
import HomeComponent from './Home/Component/Home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent }
//   { path: 'component-one', component: ComponentOne },
//   { path: 'component-two/:id', component: ComponentTwo,
//     children: [
//       { path: '', redirectTo: 'child-one', pathMatch: 'full' },
//       { path: 'child-one', component: ChildOne },
//       { path: 'child-two', component: ChildTwo }
//     ]
//   }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);