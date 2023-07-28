import './App.scss';
import MeteoWidget from '../MeteoWidget/MeteoWidget';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faEnvelope, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div className="App">
      <header>
        <a href="mailto:lekdup.dev@gmail.com" className="email"><FontAwesomeIcon icon={ faEnvelope } bounce /> lekdup.dev</a>
        <ul className="social">
          <li className="social-icon"><a href="https://www.linkedin.com/in/lekdup/" target="_blank" className="social-linkedin" rel="noreferrer"><FontAwesomeIcon icon={ faLinkedin } /></a></li>
          <li className="social-icon"><a href="https://github.com/lekdup" target="_blank" className="social-github" rel="noreferrer"><FontAwesomeIcon icon={ faGithub } /></a></li>
          <li className="social-icon"><a href="https://twitter.com/BaguetteBride" target="_blank" className="social-twitter" rel="noreferrer"><FontAwesomeIcon icon={ faTwitter } /></a></li>
        </ul>
      </header>
      <MeteoWidget city="Paris" code="75000" />
      <footer><FontAwesomeIcon icon={ faCode } /> and Crafted with <FontAwesomeIcon icon={ faHeart } beat id="heart" /> by <a href="https://linkedin.com/in/lekdup/" target="_blank" rel="noreferrer">Tenzin SIVUKPA </a></footer>
    </div>
  );
}

export default App;
