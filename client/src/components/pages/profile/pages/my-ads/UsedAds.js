import { useState } from 'react';

const UsedAds = (porps) => {

	const [currentAds, setCurrentAds] = useState([4, 10]);

	return (
		<div className="usedAds">
			<p>Использовано объявлений:&nbsp;
				<span>{currentAds[0]}/</span>
				<span>{currentAds[1]}</span>
			</p>
		</div>
	)
}

export default UsedAds;