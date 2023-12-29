import { FaFileCirclePlus } from "react-icons/fa6";
import axios from "axios";

const Button = ({setUpdateUI}) => {
  const handlechange = (e) => {
    e.preventDefault();

    const formData = new FormData()
    formData.append("photo", e.target.files[0])
    
    axios.post("http://localhost:5000/api/save", formData)
    .then((res) => {
      console.log(res.data);
      setUpdateUI(res.data._id);
    })
    .catch((err) => console.log(err));
  };
  return (
    <label className="button" htmlFor="file_picker">
      <FaFileCirclePlus />
      <input
        hidden
        type="file"
        name="file_picker"
        id="file_picker"
        onChange={(e) => handlechange(e)}
      />
    </label>
  );
};

export default Button;
