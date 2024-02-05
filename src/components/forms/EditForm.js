import { useEffect, useState } from "react";
import {
  getPlantInfo,
  updatePlant,
  deletePlant,
} from "../../services/plantService.js";
import { useNavigate, useParams } from "react-router-dom";
import { getAllRooms } from "../../services/roomService.js";

export const EditForm = ({ currentUser }) => {
  const { plantId } = useParams();
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState("");
  const [currentPlantInfo, setCurrentPlantInfo] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    getPlantInfo(plantId).then(setCurrentPlantInfo);
  }, []);

  useEffect(() => {
    if (currentPlantInfo.id) {
      setSelectedRoom(currentPlantInfo.room.roomName);
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
    const selectedRoomId = event.target.value;
    setSelectedRoom(selectedRoomId);
  };

  const handleSave = (event) => {
    event.preventDefault();

    const editedPlant = {
      id: plantId,
      userId: currentUser.id,
      roomId: selectedRoom.id,
      type: currentPlantInfo.type,
      waterLevel: currentPlantInfo.waterLevel,
      lightNeeded: currentPlantInfo.lightNeeded,
      datePlanted: currentPlantInfo.datePlanted,
    };

    updatePlant(editedPlant).then(() => {
      navigate(`/profile`);
    });
  };

  const handleDelete = () => {
    deletePlant(plantId).then(() => {
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
            <option value="">Choose Room</option>
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
        <button className="form-btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </form>
  );
};
