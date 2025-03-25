import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'calculator',
        //loadComponent: () => import('./calculator/views/calculator-view/calculator-view.component').then(m => m.CalculatorViewComponent)
        loadComponent: () => import('@/calculator/views/calculator-view/calculator-view.component') // Al poner export default en el componente
    },
    {
        path: '**',
        redirectTo: 'calculator'
    }
];
