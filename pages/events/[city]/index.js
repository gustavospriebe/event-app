import data from "../../../data/data.json";
import Header from "@/src/Header";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

function CityEvents() {
    const router = useRouter();
    const activeCity = router.query.city;

    console.log(router)

    const cityEvents = data.allEvents.filter(
        (event) => event.city === activeCity
    );

    return (
        <>
            <Header />
            <h2>Event</h2>

            {cityEvents.map((cityEvent) => (
                <Link
                    href={`/events/${cityEvent.city}/${cityEvent.id}`}
                    key={cityEvent.id}
                    className="city-events"
                >
                    <Image src={cityEvent.image} width={100} height={100} alt={cityEvent.id} />
                    <h2>{cityEvent.title}</h2>
                </Link>
            ))}
        </>
    );
}

export default CityEvents;
