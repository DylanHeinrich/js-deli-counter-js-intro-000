function takeANumber(deliLine, newName) {
  deliLine.push(newName)
  return `Welcome, ${newName}. You are number ${deliLine.length} in line.`
}

function nowServing(deliLine) {
  if(deliLine.length > 0){
    var firstInLine = deliLine[0]
    deliLine.shift()
    return `Currently serving ${firstInLine}.`
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(deliLine) {
  var line = "The line is currently: "
  if(deliLine.length > 0){
    line += `${i}. ${deliLine[i]}`
  }
}
