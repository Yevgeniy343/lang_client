import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import _ from "lodash";

import EventDiplom from "../../components/EventDiplom";

function UserDiplom({ _id, name, second_name, email }) {
  const { childOrders, adultOrders } = useSelector((store) => store.admin);

  const [extra, setExtra] = useState(false);

  const thisOrders1 = _.filter(childOrders, (c) => c.userId === _id);

  const events1 = _.map(thisOrders1, (obj) => ({ eventId: obj.eventId }));

  const thisOrders2 = _.filter(adultOrders, (c) => c.userId === _id);

  const events2 = _.map(thisOrders2, (obj) => ({ eventId: obj.eventId }));

  const this_events = _.concat(events1, events2);

  return (
    <Wrapper>
      <div className="header" onClick={() => setExtra(!extra)}>
        <p>
          {second_name} {name}
        </p>
        <p>{email}</p>
        <p>{this_events.length}</p>
      </div>
      {extra && (
        <div className="extra">
          {this_events?.map((ev) => (
            <EventDiplom key={ev.eventId} eventId={ev.eventId} userId={_id} />
          ))}
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
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    cursor: pointer;
    transition: 0.5s;
    margin: 0;
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
