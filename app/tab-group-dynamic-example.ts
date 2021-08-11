import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/core';
import { FormControl } from '@angular/forms';

/**
 * @title Tab group with dynamically changing tabs
 */
@Component({
  selector: 'tab-group-dynamic-example',
  templateUrl: 'tab-group-dynamic-example.html',
  styleUrls: ['tab-group-dynamic-example.css']
})
export class TabGroupDynamicExample implements OnInit {
  map = new Map();
  allComplete: boolean = false;

  ngOnInit(): void {
    let date = new Date();
    for (let i = date.getFullYear(); i > date.getFullYear() - 7; i--) {
      this.years.push(i);
      this.map.set(i, []);
    }

    debugger;
  }
  setAll(completed: boolean) {
    console.log(completed);
    this.allComplete = completed;
    if (this.months == null) {
      return;
    }
    this.months.forEach(t => (t.ischecked = completed));
  }
  someComplete(): boolean {
    // if (this.task.subtasks == null) {
    //   return false;
    // }
    return this.months.filter(t => t.ischecked).length > 0 && !this.allComplete;
  }

  years = [];
  months = [
    { name: 'Jan', ischecked: false },
    { name: 'Feb', ischecked: false },
    { name: 'Mar', ischecked: false },
    { name: 'April', ischecked: false },
    { name: 'May', ischecked: false },
    { name: 'June', ischecked: false },
    { name: 'July', ischecked: false },
    { name: 'August', ischecked: false },
    { name: 'September', ischecked: false },
    { name: 'October', ischecked: false },
    { name: 'November', ischecked: false },
    { name: 'December', ischecked: false }
  ];

  change(a, month, year) {
    debugger;
    let obj = this.map.get(year);

    obj.push(month);
    this.map.set(year, obj);
    debugger;
    console.log(this.map);
  }
}
