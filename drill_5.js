/* eslint-disable no-console */
'use strict';

const joe = {name: 'Joe', jobTitle: 'Owner',};
const fred = {name: 'Fred', jobTitle: 'Project Manager', boss: 'Joe',};
const george = {name: 'George', jobTitle: 'Crew Supervisor', boss: 'Fred',};
const bob = {name: 'Bob', jobTitle: 'Crew Member', boss: 'George',};
const tom = {name: 'Tom', jobTitle: 'Crew Member', boss: 'George',};

const constructionCo = [joe, fred, george, bob, tom];

//constructionCo.forEach((employee) => console.log(`${employee.jobTitle} ${employee.name} reports to ${employee.boss}.`));
constructionCo.forEach((employee) => {
  const {name, jobTitle, boss} = employee;
  const positionAndName = `${jobTitle} ${name}`;
  if(!boss) {
    //console.log(`${jobTitle} ${name} doesn't report to anybody.`);
    console.log(`${positionAndName} doesn't report to anybody`);
  } else {
    //console.log(`${jobTitle} ${name} reports to ${boss}.`);
    console.log(`${positionAndName} reports to ${boss}`);
  }
});