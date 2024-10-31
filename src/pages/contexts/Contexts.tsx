import { useEffect, useState } from "react";
import GlassCart from "../verses/components/glassCart/glass-cart";
// import { getData } from "../verses/services/getData";
import * as data from "../../../data/db.json";
import "./index.css";
import { IVerses } from "../../core/interfaces";

const Contexts = () => {
  const [verses, setVerses] = useState<IVerses[]>([]);

  useEffect(() => {
    getVerses();
  }, []);

  async function getVerses() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setVerses(data["verses"] as any);
    // getData()
    //   .then(async (res) => {
    //     setVerses(res);
    //   })
    //   .catch((err) => console.log(err));
  }

  return (
    <>
      <div className="night-sky">
        <div className="shooting-stars"></div>

        <div className="main-container">
          {verses.map((item, indexA) => (
            <div className="block z-10" key={indexA}>
              <div className="block z-10">
                <h1 className="title text-white text-4xl md:text-5xl">
                  {item.book}
                </h1>
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
      </div>
    </>
  );
};

export default Contexts;
