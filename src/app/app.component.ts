import { Component } from '@angular/core';
import { TargetsService } from './targets.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sushma-proj';
  policies: any[] = [];
  constructor(private targetsService: TargetsService) { }

  ngOnInit() {
    this.targetsService.getTargetInfo().subscribe((data : any[])=>{
        console.log(data);
        this.policies = data;
    })
  }
}
