import Header from "@/src/Header";
import Link from "next/link";
import Image from "next/image";
import styles from "../../../styles/Home.module.css";

function CityEvents({ data }) {
    return (
        <>
            <Header />
            <h2>Event</h2>

            {data.map((cityEvent) => (
                <div className={styles.city} key={cityEvent.id}>
                    <Link
                        href={`/events/${cityEvent.city}/${cityEvent.id}`}
                        key={cityEvent.id}
                        className="city-events"
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

export async function getServerSideProps(context) {
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
