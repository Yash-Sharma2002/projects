import React from 'react'
import { Link, Box, Typography, Menu, MenuItem, AppBar, Divider } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { LoginContext } from '../context/Context';

export default function Header() {

    const { user } = React.useContext(LoginContext)

    const [open, setOpen] = React.useState<boolean>(false)
    function handleClick() {
        setOpen(!open);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const anchorEl = document.getElementById('basic-button')
    return (
        <>
            <AppBar position="relative" sx={{ backgroundColor: 'white', color: '#000000' }}>
                <div className='w-11/12 mx-auto py-3'>
                    <div className='flex justify-between'>
                        <Box
                            className="flex items-center justify-start w-[60%] md:w-[40%] "
                        >
                            <img src={require('../assets/logo-1.png')} style={{ width: '80px' }} alt="Roambingo" />
                            <Typography variant="h6" sx={{ fontSize: '24px', fontWeight: '600', color: '#312f92' }}>Roam</Typography>
                            <Typography variant="h6" sx={{ fontSize: '24px', fontWeight: '600', color: '#fc3532' }}>Bingo</Typography>

                        </Box>
                        <Box
                            className="flex items-center justify-start w-full mx-4"
                        >
                            <Link className="duration-150 hover:scale-105" href="/home" underline="none" sx={{ color: '#000000', fontSize: '16px', fontWeight: '600', mx: '1rem' }}>Home</Link>
                            <Link className="duration-150 hover:scale-105" href="/about" underline="none" sx={{ color: '#000000', fontSize: '16px', fontWeight: '600', mx: '1rem' }}>About</Link>
                            <Link className="duration-150 hover:scale-105" href="/contact" underline="none" sx={{ color: '#000000', fontSize: '16px', fontWeight: '600', mx: '1rem' }}>Contact</Link>
                        </Box>
                        <Box
                            className="flex items-center justify-end w-full "
                        >
                            <p style={{ color: '#000000', fontSize: '16px', fontWeight: '600', margin: '0 1rem' }}>Total Points - {user.total_point}</p>
                            <Divider orientation="vertical" flexItem />
                            <p style={{ color: '#000000', fontSize: '16px', fontWeight: '600', margin: '0 1rem' }}>Hello, {user.name ? user.name : user.username}</p>
                            <Divider orientation="vertical" flexItem />
                            <div className='flex justify-start items-center ml-2  cursor-pointer'
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                                id="basic-button"
                            >
                                {
                                    user.profile_image === null ?
                                        <AccountCircleIcon sx={{ color: '#000000', fontSize: '40px', fontWeight: '600', }} />
                                        :
                                        <img src={user.profile_image} alt={user.username} className='w-[40px] h-[40px] rounded-[50%]' />
                                }
                                <ArrowDropDownIcon sx={{ color: '#000000', fontSize: '20px', fontWeight: '600', }} />
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem onClick={handleClose}><a href="/profile">Profile</a> </MenuItem>
                                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                                </Menu>
                            </div>

                        </Box>
                    </div>
                </div>
            </AppBar>
        </>
    )
}
