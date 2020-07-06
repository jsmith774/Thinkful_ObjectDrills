/* eslint-disable no-console */
'use strict';

const fiveProps = {
  foo: 'Foo',
  bar: 'Bar',
  fum: 'Fum',
  quux: 'Quux',
  spam: '**SPAM**',
};

for(const prop in fiveProps) {
  console.log(`${prop} = ${fiveProps[prop]}`);
}

