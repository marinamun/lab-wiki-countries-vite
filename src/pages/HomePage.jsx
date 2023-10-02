import { Link } from "react-router-dom";

function HomePage(props) {
  return props.send ? (
    <div>
      <h1>WikiCountries: Your Guide to the World</h1>

      {props.send.map((country) => {
        return (
          <div key={country._id}>
            <Link to={`/${country.alpha3Code}`}>{country.name.common}</Link>
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
              style={{ width: "40px" }}
            />
          </div>
        );
      })}
    </div>
  ) : (
    <>
      <h1>Loading...</h1>
    </>
  );
}

export default HomePage;
