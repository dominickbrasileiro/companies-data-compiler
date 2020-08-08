require('dotenv/config');

const path = require('path');
const createSectorDirs = require('./functions/createSectorDirs');
const getReports = require('./functions/getReports');

const COMPANIES = require('./assets/companies.json');

console.log(`
Companies Data Compiler 1.0
Copyright (c) 2020 Dominick, all rights reserved.

Includes other software related under the MIT license:
 - Rapina, Copyright 2018 Adriano P. For licensing see /Licenses/LICENSE-Rapina.txt
`);

const config = {
  data: COMPANIES,
  outputDir: path.resolve(__dirname, '..', 'reports'),
};

console.log('Creating sector directories...');
createSectorDirs(config);
console.log('Sector directories - OK');

console.log('\nStarting Rapina... (https://github.com/dude333/rapina)\n\n');
getReports(config);
console.log('Rapina started.');
