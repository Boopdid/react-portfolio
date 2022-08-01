const Title = ({ title, subtitle }) => {
  return (
    <div className='p-1 border rounded-sm border-selective-yellow'>
      <div className='p-1 border-2 rounded-sm border-cornflower-blue'>
        <div className='p-1 border rounded-sm border-tangerine'>
          <h1 className='px-8 py-1 text-white'>{title}</h1>
          {subtitle ? (
            <h2 className='px-8 py-1 text-white'>{subtitle}</h2>
          ) : undefined}
        </div>
      </div>
    </div>
  );
};

export default Title;
