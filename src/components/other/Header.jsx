

const Header = ({data, changeUser}) => {

  let username;
  if(!data){
    username = 'Admin';
  } else {
    username = data.firstName;
  }

  const logOutUser = () =>{
    localStorage.setItem('loggedInUser','')
    changeUser('');
    // window.location.reload();
  }
  
  return (
    <div className='flex justify-between items-end'>
      <h1 className='text-2xl font-medium'>Hello <br/> <span className='text-3xl font-bold'>{username} 👋</span></h1>
      <button onClick={logOutUser} className='bg-red-600 cursor-pointer active:scale-95 py-2 px-3 rounded font-medium text-lg'>Log Out</button>
    </div>
  )
}

export default Header
