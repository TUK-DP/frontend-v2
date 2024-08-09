import { useState } from "react";

export const useInput = (initState) => {
  const [form, setForm] = useState(initState);
  const handleChangeInput = (e) => {
    if (!form.hasOwnProperty(e.target.name)) return;

    setForm((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  };

  return { form, setForm, handleChangeInput };
};
