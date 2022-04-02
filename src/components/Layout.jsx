import {NavLink, Outlet} from 'react-router-dom';
import { CustomLink } from './CustomLink';

const setActive = ({isActive}) => isActive ? 'active-link' : '';

const Layout = () => {
  return (
    <>
      <header>
        <NavLink to="/" style={({isActive}) => ({color: isActive ? 'blue' : 'white'})}>Home</NavLink>
        <CustomLink to="blog">Blog</CustomLink>
        <NavLink to="about" className={setActive}>About</NavLink>
      </header>
      <Outlet style={{paddingBottom: '200px', minHeight: '1vh'}}/>
      <footer>2022</footer>
    </>
  );
}

export default Layout;
