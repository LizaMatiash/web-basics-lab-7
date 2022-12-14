import React from "react";
import Header from "./components/Header"
import Content from "./components/Content"
import Image from "./components/Image"
import GoodsCard from "./components/GoodsCard";


function App() {
  return <div>
      <Header />
      <Content />
      <Image />
      <GoodsCard src="https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?cs=srgb&dl=pexels-mali-maeder-102104.jpg&fm=jpg" number="25" name="Apple"/>
      <GoodsCard src="https://media.istockphoto.com/id/827157432/photo/slice-of-kiwi-fruit-isolated-on-white.jpg?s=1024x1024&w=is&k=20&c=NbX-C8k9kuIiR31qpE7umq8mNaiisxZBtEEvBZBup_M=" number="30" name="Kiwi"/>
      <GoodsCard src="https://media.istockphoto.com/id/477836156/photo/orange-fruit-isolated-on-white.jpg?b=1&s=170667a&w=0&k=20&c=wQC8OgUrRarNqxXn2FFHaQTaOPOA6B-EhB8pzVOh_ZA=" number="45" name="Orange"/>
      <br />
      <GoodsCard src="https://thumbs.dreamstime.com/b/isolated-strawberry-single-strawberry-fruit-isolated-white-background-clipping-path-fresh-strawberry-fruits-isolated-136191179.jpg" number="12" name="Strawberry"/>
      <GoodsCard src="https://static.libertyprim.com/files/familles/pasteque-large.jpg?1569259994" number="98" name="Watermelon"/>
      <GoodsCard src="https://static.libertyprim.com/files/varietes/raisin-cardinal-large.jpg?1588355678" number="34" name="Grapes"/>
  </div>;
}

export default App;
