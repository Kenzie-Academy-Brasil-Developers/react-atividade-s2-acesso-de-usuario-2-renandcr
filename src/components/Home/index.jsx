import { Link } from "react-router-dom";

const Home = ({ members }) => {
  return (
    <>
      {members.map((current, index) =>
        current.type === "pj" ? (
          <Link key={index} to={`/company/${current.id}`}>
            {current.name}
          </Link>
        ) : (
          <Link key={index} to={`/customer/${current.id}`}>
            {current.name}
          </Link>
        )
      )}
    </>
  );
};
export { Home };
