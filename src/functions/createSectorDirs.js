const path = require('path');
const fs = require('fs');
const shell = require('shelljs');

function createSectorDirs({ outputDir, data }) {
  const sectors = Object.keys(data);

  sectors.forEach((sector) => {
    const dir = path.resolve(outputDir, sector);

    if (!fs.existsSync(dir)) {
      shell.mkdir('-p', dir);
    }
  });
}

module.exports = createSectorDirs;
