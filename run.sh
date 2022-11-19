#
# Invoke the compiled app-renderer node executable.
#

#!/bin/bash
set -eo pipefail

scriptDir="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"
cd ${scriptDir}/

node --experimental-specifier-resolution=node --no-warnings dist/index.js ${*}
