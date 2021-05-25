import './App.css';
import Header from './components/Header';
import Accessories from './assets/Desktop-Accessories.jpg'
import ModelS from './assets/Desktop-ModelS.jpeg'
import Model3 from './assets/Desktop-Model3.jpeg'
import ModelX from './assets/Desktop-ModelX.jpeg'
import ModelY from './assets/Desktop-ModelY.jpeg'
import SolarPanels from './assets/Desktop-SolarPanels.jpeg'
import SolarRoof from './assets/Desktop-SolarRoof.jpeg'
import Item from './components/Item';

function App() {
  return (
    <div className="app">
      <Header />
      <div className = "app__itemsContainer">
        <Item
          title = 'Lowest Cost Solar Panels in America'
          desc = 'Money-back guarantee'
          descLink = ''
          backgroundImg = {SolarPanels}
          leftBtnTxt = 'ORDER NOW'
          leftBtnLink = ''
          rightBtnText = 'LEARN MORE'
          rightBtnLink = ''
          twoButtons = 'true'
          first
        />

        <Item
          title = 'Model S'
          desc = '$69,420'
          descLink = ''
          backgroundImg = {ModelS}
          leftBtnTxt = 'CUSTOM ORDER'
          leftBtnLink = ''
          rightBtnText = 'LEARN MORE'
          rightBtnLink = ''
          twoButtons = 'true'
        />

        <Item
          title = 'Model 3'
          desc = 'Money-back guarantee'
          descLink = ''
          backgroundImg = {Model3}
          leftBtnTxt = 'CUSTOM ORDER'
          leftBtnLink = ''
          rightBtnText = 'LEARN MORE'
          rightBtnLink = ''
          twoButtons = 'true'
        />

        <Item
          title = 'Model X'
          desc = 'Money-back guarantee'
          descLink = ''
          backgroundImg = {ModelX}
          leftBtnTxt = 'CUSTOM ORDER'
          leftBtnLink = ''
          rightBtnText = 'LEARN MORE'
          rightBtnLink = ''
          twoButtons = 'true'
        />

        <Item
          title = 'Model Y'
          desc = 'Money-back guarantee'
          descLink = ''
          backgroundImg = {ModelY}
          leftBtnTxt = 'CUSTOM ORDER'
          leftBtnLink = ''
          rightBtnText = 'LEARN MORE'
          rightBtnLink = ''
          twoButtons = 'true'
        />

        <Item
          title = 'Solar for New Roofs'
          desc = 'Money-back guarantee'
          descLink = ''
          backgroundImg = {SolarRoof}
          leftBtnTxt = 'ORDER NOW'
          leftBtnLink = ''
          rightBtnText = 'LEARN MORE'
          rightBtnLink = ''
          twoButtons = 'true'
        />

        <Item
          title = 'Accessories'
          desc = 'Money-back guarantee'
          descLink = ''
          backgroundImg = {Accessories}
          leftBtnTxt = 'SHOP NOW'
          leftBtnLink = ''
          rightBtnText = 'LEARN MORE'
          rightBtnLink = ''
        />
      </div>
    </div>
  );
}

export default App;
