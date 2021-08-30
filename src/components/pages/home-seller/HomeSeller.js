import './HomeSeller.scss';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted pink',
    color: state.isSelected ? 'red' : 'blue',
    background: state.isFocused ? 'red' : 'blue',
    padding: 20,
    // background: 'green'
  }),

  control: (provided) => ({
    // none of react-select's styles are passed to <Control />
    ...provided,
    width: 200,
    background: 'blue'
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
}



const HomeSeller = () => {
  return (
    <section className="home-seller">
      Home Seller
      <Select
        defaultValue={options[0]}
        styles={customStyles}
        options={options}
      />

      <Select
        defaultValue={[options[1], options[2]]}
        isMulti
        name="colors"
        options={options}
        className="basic-multi-select"
        classNamePrefix="select"
      />

      {/* <Select
        closeMenuOnSelect={false}
        defaultValue={[options[0], options[1]]}
        isMulti
        options={options}
        styles={colourStyles}
      /> */}
    </section>
  )
}

export default HomeSeller;
