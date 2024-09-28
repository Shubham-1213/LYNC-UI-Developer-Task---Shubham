import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import "../styles/pages/_home.scss";
import bgImage from "../assets/bg-image.png";
import sponser1 from "../assets/sponser1.png";
import sponser2 from "../assets/sponser2.png";
import sponser3 from "../assets/sponser3.png";
import gaming1 from "../assets/gaming1.png";
import gaming2 from "../assets/gaming2.png";
import gaming3 from "../assets/gaming3.png";
import gaming4 from "../assets/gaming4.png";
import gaming5 from "../assets/gaming5.png";
import bgImageGaming from "../assets/bgImageGaming.png";
import card from "../assets/Card.png";
import diamond from "../assets/diamond.png";
import console from "../assets/console.gif";
import bgConsole from "../assets/Docscard.png";
import secondGif from "../assets/secondGif.gif";
import consoleBg from "../assets/consoleBg.png";
import aptos from "../assets/APTOS.png";
import astar from "../assets/astar.png";
import avalanche from "../assets/avalanche.png";
import ethereum from "../assets/ethereum.png";
import polygon from "../assets/polygon.png";
import saga from "../assets/saga.png";
import zysync from "../assets/zySync.png";
import shardeum from "../assets/shardeum.png";
import MarqueeComponent from "../components/MarqueeComponent";
import bgMarquee from "../assets/bg-marquee.png";
import CustomCarousel from "../components/CustomCarousal";
import ReviewCarousal from "../components/ReviewCarousal";
import community from "../assets/community.png";
import lyncLogo from "../assets/LYNCLogo.png";
import Footer from "../components/Footer";
import floorPattern from "../assets/Floor-pattern.png";
import bgHero from "../assets/bg-image.png";
import chainlink from "../assets/chainlink.png";
import spheron from "../assets/spheron.png";
import biconomy from "../assets/biconomy.png";
import lighthouse from "../assets/lighthouse.png";
import saus from "../assets/saus.png";
import bgVectorBlur from '../assets/blurr-vector.png';
import floorPatternT from "../assets/floor-pattern-t.png";

const brandImages1 = [
  { src: aptos, alt: "Brand 1" },
  { src: astar, alt: "Brand 2" },
  { src: avalanche, alt: "Brand 3" },
  { src: ethereum, alt: "Brand 4" },
];

const brandImages2 = [
  { src: polygon, alt: "Brand 5" },
  { src: saga, alt: "Brand 6" },
  { src: zysync, alt: "Brand 7" },
  { src: shardeum, alt: "Brand 8" },
];

const partnersData = [
  { name: "Filecoin", logo: sponser1 },
  { name: "Chainlink", logo: chainlink },
  { name: "Spheron", logo: spheron },
  { name: "LongHash X", logo: sponser1 },
  { name: "Axelar", logo: sponser2 },
  { name: "Biconomy", logo: biconomy },
  { name: "Lighthouse", logo: lighthouse },
  { name: "Saus", logo: saus },
];
export default function Home() {
  return (
    <>
      <div className="main-container-out">
        <Navbar />
        <div className="content-home-container">
          <div className="bg-image-container">
            <img src={bgHero} alt="bgImage" />
            <div className="heading-hero">Launch Your Game</div>
            <div>
              on <span className="gradient-text">Web 3.0</span> in Minutes
            </div>
            <div className="tagline-hero">
              <div>
                We help game developers to launch their game on Web 3.0, by
                keeping
              </div>
              <div className="second-line">
                blockchain complexities aside with WebWorld SDKs!
              </div>
            </div>
            <div className="button-hero">
              <div className="get-started-hero">
                Get Started
                <svg
                  width="14"
                  height="10"
                  viewBox="0 0 14 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 5L13.3536 4.64645L13.7071 5L13.3536 5.35355L13 5ZM1 5.5C0.723858 5.5 0.5 5.27614 0.5 5C0.5 4.72386 0.723858 4.5 1 4.5V5.5ZM9.35355 0.646447L13.3536 4.64645L12.6464 5.35355L8.64645 1.35355L9.35355 0.646447ZM13.3536 5.35355L9.35355 9.35355L8.64645 8.64645L12.6464 4.64645L13.3536 5.35355ZM13 5.5H1V4.5H13V5.5Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="read-docs-hero">
                View Docs
                <svg
                  width="14"
                  height="10"
                  viewBox="0 0 14 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 5L13.3536 4.64645L13.7071 5L13.3536 5.35355L13 5ZM1 5.5C0.723858 5.5 0.5 5.27614 0.5 5C0.5 4.72386 0.723858 4.5 1 4.5V5.5ZM9.35355 0.646447L13.3536 4.64645L12.6464 5.35355L8.64645 1.35355L9.35355 0.646447ZM13.3536 5.35355L9.35355 9.35355L8.64645 8.64645L12.6464 4.64645L13.3536 5.35355ZM13 5.5H1V4.5H13V5.5Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="backed-by-section">
            <div>Backed by</div>
            <div className="sponsers-container">
              <div className="sponser">
                <img src={sponser1} alt="sponser1" />
              </div>
              <div className="sponser">
                <img src={sponser2} alt="sponser2" />
              </div>
              <div className="sponser">
                <img src={sponser3} alt="sponser3" />
              </div>
            </div>
          </div>
          <div className="info-section">
            <div className="information">
              LYNC provides a scalable infrastructure for launching web3
              <br />
              games, without hampering the{" "}
              <span className="info-gradient">gaming experience.</span>
              <br />
              So that you can deliver the next big hit!
            </div>
            <div className="information-mobile"></div>
          </div>
          <div className="gaming-section">
            <div className="background-gaming">
              <img src={bgImageGaming} alt="bgImage" />
            </div>
            <div className="bgVectorBlur">
                <img src={bgVectorBlur} alt="bgVectorBlur"/>
            </div>
            <div className="gaming-tag-line">
              <div className="gaming-1">Making blockchain gaming</div>
              <div className="gaming-2">
                accessible to <span className="gaming-gradient">everyone!</span>
              </div>
            </div>
            <div className="gaming-companies">
              <div className="gaming1">
                <img src={gaming1} alt="gaming1" />
              </div>
              <div className="gaming1">
                <img src={gaming2} alt="gaming2" />
              </div>
              <div className="gaming1">
                <img src={gaming3} alt="gaming3" />
              </div>
              <div className="gaming1">
                <img src={gaming4} alt="gaming4" />
              </div>
              <div className="gaming1">
                <img src={gaming5} alt="gaming5" />
              </div>
            </div>
          </div>
          <div className="power-up">
            <div className="text-block-power">
              Power Up Your Web3 Game
              <br />
              Development, With <br className="mobile-br" />
              <span className="power-up-gradiant">LYNC SDKs</span>
            </div>
            <div className="explain-power">
              LYNC SDKs can be easily integrated into{" "}
              <br className="explain-power-m-br" /> game engines like Unity
              <br className="br-tab" /> 3D <br className="explain-power-d-br" />
              and <br className="explain-power-m-br" />
              Unreal Engine in a few clicks.
            </div>
            <div className="bg-power">
              <img src={bgImageGaming} alt="bgPower" />
            </div>
            <div className="bgVectorBlurPower">
                <img src={bgVectorBlur} alt="bgVectorBlur"/>
            </div>
          </div>
          <div className="complexities-section">
            <div className="bg-image-complexity">
              {/* <svg
                width="1104"
                height="369"
                viewBox="0 0 1104 369"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_b_9_189)">
                  <path
                    d="M1104 48.0001L1104 344.748C1104 358.142 1093.14 369 1079.75 369C1073.34 369 1067.18 366.461 1062.64 361.938L1039.44 338.848C1030.44 329.896 1018.27 324.87 1005.58 324.87L969.04 324.87C954.689 324.87 941.785 333.609 936.46 346.935C931.135 360.261 918.231 369 903.881 369L48 369C21.4904 369 1.87874e-06 347.51 4.19629e-06 321L2.80627e-05 48C3.03803e-05 21.4903 21.4904 -3.08326e-06 48 -7.65718e-07L1056 8.73564e-05C1082.51 8.9674e-05 1104 21.4904 1104 48.0001Z"
                    fill="url(#paint0_linear_9_189)"
                  />
                  <path
                    d="M1103.5 48.0001L1103.5 344.748C1103.5 357.866 1092.87 368.5 1079.75 368.5C1073.47 368.5 1067.44 366.013 1062.99 361.583L1039.79 338.494C1030.7 329.448 1018.4 324.37 1005.58 324.37L969.04 324.37C954.485 324.37 941.397 333.234 935.996 346.75C930.746 359.885 918.026 368.5 903.881 368.5L48 368.5C21.7665 368.5 0.500002 347.233 0.500004 321L0.500028 48C0.50003 21.7665 21.7665 0.499997 48 0.499999L1056 0.500087C1082.23 0.50009 1103.5 21.7666 1103.5 48.0001Z"
                    stroke="url(#paint1_linear_9_189)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_b_9_189"
                    x="-300"
                    y="-300"
                    width="1704"
                    height="969"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur
                      in="BackgroundImageFix"
                      stdDeviation="150"
                    />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_9_189"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_9_189"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_9_189"
                    x1="594.949"
                    y1="1244.64"
                    x2="-376.852"
                    y2="1093.34"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#D9D9D9" stop-opacity="0.07" />
                    <stop
                      offset="0.990529"
                      stop-color="#D9D9D9"
                      stop-opacity="0.05"
                    />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_9_189"
                    x1="297.826"
                    y1="606.214"
                    x2="-360.506"
                    y2="-641.372"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" stop-opacity="0.21" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg> */}
            </div>
            <div className="bg-image-mobile">
              <svg
                width="372"
                height="197"
                viewBox="0 0 372 197"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_b_158_1920)">
                  <path
                    d="M372 20L372 189.574C372 193.675 368.675 197 364.574 197C362.028 197 359.66 195.696 358.299 193.544L351.471 182.749C347.805 176.954 341.426 173.44 334.568 173.44L330.805 173.44C323.664 173.44 317.437 178.295 315.695 185.22C313.953 192.145 307.726 197 300.585 197L20.979 197C9.93329 197 0.978974 188.046 0.978975 177L0.978989 20C0.97899 8.9543 9.93328 -9.67326e-08 20.979 8.37228e-07L352 2.88265e-05C363.046 2.97605e-05 372 8.95433 372 20Z"
                    fill="url(#paint0_linear_158_1920)"
                  />
                  <path
                    d="M371.5 20L371.5 189.574C371.5 193.399 368.399 196.5 364.574 196.5C362.2 196.5 359.991 195.283 358.721 193.277L351.894 182.482C348.136 176.541 341.597 172.94 334.568 172.94L330.805 172.94C323.435 172.94 317.008 177.951 315.21 185.098C313.524 191.801 307.497 196.5 300.585 196.5L20.979 196.5C10.2094 196.5 1.47897 187.77 1.47898 177L1.47899 20C1.47899 9.23044 10.2094 0.5 20.979 0.500001L352 0.500029C362.77 0.50003 371.5 9.23047 371.5 20Z"
                    stroke="url(#paint1_linear_158_1920)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_b_158_1920"
                    x="-299.021"
                    y="-300"
                    width="971.021"
                    height="797"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur
                      in="BackgroundImageFix"
                      stdDeviation="150"
                    />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_158_1920"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_158_1920"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_158_1920"
                    x1="200.923"
                    y1="664.484"
                    x2="-130.404"
                    y2="632.012"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#D9D9D9" stop-opacity="0.07" />
                    <stop
                      offset="0.990529"
                      stop-color="#D9D9D9"
                      stop-opacity="0.05"
                    />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_158_1920"
                    x1="101.069"
                    y1="323.643"
                    x2="-318.15"
                    y2="-176.457"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" stop-opacity="0.21" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="header-complexity">
              <div className="title-complexities">
                Don't worry about the{" "}
                <span className="complexities-gradient"> Web3</span>{" "}
                complexities.
              </div>
              <div className="dummy">
                <img src={diamond} alt="diamond" />
              </div>
            </div>
            <div className="list-diamond-container">
              <div className="list-complexities">
                <div className="list-item">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 0.333374L11 11L0.333313 15L11 19L15 29.6667L19 19L29.6666 15L19 11L15 0.333374Z"
                      fill="url(#paint0_linear_9_196)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_9_196"
                        x1="36.4962"
                        y1="-22.4"
                        x2="-4.41141"
                        y2="64.7536"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0.365638" stop-color="#3F37C9" />
                        <stop offset="1" stop-color="#4CC9F0" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div>Save 9-12 months of development time</div>
                </div>
                <div className="list-item">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 0.333374L11 11L0.333313 15L11 19L15 29.6667L19 19L29.6666 15L19 11L15 0.333374Z"
                      fill="url(#paint0_linear_9_196)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_9_196"
                        x1="36.4962"
                        y1="-22.4"
                        x2="-4.41141"
                        y2="64.7536"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0.365638" stop-color="#3F37C9" />
                        <stop offset="1" stop-color="#4CC9F0" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div>Focus completely on Game Dev and Mechanics</div>
                </div>
                <div className="list-item">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 0.333374L11 11L0.333313 15L11 19L15 29.6667L19 19L29.6666 15L19 11L15 0.333374Z"
                      fill="url(#paint0_linear_9_196)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_9_196"
                        x1="36.4962"
                        y1="-22.4"
                        x2="-4.41141"
                        y2="64.7536"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0.365638" stop-color="#3F37C9" />
                        <stop offset="1" stop-color="#4CC9F0" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div>
                    Save Up to $500K+ on Salaries & Smart Contract Auditing
                  </div>
                </div>
                <div className="list-item">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 0.333374L11 11L0.333313 15L11 19L15 29.6667L19 19L29.6666 15L19 11L15 0.333374Z"
                      fill="url(#paint0_linear_9_196)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_9_196"
                        x1="36.4962"
                        y1="-22.4"
                        x2="-4.41141"
                        y2="64.7536"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0.365638" stop-color="#3F37C9" />
                        <stop offset="1" stop-color="#4CC9F0" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div>Go Cross-Chain in a few clicks</div>
                </div>
              </div>
            </div>
          </div>
          <div className="stats-section">
            <div className="console-section">
              {/* <div className="bg-console">
                <img src={bgConsole} alt="bgConsole" />
              </div> */}
              <div className="left">
                <div className="bold-heading">
                  <div>Elevate Your Gameplay</div>
                  <div>with Essential Insights!</div>
                </div>
                <div className="non-bold-text">
                  <div>Unleash Your Potential - Explore</div>
                  <div>the Knowledge Hub Today!</div>
                </div>
                <div className="button-stats">
                  <span>View Docs</span>
                </div>
              </div>
              <div className="right">
                <img src={console} alt="card" />
              </div>
            </div>
            <div className="stat-containers">
              <div className="small-stat-container">
                <div className="project-stats">
                  <span className="gradiant-two">200+</span>
                  Projects have downloaded and{" "}
                  <br className="br-small-stat-m " />
                  integrated LYNC SDKs
                </div>
                <div className="contract-stats">
                  <span className="gradiant-three">8000+</span>
                  <span>Contracts have been</span>
                  <span>deployed via LYNC</span>
                </div>
              </div>
              <div className="big-stat-container">
                <div className="big-stat-content">
                  <span className="gradiant-two">50000+</span>
                  <div>
                    Users ops created in 10 <br className="br-big-stat" />
                    hours
                  </div>
                </div>
                <div className="big-stat-gif">
                  <img src={secondGif} alt="card" />
                </div>
              </div>
            </div>
          </div>
          <div className="product-section">
            <div className="product-title">
              Product <span className="product-gradiant">Suite</span>
            </div>
            <div className="bgVectorBlurProduct">
                <img src={bgVectorBlur} alt="bgVectorBlur"/>
            </div>
            <div className="product-card-container">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <div className="bg-product">
                <svg
                  width="1440"
                  height="1387"
                  viewBox="0 0 1440 1387"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_f_284_631)">
                    <path
                      d="M263.665 847.834C155.771 792.4 283.966 612.304 481.279 527.467C673.629 444.764 655.819 540.894 951.64 631.075C855.677 632.403 1305.27 879.921 1205.99 889.582C1106.71 899.244 735.851 857.72 632.993 855.854C530.135 853.988 371.56 903.267 263.665 847.834Z"
                      fill="#6F00DD"
                      fillOpacity="0.6"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_284_631"
                      x="-271.398"
                      y="0.150696"
                      width="1987.6"
                      height="1386.69"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="247.9"
                        result="effect1_foregroundBlur_284_631"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <div className="marquee-section">
            <div className="marquee-title">
              <div>With LYNC build on your</div>
              <div className="marquee-gradiant">favorite chain</div>
            </div>
            <div className="bg-marquee">
              <img src={bgImageGaming} alt="bgMarquee" />
            </div>
            <div className="bgBlurMarquee">
                <img src={bgVectorBlur} alt="bgVectorBlur"/>
            </div>
            <div className="actual-marquee">
              <div className="first-marquee">
                <MarqueeComponent images1={brandImages1} direction="left" />
              </div>
              <div className="second-marquee">
                <MarqueeComponent images1={brandImages2} direction="right" />
              </div>
            </div>
          </div>
          <div className="blog-section">
            <div className="blog-text">
              <div className="blog-title">
                From our <span className="blog-gradiant">Blog</span>
              </div>
              <div className="blog-content">
                <div>
                  Level Up Your Web3 Gaming Experience:{" "}
                  <br className="br-blog-m" /> Explore Our
                  <br className="br-blog-d" />
                  Blog for Insights, Tips, and <br className="br-blog-m" />{" "}
                  Innovations in Gaming SDKs!
                </div>
              </div>
            </div>
            <CustomCarousel />
          </div>
          <div className="review-section">
            <div className="review-title">
              Valuable <span className="review-gradiant">Reviews</span>
            </div>
            {/* <div className="bg-review">
              <img src={bgImageGaming} alt="bgConsole" />
            </div> */}
            <ReviewCarousal />
          </div>
          <div className="community-section">
            <div className="community-image">
              <img src={community} alt="community" />
            </div>
            <div className="community-title">
              <div className="line-one-community">Strongest Web3</div>
              <div className="community-gradiant">Community</div>
            </div>
            <div className="telegram-button">
              <svg
                width="24"
                height="23"
                viewBox="0 0 24 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5915 7.15676C16.596 7.15676 16.602 7.15676 16.608 7.15676C16.7648 7.15676 16.9103 7.20551 17.0295 7.28951L17.0273 7.28801C17.1143 7.36376 17.1728 7.47026 17.187 7.59026V7.59251C17.202 7.68401 17.2103 7.78901 17.2103 7.89626C17.2103 7.94501 17.2088 7.99301 17.205 8.04101V8.03426C17.0363 9.81101 16.3043 14.1198 15.9323 16.1088C15.7748 16.951 15.465 17.233 15.165 17.26C14.5133 17.3208 14.0183 16.8295 13.3868 16.4155C12.3983 15.7668 11.8395 15.3633 10.8803 14.731C9.77101 14.0013 10.4903 13.5985 11.1218 12.943C11.2875 12.7705 14.1608 10.1568 14.217 9.91976C14.22 9.90551 14.2215 9.88976 14.2215 9.87326C14.2215 9.81476 14.1998 9.76151 14.1645 9.72101C14.1255 9.69551 14.0768 9.68126 14.0258 9.68126C13.992 9.68126 13.9598 9.68801 13.9298 9.69926L13.9313 9.69851C13.8323 9.72101 12.2533 10.7645 9.19426 12.829C8.86051 13.0923 8.43901 13.2588 7.98001 13.2783H7.97551C7.32526 13.1995 6.73501 13.0548 6.17476 12.8485L6.23026 12.8665C5.52676 12.637 4.96801 12.5163 5.01601 12.1278C5.04151 11.9258 5.32001 11.719 5.85151 11.5075C9.12551 10.081 11.3088 9.14076 12.4013 8.68676C13.6065 8.04701 15.0038 7.52051 16.473 7.17926L16.5908 7.15601L16.5915 7.15676ZM11.9475 0.395508C5.72101 0.410508 0.678757 5.46176 0.678757 11.6905C0.678757 17.9283 5.73526 22.9855 11.9738 22.9855C18.2123 22.9855 23.2688 17.929 23.2688 11.6905C23.2688 5.46176 18.2265 0.410508 12.0015 0.395508H12C11.9825 0.395508 11.965 0.395508 11.9475 0.395508Z"
                  fill="white"
                />
              </svg>
              <div> Join Telegram</div>
            </div>
          </div>
          <div className="partners-section">
            <div className="partners-title">
              Our <br className="br-partner-m" />
              <span className="partners-gradiant">Believers and Partners</span>
            </div>
            <div className="bg-partners">
              <img src={bgImageGaming} alt="bgConsole" />
            </div>
            <div className="grid">
              {partnersData.map((partner, index) => (
                <div key={index} className="grid-item">
                  <img src={partner.logo} alt={partner.name} />
                </div>
              ))}
            </div>
          </div>
          <div className="connect-section">
            <div className="lync-logo">
              <img src={lyncLogo} alt="lyncLogo" />
            </div>
            <div className="connect-main">
              <div className="connect-content">
                <div className="Idea">Got a game Idea ?</div>
                <div className="Together">Let's make it big together !!</div>
              </div>
              <div className="get-started-connect">
                Get Started
                <svg
                  width="14"
                  height="10"
                  viewBox="0 0 14 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 5L13.3536 4.64645L13.7071 5L13.3536 5.35355L13 5ZM1 5.5C0.723858 5.5 0.5 5.27614 0.5 5C0.5 4.72386 0.723858 4.5 1 4.5V5.5ZM9.35355 0.646447L13.3536 4.64645L12.6464 5.35355L8.64645 1.35355L9.35355 0.646447ZM13.3536 5.35355L9.35355 9.35355L8.64645 8.64645L12.6464 4.64645L13.3536 5.35355ZM13 5.5H1V4.5H13V5.5Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="footer-container-home">
            <div className="footer-pattern">
              <img src={floorPattern} alt="floor-pattern" />
            </div>
            <div className="footer-pattern-t">
              <img src={floorPatternT} alt="floor-pattern" />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
