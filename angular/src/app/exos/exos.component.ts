import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-exos',
  templateUrl: './exos.component.html',
  styleUrls: ['./exos.component.css']
})
export class ExosComponent implements OnInit {

  //exo1
  public inputs = [
    'text',
    'number',
    'submit',
    'color'
  ];

  public currentType = 0;

  public type = this.inputs[this.currentType];

  //exo2
  public counter = 0 ;

  //exo3
  public color = "red";

  //exo4
  name: string = '';
  inputText= "";

  /**********************************
   * methodes
   **********************************/

  constructor() { }

  //exo1
  private inputRefresh(){
    this.type = this.inputs[this.currentType];
  }

  public changeInput() {
    if (this.currentType < this.inputs.length){
      this.currentType++;
    }else{
      this.currentType = 0
    }
    this.inputRefresh()
  }

  //exo2
  public count(add){
    add? this.counter++ : this.counter--;
  }

  //exo3
  public changeColor(color){
    this.color = color
  }
  ngOnInit() {
  }


}
