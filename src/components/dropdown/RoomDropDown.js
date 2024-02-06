import { useEffect, useState } from "react";
import { getAllRooms } from "../../services/roomService.js";

export const RoomDropDown = ({ onSelectRoom }) => {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    getAllRooms().then((allRooms) => {
      setRooms(allRooms);
    });
  }, []);

  const handleRoomChange = (event) => {
    const selectedRoomId = parseInt(event.target.value);
    onSelectRoom(selectedRoomId);
  };

  return (
    <div className="form-group">
      <label>Select Room</label>
      <select className="form-control" onChange={handleRoomChange}>
        <option value="0">ChooseRoom</option>
        {rooms.map((room) => (
          <option value={room.id} key={room.id}>
            {room.roomName}
          </option>
        ))}
      </select>
    </div>
  );
};
