import {Injectable} from '@angular/core';
@Injectable()
export class RequireKeys  {
  errors: string[];
  messages: string;
  checkInObj(requireKey, object) {
    this.errors = requireKey.filter(property => !(property in object));
    return this.errors.length ? this.createMessage() : null ;
  }
  private createMessage() {

    throw new Error (`object must have properties: ${this.errors.join()}`);
  }
}
