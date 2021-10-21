import './Modal.scss';

type PropsType = {
	active: boolean,
	setActive: (v: boolean) => void,
	children: any
}

const Modal: React.FC<PropsType> = ({ active, setActive, children }) => {
	return (
		<>
			<div
				id="modal1"
				className={active ? 'modal active' : 'modal'}
				onClick={() => { setActive(false) }}>
				<div
					className="modal__content"
					onClick={(event) => { event.stopPropagation() }}>
					{children}
				</div>
			</div>

		</>
	)
}

export default Modal;