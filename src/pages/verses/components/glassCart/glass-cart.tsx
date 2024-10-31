import { useEffect, useRef } from "react";
import { IVerse } from "../../../../core/interfaces";
import "./glass-cart.css";

interface VerseCartProps {
  verse: IVerse;
  id: number;
  author: string;
}

const GlassCart = (props: VerseCartProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  function adjustFontSize() {
    const container = containerRef.current;
    const text = textRef.current;

    if (container && text) {
      let fontSize = 100;
      text.style.fontSize = `${fontSize}px`;

      while (text.offsetHeight + 115 > container.clientHeight) {
        console.log(text.offsetHeight, container.clientHeight, '---', text.style.fontSize);

        
        fontSize -= 1;
        textRef.current.style.fontSize = `${fontSize}px`;

        if (fontSize <= 10) break;
      }
    }
  }

  useEffect(() => {
    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        adjustFontSize();
      }, 100);
    };

    window.addEventListener("resize", handleResize);
    adjustFontSize();

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  return (
    // <div className="container">
      <div ref={containerRef} className="cart">
        <a id={"verseCart" + props.id} href="#" className="block max-w-sm p-6 border h-full">
          <div className="relative inline-flex flex-col justify-between z-[2] h-full">
            <p
              id="mytext"
              ref={textRef}
              className="verse-text text-white"
            >
              {props.verse.text}
            </p>
            <h5 className="mt-2 text-4xl tracking-tight text-white">
              {props.author} {props.verse.chapter}:{props.verse.verse}
            </h5>
          </div>
        </a>
      </div>
    // </div>
  );
};

export default GlassCart;
