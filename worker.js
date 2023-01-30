
self.onmessage=function(){
    for(var i=0;i<10000000000;i++){
var sum1=0;

        sum1+=i;
    }
    
    self.postMessage(sum1);
}