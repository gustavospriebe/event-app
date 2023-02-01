import Header from "@/src/Header";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

function Events({ data }) {
    return (
        <>
            <Header />
            <h2>Event</h2>

            {data.map((city) => (
                <div className={styles.city} key={city.id}>
                    <Link href={`/events/${city.id}`} className="city">
                        <Image
                            src={city.image}
                            width={100}
                            height={100}
                            alt={city.id}
                        />
                        <h4>{city.title}</h4>
                        <p>{city.description}</p>
                    </Link>
                </div>
            ))}
        </>
    );
}

export default Events;

export async function getServerSideProps() {
    const { events_categories } = await import("../../data/data.json");
    console.log(events_categories);

    return {
        props: {
            data: events_categories,
        },
    };
}
