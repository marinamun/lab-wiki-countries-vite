import { Link } from "react-router-dom";
import "../App.css";

function HomePage(props) {
  return props.send ? (
    <div>
      <h1>WikiCountries: Your Guide to the World</h1>

      {props.send.map((country) => {
        return (
          <div key={country._id} className="country-flag">
            <Link to={`/${country.alpha3Code}`} className="name-of-country">
              {country.name.common}
            </Link>
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
              style={{ width: "40px" }}
              className="flag"
            />
          </div>
        );
      })}
    </div>
  ) : (
    <div>
      <h1>Loading...</h1>
    </div>
  );
}

export default HomePage;
