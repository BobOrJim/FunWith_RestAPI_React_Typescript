export const consoleUnknownObject = (object: any) => {
  var propNames = Object.getOwnPropertyNames(object);
  propNames.forEach(function (propName) {
    console.log("propname= " + propName + " provvalue= " + object[propName]);
  });
};
