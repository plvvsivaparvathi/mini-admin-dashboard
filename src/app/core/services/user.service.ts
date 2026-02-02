import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  private users: User[] = [
    { id: 1, name: 'Arjun', email: 'arjun@mail.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Meena', email: 'meena@mail.com', role: 'User', status: 'Inactive' },
    { id: 3, name: 'Rahul', email: 'rahul@mail.com', role: 'Manager', status: 'Active' },
    { id: 4, name: 'Anita', email: 'anita@mail.com', role: 'User', status: 'Active' }
  ];

  getUsers() {
    return [...this.users];
  }
}
