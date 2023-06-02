import { useState } from "react";
import { useDispatch } from "react-redux";
import { addActivity } from "../../Redux/actions";
export const useForm = (initialForm, validationsForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  // const [loading, setLoading] = useState(false);
  // const [response, setResponse] = useState(null);

  const dispatch = useDispatch();

  const handleAddCountry = (e) => {
    setForm({
      ...form,
      countries: [...form.countries, e.target.value],
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleDifficulty = (e) => {
    setForm({
      ...form,
      difficulty: parseInt(e.target.value),
    });
  };
  const handleSeason = (e) => {
    setForm({
      ...form,
      season: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addActivity(form));
    e.target.reset();
    setForm({
      countries: [],
      name: "",
      difficulty: "",
      duration: 0,
      season: "",
    });
  };

  const handleBlur = (e) => {
    handleChange(e);
    handleAddCountry(e);
    handleDifficulty(e);
    handleSeason(e);
    setErrors(validationsForm(form));
  }; // lanza las validaciones

  return {
    form,
    errors,
    // loading,
    // response,
    handleAddCountry,
    handleDifficulty,
    handleSeason,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
