import MeetupList from "@/components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";

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
