import '../MyAds.scss';
import NewAdFormRedux from './NewAdForm';

const NewAd = (props) => {
	return (
		<section className="newAd">
			<div className="container">
				<NewAdFormRedux onSubmit={props.formData} />
			</div>
		</section>
	)
}

export default NewAd;