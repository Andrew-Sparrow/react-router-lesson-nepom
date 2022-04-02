import {NavLink, Outlet} from 'react-router-dom';

const setActive = ({isActive}) => isActive ? 'active-link' : '';

const Layout = () => {
  return (
    <>
      <header>
        <NavLink to="/" style={({isActive}) => ({color: isActive ? 'blue' : 'white'})}>Home</NavLink>
        <NavLink to="blog" className={setActive}>Blog</NavLink>
        <NavLink to="about" className={setActive}>About</NavLink>
      </header>
      <Outlet style={{paddingBottom: '200px', minHeight: '1vh'}}/>
      <footer>2022</footer>
    </>
  );
}

export default Layout;
