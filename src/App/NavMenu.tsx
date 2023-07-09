import { Button, Menu, MenuItem } from '@mui/joy';
import React from 'react';
import Apps from '@mui/icons-material/Apps';
import { useAppDispatch } from './store';
import { useColorScheme } from '@mui/joy/styles';
import { AppList, AppSwitcherOption, switchToApp } from './appSwitcherSlice';

function NavMenu() {
  const { mode, setMode } = useColorScheme();
  const dispatch = useAppDispatch();
  
  const buttonRef = React.useRef(null);
  const [open, setOpen] = React.useState(false);

  const onMenuItemClick = (navItem: AppSwitcherOption) => () => {
    setOpen(false);
    dispatch(switchToApp(navItem));
  };

  return <div>
      <Button
        sx={{width:'56px'}}
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
        onClose={() => setOpen(false)}
        aria-labelledby="selected-demo-button"
      >
        {AppList.map((o, index) => <MenuItem key={index} onClick={onMenuItemClick(o)}>{o.label}</MenuItem>)}
        <MenuItem key={AppList.length} 
          onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}>
            {mode === 'dark' ? 'Turn light' : 'Turn dark'}
        </MenuItem>
      </Menu>
  </div>
}

export default NavMenu;