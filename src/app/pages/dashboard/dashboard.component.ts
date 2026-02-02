import { Component } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  users: User[] = [];
  filteredUsers: User[] = [];
  isDarkMode = false;
  searchText = '';
  selectedStatus = 'All';
  viewType: 'table' | 'card' = 'table';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.getUsers();
    this.applyFilter();
     const savedTheme = localStorage.getItem('theme');
  this.isDarkMode = savedTheme === 'dark';
  this.applyTheme();
  }

  applyFilter() {
    this.filteredUsers = this.users.filter(user => {
      const matchesSearch =
        user.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        user.email.toLowerCase().includes(this.searchText.toLowerCase());

      const matchesStatus =
        this.selectedStatus === 'All' || user.status === this.selectedStatus;

      return matchesSearch && matchesStatus;
    });
  }

  toggleView(type: 'table' | 'card') {
    this.viewType = type;
  }
  toggleTheme() {
  this.isDarkMode = !this.isDarkMode;
  localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  this.applyTheme();
}

applyTheme() {
  document.body.setAttribute(
    'data-theme',
    this.isDarkMode ? 'dark' : 'light'
  );
}
}
