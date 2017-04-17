import {describe} from 'ava-spec'
import isLeapYear from '../src/leap'

describe('A leap year', it => {

  it('is not very common', t => {
    t.falsy(isLeapYear(2015))
  })

  it('is introduced every 4 years to adjust about a day', t => {
    t.truthy(isLeapYear(2016))
  })

  it('is skipped every 100 years to remove an extra day', t => {
    t.falsy(isLeapYear(1900))
  })

  it('is reintroduced every 400 years to adjust another day', t => {
    t.truthy(isLeapYear(2000))
  })

  // Feel free to enable the following tests to check some more examples
  describe('Additional example of a leap year that', it => {

    it('is not a leap year', t => {
      t.falsy(isLeapYear(1978))
    })

    it('is a common leap year', t => {
      t.truthy(isLeapYear(1992))
    })

    it('is skipped every 100 years', t => {
      t.falsy(isLeapYear(2100))
    })

    it('is reintroduced every 400 years', t => {
      t.truthy(isLeapYear(2400))
    })
  })
})
