import useHttp from "../hooks/useHttp";

const requestConfig = {};

export default function Game() {
    const {
        data: countryInfo,
        isLoading,
        error
    } = useHttp('https://restcountries.com/v3.1/all?fields=name,capital,flags', requestConfig, []);

    if (isLoading) {
        return <p className="center">Fetching countries data...</p>
    }

    if (error) {
        return <Error title="Failed to fetch countries data" message={error} />;
    }

    return (
        <>
            <ul id="data">
                {countryInfo.map((country) => (
                    <div key={country.name.common}>
                        <p>{country.name.common} - {country.capital[0]}</p>
                        <img className='game-flag' src={country.flags.svg} alt={country.flags.alt} />
                    </div>
                ))}
            </ul>
        </>
    );
}