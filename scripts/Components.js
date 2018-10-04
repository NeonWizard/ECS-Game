// -- Appearance
ECS.Components.Appearance = function ComponentAppearance(params) {
	// Appearance specifies data for color and size
	params = params || {};

	this.colors = params.colors || {
		r: Math.random() * 255 | 0, // '| 0' casts to int (somehow?)
		g: Math.random() * 255 | 0,
		b: Math.random() * 255 | 0
	};

	this.size = params.size || (1 + (Math.random() * 30 | 0));

	return this;
};
ECS.Components.Appearance.prototype.name = 'appearance';

// -- Position
ECS.Components.Position = function ComponentPosition(params) {
	params = params || {};

	this.x = params.x || 20 + (Math.random() * (ECS.$canvas.width - 20) | 0);
	this.y = params.y || 20 + (Math.random() * (ECS.$canvas.height - 20) | 0);

	return this;
}
ECS.Components.Position.prototype.name = 'position';

// -- Health
ECS.Components.Health = function ComponentHealth(value) {
	this.value = value || 20;

	return this;
}
ECS.Components.Health.prototype.name = 'health';

// -- PlayerControlled
ECS.Components.PlayerControlled = function ComponentPlayerControlled(params) {
	this.pc = true;

	return this;
}
ECS.Components.PlayerControlled.prototype.name = 'playerControlled';

// -- Collision
ECS.Components.Collision = function ComponentCollision(params) {
	this.collides = true;

	return this;
}
ECS.Components.Collision.prototype.name = 'collision';
