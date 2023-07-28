import { useRef, useState } from 'react';
import './MeteoWidget.scss';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { HashLoader } from 'react-spinners';

function MeteoWidget() {
    const [temperature, setTemperature] = useState(null);
    const [iconURL, setIconURL] = useState(null);
    const [city, setCity] = useState('');
    const [dataFetched, setDataFetched] = useState(false);
    const [place, setPlace] = useState('');
    const [tempDetail, setTempDetail] = useState('');
    const [fetchError, setFetchError] = useState(false);
    const [loading, setLoading] = useState(false);
    const descRef = useRef(null);

    const fetchCityTemp = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 2500);
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=66abef0d58d9cd38427919cdc8e171f0&units=metric`)
            .then(res => {
                setTemperature(res.data.main.temp);
                setIconURL(`http://openweathermap.org/img/wn/${res.data.weather[0].icon}@4x.png`)
                setDataFetched(true);
                setPlace(`${res.data.name}, ${res.data.sys.country}`);
                setTempDetail(`${res.data.weather[0].main}, ${res.data.weather[0].description}`)
                setFetchError(false);
            }).catch(err => {
                setFetchError(true);
                setDataFetched(false);
            })
    }

    return (
        <section className="component">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    fetchCityTemp();
                    descRef.current.blur();
                }}
            >
                <input
                    ref={descRef}
                    type="text"
                    className="searchValue"
                    placeholder="ENTER YOUR CITY"
                    value={city}
                    onChange={(e) => {
                        setCity(e.target.value);
                    }}
                />
                <button><FontAwesomeIcon icon={ faMagnifyingGlass } /></button>
            </form>
            {loading && (
                <div className="spinner">
                    <HashLoader color="#61dafb" loading={loading}/>
                </div>
            )}
            {dataFetched && !loading && (
                <div className="weather">
                    <h2 className="weather-place-name">
                        <p>{place}</p>
                    </h2>
                    <div className="wheather-image">
                        <img src={iconURL} alt="icon météo" />
                    </div>
                    <div className="weather-result">
                        <p>{tempDetail}</p>
                        <p className="weather-result-degree">{`${Math.floor(temperature)}°`}</p>
                    </div>
                </div>
            )}
            {fetchError && !loading && (
                <div className="weather">
                    <h2 className="weather-place-name">
                        <p>It's embarrassing !</p>
                    </h2>
                    <div className="wheather-error" style={{margin: "1rem 0",}}>
                        <img src="https://jenchoosesjoydotcom.files.wordpress.com/2015/06/200-19.gif" alt="Comedian key with sweat" />
                    </div>
                    <div className="weather-result">
                        <p>We can't find your city !</p>
                        <p className="weather-result-degree">try: Paris</p>
                    </div>
                </div>
            )}
        </section>
    );
}

export default MeteoWidget;