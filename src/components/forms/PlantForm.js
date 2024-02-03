import { useEffect, useState } from "react";
import { getUser } from "../../services/userService.js";
import { getPlantInfo, updatePlant } from "../../services/plantService.js";
import { useNavigate, useParams } from "react-router-dom";
import { getAllRooms } from "../../services/roomService.js";

export const PlantForm = ({ currentUser }) => {
  const { plantId } = useParams();
  const [rooms, setRooms] = useState([]);

  const [selectedRoom, setSelectedRoom] = useState("");
  const [currentPlantInfo, setCurrentPlantInfo] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    getPlantInfo(plantId).then((currentPlantInfo) => {
      if (
        currentPlantInfo &&
        currentPlantInfo.room &&
        currentPlantInfo.room.roooms
      ) {
        setSelectedRoom(currentPlantInfo.room.roomName);
        setCurrentPlantInfo(currentPlantInfo);
      }
    });
  }, [plantId, currentUser]);

  useEffect(() => {
    getAllRooms().then(setRooms);
  }, []);

  const handleRoomChange = (event) => {
    const stateCopy = [...rooms];
    stateCopy[event.target.name] = event.target.value;
    setSelectedRoom(stateCopy);
  };

  const handleSave = (event) => {
    event.preventDefault();

    const editedPlant = {
      id: plantId,
      userId: currentUser.id,
      roomId: selectedRoom,
      type: currentPlantInfo.type,
      waterLevel: currentPlantInfo.waterLevel,
      lightNeeded: currentPlantInfo.selectedSunNeeded,
      datePlanted: currentPlantInfo.datePlanted,
    };

    updatePlant(editedPlant).then(() => {
      navigate(`/profile`);
    });
  };

  return (
    <form className="edit" onSubmit={handleSave}>
      <h2>Edit Plant</h2>
      <fieldset>
        <div className="form-group">
          <label>Room:</label>
          <select
            className="form-control"
            value={selectedRoom}
            onChange={handleRoomChange}
          >
            <option value="">Select Room</option>
            {rooms.map((room) => (
              <option key={room.id} value={room}>
                {room.roomName}
              </option>
            ))}
          </select>
        </div>
      </fieldset>

      <div className="form-group">
        <button className="form-btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </form>
  );
};
