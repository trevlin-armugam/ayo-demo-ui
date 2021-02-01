import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CovertorService } from './service/covertor.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-ui';

  measurements: string[] = [];
  siUnits: string[] = []
  convertedValue: number;

  selectedMeasurement: string;
  selectedSiUnit: string;
  specifiedValue: number;

  showOutput: boolean = false;

  constructor(private convertorService: CovertorService, private toasterService: ToastrService) {

    convertorService.getMeasurements().subscribe((data: any) => {
      this.measurements = data;
    });

    convertorService.getSIUnits().subscribe((data: any) => {
      this.siUnits = data;
    });
  }

  applyConversion(value) {
    this.showOutput = false;
    if (this.selectedMeasurement && this.selectedMeasurement.length > 0 &&
      this.selectedSiUnit && this.selectedSiUnit.length > 0 &&
      value) {
        this.convertorService.convert('temperature', 'metric', value).subscribe((data: number) => {
          this.convertedValue = data;
          this.showOutput = true;
        });
    } else {
      this.toasterService.error("Please ensure you select a measurement type and SI Unit before specifying the value");
      this.specifiedValue = null;
    }
  }
}
