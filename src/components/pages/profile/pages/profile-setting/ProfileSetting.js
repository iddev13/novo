import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './ProfileSetting.scss';
import { Box, Link } from '@material-ui/core';
import ProfileFormPasswordContainer from './forms/ProfileFormPasswordContainer';



const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
	},
	heading: {
		fontSize: theme.typography.pxToRem(20),
		fontFamily: '"ManropeMedium", sans-serif',
		// fontWeight: theme.typography.fontWeightRegular, 
		lineHeight: '150%',
		color: '#252525',
	},
	body: {
		// display: 'flex',
		flexDirection: 'column',
	},
	hints: {
		fontFamily: '"ManropeMedium" , sans-serif',
		fontSize: '14px',
		lineHeight: '150%',
		color: '#868686'
	},
	changeElemTitle: {
		fontFamily: '"ManropeMedium", sans-serif',
		fontSize: '16px',
		lineHeight: '24px',
		color: '#252525',
		marginBottom: '16px',
	}
}));

const ProfileSetting = () => {
	const classes = useStyles();
	return (
		<section className="profileSetting">
			<div className="container">
				<h3 className="profileSetting__profileName">Профиль mail@gmail.com</h3>
				<div className="profileSetting__profileExit">Выйти из аккаунта</div>
				<div className="profileSetting__accordion">
					<div className={classes.root}>
						<Accordion>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel1a-content"
								id="panel1a-header"
							>
								<Typography
									component={'h5'}
									className={classes.heading}>Настройки акаунта</Typography>
							</AccordionSummary>
							<AccordionDetails className={classes.body}>
								<Typography className={classes.hints}>Ваш E-mail адрес:</Typography>
								<Link href="mailto:email@gmail.com">
									email@gmail.com
								</Link>

								<div style={{ width: '100%' }}>
									<Box
										display="flex"
										alignItems="flex-start"
										bgcolor="background.paper"
									// sx={{ height: 100 }}
									>
										<Box flex="0 0 50%">
											<Typography component={'h6'} className={classes.changeElemTitle}>
												Изменить E-mail адрес
											</Typography>
											<Box>

											</Box>
										</Box>
										<Box flex="0 0 50%">
											<Typography component={'h6'} className={classes.changeElemTitle}>
												Изменить пароль
											</Typography>
											<Box>
												<ProfileFormPasswordContainer labelFor="Введите новый пароль" />
											</Box>
										</Box>
									</Box>
								</div>

								<Typography>
									Изменить E-mail адрес
								</Typography>
								<Typography>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
									sit amet blandit leo lobortis eget.
								</Typography>
							</AccordionDetails>
						</Accordion>
						<Accordion>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel2a-content"
								id="panel2a-header"
							>
								<Typography className={classes.heading}>Accordion 2</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
									sit amet blandit leo lobortis eget.
								</Typography>
							</AccordionDetails>
						</Accordion>
						<Accordion disabled>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel3a-content"
								id="panel3a-header"
							>
								<Typography className={classes.heading}>Disabled Accordion</Typography>
							</AccordionSummary>
						</Accordion>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ProfileSetting;