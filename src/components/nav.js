import { Link } from 'react-router-dom';

function Nav() {
  return <div className='panel-bg'><nav className='nav'>
     <span className='Bookstore-CMS'>Bookstore-CMS</span>
      <Link to='/'>
      <span className='BOOKS'>BOOKS</span>
      </Link>
      <Link to='/categories'>
      <span className='CATEGORIES'>CATEGORIES</span>
      </Link>
      <span className=''>Sign-In</span>
  </nav></div>;
}

export default Nav;