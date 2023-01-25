import { Link } from 'react-router-dom';
import URL_DATA from './data.json';

import reactLogo from './assets/react.svg';
import './App.css';

function Home() {
  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://github.com/thepuskar/react-hooks" target="_blank">
          <img
            src="https://raw.githubusercontent.com/alDuncanson/react-hooks-snippets/master/icon.png"
            className="logo react"
            alt="React logo"
          />
        </a>
      </div>
      <h1>React + Hooks</h1>
      <div className="card">
        <div className="title">Hooks Demo Link</div>
        {URL_DATA?.map((item: IUrlData) => (
          <Link key={item?.path} to={item?.path}>
            <p>{item?.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;

interface IUrlData {
  name: string;
  path: string;
}
