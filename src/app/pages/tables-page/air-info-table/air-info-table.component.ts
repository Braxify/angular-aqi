import { Component, Input } from '@angular/core';
import { IAirInfoTableRow } from './models/air-info-table-row';

@Component({
  selector: 'app-air-info-table',
  templateUrl: './air-info-table.component.html',
  styleUrls: ['./air-info-table.component.scss'],
})
export class AirInfoTableComponent {
  @Input() rows: IAirInfoTableRow[];
}
