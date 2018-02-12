import test from 'ava';
import m from '.';

test('finds requires', t => {
  const a = m().exec("var foo = require('bar');");
  const b = m().exec("let foo = require('bar');");
  const c = m().exec("const foo = require('bar');");

  t.is(a[2], 'bar');
  t.is(b[2], 'bar');
  t.is(c[2], 'bar');
});

test('finds requires without variables', t => {
  const a = m().exec("require('bar');");

  t.is(a[2], 'bar');
});

test('finds requires with spaces', t => {
  const a = m().exec("var foo =  require('bar');");
  const b = m().exec("let foo = require( 'bar');");
  const c = m().exec("const  foo = require ('bar');");
  const d = m().exec("require ( 'bar' ) ;");

  t.is(a[2], 'bar');
  t.is(b[2], 'bar');
  t.is(c[2], 'bar');
  t.is(d[2], 'bar');
});
