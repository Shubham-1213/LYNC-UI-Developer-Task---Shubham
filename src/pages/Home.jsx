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
import card from "../assets/card.png";
import diamond from "../assets/diamond.png";
import console from "../assets/console.gif";
import bgConsole from "../assets/Docscard.png";
import secondGif from "../assets/secondGif.gif";
export default function Home() {
  return (
    <>
      <div className="main-container-out">
        <Navbar />
        <div className="content-home-container">
          <div className="bg-image-container">
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
            <div style={{ fontSize: "24px", fontWeight: 700 }}>Backed by</div>
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
            <div className="information-1">
              LYNC provides a scalable infrastructure for launching web3
            </div>
            <div className="information-2">
              games without hampering the{" "}
              <span className="info-gradient">gaming experience.</span>
            </div>
            <div className="infomation-3">
              So that you can deliver the next big hit!
            </div>
          </div>
          <div className="gaming-section">
            <div className="background-gaming">
              <img src={bgImageGaming} alt="bgImage" />
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
                <img src={gaming2} alt="gaming1" />
              </div>
              <div className="gaming1">
                <img src={gaming3} alt="gaming1" />
              </div>
              <div className="gaming1">
                <img src={gaming4} alt="gaming1" />
              </div>
              <div className="gaming1">
                <img src={gaming5} alt="gaming1" />
              </div>
            </div>
          </div>
          <div className="power-up">
            <div className="text-block-power">
              <span className="line-1">Power up your Web3 game</span>
              <span className="line-2">
                development, with{" "}
                <span className="power-up-gradiant">LYNC SDKs</span>
              </span>
              <span className="line-3"></span>
            </div>
            <div className="explain-power">
              <div>
                LYNC SDKs can be easily integrated into game engines like Unity
                3D
              </div>
              <div>and Unreal Engine in a few clicks.</div>
              <div></div>
            </div>
          </div>
          <div className="complexities-section">
            {/* <div className="bg-image-complexity">
              <svg
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
              </svg>
            </div> */}
            <div className="header-complexity">
              <div className="title-complexities">
                Don't worry about the
                <span className="complexities-gradient"> Web3</span>
                complexities.
              </div>
              <div className="dummy">this is my nmae</div>
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
              <div className="left">
                <div className="bold-heading">
                  <div>Elevate Your Gameplay </div>
                  <div>with Essential Insights!</div>
                </div>
                <div className="non-bold-text">
                    <div>Unleash Your Potential - Explore </div>
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
            <div className="small-stat-container">
              <div className="project-stats">
                <span className="gradiant-two">200+</span>
                <span>Projects have</span>
                <span>downloaded and </span>
                <span>integrated LYNC SDKs</span>
              </div>
              <div className="contract-stats">
                <span className="gradiant-three">8000+</span>
                <span>Contracts have been</span>
                <span>deployed via LYNC</span>
              </div>
            </div>
            <div className="big-stat-container">
                <span className="gradiant-two">500000+</span>
                <div>Users ops created in 10</div>
                <div>hours</div>
                <div className="big-stat-gif">
                    <img src={secondGif} alt="card" /> 
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
