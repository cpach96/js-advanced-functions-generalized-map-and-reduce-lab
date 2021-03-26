// Add your functions here
function map(sourceArray,sourceFunction){
    let newArr = []
    for (let i = 0; i < sourceArray.length; i++){
        newArr.push(sourceFunction(sourceArray[i]))
    }
    return newArr
}

function reduce(sourceArray,sourceFunction,startingPoint){
    if(startingPoint){
      return sourceArray.reduce(sourceFunction,startingPoint)
    }else if (sourceArray.reduce(sourceFunction) === true){
        return true
    } else {
        return sourceArray.reduce(sourceFunction,0)
    }
    
}