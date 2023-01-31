import './styles/global.css';
import Nav from './components/nav';
import MainPage from './components/mainPage';
import AboutMePage from './components/aboutMePage';
import ProjectsPage from './components/projectsPage';
import { useState } from 'react';


function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <main className='px-5 md:px-20 lg:px-40 dark:bg-gray-900 dark:text-white'>
        <section className='min-h-screen'>
          <Nav func={() => setDarkMode(!darkMode)} />
          <MainPage/>
        </section>

        <section>
          <AboutMePage/>
        </section>

        <section>
          <ProjectsPage/>
        </section>

        <footer>
          <p className='text-center text-gray-900 dark:text-white'>&copy; 2023 Copyright - LuscaMath</p>
        </footer>
      </main>
    </div>
  )
}

export default App
