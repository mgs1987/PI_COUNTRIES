import React, { useEffect } from "react";
import "./Activities.css";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../Redux/actions";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { useForm } from "../Hook/useForm";

const initialForm = {
  countries: [],
  name: "",
  difficulty: 0,
  duration: 0,
  season: "",
};
const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;

  let regexDuration = /^[1-9][0-9]*$/;

  if (!form.countries.length) {
    errors.countries = "You must select a Country";
  }
  if (!form.name.trim()) {
    errors.name = "You must write an Activity for the country you select";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "the field only accept letters and white spaces";
  }
  if (form.difficulty === 0) {
    errors.difficulty = "You must select a difficulty";
  }

  if (!form.duration) {
    errors.duration = "You must write duration of the activity";
  } else if (!regexDuration.test(form.duration)) {
    errors.duration = "the field only accept positives numbers";
  }
  if (!form.season) {
    errors.season = "You must select a season";
  }
  return errors;
};

export const Activities = () => {
  const {
    form,
    errors,
    // loading,
    // response,
    handleBlur,
    handleChange,
    handleAddCountry,
    handleDifficulty,
    handleSeason,
    handleSubmit,
  } = useForm(initialForm, validationsForm);
  const dispatch = useDispatch();

  const allCountries = useSelector((state) => state.allCountries);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);
  console.log(form.difficulty);
  return (
    <div className="main-container">
      <div className="space-container"></div>
      <div className="back-home-container">
        <div>
          <Link to="/home" className="backhome">
            <FaHome />
          </Link>
        </div>
      </div>
      <div className="title-activity">
        <h2> Add an activity </h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="select">
          <h4 className="h4"> Select countries :</h4>
          <select
            name="countries"
            value={form.countries.name}
            className="select-countries"
            onBlur={handleBlur}
            onChange={handleAddCountry}
            multiple
            required
          >
            <option value=""></option>
            {allCountries.map((pais) => (
              <option key={pais.id} value={pais.name}>
                {pais.name}
              </option>
            ))}
          </select>
          {errors.countries && <h5>{errors.countries}</h5>}
        </div>
        <br />
        <h4 className="h4"> Activity name </h4>
        <input
          className="input"
          type="text"
          name="name"
          placeholder="Write here"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.name}
          required
        ></input>
        {errors.name && <h5>{errors.name}</h5>}
        <br></br>
        <label htmlFor="difficulty" className="h4">
          Difficulty
        </label>
        <select
          id="difficulty"
          name="difficulty"
          value={form.difficulty}
          onChange={handleDifficulty}
          onBlur={handleBlur}
          className="select-season"
          required
        >
          <option value=""></option>
          <option key="1" value="1">
            1- Begginer
          </option>
          <option key="2" value="2">
            2-Low
          </option>
          <option key="3" value="3">
            3-Medium
          </option>
          <option key="4" value="4">
            4-High
          </option>
          <option key="5" value="5">
            5-Professional
          </option>
        </select>
        {errors.difficulty && <h5>{errors.difficulty}</h5>}
        <br />
        <h4 className="h4"> Duration </h4>
        <input
          className="input"
          type="number"
          name="duration"
          placeholder="Minutes..."
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.duration}
          required
        ></input>
        <label>minutes</label>
        {errors.duration && <h5>{errors.duration}</h5>}
        <br />
        <label htmlFor="season" className="h4">
          Season
        </label>
        <select
          id="season"
          value={form.season}
          name="season"
          onChange={handleSeason}
          onBlur={handleBlur}
          className="select-season"
          required
        >
          <option value=""></option>
          <option value="Winter"> Winter </option>
          <option value="Spring"> Spring </option>
          <option value="Autumn"> Autumn </option>
          <option value="Summer"> Summer </option>
        </select>
        {errors.season && <h5>{errors.season}</h5>}
        <br />
        <br />
        <br />
        <input
          type="submit"
          className="buttonAdd"
          value="Add Turistic Activity"
        />
      </form>
      <br />
    </div>
  );
};

export default Activities;
