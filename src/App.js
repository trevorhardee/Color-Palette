import './App.css';
import ColorTile from './Tiles/ColorTile';
import React from 'react';
import { useDispatch } from "react-redux";
import { randomizeColor, colorPush } from "./features/color/colorSlice";

let tileMap = new Map();
let totalTiles = 5;

const NavBar = () => {
  const dispatch = useDispatch();
  return(
    <nav className='NavBar'>
      <button className='tutorial'>Tutorial</button>
      <button className='generate'
          onClick={() => tileMap.map((_,i) => (dispatch(randomizeColor(i))))}>Generate</button>
      <h1 className='Title'>Color Palette</h1>
    </nav>
  );
}
const createTileArray = (length) => [
  ...Array(length)
];

function RandomizeColor(){
  let red = Math.floor(Math.random() * 255).toString(16);
  red = red.length < 2 ? red = '0' + red: red;
  let green = Math.floor(Math.random() * 255).toString(16);
  green = green.length < 2 ? green = '0' + green: green;
  let blue = Math.floor(Math.random() * 255).toString(16);
  blue = blue.length < 2 ? blue = '0' + blue: blue;
  return '#' + red + blue + green;
}

function createStateObject(i){
  let tileColor = RandomizeColor()
  let isLocked = false

  return {id: i, tileColor: tileColor, isLocked: isLocked}
}
 
function LayTiles() {
  let curr = {}
  const dispatch = useDispatch();
  tileMap = createTileArray(totalTiles).map((_,i) => (
    curr = createStateObject(i),
    dispatch(colorPush(curr)),
    <ColorTile key={i} id={i} />
  ));
  return tileMap;
}

function App() {
  const dispatch = useDispatch();
  onkeydown = (event) => {
    if (event.key === ' '){
      tileMap.map((_,i) => dispatch(randomizeColor(i)))
    }
  }
  return(
    <>
      <NavBar />
      <LayTiles />
    </>
  );
}

export default App;
