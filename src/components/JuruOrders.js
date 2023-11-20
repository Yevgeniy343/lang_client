import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FileDownload from "js-file-download";
import Axios from "axios";
import CDecor from "../components-list/CDecor";
import CEsse from "../components-list/CEsse";
import CHor from "../components-list/CHor";
import CHud from "../components-list/CHud";
import CLit from "../components-list/CLit";
import CVid from "../components-list/CVid";
import CVokal from "../components-list/CVokal";
import CRod from "../components-list/CRod";
import CTet from "../components-list/CTet";
import CIzo from "../components-list/CIzo";
import CPrez from "../components-list/CPrez";
import AEsse from "../components-list/AEsse";
import AFra from "../components-list/AFra";
import AHud from "../components-list/AEsse";
import ANay from "../components-list/ANay";
import APer from "../components-list/APer";
import AVok from "../components-list/APer";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";

const { REACT_APP_URL_API } = process.env;

const JuruOrders = ({
  id,
  number,
  age,
  link,
  file,
  nomPul,
  type,
  juryOrder,
}) => {
  const [totalAmount, setTotalAmount] = useState();
  // console.log(totalAmount);
  console.log(nomPul);
  console.log(type);
  const { jury } = useSelector((store) => store.jury);

  const include = _.includes(_.map(juryOrder, "juryId"), jury._id);

  const [extra, setExtra] = useState(false);

  const downloadHandler = (e) => {
    e.preventDefault();
    Axios({
      url: `${REACT_APP_URL_API}/${file}`,
      method: "GET",
      responseType: "blob",
    }).then((res) => {
      FileDownload(res.data, file);
    });
  };

  const closeExtra = (data) => {
    setExtra(data);
  };

  const totalAmountHandler = (total_amount) => {
    setTotalAmount(total_amount);
  };

  return (
    <Wrapper>
      <div className="header" onClick={() => setExtra(!extra)}>
        {include && <p>Проверено</p>}
        {!include && <p>Не проверено</p>}
        <p>id: {number}</p>
        <p>возраст: {age}</p>
        {
          <a href={link} target="blank">
            ссылка: {link}
          </a>
        }
        {file && (
          <p className="value link" onClick={downloadHandler}>
            скачать работу
          </p>
        )}
      </div>
      {extra && (
        <div className="extra">
          {type === "adult" && (
            <div className="filter_adult">
              {nomPul === "Вокальное искусство" && (
                <AVok
                  nomPul={nomPul}
                  type={type}
                  link={link}
                  file={file}
                  id={id}
                  passState={closeExtra}
                  passStateAmount={totalAmountHandler}
                />
              )}
              {nomPul === "Передовой опыт" && (
                <APer
                  nomPul={nomPul}
                  type={type}
                  link={link}
                  file={file}
                  id={id}
                  passState={closeExtra}
                  passStateAmount={totalAmountHandler}
                />
              )}
              {nomPul === "Научно-методическая разработка" && (
                <ANay
                  nomPul={nomPul}
                  type={type}
                  link={link}
                  file={file}
                  id={id}
                  passState={closeExtra}
                  passStateAmount={totalAmountHandler}
                />
              )}
              {nomPul === "Художественное слово" && (
                <AHud
                  nomPul={nomPul}
                  type={type}
                  link={link}
                  file={file}
                  id={id}
                  passState={closeExtra}
                  passStateAmount={totalAmountHandler}
                />
              )}
              {nomPul === "Фрагмент внеклассного мероприятия" && (
                <AFra
                  nomPul={nomPul}
                  type={type}
                  link={link}
                  file={file}
                  id={id}
                  passState={closeExtra}
                  passStateAmount={totalAmountHandler}
                />
              )}
              {nomPul === "Эссе" && (
                <AEsse
                  nomPul={nomPul}
                  type={type}
                  link={link}
                  file={file}
                  id={id}
                  passState={closeExtra}
                  passStateAmount={totalAmountHandler}
                />
              )}
            </div>
          )}
          {type === "child" && (
            <div className="filter_child">
              {nomPul === "Видеотрейлер" && (
                <CVid
                  nomPul={nomPul}
                  type={type}
                  link={link}
                  file={file}
                  id={id}
                  passState={closeExtra}
                  passStateAmount={totalAmountHandler}
                />
              )}
              {nomPul === "Вокал" && (
                <CVokal
                  nomPul={nomPul}
                  type={type}
                  link={link}
                  file={file}
                  id={id}
                  passState={closeExtra}
                  passStateAmount={totalAmountHandler}
                />
              )}
              {nomPul === "Декоративно-прикладное искусство" && (
                <CDecor
                  nomPul={nomPul}
                  type={type}
                  link={link}
                  file={file}
                  id={id}
                  passState={closeExtra}
                  passStateAmount={totalAmountHandler}
                />
              )}
              {nomPul === "Эссе" && (
                <CEsse
                  nomPul={nomPul}
                  type={type}
                  link={link}
                  file={file}
                  id={id}
                  passState={closeExtra}
                  passStateAmount={totalAmountHandler}
                />
              )}
              {nomPul === "Хореографическое искусство" && (
                <CHor
                  nomPul={nomPul}
                  type={type}
                  link={link}
                  file={file}
                  id={id}
                  passState={closeExtra}
                  passStateAmount={totalAmountHandler}
                />
              )}
              {nomPul === "Художественное слово" && (
                <CHud
                  nomPul={nomPul}
                  type={type}
                  link={link}
                  file={file}
                  id={id}
                  passState={closeExtra}
                  passStateAmount={totalAmountHandler}
                />
              )}
              {nomPul === "ИЗО" && (
                <CIzo
                  nomPul={nomPul}
                  type={type}
                  link={link}
                  file={file}
                  id={id}
                  passState={closeExtra}
                  passStateAmount={totalAmountHandler}
                />
              )}
              {nomPul === "Литературно-музыкальная композиция" && (
                <CLit
                  nomPul={nomPul}
                  type={type}
                  link={link}
                  file={file}
                  id={id}
                  passState={closeExtra}
                  passStateAmount={totalAmountHandler}
                />
              )}
              {nomPul === "Презентация" && (
                <CPrez
                  nomPul={nomPul}
                  type={type}
                  link={link}
                  file={file}
                  id={id}
                  passState={closeExtra}
                  passStateAmount={totalAmountHandler}
                />
              )}
              {nomPul === "Моя родословная" && (
                <CRod
                  nomPul={nomPul}
                  type={type}
                  link={link}
                  file={file}
                  id={id}
                  passState={closeExtra}
                  passStateAmount={totalAmountHandler}
                />
              )}
              {nomPul === "Театральное искусство" && (
                <CTet
                  nomPul={nomPul}
                  type={type}
                  link={link}
                  file={file}
                  id={id}
                  passState={closeExtra}
                  passStateAmount={totalAmountHandler}
                />
              )}
            </div>
          )}
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .header {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    transition: 0.6s;
    cursor: pointer;
    border: 1px solid var(--main-0);
    margin: 0.5rem 0;
  }
  .panel {
    border: 1px dotted var(--main-0);
    padding: 0.5rem;
  }
  .link {
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }
  .list2 {
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
  }
  .in {
    display: flex;
  }
  .actions {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .amount {
      font-size: 2rem;
      color: var(--clr-green-dark);
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
export default JuruOrders;
