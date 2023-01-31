import { useRouter } from "next/router";

function Event() {
    const router = useRouter();

    const eventName = router.query.slug;

    return (
        <>
            <h2>Event in {eventName}</h2>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus perspiciatis cum distinctio rem voluptatibus quod amet
                quis similique laudantium, laborum asperiores adipisci, harum ea
                repellat optio fugit reiciendis nesciunt dicta.
            </p>
        </>
    );
}

export default Event