import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';

import { OrderEditorComponent, OrderData } from './order-editor/order-editor.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  orders: OrderData[] = [
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

  get totalPrice() {
    return this.orders
      .map(x => x.price)
      .reduce((previouseValue, currentValue) => previouseValue + currentValue, 0);
  }

  constructor(private readonly dialog: MatDialog) { }

  displayOrderDialog(item?: OrderData) {
    const dialogRef = this.dialog.open(OrderEditorComponent, { data: item || null });

    dialogRef.afterClosed().subscribe(
      result => {
        console.log(result);
        if (result) {
          if (item) {
            Object.assign(item, result);
          } else {
            this.orders = this.orders.concat(result);
          }
        }
      }
    );
  }

  removeOrder(item: OrderData) {
    this.orders = this.orders.filter(x => x !== item);
  }
}
