import React from "react";
import Input from "../../components-special/Input";

const Curators = ({ amount }) => {
  return (
    <div>
      {amount && amount === "1" && (
        <div>
          <Input placeholder="ФИО куратора 1" />
          <Input placeholder="Должность куратора 1" />
          <p>{amount}</p>
        </div>
      )}
      {amount && amount === "2" && (
        <div>
          <Input placeholder="ФИО куратора 1" />
          <Input placeholder="Должность куратора 1" />
          <Input placeholder="ФИО куратора 2" />
          <Input placeholder="Должность куратора 2" />
        </div>
      )}
      {amount && amount === "3" && (
        <div>
          <Input placeholder="ФИО куратора 1" />
          <Input placeholder="Должность куратора 1" />
          <Input placeholder="ФИО куратора 2" />
          <Input placeholder="Должность куратора 2" />
          <Input placeholder="ФИО куратора 3" />
          <Input placeholder="Должность куратора 3" />
        </div>
      )}
      {amount && amount === "4" && (
        <div>
          <Input placeholder="ФИО куратора 1" />
          <Input placeholder="Должность куратора 1" />
          <Input placeholder="ФИО куратора 2" />
          <Input placeholder="Должность куратора 2" />
          <Input placeholder="ФИО куратора 3" />
          <Input placeholder="Должность куратора 3" />
          <Input placeholder="ФИО куратора 4" />
          <Input placeholder="Должность куратора 4" />
        </div>
      )}
      {amount && amount === "5" && (
        <div>
          <Input placeholder="ФИО куратора 1" />
          <Input placeholder="Должность куратора 1" />
          <Input placeholder="ФИО куратора 2" />
          <Input placeholder="Должность куратора 2" />
          <Input placeholder="ФИО куратора 3" />
          <Input placeholder="Должность куратора 3" />
          <Input placeholder="ФИО куратора 4" />
          <Input placeholder="Должность куратора 4" />
          <Input placeholder="ФИО куратора 5" />
          <Input placeholder="Должность куратора 5" />
        </div>
      )}
    </div>
  );
};

export default Curators;
