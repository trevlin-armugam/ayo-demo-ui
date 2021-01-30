import { Component } from '@angular/core';
import { CovertorService } from './service/covertor.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-ui';

  constructor(convertorService: CovertorService) {
    convertorService.convert('temperature', 'metric', 41.55).subscribe(data => {
      console.log(data);
    });
  }
}
