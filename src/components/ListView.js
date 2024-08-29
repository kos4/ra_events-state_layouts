import {ShopItem} from "./ShopItem";

export const ListView = ({items}) => {
  const list = items.reduce((acc, item, index) => {
    acc.push(<ShopItem item={item} key={index}/>);

    return acc;
  }, []);

  return (
    <div className="shopItems">
      {list}
    </div>
  )
}