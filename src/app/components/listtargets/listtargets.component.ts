import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TargetsService } from 'src/app/targets.service';
@Component({
  selector: 'app-listtargets',
  templateUrl: './listtargets.component.html',
  styleUrls: ['./listtargets.component.css']
})
export class ListTargetsComponent implements OnInit {
  public targets;
  constructor(
    private router: Router,private targetsService: TargetsService
  ) { }
 
  ngOnInit() {
    this.targetsService.getTargetInfo().subscribe((data : any[])=>{
        console.log(data);
        this.targets = data;
    })
  }
  deleteTarget(targetId){
    this.targetsService.deleteTarget(targetId).subscribe((ret)=>{
      this.targetsService.getTargetInfo().subscribe((data : any[])=>{
        console.log(data);
        this.targets = data;
      })
    })
  }
}
