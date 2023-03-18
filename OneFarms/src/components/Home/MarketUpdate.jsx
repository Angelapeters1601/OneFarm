import image2 from "../../assets/image/2.jpg";
import image3 from "../../assets/image/3.jpeg";
import image4 from "../../assets/image/4.jpeg";
import image5 from "../../assets/image/5.jpeg";
import image6 from "../../assets/image/6.jpeg";
import image7 from "../../assets/image/7.jpeg";
import {
  ArrowRight,
  UsersFour,
  FlowerLotus,
  Person,
  IdentificationCard,
} from "phosphor-react";
import { Link } from "react-router-dom";

function MarketUpdate() {
  return (
    <>
      <div className="marketUpdate">
        <section className="marketUpdateOne">
          <h2 className="item-1">Market Update</h2>
          <p className="item-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, modi,
            fuga quas assumenda eaque cum corporis vero, sint dolorem repellat
            dolore atque sunt iusto amet ad consequatur? Provident, cum sequi.
          </p>
          <p className="item-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
            quae similique architecto inventore tempore, natus culpa amet
            veritatis debitis voluptatum cumque et, quasi, iusto fugit eaque
            nisi libero dolores facilis?
          </p>
        </section>

        <section className="marketUpdateTwo">
          <div className="item-4">
            <h2>Lagos Market Update</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              pariatur ipsum voluptates, facilis perferendis optio.
            </p>
          </div>
          <div className="item-5">
            <h2>Lagos Market Update</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              pariatur ipsum voluptates, facilis perferendis optio.
            </p>
          </div>
          <div className="item-6">
            <h2>Lagos Market Update</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              pariatur ipsum voluptates, facilis perferendis optio.
            </p>
          </div>
        </section>
      </div>
      <section className="fruitImages">
        <img className="fruit-1" src={image2} />
        <img className="fruit-2" src={image3} />
        <img className="fruit-3" src={image4} />
        <img className="fruit-4" src={image5} />
      </section>

      <section className="marketItems">
        <div className="marketItemsOne">
          <img src={image6} />
          <h2>100% Organic Product</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            quasi non doloribus reiciendis obcaecati asperiores.
          </p>
          <Link to="/Basket">
            Go to MarketPlace <ArrowRight size={20} />
          </Link>
        </div>
        <div className="marketItemsTwo">
          <h2>Over 400 Local Merchants</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            recusandae commodi odio voluptate nihil beatae!
          </p>
          <Link to="/Contact">
            Become a Merchant <ArrowRight size={20} />
          </Link>
          <img src={image7} />
        </div>
      </section>
      <section className="members">
        <div className="membersIcon">
          <div>
            <p>
              <UsersFour size={34} color="white" />
              <span> Our Members</span>
            </p>
            <h2>234</h2>
          </div>
          <div>
            <p>
              <FlowerLotus size={34} color="white" />
              Our Members
            </p>
          </div>
          <div>
            <p>
              <IdentificationCard size={34} color="white" />
              Our Members
            </p>
            <h2>211</h2>
          </div>
          <div>
            <p>
              <Person size={34} color="white" />
              Our Members
            </p>
            <h2>421</h2>
          </div>
        </div>
      </section>
    </>
  );
}

export default MarketUpdate;
