import Header from "@/src/Header";
import Image from "next/image";
import { useRouter } from "next/router";
import data from "../../../data/data.json";

function Event() {
    const router = useRouter();

    const eventId = router.query.id;

    const event = data.allEvents.find((event) => event.id === eventId);

    console.log(event);

    return (
        <>
            <Header />
            <h2>{event.title}</h2>
            <Image src={event.image} width={200} height={200} alt={event.id} />
            <p>{event.description}</p>
            <div className="emails">
                <h4>Emails Registered:</h4>
                {event.emails_registered.lenght > 0
                    ? event.emails_registered.map((email, index) => (
                        <p key={index}>{email}</p>
                    ))
                    : "None"}
            </div>
        </>
    );
}

export default Event;
