import data from "../../data/data.json";
import Header from "@/src/Header";
import Link from "next/link";

function Events() {
    const citys = data.events_categories;
    console.log(citys);
    return (
        <>
        <Header />
            <h2>Event</h2>

            {citys.map((city) => (
                <Link href={`/events/${city.id}`} key={city.id} className="city">
                    <h4>{city.title}</h4>
                    <p>{city.description}</p>
                </Link>
            ))}
        </>
    );
}

export default Events;
