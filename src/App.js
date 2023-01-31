import './App.css';
import ColorTile from './Tiles/ColorTile';

let tileMap = new Map();
let totalTiles = 5;

const NavBar = () => {
  return(
    <nav className='NavBar'>
      <button className='tutorial'>Tutorial</button>
      <h1 className='Title'>Color Palette</h1>
    </nav>
  );
}
const createTileArray = (length) => [
  ...Array(length)
];

function LayTiles() {
  tileMap = createTileArray(totalTiles).map((n, i) => (
    <ColorTile key={i} />
  ));
  return tileMap;
  
}

function App() {
  return(
    <>
      <NavBar />
      <LayTiles />
    </>
  );
}

export default App;
