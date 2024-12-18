const InfoSection = ({ userSelections }) => {
  return (
    <div>
      <img
        src={'https://aitrip.tubeguruji.com/placeholder.jpg'}
        className='h-[30vh] w-full rounded object-cover'
        alt=''
      />
      <div className='my-5 flex flex-col gap-2'>
        <h2 className='text-2xl font-bold'>{userSelections?.destination}</h2>
        <div className='flex gap-5'>
          <span className='rounded bg-slate-300 p-2 text-xl font-bold'>
            {userSelections?.days}
            {userSelections?.days > 0 ? ' Days' : ' Day'}
          </span>

          <span className='rounded bg-slate-300 p-2 text-xl font-bold'>
            {userSelections?.peopleType}
          </span>

          <span className='rounded bg-slate-300 p-2 text-xl font-bold'>
            {userSelections?.budget}
          </span>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
