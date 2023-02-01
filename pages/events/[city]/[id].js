import Header from "@/src/Header";
import Image from "next/image";

function Event({ data }) {
    console.log(data);

    if (data == 404) {
        return (
            <>
                <Header />
                <h2>This page does not exist</h2>
            </>
        );
    }

    return (
        <>
            <Header />
            <h2>{data.title}</h2>
            <Image src={data.image} width={200} height={200} alt={data.id} />
            <p>{data.description}</p>
            <div className="emails">
                <h4>Emails Registered:</h4>
                {Array.from(new Set(data.emails_registered)).map(
                    (email, index) => (
                        <p key={index}>{email}</p>
                    )
                )}
            </div>
        </>
    );
}

export default Event;

export async function getServerSideProps(context) {
    const pageId = context.params.id;
    const { allEvents } = await import("../../../data/data.json");

    const atualEvent = allEvents.find((event) => event.id === pageId);

    console.log(atualEvent);

    return { props: { data: atualEvent ? atualEvent : "404" } };
}
