import { dateFieldName } from "@telerik/kendo-intl";

export class CompareTwoDate {
  Date: Date;

constructor() {

}

EndAfterStart(start , end ) {
 if (start instanceof Date && end instanceof Date ) {
    return end >= start ? this.createDateStartEnd(start, end) : null;
 } else if (start === null && end instanceof Date) {
    return true;
 } else if (end === null && start instanceof Date) {
    return true;
  } else if (end === null && end === null) {
    return true;
  } else {
    return;
  }


 }
 createDateStartEnd(start, end) {
   return {
     start: start,
     end: end
   };
 }
getMainObj() {
  return this.Date;
}
}
