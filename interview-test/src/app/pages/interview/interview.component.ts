import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.css'],
})
export class InterviewComponent implements OnInit {
  isSidePanelShow: boolean = false;
  sortby: string = '';
  searchType: any;
  searchText: any;
  originalDataArr: any[] = [];
  dummyDataArr: any[] = [];
  dummyobj: any = {
    id: 0,
    name: '',
    date: '',
    type: '',
    fromDate: '',
    toDate: '',
  };
  p: number = 1;

  constructor() {}

  ngOnInit(): void {
    const localData = localStorage.getItem('dummyData');
    if (localData != null) {
      this.dummyDataArr = JSON.parse(localData);
      this.originalDataArr = JSON.parse(localData);
    }
  }
  searchByDate() {
    if (this.dummyobj.fromDate != '' && this.dummyobj.toDate != '') {
      const frm = new Date(this.dummyobj.fromDate);
      const to = new Date(this.dummyobj.toDate);
      debugger;
      let filteredData = this.originalDataArr.filter((item: any) => {
        return (
          new Date(item.date).getTime() >= frm.getTime() &&
          new Date(item.date).getTime() <= to.getTime()
        );
      });
      this.dummyDataArr = filteredData;
    }
  }
  onsavedata() {
    debugger;
    this.dummyobj.id = this.originalDataArr.length + 1;
    this.originalDataArr.push(this.dummyobj);
    this.dummyDataArr.push(this.dummyobj);

    localStorage.setItem('dummyData', JSON.stringify(this.originalDataArr));
    this.dummyobj = {
      name: '',
      date: new Date(),
      type: '',
    };
  }
  sortByValue() {
    let filteredData;
    switch (this.sortby) {
      case 'sortbyName':
        filteredData = this.originalDataArr.sort((a: any, b: any) =>
          a.name.localeCompare(b.name)
        );
        this.dummyDataArr = filteredData;
        break;
      case 'sortbyDate':
        filteredData = this.originalDataArr.sort((a: any, b: any) =>
          a.date.localeCompare(b.date)
        );
        this.dummyDataArr = filteredData;
        break;
    }
  }
  onclose() {
    this.isSidePanelShow = false;
  }
  onAddForm() {
    this.isSidePanelShow = true;
  }
  pageChangeEvent(event: number) {
    this.p = event;
    this.dummyDataArr;
  }
}
