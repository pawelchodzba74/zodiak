export function createModelForMaterialTable (Obj) {
    return Object.entries(Obj).map(([key, val]) => {
      return {[key]: val};
    }
  );

}
