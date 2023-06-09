import { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { AiFillCaretDown } from 'react-icons/ai';
import styles from './UserDropDownMenu.module.scss';
import { useAppDispatch, useAppSelector } from '@/redux/useTypedRedux';
import { Tooltip } from '@mui/material';
import { AuthThunk } from '@/redux/auth/auth.thunk';

const UserDropDownMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dispatch = useAppDispatch();

  const auth = useAppSelector(state => state.auth);

  return (
    <div>
      <Tooltip title="User Profile" placement="bottom" arrow>
        <button
          className={styles.menuUser}
          id="user-dropdown-menu"
          aria-controls={open ? 'user-dropdown-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <img src={auth.loggedIn?.avatar} />
          <p>{auth.loggedIn?.username}</p>
          <span>
            <AiFillCaretDown />
          </span>
        </button>
      </Tooltip>
      <Menu
        PaperProps={{
          sx: {
            width: '250px',
            marginTop: '10px',
            backgroundColor: '#1a1a1a',
            color: 'white'
          }
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'user-dropdown-menu'
        }}
      >
        <MenuItem disableRipple onClick={handleClose} sx={{ '&:hover': { backgroundColor: '#242424' } }}>
          My account
        </MenuItem>
        <MenuItem
          disableRipple
          onClick={() => {
            handleClose();
            dispatch(AuthThunk.logout());
          }}
          sx={{ '&:hover': { backgroundColor: '#242424' } }}
        >
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};

export default UserDropDownMenu;
