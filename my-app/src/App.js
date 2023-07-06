import css from './App.module.css';

import NavBarSimple from './components/Sidebar';


function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <NavBarSimple />
    </div>
  );
}

export default App;