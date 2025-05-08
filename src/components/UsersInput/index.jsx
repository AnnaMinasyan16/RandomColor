import { useState } from "react";
import "./UsersInput.css";
import Header from "../Header";
import { fetchPost } from "../../APIservice/APIservice";

const UsersInput = () => {
  const [name, setName] = useState("");
  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInput = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetchPost(name)
      .then((data) => {
        setResponseData(data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <Header />
      {loading ? (
        <div className="cyrcle-container">
          <div className="cyrcle"></div>
        </div>
      ) : responseData ? (
        <div className="assigned-color-container">
          <h2>🎉 Thank you, {responseData.name}!</h2>
          <p>Your assigned color is:</p>
          <div
            className="assigned-color"
            style={{ backgroundColor: `${responseData.hex}` }}
          >
            {responseData.color}
          </div>
        </div>
      ) : (
        <div className="input-container">
          <h1>🎨 Get Your Random Color</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              className="name-input"
              onChange={handleInput}
            />
            <button className="get-color-button" type="submit">
              Get color
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default UsersInput;
