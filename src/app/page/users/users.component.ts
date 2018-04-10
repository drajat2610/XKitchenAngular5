import { Component, OnInit, TemplateRef } from '@angular/core';
import { UserService } from '../../services/user.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { User } from '../../models/user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  modalRef: BsModalRef;
  isNew : Boolean = true;

  constructor(private _userService: UserService, private modalService: BsModalService) { }

  ngOnInit() {
    this.resetForm();    
    this._userService.getUsers()
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
    }
    this.isNew = true;    
    this._userService.selectedUser = new User();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    this.resetForm();
  }

  onSubmit(form: NgForm) {
    if(form.value._id == null) {
      this._userService.postUser(form.value)
        .subscribe(data => {
          this._userService.getUsers();
          this.resetForm(form);
          this.modalRef.hide();          
        })
    } else {
      this._userService.patchUser(form.value._id, form.value)
        .subscribe(data => {
          this._userService.getUsers();
          this.resetForm(form);
          this.modalRef.hide();          
        })
    }
  }

  onEdit(template: TemplateRef<any>, _id: String) {
    this._userService.getUser(_id);
    this.openModal(template);
    this.isNew = false;
  }

  onDelete(_id) {
    if (confirm('Are you sure to delete this?') === true) {
      this._userService.deleteUser(_id)
        .subscribe(x => {
          this._userService.getUsers();
        });
    }
  }

}
