import { IVerse } from "../../../core/interfaces";
import classNames from "classnames";
import { getRandomWidthAndHeight, hexToRgb } from "../../../core/utils";
import './verse-cart.css';

interface VerseCartProps {
  verse: IVerse;
  id: number;
  author: string;
}

const VerseCart = (props: VerseCartProps) => {
  function getColors(colors: string[]) {
    console.log(colors);
    
    // if (colors.length == 2) {
    //   return `from-[${colors[0]}] to-[${colors[1]}]`;
    // } else {
    

      return `radial-gradient(at ${getRandomWidthAndHeight()}, ${colors.join(", ")})`;
    // }
  }

  const dynamicClassName = classNames(
    "block max-w-sm p-6 border mouse-cursor-gradient-tracking",
    
  );

  
  // border-gray-200 rounded-lg shadow bg-gradient-to-r 

  return (
    <a style={{ background: getColors(props.verse.colors) }} id={"verseCart" + props.id} href="#" className={dynamicClassName}>
     <div style={{ zIndex: 2, position: "relative" }}>
     <h5 style={{ color: hexToRgb(props.verse.colors[0]) }} className="mb-2 text-4xl font-bold tracking-tight">
        {props.author} {props.verse.chapter}:{props.verse.verse}
      </h5>
      <p style={{ color: '#242424' }} className="font-normal text-2xl text-gray-900 dark:text-white text">{props.verse.text}</p>
     </div>
    </a>
  );
};

export default VerseCart;
