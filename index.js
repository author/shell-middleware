const ValidInput = (meta, next) => {
  if (meta.valid) {
    return next()
  }

  meta.violations.forEach(v => console.log(v))
}

const ValidInputWithHelp = (meta, next) => {
  if (meta.valid) {
    return next()
  }

  console.log(meta.help.default)

  meta.violations.forEach(v => console.log(v))
}

const Log = (meta, next) => {
  console.log(`${new Date().toLocaleTimeString()} -> ${meta.command.commandroot} ${meta.input}`)
  next()
}

export { ValidInput, ValidInputWithHelp, Log }
