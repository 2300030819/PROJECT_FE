import { useState } from "react";
import "../styles/Home.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const bannerAddress =
  "https://cdn.pixabay.com/photo/2021/02/02/12/34/resort-5973816_1280.jpg";

function Home() {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  

  return (
    <>
      <div style={{ position: "relative" }}>
        <img src={bannerAddress} className="banner" alt="banner image" />
        <div className="bannerOverlay">
          <h1 className="bannerText">
            Discover Extraordinary <br /> Comfort in Hotels
          </h1>
        </div>
      </div>
      <div className="bookRoom">
        <div style={{ padding: "2%" }}>
          <h2>Select your Dates</h2>
          <p>You can check the slots here</p>
        </div>
        <div style={{ padding: "0 2% 2% 2%", width: "100%", display: 'flex',alignItems: 'center',justifyContent: 'center' }}>
          <DatePicker
            className="datePicker"
            selectsRange
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => setDateRange(update)}
            minDate={new Date()} // Prevent past dates
            dateFormat="MMMM d, yyyy"
            isClearable
            placeholderText="Select Check-in and Check-out Dates"
          />

          <button className="checkRoomsBtn">Check Rooms</button>
        </div>
      </div>

      <div class="catagories">
        <div class="catagoryItem"><img src="https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_960_720.jpg" alt="Rooms" /><div class="overlay">Rooms</div></div>
        <div class="catagoryItem"><img src="https://cdn.pixabay.com/photo/2018/03/18/20/56/furniture-3238294_1280.jpg" alt="Dining"/><div class="overlay">Dining</div></div>
        <div class="catagoryItem"><img src="https://cdn.pixabay.com/photo/2017/07/28/14/28/session-2548826_1280.jpg" alt="Conference"/><div class="overlay">Conferences & Meetings</div></div>
        <div class="catagoryItem"><img src="https://cdn.pixabay.com/photo/2020/03/05/16/53/boxing-4904901_1280.jpg" alt="Facilities"/><div class="overlay">Service & Facilities</div></div>
        <div class="catagoryItem"><img src="https://cdn.pixabay.com/photo/2019/05/24/18/41/marriage-4226896_1280.jpg" alt="Wedding"/><div class="overlay">Wedding Package</div></div>
      </div>


      <div class="mostPicked">
        <div class="catagoryItem"><img src="https://cdn.pixabay.com/photo/2019/09/12/15/21/resort-4471852_1280.jpg" alt="Resort" /><div class="overlay">Cancun, Mexico</div></div>
        <div class="catagoryItem"><img src="https://cdn.pixabay.com/photo/2017/07/11/22/13/resort-2495217_1280.jpg" alt="Resort"/><div class="overlay">Lisbon, Portugal</div></div>
        <div class="catagoryItem"><img src="https://cdn.pixabay.com/photo/2015/08/25/03/27/resort-906104_960_720.jpg" alt="Resort"/><div class="overlay">Taipei, Taiwan</div></div>
        <div class="catagoryItem"><img src="https://cdn.pixabay.com/photo/2015/03/09/18/34/beach-666122_960_720.jpg" alt="Resort"/><div class="overlay"> Bali, Indonesia</div></div>
        <div class="catagoryItem"><img src="https://cdn.pixabay.com/photo/2016/05/16/06/16/pool-1395069_960_720.jpg" alt="Resort"/><div class="overlay">Venice, Italy</div></div>
      </div>
    </>
  );
}

export default Home;
