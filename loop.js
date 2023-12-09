// node myFile.js
const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

//new timers, tasks, operations are recorder from myFile running
myFile.runContents();

//helper function
const shouldContinue = () => {
  // check one : Any pending setTimeout, setInterval , setImmediate ?
  //check two: any OS task? i.e. server listening to some ports
  //check three: Any pending long running operations? like fs module
    return pendingTimers.length || pendingOSTasks.length || pendingOperations.length
};

//Entire body executes in one 'tick'
while (shouldContinue()) {
    //Node looks at pending timers and sees if any 
    //functions are ready to be called

    //Node looks at pendingOSTasks and pendingOpeartions and implements
    //respective callbacks

    //Node pauses execution..... continue when...
    // -a new pendingoSTask is done 
    //- a new pendingOperation is done
    //- a timer is about to complete 

    // Look at pendingTimers. Call any setImmediate

    //handle any 'close' events
    
    
}

//exit back to terminal
process.exit(1);
