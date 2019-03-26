/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import Iframe from 'react-iframe';
import { helpers, ExtendedWeb3, Tx, Type, Input, Output, Outpoint, Util } from 'leap-core';

import Web3 from 'web3';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  constructor() {
    super();
    window.web3 = helpers.extendWeb3(
      new Web3('http://18.218.2.145:8645')
    );
    window.Tx = Tx;
    window.Type = Type;
    window.Input = Input;
    window.Output = Output;
    window.Outpoint = Outpoint;
    window.Util = Util;
  }
  render() {
    return (
      <h1>
        <Iframe url="https://hackmd.io/s/ryU3JNOBm"
        id="myId"
        className="myClassname"
        display="initial"
        position="fixed"
        allowFullScreen/>
      </h1>
    );
  }
}
