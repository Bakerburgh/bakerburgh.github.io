import { Button, Menu, MenuItem } from '@mui/joy';
import React from 'react';
import Apps from '@mui/icons-material/Apps';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../App/store';
import { NavRoute } from '../../../App/routesSlice';

function NavMenu() {
  var routes = useAppSelector(state => state.routes);
  var menuOptions = routes.navItems.filter(n => n.showInNavMenu);

  const navigate = useNavigate();

  const buttonRef = React.useRef(null);
  const [open, setOpen] = React.useState(false);

  const onMenuItemClick = (navItem: NavRoute) => () => {
    setOpen(false);
    navigate(navItem.path)

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
        {menuOptions.map((o, index) => <MenuItem key={index} onClick={onMenuItemClick(o)}>{o.label}</MenuItem>)}
      </Menu>
  </div>
}

export default NavMenu;