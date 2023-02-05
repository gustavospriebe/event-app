import Image from "next/image";
import Link from "next/link";

function Events({ data }) {
    return (
        <>
            <h2>Event</h2>

            {data.map((city) => (
                <div className='city' key={city.id}>
                    <Link href={`/events/${city.id}`} className="city-link" passHref>
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

export async function getStaticProps() {
    const { events_categories } = await import("../../data/data.json");

    return {
        props: {
            data: events_categories,
        },
    };
}
