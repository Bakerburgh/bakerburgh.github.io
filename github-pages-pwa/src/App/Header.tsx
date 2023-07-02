import { Button, Menu, MenuItem, styled } from '@mui/joy';
import React from 'react';
import { useAppSelector } from './store';
import Apps from '@mui/icons-material/Apps';


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

function NavMenu() {
  const [selectedIndex, setSelectedIndex] = React.useState<number>(1);

  const buttonRef = React.useRef(null);
  const [open, setOpen] = React.useState(false);

  const createHandleClose = (index: number) => () => {
    setOpen(false);
    if (typeof index === 'number') {
      setSelectedIndex(index);
    }
  };

  return <div>
      <Button
        ref={buttonRef}
        id="selected-demo-button"
        aria-controls={'selected-demo-menu'}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="plain"
        color="neutral"
        onClick={() => {
          setOpen(!open);
        }}>
        <Apps />
      </Button>
      <Menu
        id="selected-demo-menu"
        anchorEl={buttonRef.current}
        open={open}
        onClose={createHandleClose(-1)}
        aria-labelledby="selected-demo-button"
      >
        <MenuItem
          {...(selectedIndex === 0 && { selected: true, variant: 'soft' })}
          onClick={createHandleClose(0)}
        >
          Random project
        </MenuItem>
        <MenuItem
          {...(selectedIndex === 1 && { selected: true, variant: 'soft' })}
          onClick={createHandleClose(1)}
        >
          Production - web
        </MenuItem>
        <MenuItem
          {...(selectedIndex === 2 && { selected: true, variant: 'soft' })}
          onClick={createHandleClose(2)}
        >
          Staging - web
        </MenuItem>
      </Menu>
  </div>
}


function Header() {
  var text = useAppSelector(state => state.header.text);
  return <HeaderDiv>
    <div></div>
    <VerticalCenterText>{text}</VerticalCenterText>
    <NavMenu/>
  </HeaderDiv>
}

export default Header;