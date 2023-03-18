import { Link } from "react-router-dom";
import { ArrowRight } from "phosphor-react";

function Events() {
  return (
    <div className="events">
      <section className="eventsItemOne">
        <h2>Upcoming Events</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, sed.
          Lorem, ipsum dolor sit.
        </p>
      </section>
      <section className="eventsItemTwo">
        <div>
          <h2>Organic Crop Cultivation Event 2017</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit nobis
            totam ipsa qui ad possimus.
          </p>
          <Link>
            Learn More <ArrowRight />
          </Link>
        </div>
        <div>
          <h2>Organic Crop Cultivation Event 2017</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit nobis
            totam ipsa qui ad possimus.
          </p>
          <Link>
            Learn More <ArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Events;
