import test from 'ava'
import helloWorld from '../src/helloWorld'

test('says hello world with no name', t => {
  t.is(helloWorld.hello(), 'Hello, World!')
})

test.skip('says hello to Bob', t => {
  t.is(helloWorld.hello('Bob'), 'Hello, Bob!')
})

test.skip('says hello to Sally', t => {
  t.is(helloWorld.hello('Sally'), 'Hello, Sally!')
})
