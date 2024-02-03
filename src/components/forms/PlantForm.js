import { useEffect, useState } from "react";
import { getUser } from "../../services/userService.js";
import { getPlantInfo, updatePlant } from "../../services/plantService.js";
import { useNavigate, useParams } from "react-router-dom";

export const PlantForm = ({ currentUser }) => {
  const { plantId } = useParams();
  // Change all 3 to set states
  const [rooms, setRooms] = useState("");
  const [waterLevels, setWaterLevels] = useState("");
  const [lightNeeded, setLightNeeded] = useState("");

  const [selectedRoom, setSelectedRoom] = useState("");
  const [selectedWaterLevel, setSelectedWaterLevel] = useState("");
  const [selectedSunNeeded, setSelectedSunNeeded] = useState("");
  const [currentPlantInfo, setCurrentPlantInfo] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    getPlantInfo(plantId).then((plantInfo) => {
      setCurrentPlantInfo(plantInfo);
      setSelectedRoom(plantInfo.room.id); // returns undefined and when commented out undefined cascades down the list
      setSelectedWaterLevel(plantInfo.waterLevel);
      setSelectedSunNeeded(plantInfo.lightNeeded);
    });
  }, [plantId, currentUser]);

  // ^ This whole useEffect is greyed out in dev tools

  const handleRoomChange = (event) => {
    setSelectedRoom(event.target.value);
  };

  const handleWaterLevelChange = (event) => {
    setSelectedWaterLevel(event.target.value);
  };

  const handleSunNeededChange = (event) => {
    setSelectedSunNeeded(event.target.value);
  };

  const handleSave = (event) => {
    event.preventDefault();

    const editedPlant = {
      id: plantId,
      userId: currentUser.id,
      roomId: selectedRoom,
      type: currentPlantInfo.type,
      waterLevel: selectedWaterLevel,
      lightNeeded: selectedSunNeeded,
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
              <option key={room} value={room}>
                {room}
              </option>
            ))}
          </select>
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label>Watering Levels:</label>
          <select
            className="form-control"
            value={selectedWaterLevel}
            onChange={handleWaterLevelChange}
          >
            <option value="">Select Water Level</option>
            {waterLevels.map((waterLevel) => (
              <option key={waterLevel} value={waterLevel}>
                {waterLevel}
              </option>
            ))}
          </select>
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label>Sunlight Needed:</label>
          <select
            className="form-control"
            value={selectedSunNeeded}
            onChange={handleSunNeededChange}
          >
            <option value="">Select Sunlight Needed</option>
            {lightNeeded.map((lightNeeded) => (
              <option key={lightNeeded} value={lightNeeded}>
                {lightNeeded}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <button className="form-btn" onClick={handleSave}>
            Save
          </button>
        </div>
      </fieldset>
    </form>
  );
};
