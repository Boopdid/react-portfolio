const Project = ({ githubLink, demoLink, title, image, description }) => {
  return (
    <section className='bg-cornflower-blue p-6 rounded flex-col flex'>
      <div className='w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded overflow-hidden xl:aspect-w-7 xl:aspect-h-8'>
        {image ? (
          <img
            src={image}
            alt='title'
            className='w-full h-full object-center object-cover'
          />
        ) : (
          <div className='bg-prussian-blue text-selective-yellow w-full h-40 lg:h-48 object-center object-cover flex justify-center items-center'>
            {' '}
            Coming Soon!
          </div>
        )}
      </div>
      <div className='my-4 text-center flex-grow'>
        <h3 className='text-lg text-black font-semibold'>{title}</h3>
        <p className='text-sm text-gray-700'>{description}</p>
      </div>
      <div className='flex gap-x-4'>
        {githubLink ? (
          <a
            className='text-center flex-grow p-2 rounded text-white bg-tangerine hover:shadow-lg'
            href={githubLink}
            target='_blank'
            rel='noreferrer'
          >
            Github
          </a>
        ) : undefined}
        {demoLink ? (
          <a
            className='text-center flex-grow p-2 rounded text-white bg-tangerine hover:shadow-lg'
            href={demoLink}
            target='_blank'
            rel='noreferrer'
          >
            {' '}
            Demo{' '}
          </a>
        ) : undefined}
      </div>
    </section>
  );
};

export default Project;
