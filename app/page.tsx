import MeetupList from "@/components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";

export const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://th.bing.com/th/id/OIP.rpOqHFfq5hTMfenixciZzgHaEo?rs=1&pid=ImgDetMain",
    address: "Some address 5, some city 3357",
    description: "This is the first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://th.bing.com/th/id/OIP.rpOqHFfq5hTMfenixciZzgHaEo?rs=1&pid=ImgDetMain",
    address: "Some address 10, some city 3458",
    description: "This is the Second meetup!",
  },
];

async function HomePage() {
  const meetups = await getMeetUps();

  return (
    <>
    <Head>
      <title>React Meetups</title>
    </Head>
      <MeetupList meetups={meetups} />;
    </>
  );
}

async function getMeetUps() {
  const client = await MongoClient.connect(
    "mongodb+srv://news-meetups-01:news-meetups-01@nasacluster.jh9vutt.mongodb.net/?retryWrites=true&w=majority&appName=NASACluster"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const data = await meetupsCollection.find().toArray();

  client.close();

  return data;
}

export default HomePage;
