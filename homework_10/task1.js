function debounce(callback, ms){ 
    let canRun = true; 
    return function(){
         if (canRun) {             
            callback();
            canRun = false;
            let timeoutId = setTimeout(()=>{ 
                canRun = true;
                clearTimeout(timeoutId) ;
            }, ms);
        }
    }
};

let iterator = 0;

function increaseIteratorBy1() {
 iterator++;
 printIteratorValue();
}

function printIteratorValue() {
 console.log('Iterator value ', iterator);
}

var increaseIterator = debounce(increaseIteratorBy1, 1000);

increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();