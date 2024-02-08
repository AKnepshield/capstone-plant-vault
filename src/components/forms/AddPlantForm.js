import { useEffect, useState } from "react";
import { addPlant } from "../../services/plantService.js";
import { useNavigate } from "react-router-dom";
import { getAllRooms } from "../../services/roomService.js";
import { CustomAlert } from "../CustomAlert.js";

export const AddPlantForm = ({ currentUser }) => {
  const [plant, setPlant] = useState({});
  const [rooms, setRooms] = useState([]);
  const [newSelectedRoom, setNewSelectedRooom] = useState(0);
  const [plantAdded, setPlantAdded] = useState(false);

  useEffect(() => {
    getAllRooms().then((allRooms) => {
      setRooms(allRooms);
    });
  }, []);

  const handleRoomChange = (event) => {
    const selectedRoomId = parseInt(event.target.value);
    setNewSelectedRooom(selectedRoomId);
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
        waterLevel: plant.waterLevel,
        lightNeeded: plant.lightNeeded,
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
        <div className="col-md-6">
          <form>
            <h2>Add Plant</h2>
            <div className="mb-3">
              <fieldset>
                <div className="form-group">
                  <label>Type</label>
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
            <fieldset>
              <div className="mb-3">
                <div className="form-group">
                  <label>Water Level</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Low, Medium, High"
                    onChange={(event) => {
                      const plantCopy = { ...plant };
                      plantCopy.waterLevel = event.target.value;
                      setPlant(plantCopy);
                    }}
                  />
                </div>
              </div>
            </fieldset>
            <div className="mb-3">
              <fieldset>
                <div className="form-group">
                  <label>Amount of sunlight</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Low, Medium, High"
                    onChange={(event) => {
                      const plantCopy = { ...plant };
                      plantCopy.lightNeeded = event.target.value;
                      setPlant(plantCopy);
                    }}
                  />
                </div>
              </fieldset>
            </div>
            <fieldset>
              <div className="form-group">
                <label>Room:</label>
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
                      class="btn btn-outline-success"
                      onClick={handleAdd}
                    >
                      Add Plant
                    </button>
                  </div>
                </div>
              </div>
            </fieldset>
          </form>
          {plantAdded && <CustomAlert message="Plant Successully Added!" />}
        </div>
      </div>
    </div>
  );
};
