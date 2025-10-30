

const Header = ({data}) => {

  let username;
  if(!data){
    username = 'Admin';
  } else {
    username = data.firstName;
  }
  
  return (
    <div className='flex justify-between items-end'>
      <h1 className='text-2xl font-medium'>Hello <br/> <span className='text-3xl font-bold'>{username} 👋</span></h1>
      <button className='bg-red-600 py-2 px-3 rounded font-medium text-lg'>Log Out</button>
    </div>
  )
}

export default Header
