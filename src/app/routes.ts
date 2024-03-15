import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from 
'./details/details.component';
import { ExpenseComponent } from './expense/expense.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page'
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home details'
  },
  {
    path: 'expense',
    component:ExpenseComponent,
    title: 'expense'
  }
];

export default routeConfig;
