// start it off screen for non touch devices
var userInputPosition = {
	x: -100,
	y: -100,
	deltaX: false,
	deltaY: false
};

// Setup mouse handling
// --------------------------------------
ECS.$canvas.addEventListener('mousemove', function mouseMove(evt) {
	var rect = ECS.$canvas.getBoundingClientRect();
	userInputPosition.x = evt.clientX - rect.left;
	userInputPosition.y = evt.clientY - rect.top;
	// userInputPosition.touch = false;
}, false);

// Setup the system
// --------------------------------------
ECS.systems.userInput = function systemUserInput(entities) {
	// Here, we've implemented systems as functions which take in an array of
	// entities. An optimization would be to have some layer which only 
	// feeds in relevant entities to the system, but for demo purposes we'll
	// assume all entities are passed in and iterate over them.
	var curEntity; 

	// iterate over all entities
	for (var entityId in entities) {
		curEntity = entities[entityId];

		// Only run logic if entity has relevant components
		if ( curEntity.components.playerControlled ) {
			// We can change component data based on input, which cause other
			// systems (e.g., rendering) to be affected
			curEntity.components.position.x = userInputPosition.x; 
			curEntity.components.position.y = userInputPosition.y;
		}
	}
};
