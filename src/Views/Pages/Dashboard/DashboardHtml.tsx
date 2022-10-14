import "./Dashboard.css";
import Dashboard from "./Dashboard";
import { Drawer, AppBar, IconButton, Toolbar, Box, CssBaseline, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, Grid } from "@mui/material";
import { ChevronLeft, ChevronRight, Inbox, Mail, Menu } from "@mui/icons-material";

const DashboardHTML = (pg: Dashboard) => {
    const { openDrawer } = pg.state;
    return (
        <div>
            {/* <CssBaseline /> */}
            <Grid item xs={8}>
                <AppBar
                    position="fixed"
                    sx={{
                        backgroundColor: '#FFF9E0',
                    }}
                >
                    <Toolbar
                    // sx={{
                    //     backgroundColor: '#FFF9E0',
                    // }}
                    >
                        <Typography
                            variant="h6"
                            noWrap component="div"
                            sx={{
                                ml: 50,
                            }}
                        >
                            Mini variant drawer
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Grid>
            {/* Sidebar */}
            <Grid item xs={4}>
                <Drawer
                    variant="permanent"
                    open={openDrawer}
                    sx={{
                        [`& .MuiDrawer-paper`]: {
                            width: openDrawer ? 200 : 50,
                            boxSizing: 'border-box',
                            backgroundColor: '#FFF9E0',
                            overflow: 'hidden'
                        },
                    }}
                >
                    <div className="logo">
                        <img className="imgSize" onClick={() => pg.handleDrawer()} alt="" src="/images/isysew_logo.png" />
                        <div>ISYSEW</div>
                    </div>
                    <Divider />
                    <List>
                        {pg.displayMenu.map((menu, index) => (
                            <ListItem key={menu.name} disablePadding sx={{ display: 'block', color: '#05014e' }}>
                                <ListItemButton
                                    onClick={() => pg.navigate(menu.url)}
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: openDrawer ? 'initial' : 'center',
                                        px: 2.5,
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: openDrawer ? 3 : 'auto',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <img alt="" src={menu.icon} />
                                    </ListItemIcon>
                                    <ListItemText primary={menu.name} sx={{ opacity: openDrawer ? 1 : 0 }} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    {/* <List>
                        {['All mail', 'Trash', 'Spam'].map((text, index) => (
                            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: openDrawer ? 'initial' : 'center',
                                        px: 2.5,
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: openDrawer ? 3 : 'auto',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {index % 2 === 0 ? <Inbox /> : <Mail />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} sx={{ opacity: openDrawer ? 1 : 0 }} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List> */}
                </Drawer>
                <div>div content</div>
                {/* <Grid>grid content</Grid> */}
            </Grid>
        </div>
    );
};
export default DashboardHTML;


