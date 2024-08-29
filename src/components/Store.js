import {useState} from "react";
import {IconSwitch} from "./IconSwitch";
import {CardsView} from "./CardsView";
import {ListView} from "./ListView";

export const Store = ({products}) => {
  const initState = 'view_list';
  const [icon, setState] = useState(initState);
  const onSwitch = (event) => {
    const btn = event.target;
    let newIcon;

    if (btn.innerText === initState) {
      newIcon = 'view_module';
    } else {
      newIcon = initState;
    }

    setState(newIcon);
  };

  const getView = (icon) => {
    let cards;
    if (icon === initState) {
      cards = <CardsView cards={products}/>;
    } else {
      cards = <ListView items={products}/>
    }

    return cards;
  };

  return (
    <>
      <div className="btn-block">
        <IconSwitch icon={icon} onSwitch={onSwitch}/>
      </div>
      <div className="products">
        {getView(icon)}
      </div>
    </>
  )
}