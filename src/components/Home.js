import Picture from '../images/peter-react-photo.JPG';
import Title from './Title';

const Home = (props) => {
  return (
    <>
      <div className='text-white text-center'>
        <div className='w-2/5 m-auto rounded-md overflow-hidden pb-6'>
          <img src={Picture} alt='Photo of Peter' />
        </div>
        <div className='flex justify-center'>
          <Title
            title='Peter Vrutneski'
            subtitle='Software Engineer/Fullstack Developer'
          />
        </div>
      </div>
    </>
  );
};
export default Home;
