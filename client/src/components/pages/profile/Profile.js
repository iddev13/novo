
import { useState } from 'react';
import BreadCrumb from '../../common/bread-crumb/BreadCrumb';
import ProfileTabs from './profile-tabs/ProfileTabs';
import './Profile.scss';


const Profile = ({ activeTab, getA11yProps, tabHandleChange, messageAmount, ...props }) => {

	const [crumbs, setCrumbs] = useState(['Главная', 'Мой кабинет', 'Избранное'])

	const selected = (crumb) => {
		console.log(crumb);
	}

	return (
		<article className="profile">
			<header className="profile__header">
				<div className="container">
					<div className="profile__breadCrumbs">
						<BreadCrumb crumbs={crumbs} selected={selected} />
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