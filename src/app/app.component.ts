import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  orders: any[] = [
    {
      name: '紅茶',
      price: 35,
      notes: '無糖去冰',
    },
    {
      name: '綠茶',
      price: 35,
      notes: null,
    },
    {
      name: '珍珠奶茶',
      price: 1000,
      notes: `半糖微冰
      特大杯`,
    },
    {
      name: '烏龍茶',
      price: 50,
      notes: `微糖去冰
      +珍珠`,
    },
  ];
}
