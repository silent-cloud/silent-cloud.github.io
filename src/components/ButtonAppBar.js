import React, { useState, useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
import {
	Divider,
	List,
	Button,
	IconButton,
	Typography,
	Toolbar,
	Box,
	AppBar,
	ListItem,
	ListItemText,
	ListItemIcon,
	ListItemButton,
	Drawer,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const ButtonAppBar = (props) => {
	const { window } = props;
	const theme = useTheme();
	const [open, setOpen] = useState(false);
	const drawerWidth = 240;

	const handleDrawer = () => {
		setOpen(!open);
	};

	const Main = styled("main", {
		shouldForwardProp: (prop) => prop !== "open",
	})(({ theme, open }) => ({
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: `-${drawerWidth}px`,
		...(open && {
			transition: theme.transitions.create("margin", {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
			marginLeft: 0,
		}),
	}));

	const CustomAppBar = styled(AppBar, {
		shouldForwardProp: (prop) => prop !== "open",
	})(({ theme, open }) => ({
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	}));

	const DrawerHeader = styled("div")(({ theme }) => ({
		display: "flex",
		alignItems: "center",
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: "flex-end",
	}));

	const drawer = (
		<div>
			<Toolbar />
			<Divider />
			<List>
				{["Inbox", "Starred", "Send email", "Drafts"].map(
					(text, index) => (
						<ListItemButton key={text}>
							<ListItemIcon>
								{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItemButton>
					)
				)}
			</List>
			<Divider />
			<List>
				{["All mail", "Trash", "Spam"].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon>
							{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
						</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
		</div>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<Box sx={{ flex: 1 }}>
			<CustomAppBar open={open} sx={{ zIndex: 2000,}}>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawer}
						edge="start"
						sx={{ mr: 2 }}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap component="div">
						Summary of Projects Worked On
					</Typography>
				</Toolbar>
			</CustomAppBar>
			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					"& .MuiDrawer-paper": {
						width: drawerWidth,
						boxSizing: "border-box",
					},
				}}
				variant="persistent"
				anchor="left"
				open={open}
			>
				<DrawerHeader/>
				<Divider />
				<List>
					{["Inbox", "Starred", "Send email", "Drafts"].map(
						(text, index) => (
							<ListItem button key={text}>
								<ListItemIcon>
									{index % 2 === 0 ? (
										<InboxIcon />
									) : (
										<MailIcon />
									)}
								</ListItemIcon>
								<ListItemText primary={text} />
							</ListItem>
						)
					)}
				</List>
				<Divider />
				<List>
					{["All mail", "Trash", "Spam"].map((text, index) => (
						<ListItem button key={text}>
							<ListItemIcon>
								{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItem>
					))}
				</List>
			</Drawer>
		</Box>
	);
};

export default ButtonAppBar;
