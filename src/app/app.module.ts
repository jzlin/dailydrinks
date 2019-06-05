import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { OrderEditorComponent } from './order-editor/order-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderEditorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
  ],
  providers: [],
  entryComponents: [
    OrderEditorComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
