import { Button, Menu, MenuItem } from '@mui/joy';
import React, { useCallback } from 'react';
import Apps from '@mui/icons-material/Apps';

import { useColorScheme } from '@mui/joy/styles';
import { switchToApp } from './appSwitcherSlice';
import { useAppDispatch } from '../store';
import { AppKey, AppList } from './AppMetadata';

const AppSwitcherOptions: { key: AppKey, label: string }[] =
  AppList.filter(app => app.appSwitcherLabel).map(app => ({ key: app.key, label: app.appSwitcherLabel! }))



function NavMenu() {
  const { mode, setMode } = useColorScheme();
  const toggleDarkMode = useCallback(() => {
    setMode(mode === 'dark' ? 'light' : 'dark')
  }, [mode, setMode]);

  const dispatch = useAppDispatch();

  const buttonRef = React.useRef(null);
  const [open, setOpen] = React.useState(false);

  const onMenuItemClick = (appKey: AppKey) => () => {
    setOpen(false);
    dispatch(switchToApp(appKey));
  };

  return <div>
    <Button
      sx={{ width: '56px' }}
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
      {AppSwitcherOptions.map((app, index) => <MenuItem key={index} onClick={onMenuItemClick(app.key)}>{app.label}</MenuItem>)}
      <MenuItem key={AppList.length}
        onClick={toggleDarkMode}>
        {mode === 'dark' ? 'Turn light' : 'Turn dark'}
      </MenuItem>
    </Menu>
  </div>
}

export default NavMenu;