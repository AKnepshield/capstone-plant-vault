import { useEffect, useState } from "react";
import { getPlantInfo, updatePlant } from "../../services/plantService.js";
import { useNavigate, useParams } from "react-router-dom";
import { getAllRooms } from "../../services/roomService.js";

export const EditForm = ({ currentUser }) => {
  const { plantId } = useParams();
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(0);
  const [currentPlantInfo, setCurrentPlantInfo] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    getPlantInfo(plantId).then(setCurrentPlantInfo);
  }, []);

  useEffect(() => {
    if (currentPlantInfo.id) {
      setSelectedRoom(currentPlantInfo.roomId);
    }
  }, [currentPlantInfo]);

  useEffect(() => {
    getAllRooms().then((allRooms) => {
      const filteredRooms = allRooms.filter(
        (room) => room.lightLevel === currentPlantInfo.lightNeeded
      );
      setRooms(filteredRooms);
    });
  }, [currentPlantInfo.lightNeeded]);

  useEffect(() => {
    getAllRooms().then(setRooms);
  }, []);

  const handleRoomChange = (event) => {
    const selectedRoomId = parseInt(event.target.value);
    setSelectedRoom(selectedRoomId);
  };

  const handleSave = (event) => {
    event.preventDefault();

    const editedPlant = {
      id: plantId,
      userId: currentUser.id,
      roomId: selectedRoom,
      type: currentPlantInfo.type,
      waterLevel: currentPlantInfo.waterLevel,
      lightNeeded: currentPlantInfo.lightNeeded,
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

      <div className="form-group">
        <button
          className="form-btn"
          class="btn btn-outline-success"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </form>
  );
};
