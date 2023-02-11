import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ramCap: number[] = []
  showRamFlag: boolean = false
  creatFlag: boolean = true

  createRam(ramCapacity:string, tName:string, tCap:string){
    const task = {
      tName,
      tCap,
      tStart: 0,
      tEnd: +tCap
    }
    for (let i = 0; i < +ramCapacity; i++) {
      this.ramCap.push(0)
    }
    for (let i = task.tStart; i < task.tEnd; i++) {
      this.ramCap[i] = 1
    }
    this.showRamFlag = true
    this.creatFlag = false
  }

  addTask(tName:string, tCap:string){
    const task = {
      tName,
      tCap,
      tStart: 0,
      tEnd: +tCap
    }
    console.log(this.ramCap);

    for (let i = 0; i < this.ramCap.length; i++) {
      if(this.ramCap[i] == 0){
        task.tStart = i
        task.tEnd += i
        
        for (let i = task.tStart; i < task.tEnd; i++) {
          for (let w = 0; w < this.ramCap.length; w++) {
            if(this.ramCap[w] == 0){
              this.ramCap[w] = 1
              break
            }
            
          }
        }
        break
      }
      
    }
  }

  deleteTask(i:number){
    this.ramCap[i] = 0
  }
}
