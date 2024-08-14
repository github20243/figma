import cardData from '../cardData/cardData ';
import './Footer2.scss';
import TextWithLineBreaks from './TextWithLineBreaks'; 

const Footer2 = () => {
  return (
    <div className="container-box">
      <div className="img-box">
        <img src="src/assets/img/Frame 150.png" alt="" />
      </div>
      <div className="menu-box">
        <ul className="menu">
          <li>
            <img src="src/assets/icon/Frame 16.svg" alt="" />
            ALL
          </li>
          <li>
            <img src="src/assets/icon/Frame 15.svg" alt="" />
            BUNDLES
          </li>
          <li>
            <img src="src/assets/icon/Frame.svg" alt="" />
            HERBS
          </li>
          <li>
            <img src="src/assets/icon/Frame (1).svg" alt="" />
            VEGETABLES
          </li>
          <li>
            <img src="src/assets/icon/Frame 60.svg" alt="" />
            FRUITS
          </li>
          <li>
            <img src="src/assets/icon/gardening tool.svg" alt="" />
            SUPPLIES
          </li>
          <li>
            <img src="src/assets/icon/Flower.svg" alt="" />
            FLOWERS
          </li>
        </ul>
      </div>

      <div className="cards-container">
        {cardData.map((card, index) => (
          <div key={index} className="card">
          <img src={card.imgSrc} alt={card.title} />
         <div className='block-box'> <img src="src/assets/img/Outline.svg" alt="Favorite" className="favorite-icon" /></div>
          <div className="card-info">
            <div className="card-stars">
              {[...Array(card.stars)].map((_, starIndex) => (
                <img key={starIndex} className="star-img" src="src/assets/img/star.svg" alt="Star" />
              ))}
              <span>(123)</span>
            </div>
            <h3>
              <TextWithLineBreaks text={card.title} />
            </h3>
            <p>{card.price}</p>
            <div className="basket-box">
              <img className="basket-img" src="src/assets/img/icon_cart_simple.svg" alt="Basket" />
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Footer2;
