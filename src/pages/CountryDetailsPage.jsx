import { useParams } from "react-router-dom";

function CountryDetails(props) {
  //have to delete it
  const { alpha3Code } = useParams();

  const selectedCountry = props.send?.filter(
    (country) => country.alpha3Code === alpha3Code
  );
  return (
    <div>
      <h1>Country Details</h1>
      {selectedCountry.map((currentCountry) => (
        <div>
          <h2>Country:{currentCountry.name.common}</h2>
          <h3>Capital:{currentCountry.capital}</h3>
          <h3>Area: {currentCountry.area}</h3>
          <h3>Borders: {currentCountry.borders}</h3>
        </div>
      ))}
    </div>
  );
}

export default CountryDetails;
