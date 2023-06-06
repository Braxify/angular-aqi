import { Component } from '@angular/core';

import { airInfoTableValues } from './data';
import { AirQualityService } from 'src/app/services/air-quality.service';

@Component({
  selector: 'app-tables-page',
  templateUrl: './tables-page.component.html',
  styleUrls: ['./tables-page.component.scss'],
})
export class TablesPageComponent {
  values = airInfoTableValues;
  searchTerm = '';

  constructor(public airQualityService: AirQualityService) {}

  onSearch(): void {
    if (!this.searchTerm) this.airQualityService.searchCityResult = [];
    if (this.searchTerm?.length) {
      this.airQualityService.getDataByCity(this.searchTerm).subscribe({
        next: (v) => console.log(v),
        error: (e) => console.error(e),
        complete: () => console.info('complete'),
      });
    }
  }
}
