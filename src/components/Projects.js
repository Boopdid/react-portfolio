import Title from './Title';
import Project from './Project';
import parkpassimage from '../images/park-pass.png';
import teacupyorkie from '../images/teacup-yorkies.png';
import clackshack from '../images/clack-shack.png';

let projects = [
  {
    title: 'Clickity-Clack-Shack',
    githubLink: 'https://github.com/Boopdid/clickity-clack-shack',
    demoLink: 'https://clickity-clack-shack.herokuapp.com/',
    image: clackshack,
    description:
      'An ecommerce site for tabletop, dice and board games. I built this website using the MERN (Mongo Express React Node) stack.',
  },
  {
    title: 'Teacup-Yorkies',
    githubLink: 'https://github.com/Boopdid/teacup-yorkies',
    demoLink: 'https://howler-forpets.herokuapp.com/about',
    image: teacupyorkie,
    description:
      "This application is a collaboratively developed social media application using the full-stack MVC paradigm. The concept is a social media website for pet-oriented content and showcasing a user's pet with pictures, traits and personality. It's also a place for interacting with other pet owners. We like to think of it as a twitter-like website for our furry friends.",
  },
  {
    title: 'Park-Pass',
    githubLink: 'https://github.com/gokublue007/Park-Pass',
    demoLink: 'https://gokublue007.github.io/Park-Pass/',
    image: parkpassimage,
    description:
      'Our task was to create a website that can provide information related to any and every National Park in the U.S. requiring only the name of the National Park as input.',
  },
];

const Projects = () => {
  return (
    <>
      <div className='flex justify-center'>
        <Title title='Projects' />
      </div>
      <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3'>
          {projects.map((p) => (
            <Project key={p.title} {...p} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
