import moveEast from './move-east';
import moveNorth from './move-north';
import moveWest from './move-west';
import openRollerDoor from './open-roller-door';
import ringDoorbell from './ring-doorbell';
import wait from './wait';

// @TODO:
// knock (both roller door and glass door versions)

export default [openRollerDoor, moveEast, moveWest, moveNorth, wait, ringDoorbell];
