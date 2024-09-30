import { useEffect } from "react";
import { useState } from "react";
import UsersList from "./components/UsersList";

function UsersSection() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://boolean-uk-api-server.fly.dev/h602121/contact")
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
      <h2>Users Section</h2>
      <div className="scroll-container">
        <UsersList users={data} />
      </div>
    </section>
  );
}

export default UsersSection;
