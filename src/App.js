import { BrowserRouter, Link } from 'react-router-dom';

import Routes from './Routes';

function App() {
  return (
    <BrowserRouter>
      <header>
        <strong>React Router v5</strong>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Produtos</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <Routes />
      </main>
    </BrowserRouter>
  );
}

export default App;
