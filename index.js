function takeANumber(deliLine, newName) {
  deliLine.push(newName)
  return `Welcome ${newName}. You are number ${deliLine.length + 1} in line.`
}
