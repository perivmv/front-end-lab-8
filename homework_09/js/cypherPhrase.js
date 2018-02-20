  var charactersMap = {
      a: "o",
      c: "d",
      t: "g"
  }

  function cypherPhrase(obj, str) {
      this.map = obj;
      this.newarray = [];
      getTransformedArray(Array.from(str), decrypt)
      console.log(this.newarray.join(""));
  }

  function decrypt(element) {
      if(this.map.hasOwnProperty(element)){
         this.newarray.push(this.map[element]);
      }
      else{
          this.newarray.push(element);
      }
  }
cypherPhrase( charactersMap, "kitty cat" );

