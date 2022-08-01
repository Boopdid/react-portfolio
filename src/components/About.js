import Title from './Title';
import climbingPicture from '../images/climbing.jpg';

const About = (props) => {
  return (
    <>
      <div className='flex justify-center pb-6'>
        <Title title='About Me' />
      </div>
      <div className='text-white flex w-4/5 m-auto'>
        <div className='block'>
          <div className='w-2/5 m-auto rounded-md overflow-hidden pb-6'>
            <img src={climbingPicture} alt='Peter climbing at Clear Creek' />
          </div>
          <p>
            I come from a background of retail sales and merchandising. I have
            recently completed the full stack bootcamp thru the University of
            Denver. Throughout the course, I gained the skills to create a MERN
            ( MongoDB, Express, React, Node ) application, and I am really
            excited to continue my journey into this field!
          </p>
          <br />
          <p>
            {' '}
            In my free time, you'll find me at a local crag rock climbing,
            hiking with my doggo and girlfriend, or at one of the many music
            venues here in the Denver area.
          </p>
        </div>
      </div>
    </>
  );
};
export default About;
