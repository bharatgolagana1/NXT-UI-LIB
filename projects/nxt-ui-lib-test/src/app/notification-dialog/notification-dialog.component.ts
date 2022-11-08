import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';

export interface Fruit {
  name: string;
}

export interface Vegetable {
  name: string;
}


@Component({
  selector: 'app-notification-dialog',
  templateUrl: './notification-dialog.component.html',
  styleUrls: ['./notification-dialog.component.scss']
})


export class NotificationDialogComponent implements OnInit {
  name: any = ""
  filtersListControl = new FormControl();
  filtersList: any;
  tenantId = localStorage.getItem('tenantId');
  selectedFilters: any = [];
  autoFormControl!: FormControl;
  selectedFiltersBase: any;
 
  myControl = new FormControl();
  changeSubscription!: Subscription;
  searchText = '';
  constructor() { }

  ngOnInit(): void {
  }
  applyFilter(){
    // this._ls.lsSetSp('globalUserFilters', this.selectedFilters);
    location.reload();
  }
  
  processClusterName(filter:any) {
    console.log("test", filter.clusterName.split("Id")[0])
    return filter.clusterName.split("Id")[0]
  }
  getSelectionStatus(filter:any) {
    let ret = false;
    for (let k = 0; k < this.selectedFilters.length; ++k) {
      if(k=== 2 || k === 4){
        ret = true; break;
      }
      if (this.selectedFilters[k].filterId == filter.filterId) {
        ret = true; break;
      }
    }
    return ret;
  }
  toggleSelection(checked:any, filter:any) {
    if (checked == false) {
      this.selectedFilters = this.selectedFilters.filter((val: any) => {
        return val.filterId != filter.filterId
      })
    } else {
      this.selectedFilters.push(filter);
    }
  }
  clearFilter() {
    this.selectedFilters = [];
    this.applyFilter();
  }


  filteredFilterList = [
    
    {
      "filterId": "da0ac9d6-3c01-41d1-84ab-12218b60a878",
      "tenantId": "7dac0a8c-2b7e-43b7-952b-766685681a28",
      "userId": "6bc9b4e6-6326-4a91-9d45-7f9a9acba7e7",
      "filterName": "Altaqua Chiller",
      "filterValues": "3be96291-11df-4736-aa62-9c6afb4afe9a",
      "clusterName": "Asset",
      "createdDate": "2022-07-25T14:11:05.839Z",
      "updatedDate": "2022-07-25T14:17:25.374Z",
      "isDeleted": false,
      "deletedOn": null,
      "deletedBy": null
    },
    {
      "filterId": "6fd9c443-0cb9-44ae-a2c6-e87b830c78b0",
      "tenantId": "7dac0a8c-2b7e-43b7-952b-766685681a28",
      "userId": "6bc9b4e6-6326-4a91-9d45-7f9a9acba7e7",
      "filterName": "Hassan Hospital",
      "filterValues": "3be96291-11df-4736-aa62-9c6afb4afe9a",
      "clusterName": "BuildingId",
      "createdDate": "2022-07-25T14:04:26.122Z",
      "updatedDate": "2022-07-25T14:11:55.278Z",
      "isDeleted": false,
      "deletedOn": null,
      "deletedBy": null
    },
    {
      "filterId": "9e12f5ce-e13d-49dc-a0d1-fa57929ad74a",
      "tenantId": "7dac0a8c-2b7e-43b7-952b-766685681a28",
      "userId": "6bc9b4e6-6326-4a91-9d45-7f9a9acba7e7",
      "filterName": "Mercury Corporation",
      "filterValues": "3be96291-11df-4736-aa62-9c6afb4afe9a,9391ef41-be84-4670-a8c9-bb8b8a116722,e3121bc3-cc8f-46be-bd41-38eed8618f02",
      "clusterName": "Location",
      "createdDate": "2022-05-11T10:37:34.612Z",
      "updatedDate": "2022-07-25T14:08:46.701Z",
      "isDeleted": false,
      "deletedOn": null,
      "deletedBy": null
    },
    {
      "filterId": "e63119ef-2679-4761-ab7e-c4e407634739",
      "tenantId": "7dac0a8c-2b7e-43b7-952b-766685681a28",
      "userId": "6bc9b4e6-6326-4a91-9d45-7f9a9acba7e7",
      "filterName": "Shinakin Elevator",
      "filterValues": "b4502e06-20f3-4d04-8018-bb63068f4f3e,e6c08668-8c2f-493b-bc22-35ab87d86fa0",
      "clusterName": "Asset",
      "createdDate": "2022-07-22T15:32:35.614Z",
      "updatedDate": "2022-07-25T14:03:48.674Z",
      "isDeleted": false,
      "deletedOn": null,
      "deletedBy": null
    },
    {
      "filterId": "b0f60b9d-7850-4b61-b80d-01aeb3d9a470",
      "tenantId": "7dac0a8c-2b7e-43b7-952b-766685681a28",
      "userId": "6bc9b4e6-6326-4a91-9d45-7f9a9acba7e7",
      "filterName": "MetaFit Industry",
      "filterValues": "India-Kolkata",
      "clusterName": "Location",
      "createdDate": "2022-07-25T11:01:08.005Z",
      "updatedDate": "2022-07-25T11:01:08.005Z",
      "isDeleted": false,
      "deletedOn": null,
      "deletedBy": null
    },
    
 
  ]
  vegetables: any[] = [
    {name: 'apple'},
    {name: 'banana'},
    {name: 'strawberry'},
    {name: 'orange'},
    {name: 'kiwi'},
    {name: 'cherry'},
  ];

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  fruits: Fruit[] = [{name: 'MetaFit Industry'}, {name: 'Mercury'}];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.fruits.push({name: value});
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }
}
