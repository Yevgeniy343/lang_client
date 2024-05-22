import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import toast from "react-hot-toast";
import { uploadDiplom } from "../features/adminSlice";

function EventDiplom({ eventId, userId }) {
  const { events } = useSelector((store) => store.admin);
  const thisEvent = _.find(events, (ev) => ev._id === eventId);
  const [file, setFile] = useState();

  console.log("thisEvent", thisEvent);

  const dispatch = useDispatch();

  const filePickerRef = useRef();

  const pickFileHandler = (data) => {
    filePickerRef.current.click();
  };

  const pickedHandler = (e) => {
    let pickedFile;
    if (e.target.files && e.target.files.length === 1) {
      pickedFile = e.target.files[0];
      setFile(pickedFile);
      return;
    }
  };

  useEffect(() => {
    if (file) {
      if (!file || !userId || !eventId) {
        toast.error("Укажите все значения");
        return;
      }
      dispatch(uploadDiplom(formData));
    }
  }, [file]);

  const formData = new FormData();
  formData.append("file", file);
  formData.append("userId", userId);
  formData.append("eventId", eventId);
  formData.append("eventName", thisEvent?.name);
  formData.append("date1", thisEvent?.date1);
  formData.append("date2", thisEvent?.date2);

  return (
    <Wrapper>
      <p className="event">{thisEvent?.name}</p>
      {thisEvent && (
        <div>
          <p className="load" onClick={pickFileHandler}>
            Загрузить диплом
          </p>
          {/* <p></p> */}
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
  display: flex;
  .load {
    color: var(--clr-grey-3);
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
export default EventDiplom;
