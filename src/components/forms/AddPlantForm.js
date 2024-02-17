import React, { useEffect, useState } from "react";
import { addPlant } from "../../services/plantService.js";
import { useNavigate } from "react-router-dom";
import { getAllRooms } from "../../services/roomService.js";
import { CustomAlert } from "../CustomAlert.js";

export const AddPlantForm = ({ currentUser }) => {
  const [plant, setPlant] = useState({});
  const [rooms, setRooms] = useState([]);
  const [newSelectedRoom, setNewSelectedRooom] = useState(0);
  const [plantAdded, setPlantAdded] = useState(false);
  const [selectedWaterLevel, setSelectedWaterLevel] = useState("");
  const [selectedLightNeeded, setSelectedLightNeeded] = useState("");

  useEffect(() => {
    getAllRooms().then((allRooms) => {
      setRooms(allRooms);
    });
  }, []);

  const handleRoomChange = (event) => {
    const selectedRoomId = parseInt(event.target.value);
    setNewSelectedRooom(selectedRoomId);
  };

  const waterLevelOptions = [
    { id: 1, name: "Low", value: "Low" },
    { id: 2, name: "Medium", value: "Medium" },
    { id: 3, name: "High", value: "High" },
  ];

  const lightNeededOptions = [
    { id: 1, name: "Low", value: "Low" },
    { id: 2, name: "Medium", value: "Medium" },
    { id: 3, name: "High", value: "High" },
  ];

  const handleWaterLevel = (value) => {
    setSelectedWaterLevel(value);
  };
  const handleLightNeeded = (value) => {
    setSelectedLightNeeded(value);
  };

  const navigate = useNavigate();

  const handleAdd = (event) => {
    event.preventDefault();
    if (plant.type) {
      const newPlant = {
        userId: currentUser.id,
        roomId: newSelectedRoom,
        type: plant.type,
        image: `/images/${plant.type}.jpg`,
        waterLevel: selectedWaterLevel,
        lightNeeded: selectedLightNeeded,
        datePlanted: new Date().toISOString().slice(0, 10),
      };
      addPlant(newPlant).then(() => {
        setPlantAdded(true);
        setTimeout(() => {
          navigate("/profile");
        }, 2000);
      });
    } else {
      window.alert("Please fill out type");
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center align=items-center vh-100">
        <div className="col-md-8">
          <form>
            <h1 style={{ fontSize: "24px" }}>Add Plant</h1>
            <div className="mb-3">
              <fieldset>
                <div key="form-group-key" className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name of Plant"
                    onChange={(event) => {
                      const plantCopy = { ...plant };
                      plantCopy.type = event.target.value;
                      setPlant(plantCopy);
                    }}
                  />
                </div>
              </fieldset>
            </div>

            <div>
              <label
                className="form-label"
                style={{ fontSize: "24px" }}
                id="water-level-label"
              >
                Water Level
              </label>
              <br />
              <div
                className="btn-group"
                role="group"
                aria-label="Basic radio toggle button group"
              >
                {waterLevelOptions.map((waterLevelOption) => (
                  <div>
                    <button
                      style={{
                        background: "darkgreen",
                        color: "white",
                        boxShadow: "2px 4px 2px lightgreen",
                      }}
                      type="button"
                      className={`btn btn-outline-warning rounded-pill`}
                      onClick={() => handleWaterLevel(waterLevelOption.value)}
                    >
                      {waterLevelOption.name}
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <br />
            <div>
              <label className="form-label" style={{ fontSize: "24px" }}>
                Amount of sunlight needed
              </label>
              <br />
              <div
                className="btn-group"
                role="group"
                aria-label="Basic radio toggle button group"
              >
                {lightNeededOptions.map((lightNeededOption) => (
                  <div>
                    <button
                      style={{
                        background: "darkgreen",
                        color: "white",
                        boxShadow: "2px 4px 2px lightgreen",
                      }}
                      type="button"
                      className={`btn btn-outline-warning rounded-pill`}
                      onClick={() => handleLightNeeded(lightNeededOption.value)}
                    >
                      {lightNeededOption.name}
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <br />
            <fieldset>
              <div className="form-group">
                <label style={{ fontSize: "24px" }}>Room:</label>
                <select
                  className="form-control"
                  value={newSelectedRoom}
                  onChange={handleRoomChange}
                >
                  <option value="0">Choose Room</option>
                  {rooms.map((room) => {
                    return (
                      <option value={room.id} key={room.id}>
                        {room.roomName}
                      </option>
                    );
                  })}
                </select>
              </div>
            </fieldset>

            <fieldset>
              <div className="form-group">
                <div className="row">
                  <div className="col">
                    <button
                      type="button"
                      className="btn btn-outline-warning rounded-pill"
                      onClick={handleAdd}
                      style={{
                        float: "left",
                        background: "darkgreen",
                        color: "white",
                        boxShadow: "2px 4px 2px lightgreen",
                      }}
                    >
                      Add Plant
                    </button>
                  </div>
                </div>
              </div>
            </fieldset>
          </form>
          {plantAdded && <CustomAlert message="Plant Successfully Added!" />}
        </div>
      </div>
    </div>
  );
};
