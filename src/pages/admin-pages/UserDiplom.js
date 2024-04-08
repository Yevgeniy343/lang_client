import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import _ from "lodash";

function UserDiplom({ _id, name, second_name, email }) {
  const { childOrders, adultOrders, events } = useSelector(
    (store) => store.admin
  );
  const [extra, setExtra] = useState(false);

  const thisOrders1 = _.filter(childOrders, (c) => c.userId === _id);
  //   console.log("thisOrders1", thisOrders1);

  const events1 = _.map(thisOrders1, (obj) => ({ eventId: obj.eventId }));
  //   console.log("events1", events1);

  const thisOrders2 = _.filter(adultOrders, (c) => c.userId === _id);
  //   console.log("thisOrders2", thisOrders2);

  const events2 = _.map(thisOrders2, (obj) => ({ eventId: obj.eventId }));
  //   console.log("events2", events2);

  const this_events = _.concat(events1, events2);
  console.log("this_events", this_events);

  return (
    <Wrapper>
      <div className="header" onClick={() => setExtra(!extra)}>
        <p>
          {second_name} {name}
        </p>
        <p>{email}</p>
        {/* <p>{this_events.length}</p> */}
      </div>
      {extra && (
        <div className="extra">
          {this_events?.map((event) => {
            console.log("events", events);
            const eventName = _.find(events, (ev) => ev._id === event.eventId);
            console.log("eventName", eventName);
            return eventName?.name.length > 0 ? (
              <div className="line">
                <p key={event.eventId}>{eventName?.name}</p>
                <p className="upload">Загрузить диплом</p>
              </div>
            ) : null;
          })}
        </div>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 1px solid var(--main-0);
  color: var(--main-0);
  padding: 0;
  margin: 0;
  .header {
    margin: 0;
    padding: 10px;
    /* border: 1px solid var(--main-0); */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    cursor: pointer;
    transition: 0.5s;
    :hover {
      background: var(--main-3);
      padding-left: 20px;
    }
  }
  .extra {
    display: flex;
    flex-direction: column;
    p {
      padding: 5px;
      opacity: 0.8;
      font-style: italic;
      cursor: pointer;
      transition: 0.5s;
      :hover {
        background: var(--main-3);
        padding-left: 10px;
      }
    }
  }
  .line {
    display: flex;
    flex-wrap: wrap;
    .upload {
      color: var(--clr-grey-4);
    }
  }
  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
  }
  @media (min-width: 1200px) {
  }
  @media (min-width: 1400px) {
  }
`;
export default UserDiplom;
