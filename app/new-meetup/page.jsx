"use client";

import { useRouter } from "next/navigation";
import Head from "next/head";
import NewMeetupForm from "@/components/meetups/NewMeetupForm";

function NewMeeting() {
  const router = useRouter();

  async function addMeetUpHandler(enteredMeetUpData) {
    const response = await fetch(`api/new-meetup`, {
      method: "POST",
      body: JSON.stringify(enteredMeetUpData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
    router.push("/");
  }

  return (
    <>
      <Head>
        <title>Add new meetup</title>
        <meta name="description" content="You can add a new meetup here" />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetUpHandler} />
    </>
  );
}

export default NewMeeting;
