# shell-middleware

Common middleware for [@author.io/shell](https://github.com/author.shell) CLI applications (Browser &amp; Node.js runtimes).

**To Use:** 

|Runtime  |Example  |
|---------|---------|
| Node.js | _Install:_ `npm install @author.io/shell-middleware -S`<br/>_Usage:_ `import { ValidInput } from '@author.io/shell-middleware'` |
| Browser | `import { ValidInput } from 'https://cdn.pika.dev/@author.io/shell-middleware@latest'` |

## Capabilities

This library contains a collection of commonly used middleware methods for use with a shell app.

```javascript
import { Shell } from 'https://cdn.pika.dev/@author.io/shell@latest'

// Import this library...
import { MiddlewareA, MiddlewareB } from 'https://cdn.pika.dev/@author.io/shell-middleware@latest'

// Simple shell
const shell = new Shell({
  name: 'my-cli'
})

shell.use(<middleware>) // <----- Apply middleware.

...
```

### ValidInput

This method enforces flag processing rules (see [@author.io/arg](https://github.com/author/arg) for options). For example, this method will recognize failure to specify a required flag by displaying a violation notice. All further processing is aborted.

```javascript
import { ValidInput } from '...@author.io/shell-middleware@latest'

shell.use(ValidInput)
```

### ValidInputWithHelp

This is nearly identical to **ValidInput**, except it will _also display the default help message_.

```javascript
import { ValidInputWithHelp } from '...@author.io/shell-middleware@latest'

shell.use(ValidInputWithHelp)
```

### Log

Log the original command. This is a pass-thru method, so processing will continue.

```javascript
import { Log } from '...@author.io/shell-middleware@latest'

shell.use(Log)
```