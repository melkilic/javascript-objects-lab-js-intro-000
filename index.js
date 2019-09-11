var recipes= {prop:'1'};
var recipes= new Object({prop:'2'});
function updateObjectWithKeyAndValue(recipes,prop,'1'){
return Object.assign({},recipes,{[prop]:'2'})
}
