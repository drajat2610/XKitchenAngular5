import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Xsis Kitchen App';
  peoples = [
    {id: 1, name: 'Budi Gunawan', age: 18},
    {id: 2, name: 'Andi Candra', age: 22},
    {id: 3, name: 'William Sugito', age: 21},
    {id: 4, name: 'Wati Ningsih', age: 19},
    {id: 5, name: 'Rudianto', age: 22}
  ];
}
