// File: src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import GlobalStyles from './styles/GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyles />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// File: src/App.js
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/projects" component={ProjectsPage} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;

// File: src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background: #333;
  color: #fff;

  a {
    color: #fff;
    text-decoration: none;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const Header = () => {
  return (
    <Navbar>
      <div>Logo</div>
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
      </NavLinks>
    </Navbar>
  );
};

export default Header;

// File: src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  text-align: center;
  padding: 1rem;
  background: #333;
  color: #fff;
  position: fixed;
  width: 100%;
  bottom: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>Follow me on social media: Twitter, LinkedIn, GitHub</p>
    </FooterContainer>
  );
};

export default Footer;

// File: src/components/Home.js
import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const Home = () => {
  return (
    <HomeContainer>
      <h1>Welcome to My Personal Website</h1>
      <p>This is the home page where I introduce myself.</p>
    </HomeContainer>
  );
};

export default Home;

// File: src/components/About.js
import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const About = () => {
  return (
    <AboutContainer>
      <h1>About Me</h1>
      <p>Hi, my name is Aryan Yadav. I am a high schooler and I love hacking.</p>
    </AboutContainer>
  );
};

export default About;

// File: src/components/Projects.js
import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const Projects = () => {
  return (
    <ProjectsContainer>
      <h1>My Projects</h1>
      <p>
        Check out my projects on my <a href="https://scrapbook.hackclub.com/Aryan Yadav/">Scrapbook</a>.
      </p>
    </ProjectsContainer>
  );
};

export default Projects;

// File: src/pages/HomePage.js
import React from 'react';
import Home from '../components/Home';

const HomePage = () => {
  return <Home />;
};

export default HomePage;

// File: src/pages/AboutPage.js
import React from 'react';
import About from '../components/About';

const AboutPage = () => {
  return <About />;
};

export default AboutPage;

// File: src/pages/ProjectsPage.js
import React from 'react';
import Projects from '../components/Projects';

const ProjectsPage = () => {
  return <Projects />;
};

export default ProjectsPage;

// File: src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyles;