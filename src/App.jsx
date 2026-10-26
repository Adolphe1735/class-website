import { useState } from 'react';
import Home from './Home.jsx';
import About from './About.jsx';
import Students from './Students.jsx';
import Contact from './Contact.jsx';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const schoolName = 'RTB Nyamata TVET School';
  const className = 'TVET Certificate IV - Software Development';

  const renderView = () => {
    switch (currentView) {
      case 'about':
        return <About goHome={() => setCurrentView('home')} />;
      case 'students':
        return <Students goHome={() => setCurrentView('home')} />;
      case 'contact':
        return <Contact goHome={() => setCurrentView('home')} />;
      case 'home':
      default:
        return (
          <Home
            schoolName={schoolName}
            className={className}
            goTo={setCurrentView}
          />
        );
    }
  };

  return (
    <div>
      <header>
        <h1>{schoolName}</h1>
        <nav>
          <button onClick={() => setCurrentView('home')}>Home</button>{' '}
          <button onClick={() => setCurrentView('about')}>About</button>{' '}
          <button onClick={() => setCurrentView('students')}>Students</button>{' '}
          <button onClick={() => setCurrentView('contact')}>Contact</button>
        </nav>
        <hr />
      </header>

      <main>{renderView()}</main>

      <footer>
        <hr />
        <p>© 2026 {schoolName} — Software Development Class</p>
      </footer>
    </div>
  );
}

export default App;