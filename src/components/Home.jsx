import { useState, useEffect} from "react";
import OurMind from "./OurMind";
import TopRestaurant from "./TopRestaurant";
import OnlineDeliveryRestro from "./OnlineDeliveryRestro";
import useLocation from "../../utils/useLocation";
import Loading from "./Loading";

const Home = () => {

  const [allRestaurant, setAllRestaurant] = useState([]);
  const [loading, setLoading] = useState(true);

  const { location } = useLocation();
  
  useEffect(() => {
    if (location) {
      fetchData(location);
    }
  }, [location])


  const fetchData = async (location) => {
    try {
      const response = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${location.latitude}&lng=${location.longitude}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`);
      let data = await response.json();
      // console.log(data)
      // console.log(data.data);
      setAllRestaurant(data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }


  return (loading) ? (<Loading />) :(
    <>
      <OurMind props={allRestaurant.cards[0]} />
      <TopRestaurant props={allRestaurant.cards[1]} />
      <OnlineDeliveryRestro props={allRestaurant.cards[2]} props2={allRestaurant.cards[4]} />
    </>
  )
}


export default Home;