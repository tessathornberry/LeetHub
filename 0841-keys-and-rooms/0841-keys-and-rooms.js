/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
  var canVisitAllRooms = function(rooms) {
  var canOpen = false;
  var objectOfOpenedRooms = {};
  var nextKeys = [];

  var openNextDoor = (coordinates) => {
    for (var j = 0; j < coordinates.length; j++) {
      if (!objectOfOpenedRooms[coordinates[j]] && coordinates[j] !== 0) {
        objectOfOpenedRooms[coordinates[j]] = true;
        openNextDoor(rooms[coordinates[j]]);
      }
    }
  }
  openNextDoor(rooms[0]);
  var checkKeys = Object.values(objectOfOpenedRooms);
  if (checkKeys.length === rooms.length - 1) {
    canOpen = true;
  }
  return canOpen;
};