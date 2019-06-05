import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

export interface OrderData {
  name: string;
  price: number;
  notes?: string;
}

@Component({
  selector: 'app-order-editor',
  templateUrl: './order-editor.component.html',
  styleUrls: ['./order-editor.component.scss']
})
export class OrderEditorComponent {
  dialogTitle: string;
  buttonText: string;
  model: OrderData;

  constructor(
    private readonly dialogRef: MatDialogRef<OrderEditorComponent>,
    @Inject(MAT_DIALOG_DATA) private data: OrderData
  ) {
    this.dialogTitle = data ? 'Edit Order' : 'Add Order';
    this.buttonText = data ? 'Save' : 'Add';
    this.model = { ...(data || {}) } as OrderData;
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.dialogRef.close(this.model);
  }

}
