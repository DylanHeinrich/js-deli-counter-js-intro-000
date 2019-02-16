function takeANumber(deliLine, newName) {
  deliLine.push(newName)
  return `Welcome ${newName}. You are number ${deliLine.length} in line.`
}
