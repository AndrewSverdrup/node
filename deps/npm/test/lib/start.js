const t = require('tap')
let runArgs
const npm = {
  commands: {
    'run-script': (args, cb) => {
      runArgs = args
      cb()
    },
  },
}
const Start = require('../../lib/start.js')
const start = new Start(npm)
t.equal(start.usage, 'npm start [-- <args>]')
start.exec(['foo'], () => {
  t.match(runArgs, ['start', 'foo'])
  t.end()
})
