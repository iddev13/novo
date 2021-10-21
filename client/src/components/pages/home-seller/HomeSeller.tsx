import LoginContainer from '../../auth/LoginContainer';
import RegisterContainer from '../../auth/RegisterContainer';
import './HomeSeller.scss';

const HomeSeller: React.FC = () => {
  return (
    <section className="home-seller">
      <RegisterContainer />
      <LoginContainer />
    </section>
  )
}

export default HomeSeller;
