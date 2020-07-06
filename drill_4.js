/* eslint-disable no-console */
'use strict';

const joe = {name: 'Joe', jobTitle: 'Owner',};
const fred = {name: 'Fred', jobTitle: 'Project Manager',};
const george = {name: 'George', jobTitle: 'Crew Supervisor'};
const bob = {name: 'Bob', jobTitle: 'Crew Member',};
const tom = {name: 'Tom', jobTitle: 'Crew Member',};

const constructionCo = [joe, fred, george, bob, tom];

constructionCo.forEach((employee) => console.log(`${employee.jobTitle} ${employee.name}`));
