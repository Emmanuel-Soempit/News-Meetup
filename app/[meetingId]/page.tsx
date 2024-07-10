import MeetupItem from "@/components/meetups/MeetupItem";
import { DUMMY_MEETUPS } from "../page";
import { MongoClient, ObjectId } from "mongodb";
import { title } from "process";



export async function generateMetadata ({params}: {params: {meetingId: ObjectId}}){
  const currentMeetUp: any = await getSingleMeetUp(params.meetingId)
  return {
    title: currentMeetUp.title,
    description: currentMeetUp.description
  }
}

async function MeetupDetails({ params }: { params: { meetingId: ObjectId } }) {

  const currentMeetUp: any = await getSingleMeetUp(params.meetingId)

  return <MeetupItem title={currentMeetUp?.title} address={currentMeetUp?.address} image={currentMeetUp?.image} />;
}




export async function generateStaticParams() {
  const meetings = await getMeetUps();

  return meetings.map((meeting) => ({
    params: { meetingId: meeting._id },
  }));
}




async function getMeetUps() {
  const client = await MongoClient.connect(
    "mongodb+srv://news-meetups-01:news-meetups-01@nasacluster.jh9vutt.mongodb.net/?retryWrites=true&w=majority&appName=NASACluster"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const data = await meetupsCollection.find({}, { projection: { _id: 1 } }).toArray();

  client.close();

  return data;
}

async function getSingleMeetUp(id: ObjectId) {
  const client = await MongoClient.connect(
    "mongodb+srv://news-meetups-01:news-meetups-01@nasacluster.jh9vutt.mongodb.net/?retryWrites=true&w=majority&appName=NASACluster"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const data = await meetupsCollection.findOne({ _id: new ObjectId(id) })

  client.close();

  return data;
}
export default MeetupDetails;
