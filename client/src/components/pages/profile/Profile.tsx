
import { useState } from 'react';
import BreadCrumbsMU from '../../common/bread-crumbsMU/BreadCrumbsMU';

import ProfileTabs from './profile-tabs/ProfileTabs';
import './Profile.scss';

type PropsType = {
	activeTab: number,
	messageAmount: number,
	getA11yProps: (index: number) => void,
	tabHandleChange: (index: number) => void,
}

const Profile: React.FC<PropsType> = ({ activeTab, getA11yProps, tabHandleChange, messageAmount, ...props }) => {
	return (
		<article className="profile">
			<header className="profile__header">
				<div className="container">
					<div className="profile__breadCrumbs">
						<BreadCrumbsMU />
					</div>
					<h2 className="profile__title">Избранное</h2>
				</div>
			</header>

			<ProfileTabs
				activeTab={activeTab}
				getA11yProps={getA11yProps}
				tabHandleChange={tabHandleChange}
				messageAmount={messageAmount} />
		</article>
	)
}

export default Profile;