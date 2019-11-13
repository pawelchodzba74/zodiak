import { withoutKeys } from '../../shared/object-proces/withoutKey.js';
export class MatchModelOnSorceBd {
  constructor (ModelMaterialTable){
    this.ModelMaterialTable = ModelMaterialTable;
    this.reversModelMaterial = this.rewersModelTable;
    this.objectOwnObject = this.objectOwnerObject;
    this.headsColumns =[];
    this.exceptions;
;

  }
  modelWithAdditional(additionalModel) {
    for (const column in additionalModel) {
     this.ModelMaterialTable.push(additionalModel[column])
    }
  }

  addNameDispleyedcolumns() {
    return Object.entries(this.objectOwnerObject).reduce((arr,  [key, obj]) =>{
      return  arr.concat(Object.values(obj));
      },[])
  }
  get displayedColumns() {
    return this.ModelMaterialTable.map(obj => {
      return Object.keys(obj)[0];
    })
  }
  stringOrNumber(v) {
     v = typeof v === 'string'|| typeof v === 'number' ? v : null;
    return v;
    }
  unique(arr) {
    return arr.filter((item, i, arr) => arr.indexOf(item) === i)
  }
  oneObjFromDbIsModelTable(DataDb, additional = false){
    return DataDb.reduce((arr, obj) => {
      let objResult =this.exception(this.procesObj(obj));
      if (additional) { //console.log(additional);
        additional.reduce((result, obj) =>{
          result = Object.assign(objResult, obj);
          return result;
        },objResult);

      }
      arr.push(objResult);
      return  arr;
    },[]);
  }
  setExceptions(exceptions) {
    this.exceptions = exceptions ? exceptions : null;
  }
  exception(Obj) {
    if (this.exceptions) {
      return this.exceptions.reduce((prevObj, obj) => {
        if (obj['key'] in Obj) {
        } else {
          Obj[obj['key']] = obj['value'];
        }
        return Obj;
      },{});
    }
    return Obj;
  }
  procesObj(obj, prefix = '', buildObj = {}) {
    for (const key in obj) {
      const value = obj[key];
      if (this.stringOrNumber(value)) {
        buildObj[`${prefix}${key}`] = value;
      } else if (Array.isArray(value)) {
        buildObj[`${prefix}${key}`] = value.join();
      } else if (typeof value === 'object' && value != null){
        this.procesObj(value ,key + "_", buildObj);
      } else if (value === null){
        buildObj[`${prefix}${key}`] = '';
      }else{
        console.log('undefined value table can non accept');
        console.log(value);

      }

    }

    return buildObj;
  }

  get rewersModelTable() {
    return this.ModelMaterialTable.reduce((result, obj)  => {
      return (Object.assign(result, obj));
    }, {});
  }
  get objectOwnerObject() {
    return Object.entries(this.reversModelMaterial).reduce((Obj, [key, val]) => {
      if (typeof val === 'object') {
        Obj[key] = val;
      }
      return Obj;
    }, {});
  }
  matchModelOnSorceBd(SourceFromBd) {
    return SourceFromBd.reduce((ArrayResult, ObjOne) => {
      this.addUnDefinSourceBd(ObjOne);
      ArrayResult.push(this.deletePrpInSorceBd(ObjOne));
      return ArrayResult;
    }, []);
  }
  addUnDefinSourceBd(ObjOne) {
    this.displayedColumns.forEach(key => {
      ObjOne[key] = !(key in ObjOne) ? this.setAditionalObjec(key) : ObjOne[key];
    });
  }
  setAditionalObjec(key) {
    return this.objectOwnObject[key];
  }
  deletePrpInSorceBd(ObjOne) {
    return withoutKeys(ObjOne, ...Object.keys(ObjOne).filter(key => !this.displayedColumns.includes(key)));
  }

}
