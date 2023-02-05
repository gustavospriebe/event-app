import Image from "next/image";
import Link from "next/link";

function CityEvents({ data }) {
    return (
        <>
            <h2>Event</h2>

            {data.map((cityEvent) => (
                <div className='city'key={cityEvent.id}>
                    <Link
                        href={`/events/${cityEvent.city}/${cityEvent.id}`}
                        key={cityEvent.id}
                        className="city-events"
                        passHref
                    >
                        <Image
                            src={cityEvent.image}
                            width={100}
                            height={100}
                            alt={cityEvent.id}
                        />
                        <h2>{cityEvent.title}</h2>
                    </Link>
                </div>
            ))}
        </>
    );
}

export default CityEvents;

export async function getStaticPaths() {
    const { events_categories } = await import("../../../data/data.json");

    const paths = events_categories.map((ev) => ({
        params: {
            city: ev.id.toString(),
        },
    }));
    return { paths, fallback: false };
}

export async function getStaticProps(context) {
    const activeCity = context?.params.city;

    const { allEvents } = await import("../../../data/data.json");

    const filteredEvents = allEvents.filter(
        (event) => event.city === activeCity
    );

    return {
        props: {
            data: filteredEvents,
        },
    };
}
