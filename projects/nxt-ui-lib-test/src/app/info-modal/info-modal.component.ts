import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.scss']
})


export class InfoModalComponent implements OnInit {
  ELEMENT_DATA:any = [
    {FieldName: 'Field1', Mandatory: 'Yes', Description: 'field is required',},
    {FieldName: 'Field2', Mandatory: 'No', Description: 'field is not required'},
    {FieldName: 'Field3', Mandatory: 'Yes', Description: 'field is required',}
    
  ]

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['FieldName', 'Mandatory', 'Description', ];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);

  // cancel(): void {
  //   this.dismiss('canceling');
  // }
}
