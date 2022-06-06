import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RemindersService} from '../reminders.service';
import {MatPaginator} from '@angular/material/paginator';
import {ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {AuthserviceService} from '../authservice.service';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.css']
})
export class RemindersComponent implements OnInit {

  constructor(
    private remindersService: RemindersService,
    private router: Router
  ) {
  }

  public dataSource = null;
  private doctorId = 1;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  title = 'reminder-doctor-dashboard';
  displayedColumns: string[] = [
    'patientName',
    'unfinishedHigh',
    'unfinishedMiddle',
    'unfinishedLow'
  ];

  ngOnInit(): void {

    if (!localStorage.length) {
      this.router.navigate([`/login`]);
    } else {
      this.doctorId = +localStorage.getItem('authID');
      console.log('this is id test');
      console.log(this.doctorId);
    }

    this.remindersService.getPatientMappingByDoctor(this.doctorId).subscribe(result => {
      console.log('is it correct?');
      this.dataSource = new MatTableDataSource(result);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log('yes');
    });
    /*this.dataSource = new MatTableDataSource(this.remindersService.getPatientMappingByDoctor(this.doctorId));
    this.loadedRemiders = new MatTableDataSource(result);
    this.loadedRemiders.paginator = this.paginator;*/
  }

  // tslint:disable-next-line:typedef
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();

    }
  }

  // tslint:disable-next-line:typedef
  getReminderList(row) {
    this.router.navigate([`/reminders/${row.mid}`]);
  }
}
