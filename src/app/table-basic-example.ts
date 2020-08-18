import {Component} from '@angular/core';

export interface PeriodicElement {
  mode: string;
  position: number;
  equipment: string;
  pickup: string;
  delivery: string;
  item: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, mode: 'TL,LTL',equipment:'53 Dry Van', pickup: 'Postal Code: 776878,Country:USA', delivery:'Postal Code:675345, Country:USA', item:'Unit weight : 100 lb ,Unit Volume: 20 cuft, Count : 2,Freight Class: 55.0'},
  {position: 2, mode: 'LTL',equipment:'48/53 Flatbed', pickup: 'Postal Code: 776878,Country:USA', delivery:'Postal Code : 675345, Country:USA', item:'Unit weight : 100 lb ,Unit Volume: 20 cuft, Count : 20,Freight Class: 150.0'},
 {position: 2, mode: 'INTERMODAL',equipment:'53 Intermodal', pickup: 'City: Columbus,State:Ohio,Country:USA', delivery:'City: Cleveland,State:Ohio,Country:USA', item:'Unit weight : 140 lb ,Unit Volume: 20 cuft, Count : 2,Freight Class: 155.0'},
  {position: 3, mode: 'TL',equipment:'53 Dry Van', pickup: 'Location: PLANT7000 - CARRIER CORPORATION D B A,Country:USA', delivery:'Postal Code : 675345, Country:USA', item:'Unit weight : 100 lb ,Unit Volume: 20 cuft, Count : 2,Freight Class: 55.0'},
  {position: 3, mode: 'TL',equipment:'40 Dry Van', pickup: 'Postal Code: 776878,Country:USA', delivery:'Postal Code : 675345, Country:USA', item:'Unit weight : 200 lb ,Unit Volume: 29 cuft, Count : 10,Freight Class: 55.0'},
  {position: 1, mode: 'LTL',equipment:'53 Dry Van', pickup: 'Postal Code: 776878,Country:USA', delivery:'Postal Code : 675345, Country:USA', item:'Unit weight : 120 lb ,Unit Volume: 25 cuft, Count : 2,Freight Class: 55.0'},
  {position: 1, mode: 'LTL',equipment:'53 Dry Van', pickup: 'City: Cleveland,State:Ohio,Country:USA', delivery:'Postal Code : 675345, Country:USA', item:'Unit weight : 100 lb ,Unit Volume: 20 cuft, Count : 12,Freight Class: 55.0'},
  {position: 1, mode: 'TL',equipment:'53 Dry Van', pickup: 'Postal Code: 776878,Country:USA', delivery:'City: Cleveland,State:Ohio,Country:USA', item:'Unit weight : 100 lb ,Unit Volume: 20 cuft, Count : 12,Freight Class: 50.0'},
  
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-basic-example',
  styleUrls: ['table-basic-example.css'],
  templateUrl: 'table-basic-example.html',
})
export class TableBasicExample {
  displayedColumns: string[] = ['position', 'mode', 'equipment', 'pickup','delivery','item'];
  dataSource = ELEMENT_DATA;
}


/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */