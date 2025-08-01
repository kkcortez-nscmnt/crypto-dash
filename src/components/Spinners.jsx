import { BarLoader } from 'react-spinners';

const override = {
  display: 'block',
  margin: '0 auto 5px auto',
};

const Spinners = ({ color = 'blue', size = '150' }) => {
  return (
    <div>
      <BarLoader color={color} size={size} cssOverride={override} aria-label="Loading..." />
    </div>
  );
};

export default Spinners;
