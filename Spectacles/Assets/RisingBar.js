//@input SceneObject Box // Assign the "Box" object in the Inspector
//@input float riseSpeed = 5.0 // Set the constant speed for the box's rise
//@input float initialTarget = 10.0 // Starting height of the box
//@input float levelIncrement = 10.0 // How much higher each level goes

var currentPosition = script.getTransform().getWorldPosition();
currentPosition.y = script.initialTarget;
script.getTransform().setWorldPosition(currentPosition);
    
// Function to start moving the box upwards
function startRising() {
    isRising = true;
}

// Function to set the next level's target height
function levelUp() {
    currentPosition = script.getTransform().getWorldPosition();
    currentPosition.y += script.levelIncrement;
    script.getTransform().setWorldPosition(currentPosition);

    // isRising = true; // Restart the upward movement
    print("Level up %d", targetHeight);

}

// Initialize and start rising to the first target height
script.createEvent("OnStartEvent").bind(startRising);
