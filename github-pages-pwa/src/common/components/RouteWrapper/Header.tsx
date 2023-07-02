import React from 'react';
import { styled } from '@mui/joy';
import { useAppSelector } from '../../../App/store';
import NavMenu from './NavMenu';


const HeaderDiv = styled('div')(({theme}) => ({
  backgroundColor: theme.palette.background.surface,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignContent: 'center'
  
}));

const VerticalCenterText = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column', 
  justifyContent: 'center'
}))

const LeftSpacerDiv = styled('div')(() => ({
  width: '56px'
}))

function Header() {
  var text = useAppSelector(state => state.header.text);

  return <HeaderDiv>
    <LeftSpacerDiv/>
    <VerticalCenterText>{text}</VerticalCenterText>
    <NavMenu/>
  </HeaderDiv>
}

export default Header;