/*null, array are also object
so typeof obj === "object" is not enough
*/ 

var obj = {}
if(typeof obj === "object" && !Array.isArray(obj) && obj !== null){}