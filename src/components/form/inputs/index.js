import React, { useState, useEffect } from "react";
import * as Styled from "./style";
import { Validation, OnSubmit } from "../../../helper";

const Inputs = () => {
  const professionArr = [
    { title: "Programmerare", salary: 30000 },
    { title: "Lärare", salary: 27000 },
    { title: "Kassabiträde", salary: 25000 },
  ];

  const [validation, setValidation] = useState(false);
  const [experince, setExperince] = useState(0);
  const [profession, setProfession] = useState({});
  const [city, setCity] = useState();
  const [year, setYear] = useState();
  const [salary, setSalary] = useState(0);
  const [finalSalary, setFinalSalary] = useState(null);

  useEffect(() => {
    setValidation(Validation(experince, profession, city, year));
    if (Object.keys(profession).length > 0) {
      setSalary(profession.salary);
    }
  }, [experince, profession, city, year, salary]);

  return (
    <Styled.InputsContainer>
      {/* EXPERINCE INPUT */}
      <Styled.Input>
        <h2>Erfarenhet</h2>
        <input
          type="number"
          min="0"
          placeholder="Antal år"
          onChange={(e) => setExperince(e.target.value)}
        />
      </Styled.Input>

      {/* PROFESSION */}
      <Styled.Input>
        <h2>Yrke</h2>
        <div className="radioFlex">
          {professionArr.map((item) => {
            return (
              <div key={item.title}>
                <input
                  type="radio"
                  id="profession"
                  name="drone"
                  value={item.title}
                  checked={profession.title === item.title}
                  onChange={(e) => setProfession(item)}
                />
                <label>{item.title}</label>
              </div>
            );
          })}
        </div>
      </Styled.Input>

      {/* CITY */}

      <Styled.Input>
        <h2>Ort</h2>
        <select onChange={(e) => setCity(e.currentTarget.value)}>
          <option value="" hidden>
            Välj stad
          </option>
          <option value="Stockholm">Stockholm</option>
          <option value="Göteborg">Göteborg</option>
        </select>
      </Styled.Input>

      {/* YEAR */}

      <Styled.Input>
        <h2>Inkomstår</h2>
        <select onChange={(e) => setYear(e.currentTarget.value)}>
          <option value="" hidden>
            Välj år
          </option>
          <option value="2016">2016</option>
          <option value="2017">2017</option>
        </select>
      </Styled.Input>

      <button
        disabled={validation ? false : true}
        onClick={() => setFinalSalary(OnSubmit(salary, experince, city, year))}
      >
        BERÄKNA
      </button>

      {finalSalary && (
        <Styled.Input>
          <div className="finalSalary">
            <p> Din lön efter skatt är:</p>
            <p>{finalSalary}</p>
          </div>
        </Styled.Input>
      )}
    </Styled.InputsContainer>
  );
};

export default Inputs;
