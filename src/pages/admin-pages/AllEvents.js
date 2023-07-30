import React, { useEffect } from "react";

import styled from "styled-components";
import AdminNavBar from "../../components/adminComponents/adminNavbar";
import AdminSideBar from "../../components/adminComponents/adminSidebar";
import EventItem from "../../components/adminComponents/EventItem";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../../features/adminSlice";
import EventAdminModal from "../../components/adminModal/eventAdminModal";
import Loading from "../../components/Loading";

const AllEvents = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvents());
  }, []);

  const { events, isEventModal, isLoading } = useSelector(
    (store) => store.admin
  );

  return (
    <div>
      <AdminNavBar />
      <AdminSideBar />
      {isLoading && <Loading />}
      <Wrapper>
        {events.map((e) => (
          <EventItem
            key={e._id}
            name={e.name}
            date1={e.date1}
            date2={e.date2}
            image={e.image}
            id={e._id}
            pdf={e.pdf}
            childNom_1={e.childNom_1}
            childNom_2={e.childNom_2}
            childNom_3={e.childNom_3}
            childNom_4={e.childNom_4}
            childNom_5={e.childNom_5}
            childNom_6={e.childNom_6}
            childNom_7={e.childNom_7}
            childNom_8={e.childNom_8}
            childNom_9={e.childNom_9}
            childNom_10={e.childNom_10}
            adultNom_1={e.adultNom_1}
            adultNom_2={e.adultNom_2}
            adultNom_3={e.adultNom_3}
            adultNom_4={e.adultNom_4}
            adultNom_5={e.adultNom_5}
            adultNom_6={e.adultNom_6}
            adultNom_7={e.adultNom_7}
          />
        ))}
      </Wrapper>
      {isEventModal && <EventAdminModal />}
    </div>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
  }
  @media (min-width: 1140px) {
  }
  @media (min-width: 1340px) {
  }
`;
export default AllEvents;
