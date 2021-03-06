import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import "index.scss";

import Button from "components/Button";

import DayListItem from "components/DayListItem"

import DayList from "components/DayList"

import InterviewerListItem from "components/InterviewerListItem.js";

import InterviewerList from "components/InterviewerList"; 

import Appointment from "components/Appointment/index.js";

import Header from "components/Appointment/Header"

import Empty from "components/Appointment/Empty";

import Show from "components/Appointment/Show";

import Confirm from "components/Appointment/Confirm";

import Status from "components/Appointment/Status";

import Error from "components/Appointment/Error";

import Form from "components/Appointment/Form";

//Button/ is a button that displays a list of buttons 
storiesOf("Button", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Base", () => <Button>Base</Button>)
  .add("Confirm", () => <Button confirm>Confirm</Button>)
  .add("Danger", () => <Button danger>Cancel</Button>)
  .add("Clickable", () => (
    <Button onClick={action("button-clicked")}>Clickable</Button>
  ))
  .add("Disabled", () => (
    <Button disabled onClick={action("button-clicked")}>
      Disabled
    </Button>
  ));


  //DayList item
  

  storiesOf("DayListItem", module) 
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Unselected", () => <DayListItem name="Monday" spots={5} />) 
  .add("Selected", () => <DayListItem name="Monday" spots={5} selected />) 
  .add("Full", () => <DayListItem name="Monday" spots={0} />)
  .add("Clickable", () => (
    <DayListItem name="Tuesday" setDay={action("setDay")} spots={5} /> 
  ));



  //DayList

  const days = [
    {
      id: 1,
      name: "Monday",
      spots: 2,
    },
    {
      id: 2,
      name: "Tuesday",
      spots: 5,
    },
    {
      id: 3,
      name: "Wednesday",
      spots: 0,
    },
  ];

  storiesOf("DayList", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }],
  })
  .add("Monday", () => (
    <DayList days={days} day={"Monday"} setDay={action("setDay")} />
  ))
  .add("Tuesday", () => (
    <DayList days={days} day={"Tuesday"} setDay={action("setDay")} />
  ))
  .add("Wednesday", () => (
      <DayList days={days} day={"Wednesday"} setDay={action("setDay")} />
  ));



  // interview

  const interviewers = [
    { id: 1, name: "Sylvia Palmer", avatar: "https://i.imgur.com/LpaY82x.png" },
    { id: 2, name: "Tori Malcolm", avatar: "https://i.imgur.com/Nmx0Qxo.png" },
    { id: 3, name: "Mildred Nazir", avatar: "https://i.imgur.com/T2WwVfS.png" },
    { id: 4, name: "Cohana Roy", avatar: "https://i.imgur.com/FK8V841.jpg" },
    { id: 5, name: "Sven Jones", avatar: "https://i.imgur.com/twYrpay.jpg" }
  ];
  
  storiesOf("InterviewerListItem", module)
    .addParameters({
      backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
    })
    .add("Unselected", () => (
      <InterviewerListItem
        id={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
      />
    ))
    .add("Selected", () => (
      <InterviewerListItem
        id={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        selected
      />
    ))
    .add("Clickable", () => (
      <InterviewerListItem
        id={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        setInterviewer={action("setInterviewer")}
      />
    ));


    // appointment

    storiesOf("Appointment", module)
      .addParameters({
        backgrounds: [{ name: "white", value: "#fff", default: true }]
      })
      .add("Appointment", () => <Appointment />)
      storiesOf("Appointment", module)
  .addParameters({
    backgrounds: [{ name: "white", value: "#fff", default: true }]
  })
  .add("Appointment", () => <Appointment />)
  .add("Appointment with Time", () => <Appointment time="12pm" />);
  storiesOf("Appointment", module)
  .addParameters({
    backgrounds: [{ name: "white", value: "#fff", default: true }]
  })
  .add("Appointment", () => <Appointment />)
  .add("Appointment with Time", () => <Appointment time="12pm" />)
  .add("Header", ()=> <Header time='12pm' />)
  .add("Empty", () => <Empty onAdd={action("onAdd")}/>)
  .add("Show", () => 
    <Show
      onDelete={action("onDelete")}
      onEdit={action("onEdit")}
      student={"Lydia Palmer"}
      interviewer={"Mildred Nazir"}
    />
  ).add("Confirm", () =>  
  <Confirm
  onConfirm={action("onConfirm")}
  onCancel={action("onCancel")}
  onChange ={action("setInterviewer")}
  message={"Are you sure you want to Delete"}
  
  />
  ).add("Status", () => 
  <Status
  message={'Deleting'}
  />)
  
  .add("Error", () => 
  <Error
  message={'Could not delete appointment'}
  onClose={action("onClose")}
  />)

  .add("Form Edit", () => (
    <Form
      onCancel={action("cancel")}
      onSave={action("onSave")}
      interviewers={interviewers}
      interviewer={3}
      name={interviewer.name}
    />
  ))
  .add("Form Create", () => (
    <Form
      onCancel={action("cancel")}
      onSave={action("onSave")}
      interviewers={interviewers}
      interviewer={1}
      student={'Jabril G'}
    />

  ))
 
.add("Form Create", () => (
    <Form
      onCancel={action("cancel")}
      onSave={action("onSave")}
      interviewers={interviewers}
    />
  )).add("Form Edit", () => (
    <Form
      onCancel={action("cancel")}
      onSave={action("onSave")}
      interviewers={interviewers}
      interviewer={1}
      name={interviewer.name}
    />
  ))
  .add("Appointment Empty", () => (
    <Fragment>
      <Appointment id={1} time="4pm" />
      <Appointment time="5pm" />
    </Fragment>
  ))
  .add("Appointment Booked", () => (
    <Fragment>
      <Appointment
        id={1}
        time="4pm"
        interview={{ student: "Lydia Miller-Jones", interviewer }}
      />
      <Appointment time="5pm" />
    </Fragment>
  )) 