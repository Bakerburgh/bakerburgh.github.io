import { styled } from '@mui/joy';
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

function Header(props: {headerText: string}) {
  return <HeaderDiv>
    <LeftSpacerDiv/>
    <VerticalCenterText>{props.headerText}</VerticalCenterText>
    <NavMenu/>
  </HeaderDiv>
}

export default Header;