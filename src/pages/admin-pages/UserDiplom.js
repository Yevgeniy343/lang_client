import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import _ from "lodash";
import { uploadDiplom } from "../../features/adminSlice";
import toast from "react-hot-toast";

function UserDiplom({ _id, name, second_name, email }) {
  const { childOrders, adultOrders, events } = useSelector(
    (store) => store.admin
  );

  const dispatch = useDispatch();
  const filePickerRef = useRef();

  const [extra, setExtra] = useState(false);
  const [eventData, setEventData] = useState();

  const thisOrders1 = _.filter(childOrders, (c) => c.userId === _id);
  //   console.log("thisOrders1", thisOrders1);

  const events1 = _.map(thisOrders1, (obj) => ({ eventId: obj.eventId }));
  //   console.log("events1", events1);

  const thisOrders2 = _.filter(adultOrders, (c) => c.userId === _id);
  //   console.log("thisOrders2", thisOrders2);

  const events2 = _.map(thisOrders2, (obj) => ({ eventId: obj.eventId }));
  //   console.log("events2", events2);

  const this_events = _.concat(events1, events2);
  //   console.log("this_events", this_events);

  const [file, setFile] = useState();

  const pickFileHandler = (data) => {
    filePickerRef.current.click();
    setEventData(data);
  };

  const pickedHandler = (e) => {
    console.log("vfverfe");
    let pickedFile;
    if (e.target.files && e.target.files.length === 1) {
      pickedFile = e.target.files[0];
      setFile(pickedFile);
      return;
    }
  };

  const formData = new FormData();
  formData.append("file", file);
  formData.append("userId", _id);
  formData.append("eventId", eventData?.eventId);
  formData.append("eventName", eventData?.eventName);

  //   const createDiplomHandler = () => {
  //     const { name } = values;
  //     if (!name || !task || !group || !teacher) {
  //       toast.error("Укажите все значения");
  //       return;
  //     }
  //     // dispatch(uploadDiplom(formData));s
  //     console.log(file);
  //     console.log(_id);
  //     console.log(eventData?.eventId);
  //     console.log(eventData?.eventName);
  //   };

  useEffect(() => {
    if (file) {
      //   console.log(file);
      //   console.log(_id);
      //   console.log(eventData?.eventId);
      //   console.log(eventData?.eventName);

      if (!file || !_id || !eventData) {
        toast.error("Укажите все значения");
        return;
      }
      dispatch(uploadDiplom(formData));
      //   console.log(file);
      //   console.log(_id);
      //   console.log(eventData?.eventId);
      //   console.log(eventData?.eventName);
    }
  }, [file]);

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
            // console.log("eventName", eventName);
            return eventName?.name.length > 0 ? (
              <div className="line" key={Math.random()}>
                <p key={event.eventId}>{eventName?.name}</p>
                <p
                  className="upload"
                  onClick={() =>
                    pickFileHandler({
                      eventId: event?.eventId,
                      eventName: eventName?.name,
                    })
                  }
                >
                  Загрузить диплом
                  {/* <span>{file?.name}</span> */}
                </p>
              </div>
            ) : null;
          })}
        </div>
      )}
      <input
        type="file"
        style={{ display: "none" }}
        accept=".img,.png,.jpeg,.jpg"
        ref={filePickerRef}
        onChange={pickedHandler}
      />
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
    /* border: 1px solid var(--main-0); */
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
