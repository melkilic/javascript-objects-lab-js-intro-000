var recipes= {prop:'1'};
var recipes= new Object({prop:'2'});
function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({},object,{[key]: value})
}
function destructivelyupdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
 return object
}
}
