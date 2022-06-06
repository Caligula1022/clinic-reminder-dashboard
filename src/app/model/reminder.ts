import {Timestamp} from 'rxjs';

export class Reminder {

  // @ts-ignore
  constructor(
    public title: string,
    public desc: string,
    public duration: number,
    public priority: string,
    // public createTime: number,
    public mapping: {
      mid: number
    }
  ) {}
}
