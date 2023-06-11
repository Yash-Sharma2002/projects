import * as React from 'react';
import { AppBar, List, Divider, ListItem, ListItemButton, ListItemText, Box, CssBaseline, Drawer, IconButton, Toolbar, Typography, Link } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

// @ts-ignore
import logo from "../assets/alic-2.png"

interface Props {
    window?: () => Window;
}

const drawerWidth = 240;

export default function Header(props: Props) {

    const navItems = [
        {
            name: 'Home',
            link: '#home'
        },
        {
            name: 'About',
            link: '#about'
        },
        {
            name: 'Projects',
            link: '#projects'
        },
        {
            name: 'Investors',
            link: '#investors'
        },
        {
            name: 'Services',
            link: '#services'
        },
        {
            name: 'Contact Us',
            link: '#contact'
        }
    ]

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                ALIC of INDIA
            </Typography>
            <Divider />
            <List>
                {
                    navItems.map((item, index) => (
                        <ListItem disablePadding key={index}>
                            <Link href={item.link} underline='none' sx={{ color: '#000' }}>
                                <ListItemButton sx={{ textAlign: 'center' }}>
                                    <ListItemText primary={item.name} />
                                </ListItemButton>
                            </Link>
                        </ListItem>
                    ))
                }
                <ListItem disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <ListItemText primary={'item'} />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" className='bg-[#03001e!important] '>
                <Toolbar disableGutters className='w-[90%!important] mx-auto flex justify-between items-center' sx={{ p: 0 }}>
                    <div className='flex justify-start items-center '>
                        <img src={logo} alt="ALIC of INDIA" className='w-[25px] mx-2' />
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, display: 'block', fontSize: '1.2rem', mt: 0.5 }}
                        >
                            ALIC
                        </Typography>
                    </div>
                    <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
                        {
                            navItems.map((item, index) => {
                                return (
                                    <>
                                        <div key={index}>
                                            <Link className="nav-items mx-1" href={item.link} underline='none' sx={{ color: '#fff' }}>
                                                {item.name}
                                            </Link>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </Box>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon sx={{ fontSize: '30px' }} />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}