function takeANumber(deliLine, newName) {
  deliLine.push(newName)
  return `Welcome, ${newName}. You are number ${deliLine.length} in line.`
}

function nowServing(deliLine) {
  if(deliLine.length > 0){
    var firstInLine = deliLine[0]
    delete deliLine[0]
    return firstInLine
  }
  else {
    return "There is nobody waiting to be served!"
  }
}
