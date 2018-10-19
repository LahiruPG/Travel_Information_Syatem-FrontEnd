import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  isManagePlace: boolean = false;
  isManageCategory: boolean = false;

  selectedId = 1;

  constructor(private router: Router) {
    this.router.navigate(['/admin/admin-panel/manage-places']);
    this.isManagePlace = true;
  }

  ngOnInit() {
  }
  cli( num){
    this.selectedId = num;
  }

  isMe(num) {
    return num == this.selectedId;
  }
}
