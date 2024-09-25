import Marquee from "react-fast-marquee";
import '../styles/components/_marquee.scss';

export default function MarqueeComponent({images1, direction}) {
    return (
        <div className="marquee-container">
            <Marquee gradient={false} speed={200} direction={direction}>
          {images1.map((image, index) => (
            <div key={index} className="marquee-item">
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </Marquee>
        </div>
    )
}