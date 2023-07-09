import { Divider, styled } from '@mui/joy';
import React from 'react';

const Body = styled('div')(() => ({
  margin: '0px 10px'
}));

function HomeApp() {
  return (
    <Body>
      <p>Use the app switcher menu in the top left to switch to an application.</p>
      <Divider/>
      <i>This app is intended for family and friends. Use at your own risk.</i>
      <Divider/>
      <h1>Change Log</h1>
      <h2>Version 0.2.0</h2>
      <ul>
        <li>Fixed margin issues for iPhone users.</li>
        <li>Tweaked domino colors.</li>
        <li>Fixed issue with scrolling when many dominos are selected.</li>
        <li>Replaced the logo and page title.</li>
      </ul>
      <h2>Version 0.1.0</h2>
      First Version. Basic domino counter.
    </Body>
  );
}

export default HomeApp;
