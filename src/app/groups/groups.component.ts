import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-groups',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './groups.component.html',
  styleUrl: './groups.component.css'
})
export class GroupsComponent {

  selectedGroup = '';

  groups: any = {

    A: [
      'Member 1',
      'Member 2',
      'Member 3',
      'Member 4',
      'Member 5',
      'Member 6',
      'Member 7',
      'Member 8',
      'Member 9',
      'Member 10'
    ],

    B: [
      'Member 1',
      'Member 2',
      'Bapu',
      'Member 4',
      'Member 5',
      'Member 6',
      'Member 7',
      'Member 8',
      'Member 9',
      'Member 10'
    ],

    C: [
      'Member 1',
      'Member 2',
      'Anup Mohanty',
      'Member 4',
      'Member 5',
      'Member 6',
      'Member 7',
      'Member 8',
      'Member 9',
      'Member 10'
    ],

    D: [],
    E: [],
    F: []
  };

  showGroup(group: string) {
    this.selectedGroup = group;
  }

}
