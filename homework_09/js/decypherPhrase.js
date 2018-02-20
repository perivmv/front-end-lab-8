 var charactersMap = {
     a: 'o',
     c: 'd',
     t: 'g'
 }

 function decypherPhrase(obj, str) {
     var newObj = {};
     for (var prop in obj) {
         newObj[obj[prop]] = prop;
     }
     cypherPhrase(newObj, str);
 }
 decypherPhrase(charactersMap, "kiggy dog");
