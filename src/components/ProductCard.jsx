import product_image from "../assets/product_card_image.png";
import "../styles/components/_product-card.scss";

export default function ProductCard() {
  return (
    <div className="outer-container-product">
      <div className="image-container">
        <img src={product_image} alt="product_image" />
      </div>
      <div className="title-product">LYNC Wallet SDK</div>
      <div className="description-product">
        Empowering developers to integrate account abstraction in their game,
        dapp, metaverse and more in minutes.
      </div>
    </div>
  );
}
