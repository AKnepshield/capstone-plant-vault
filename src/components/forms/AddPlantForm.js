import { useEffect, useState } from "react";
import { addPlant } from "../../services/plantService.js";
import { useNavigate } from "react-router-dom";
import { getAllRooms } from "../../services/roomService.js";
// import { RoomDropDown } from "../dropdown/RoomDropDown.js";

export const AddPlantForm = ({ currentUser }) => {
  const [plant, setPlant] = useState({});
  const [rooms, setRooms] = useState([]);
  const [newSelectedRoom, setNewSelectedRooom] = useState(0);

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
        waterLevel: plant.waterLevel,
        lightNeeded: plant.lightNeeded,
        datePlanted: new Date(),
      };
      addPlant(newPlant).then(() => {
        navigate("/profile");
      });
    } else {
      window.alert("Please fill out type");
    }
  };

  return (
    <form>
      <h2>Add Plant</h2>
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
      <fieldset>
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
      </fieldset>
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
          <button className="form-btn btn-info" onClick={handleAdd}>
            Add Plant
          </button>
        </div>
      </fieldset>
    </form>
  );
};
