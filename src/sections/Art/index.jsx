import { useEffect } from "react";
import { useState } from "react";
import { ArtList } from "./components/ArtList";

function ArtsSection() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://boolean-uk-api-server.fly.dev/art")
      .then((res) => {
        return res.json();
      })
      .then((x) => {
        console.log(x);

        setData(x);
      });
  }, []);

  return (
    <section>
      <h2>Arts Section</h2>

      <div className="scroll-container">
        <ArtList pictures={data}></ArtList>
      </div>
    </section>
  );
}

export default ArtsSection;
