import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.scss'],
})
export class ListComponentComponent implements OnInit {
  items = [''];
  filterText = '';
  filteredItems = this.items;
  addItemText: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.filteredItems = this.items;
  }
  addItem(item: string) {
    if (this.addItemText == false) {
      this.items.pop();
      this.addItemText = true;
    }

    if (item === '') {
    } else {
      this.items.push(item);
    }
  }
  applyFilter() {
    this.filteredItems = this.items.filter((item) =>
      item.includes(this.filterText)
    );
  }
  sortItems() {
    this.items.sort((a, b) => a.localeCompare(b));
  }
}
