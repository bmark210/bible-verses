import { useEffect, useState } from "react";
import { getData } from "./services/getData";
import { IVerses } from "../../core/interfaces";
// import VerseCart from "./components/VerseCart";
// import { getRgbValues } from "../../core/utils";
// import { getRgbValues } from "../../core/utils";
import GlassCart from "./components/glassCart/glass-cart";
import "./verses.css";

const Verses = () => {
  const [verses, setVerses] = useState<IVerses[]>([]);

  useEffect(() => {
    getVerses();
    // document.addEventListener("mousemove", handleMouseMove);
    // return () => {
    //   document.removeEventListener("mousemove", handleMouseMove);
    // };

    const interBubble = document.querySelector(".interactive") as HTMLElement;
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      interBubble.style.transform = `translate(${Math.round(
        curX
      )}px, ${Math.round(curY)}px)`;
      requestAnimationFrame(() => {
        move();
      });
    }

    window.addEventListener("mousemove", (event) => {
      tgX = event.clientX;
      tgY = event.clientY;
    });

    move();
  }, []);

  // const handleMouseMove = () => {
  // const element = e.target as HTMLElement;
  // const targetElement = element.id.includes("verseCart") ? element : element.parentElement as HTMLElement;
  // Check that targetElement is not null and contains element
  // if (targetElement && targetElement.contains(element)) {
  // const rect = element.getBoundingClientRect();
  // const x = e.clientX - rect.left;
  // const y = e.clientY - rect.top;
  // element.style.setProperty("--x", x + "px");
  // element.style.setProperty("--y", y + "px");
  // const color = getRgbValues(element.style.background || '')[1];
  // element.style.setProperty("--color", `rgb(${color.r}, ${color.g}, ${color.b})`);
  // };
  // };

  async function getVerses() {
    getData()
      .then(async (res) => {
        setVerses(res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <div className="gradient-bg">
        <div className="main-container">
          {verses.map((item, indexA) => (
            <div className="block z-10" key={indexA}>
              <div className="block z-10">
                <h1 className="title text-black">{item.book}</h1>
              </div>
              <div className="carts-container">
                {item.verses.map((verse, indexB) => (
                  <GlassCart
                    id={indexB}
                    key={indexB}
                    verse={verse}
                    author={item.book}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
          <div className="interactive"></div>
        </div>
      </div>
    </>
  );
};

export default Verses;
