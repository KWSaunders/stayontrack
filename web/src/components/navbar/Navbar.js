import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link, useLocation } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import "./Navbar.css";
import { MdOutlineFastfood, MdTransitEnterexit } from "react-icons/md";
import { GiWeightLiftingUp } from "react-icons/gi";
import { BiRun } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import AuthService from "../../services/auth.service";
import { FaWindowClose, FaHistory } from 'react-icons/fa'
import { SiGoogleanalytics } from 'react-icons/si'
import { BsFillCalendarDateFill } from 'react-icons/bs'
import { IoMdNutrition } from 'react-icons/io'
import { Icon } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        fontSize: "30px",
        position: "sticky",
        top: 0,

        maxWidth: "100%",
        zIndex: 1,
    },
    menuButton: {
        display: "none",
        [theme.breakpoints.down("sm")]: {
            display: "flex",
            position: "absolute",
            right: 0,
            color: "white",
        },
    },
    profileButton: {
        display: "none",
        [theme.breakpoints.down("sm")]: {
            display: "flex",
            position: "absolute",
            right: 20,
            color: "white",
        },
    },
    title: {
        flexGrow: 1,
    },
    appBarContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // background: "linear-gradient(90deg, #E0E0E0 0%, #F0F8FF 100%)",
        background: "white",
        backgroundColor: '#059',
        [theme.breakpoints.down("sm")]: {
            display: "flex",
            justifyContent: "inherit",
            alignItems: "inherit",
        },
        [theme.breakpoints.down("md")]: {
            // height: '100px',
        },
    },
    list: {
        maxWidth: 250,
    },
    fullList: {
        maxWidth: "auto",
    },
    link: {
        textDecoration: "none",
        color: "black",
        fontWeight: "600",
        "&:hover": {
            color: "lightblue",
        },
    },
    activeLink: {
        borderBottom: "2px solid white",
        color: "white",
        textDecoration: "none",

        fontWeight: "600",
    },
    linksContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
    linkItem: {
        textDecoration: "none",
        color: "#454545",
        margin: "0 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        transition: "border-bottom 0.15s ease-in-out",
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
        "&:hover": {
            borderBottom: "2px solid lightblue",
        },

        logo: {
            height: "30px",
            maxWidth: "100%",
            marginRight: "20px",
            [theme.breakpoints.down("sm")]: {
                alignContent: "start",
                justifyContent: "start",
            },
        },
    },
}));

export default function Navbar() {
    const classes = useStyles();
    const [leftDrawerOpen, setLeftDrawerOpen] = React.useState(false);
    const [user, setUser] = React.useState(undefined);
    const location = useLocation();

    const [pages, setPages] = React.useState([]);

    useEffect(() => {
        const pages = [
            {
                name: 'Program',
                path: '/program',
                icon: <GiWeightLiftingUp className="icon" size={42} />,
                auth: false,
            },
            {
                name: 'Session',
                path: '/session',
                icon: <BiRun className="icon" size={42} />,
                auth: true,
            },
            {
                name: 'History',
                path: '/history',
                icon: <FaHistory className="icon" size={42} />,
                auth: true,
            },
            {
                name: 'Analytics',
                path: '/analytics',
                icon: <SiGoogleanalytics className="icon" size={42} />,
                auth: true,
            },
            // {
            //     name: 'Calendar',
            //     path: '/calendar',
            //     icon: <BsFillCalendarDateFill className="icon" size={42} />,
            //     auth: true,
            // },
            {
                name: 'Nutrition',
                path: '/nutrition',
                icon: <IoMdNutrition className="icon" size={42} />,
                auth: true,
            },
            // {
            //     name: 'Profile',
            //     path: '/profile',
            //     icon: <CgProfile className="icon" size={42} />,
            //     auth: true,
            // },
        ];

        const user = AuthService.getCurrentUser();
        setUser(user);

        if (user) {
            setPages(pages);
            console.log('user is active in navbar');
        } else {
            setPages(pages.filter((page) => !page.auth));
        }
    }, []);

    const toggleLeftMenu = (open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        setLeftDrawerOpen(open);
    };

    return (
        <div className={classes.root}>

            {/* Desktop View */}
            <AppBar position="static" className={classes.appBarContainer}>
                <Toolbar>
                    {/* <Link to="/">
                        <img src={logo} alt="logo" className={"logo"} />
                    </Link> */}
                    {pages.map((page) => (
                        <Link
                            to={page.path}
                            className={classes.linkItem}
                            key={page.name}
                        >
                            <Typography
                                variant="h6"
                                className={
                                    location.pathname === page.path
                                        ? classes.activeLink
                                        : classes.link
                                }
                            >
                                {page.icon}
                                {page.name}
                            </Typography>
                        </Link>
                    ))}
                    {user &&
                        <IconButton
                            className={classes.profileButton}>
                            <Link to="/profile">
                                <CgProfile className="icon" size={42} />
                            </Link>
                        </IconButton>
                    }
                    <IconButton
                        size="medium"
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open menu"
                        onClick={toggleLeftMenu(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* Mobile View */}
            <Drawer open={leftDrawerOpen} onClose={toggleLeftMenu(false)} PaperProps={{ style: { width: "100%" } }}>
                {leftDrawerOpen && (
                    <div>
                        <IconButton
                            style={{ position: "absolute", right: "15px" }}
                            color="inherit"
                            aria-label="close menu"
                            onClick={toggleLeftMenu(false)}
                        >
                            <FaWindowClose />
                        </IconButton>
                    </div>
                )}
                <List className={classes.list}>
                    {pages.map((page) => (
                        <ListItem className="list-item" style={{}} key={page.name}>
                            <Link
                                to={page.path}
                                className="link-item"
                                onClick={() => setLeftDrawerOpen(false)}
                            >
                                <div className="icon-text-container">
                                    {page.icon}
                                    <ListItemText primary={page.name} />
                                </div>
                            </Link>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </div >
    );
}