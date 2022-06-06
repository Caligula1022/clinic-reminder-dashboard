import {Component, OnInit} from '@angular/core';
import {RemindersService} from '../reminders.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Reminder} from '../model/reminder';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'app-reminders-create',
  templateUrl: './reminders-create.component.html',
  styleUrls: ['./reminders-create.component.css']
})
export class RemindersCreateComponent implements OnInit {

  mappingInfo = null;
  mid = -1;
  reminderModel = new Reminder('', '', 0, '', {mid: 0});

  constructor(
    private remindersService: RemindersService,
    private activatedRoute: ActivatedRoute,
    // tslint:disable-next-line:variable-name
    private _snackBar: MatSnackBar,
    private router: Router
  ) {
  }

  ngOnInit(): void {

    if (!localStorage.length) {
      this.router.navigate([`/login`]);
    }

    this.mid = +this.activatedRoute.snapshot.paramMap.get('mid');
    this.remindersService.getMappingById(this.mid).subscribe(result => {
      this.mappingInfo = result;
      this.reminderModel.mapping.mid = this.mappingInfo.mid;
    });
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.remindersService.postReminder(this.reminderModel).subscribe(result => {
      // console.log(this.reminderModel.createTime);
      console.log(result);
      console.log('this is a test');
      this._snackBar.open('data Saved', 'dismiss', {
        duration: 3000
      });
      setTimeout(() => {
        this.router.navigate([`/reminders/${this.mappingInfo.mid}`]);
      }, 3000);
    });
  }


}
