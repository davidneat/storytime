import assert from 'power-assert';
import sinon from 'sinon';
import React from 'react';
import ReactTestUtils from 'react/lib/ReactTestUtils';

global.assert = assert;
global.sinon = sinon;
global.React = React;
global.ReactTestUtils = ReactTestUtils;
