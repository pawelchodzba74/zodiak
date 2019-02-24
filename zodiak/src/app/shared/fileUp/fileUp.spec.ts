import {FileUp} from './fileUp';
import { ToastrService } from 'ngx-toastr';
import { TestBed } from '@angular/core/testing';
describe('fileUp', () => {
  let fileUp: FileUp;
  let fileUpspy: jasmine.SpyObj<ToastrService>;

beforeEach(() => {
  const spy = jasmine.createSpyObj('ToastrService', ['success']);
  TestBed.configureTestingModule({
    providers: [
      FileUp,
      {provide: ToastrService, useValue: spy}
    ]
  });
  fileUp = TestBed.get(FileUp);
  fileUpspy = TestBed.get(ToastrService);
 });
  it('should error array to be empty', () => {
    expect(fileUp.errors.length).toBe(0);
  });
  it('should setRequiredPropFile(propertiesFile) requirePropertiesFile is object', () => {
    fileUp.setRequiredPropFile({});
    expect(typeof fileUp.requirePropertiesFile).toBe('object');
  });
  it('should  setObj(), properti context must be object', () => {
    fileUp.setObj({});
    expect(typeof fileUp.Context).toBe('object');
  });
});

