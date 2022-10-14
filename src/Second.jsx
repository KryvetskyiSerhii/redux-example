import { useDispatch, useSelector } from "react-redux";
import { handleInputValue } from "./redux/generalSlice";
import { generalSlice } from "./redux/generalSlice";
export const Second = () => {
  const test = useSelector((state) => state.generalSlice.inputValue);
  const dispatch = useDispatch();
  console.log(generalSlice);
  const changeValue = (sergii) => {
    dispatch(handleInputValue(sergii));
  };
  return (
    <>
      <input
        type="text"
        value={test}
        onChange={(e) => {
          changeValue(e.target.value);
        }}
      />
      <div>{test}</div>
    </>
  );
};
