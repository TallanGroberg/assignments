

// try
// catch 
// finally
// Error
//throw 
// all resurved words in javascript

try {

  if (2 === 2) {
    throw new Error("ERROROROROOROROR")
  }
}
catch(error){
  console.log(error)
}

finally {
  //will run no matter what error or not 
  console.log("I'm running no matter what")
}