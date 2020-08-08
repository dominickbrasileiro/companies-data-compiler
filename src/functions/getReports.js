const path = require('path');
const shell = require('shelljs');

const RAPINA = path.resolve(__dirname, '..', '..', '_rapina');

function getReports({ outputDir, data }) {
  const sectorsAndCompanies = Object.entries(data);

  sectorsAndCompanies.forEach(([sector, companies]) => {
    companies.forEach((company) => {
      if (shell.exec(`${RAPINA} report -s "${company}" -d "${outputDir}/${sector}"`).code !== 0) {
        shell.exit(1);
      }
    });
  });
}

module.exports = getReports;
