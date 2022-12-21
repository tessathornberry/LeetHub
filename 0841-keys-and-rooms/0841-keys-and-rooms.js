/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
  var canVisitAllRooms = function(rooms) {
  var canOpen = false;
  var objectOfOpenedRooms = {};
  var currentKeys = rooms[0]; //an array
  var nextKeys = [];

  var openNextDoor = (coordinates) => {
    for (var j = 0; j < coordinates.length; j++) {
      if (!objectOfOpenedRooms[coordinates[j]] && coordinates[j] !== 0) {
        objectOfOpenedRooms[coordinates[j]] = true;
        openNextDoor(rooms[coordinates[j]]);
      }
    }
  }
  openNextDoor(currentKeys);
  var checkKeys = Object.values(objectOfOpenedRooms);
  if (checkKeys.length === rooms.length - 1) {
    canOpen = true;
  }
  return canOpen;
};