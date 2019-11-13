export function withoutKeys(Obj, ...keys) {
  const object = Object.assign({},Obj);
  for (const key in object) {
   if (keys.includes(key)){
     delete object[key];
   }

  }
    return object
//  return Object.fromEntries(
//    Object.entries(
//      Obj).filter(
//        (keyValue) => !keys.includes(
//          keyValue[0])
//     )
//   );

  // console.log( keys[0] in Obj);

  // for (const key in Object) {
  //  key
  // }
  //  return keys.reduce((result, key, index) =>{
  //  if (key in Obj){
  //   result[key]=Obj[key]
  //       return result;

  //  }
  // },{})


}
