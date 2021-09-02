
import { useState } from 'react';
import BreadCrumb from '../../common/bread-crumb/BreadCrumb';
import ProfileTabs from './profile-tabs/ProfileTabs';
import './Profile.scss';


const Profile = () => {

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

			<ProfileTabs />
		</article>
	)
}

export default Profile;