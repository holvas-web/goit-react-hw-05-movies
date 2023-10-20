import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link, NavList } from './Layout.styled';
import { Loader } from 'components/Loader/Loader';


 const Layout = () => {
    return (
      <Container>
        <Header>
          <nav>
            <NavList>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/movies">MOVIE</Link>
              </li>
            </NavList>
          </nav>
        </Header>
        <main>
          <Suspense fallback={<Loader/>}>
            <Outlet />
          </Suspense>
        </main> 
      </Container>
      
    );
  };

export default Layout;