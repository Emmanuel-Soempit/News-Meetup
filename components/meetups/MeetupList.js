"use client";

import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

function MeetupList(props) {

  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup._id.toString()}
          id={meetup._id.toString()}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
