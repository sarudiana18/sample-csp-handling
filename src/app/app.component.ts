import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NzDatePickerModule, NzRangePickerComponent} from "ng-zorro-antd/date-picker";
import {NzInputGroupComponent} from "ng-zorro-antd/input";
import {BrowserModule} from "@angular/platform-browser";
import {NzTooltipDirective} from "ng-zorro-antd/tooltip";
import {NzRowDirective} from "ng-zorro-antd/grid";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NzDatePickerModule,
    NzRangePickerComponent,
    NzInputGroupComponent, NzTooltipDirective, NzRowDirective, FormsModule],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'untitled';
  dateRange : any = [];
  selectedValue: [Date,Date] = [new Date(), new Date()];
  dateFormat = 'yyyy/MM/dd';
  dateData(dateRange: [Date, Date]) {
    this.selectedValue = dateRange;
  }
}
