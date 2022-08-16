import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-combination-choice',
  templateUrl: './combination-choice.component.html',
  styleUrls: ['./combination-choice.component.css']
})
export class CombinationChoiceComponent implements OnInit {
  pinsNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  chosenPins: number[] = []
  chosenPin: number = 0
  pinChosen = false
  constructor() {
  }

  ngOnInit(): void {
  }
  addCheckedItem(value: number){
    let index = this.chosenPins.indexOf(value)
    if (index != -1){
      this.chosenPins.splice(index, 1)
    } else{
      this.chosenPins.push(value)
    }
    this.chosenPins.sort()
  };

}
