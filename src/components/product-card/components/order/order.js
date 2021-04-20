require('webpack-jquery-ui');
require('cleave.js');

$('.order__input').toArray().forEach((field) => {
  new Cleave(field, {
    prefix: '+7',
    delimiters: [' (', ') ', '-'],
    blocks: [2, 3, 3, 2, 2],
    noImmediatePrefix: true,
  });
});