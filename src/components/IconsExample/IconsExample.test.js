import React from 'react'
import renderer from 'react-test-renderer'
import Iconsexample from '.'

it('Iconsexample: default', () => {
  const component = renderer.create(<Iconsexample />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})