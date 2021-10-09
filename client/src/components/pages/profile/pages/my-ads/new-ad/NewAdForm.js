import { Field, reduxForm, reset } from "redux-form";
import { field_file, Input, InputFile, renderInput, Textarea } from "../../../../../common/form-controls/form-controls";
import AddIcon from '@material-ui/icons/Add';
import { useEffect, useState } from "react";

const afterSubmit = (result, dispatch) => {
	dispatch(reset('new-ad'))
}

const NewAdForm = ({ ...props }) => {
	// debugger

	const [selectedFile, setSelectedFile] = useState()
	const [preview, setPreview] = useState()

	useEffect(() => {
		if (!selectedFile) {
			setPreview(undefined)
			return
		}

		const objectUrl = URL.createObjectURL(selectedFile)
		setPreview(objectUrl)

		// free memory when ever this component is unmounted
		return () => URL.revokeObjectURL(objectUrl)
	}, [selectedFile])

	const onMainPhotoSelected = (event) => {

		if (!event.target.files || event.target.files.length === 0) {
			setSelectedFile(undefined)
			return
		}

		// I've kept this example simple by using the first image instead of multiple
		setSelectedFile(event.target.files[0])
	}
	return (
		<form onSubmit={props.handleSubmit}>
			<div className="newAd__formBody">
				<h4 className="newAd__title">Обзор транспортного средства</h4>
				<div className="newAd__textItems">
					<div className="newAd__textItem">
						<label
							htmlFor="newAdCategory">Категория</label>
						<Field
							name="category"
							type="text"
							id="newAdCategory"
							component={Input} />
					</div>
					<div className="newAd__textItem">
						<label
							htmlFor="newAdYear">Год <small>(начиная с)</small></label>
						<Field
							name="year"
							type="number"
							id="newAdYear"
							component={Input} />
					</div>
					<div className="newAd__textItem">
						<label
							htmlFor="newAdBrand">Марка</label>
						<Field
							name="brand"
							type="text"
							id="newAdBrand"
							component={Input} />
					</div>
					<div className="newAd__textItem">
						<label
							htmlFor="newAdMileage">Пробег</label>
						<Field
							name="km"
							type="number"
							id="newAdMileage"
							component={Input} />
					</div>
					<div className="newAd__textItem">
						<label
							htmlFor="newAdModel">Модель</label>
						<Field
							name="model"
							type="text"
							id="newAdModel"
							component={Input} />
					</div>
					<div className="newAd__textItem">
						<label
							htmlFor="newAdCountry">Страна</label>
						<Field
							name="country"
							type="text"
							id="newAdCountry"
							component={Input} />
					</div>
					<div className="newAd__textItem">
						<label
							htmlFor="newAdPrice">Цена</label>
						<Field
							name="price"
							type="number"
							id="newAdPrice"
							component={Input} />
					</div>
					<div className="newAd__textItem">
						<label
							htmlFor="newAdWeight">Вес</label>
						<Field
							name="weight"
							type="number"
							id="newAdWeight"
							component={Input} />
					</div>
				</div>
				<h4 className="newAd__title">Медиа файлы</h4>
				<div className="newAd__media">
					<div className="newAd__mediaItem">
						<label
							htmlFor="newAdMedia1"
						>{<AddIcon />} {selectedFile && <img src={preview} />}</label>
						<Field
							type="file"
							name="media1"
							id="newAdMedia1"
							accept='.jpg, .png, .jpeg'
							onChange={onMainPhotoSelected}
							component={InputFile}
						/>
					</div>

				</div>
				<button className="newAd__addFile">
					{<AddIcon />}
					<span>Добавить еще фото</span>
				</button>
				<h4 className="newAd__title">Описание</h4>
				<div className="newAd__descripion">
					<Field
						name="description"
						type="text"
						id="newAdCategory"
						placeholder="Описание"
						component={Textarea} />
				</div>
			</div>

			<footer className="newAd__footer">
				<ul>
					<li>
						<a href="">Предпросмотр</a>
					</li>
					<li>
						<button className="link">Создать объявления</button>
					</li>
				</ul>
			</footer>
		</form>
	)
}

const NewAdFormRedux = reduxForm({ form: 'new-ad', onSubmitSuccess: afterSubmit })(NewAdForm)

export default NewAdFormRedux;

