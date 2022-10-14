import "./Invoices.css";
import Invoices from "./Invoices";
import { Drawer, AppBar, IconButton, Toolbar, Box, CssBaseline, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, Grid } from "@mui/material";
import { ChevronLeft, ChevronRight, Inbox, Mail, Menu } from "@mui/icons-material";

const InvoicesHTML = (pg: Invoices) => {
    const { openDrawer } = pg.state;
    return (
        <Box>
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
                        {pg.displayMenu.map((menu:any) => (
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
                </Drawer>
                <div>div content</div>
        </Box>
    );
};
export default InvoicesHTML;