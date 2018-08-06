import { Component } from 'react';
import checkPropTypes from 'check-prop-types';
import { ShallowWrapper } from 'enzyme';

/**
 * Return node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

/**
 * Check prop types and throw error if they don't pass React prop types
 * @param {Component} component - React component
 * @param {object} conformingProps - props that should pass test
 */
export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name,
    null);
  expect(propError).toBeUndefined();
}