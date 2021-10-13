import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Favorites from '../pages/favorites/Favorites';
import ProfileSetting from '../pages/profile-setting/ProfileSetting';
import MyAdsContainer from '../pages/my-ads/MyAdsContainer';
import MessageContainer from '../pages/message/MessageContainer';

function TabPanel(props) {
	const { children, value, index, ...other } = props;
	console.log(props);
	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={0}>
					<Typography component={'div'} variant={'body2'}>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

const useStyles = makeStyles((theme) => ({
	header: {
		background: '#fff',
		color: '#252525',
		boxShadow: 'none',
		fontFamily: '"ManropeSemiBold", sans-serif',
		fontSize: '14px',
		lineHeight: '24px',
	},
	root: {
		flexGrow: 1,
	},

	// message: {
	// 	'&::after': {
	// 		content: `"(${messageAmount} новых)"`,
	// 		display: 'block',
	// 		position: 'relative',
	// 		right: '-3px',
	// 		zIdex: '1',
	// 		whiteSpace: 'nowrap',
	// 		color: '#009661',
	// 		textTransform: 'lowercase',
	// 	}
	// }
}));

const messageAmountComponent = (props) => {
	debugger
	return (
		<span>{props.messageAmount}</span>
	)
}

export default function ProfileTabs({ activeTab, messageAmount, getA11yProps, tabHandleChange, ...props }) {
	const classes = useStyles();
	const handleChange = (event, newValue) => {
		tabHandleChange(newValue)
	};

	return (
		<div className={classes.root} >
			<AppBar className={classes.header} position="static">
				<div className="container">
					<Tabs
						value={activeTab}
						onChange={handleChange}
						TabIndicatorProps={{
							style: {
								height: "3px",
								background: '#009661'
							}
						}}
						aria-label="simple tabs example"
					>
						<Tab label="Мои объявления" {...getA11yProps(0)} />
						<Tab label="Избранное" {...getA11yProps(1)} />

						<Tab
							className={classes.message}
							label={`Сообщения (${messageAmount})`} {...getA11yProps(2)} />

						<Tab label="Настройки профиля" {...getA11yProps(3)} />
					</Tabs>
				</div>

			</AppBar >
			<TabPanel value={activeTab} index={0}>
				<MyAdsContainer />
			</TabPanel>
			<TabPanel value={activeTab} index={1}>
				<Favorites />
			</TabPanel>
			<TabPanel value={activeTab} index={2}>
				<MessageContainer />
			</TabPanel>
			<TabPanel value={activeTab} index={3}>
				<ProfileSetting />
			</TabPanel>
		</div>
	);
}