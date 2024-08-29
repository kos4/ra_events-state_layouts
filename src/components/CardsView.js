import {ShopCard} from "./ShopCard";

export const CardsView = ({cards}) => {
  const list = cards.reduce((acc, item, index) => {
    acc.push(<ShopCard card={item} key={index}/>);

    return acc;
  }, []);

  return (
    <div className="shopCard">
      {list}
    </div>
  )
}