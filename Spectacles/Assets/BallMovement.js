//@input SceneObject Box // Assign the "Box" object in the Inspector (make sure it matches the exact name)
//@input float riseSpeed = 1; // Set the constant speed for the ball's rise

var isRising = true; // lag to control if the ball is moving up
var targetHeight = 10; // Target height that the ball is rising to


// Function to update the target height to the Box's current Y position
function updateBarHeight() {
    return script.Box.getTransform().getWorldPosition().y + 5.0; // Adjust the height increment as needed
}

// Function to start the ball rising
function startNextLevel() {
    //var newTargetHeight = script.Box.getTransform().getWorldPosition().y + 10.0; // Get the latest Box height
    targetHeight += 5;
    
    var targetPosition = script.Box.getTransform().getWorldPosition();
    targetPosition.y = targetHeight;
    script.Box.getTransform().setWorldPosition(targetPosition);
    isRising = true;

    // Increment the level and adjust the speed
    level++;
    script.riseSpeed += 0.1; // Adjust the speed increment as needed

}

// Update function to move the ball upwards at each frame
var level = 0; // Initialize the level number

script.createEvent("UpdateEvent").bind(function() {
    // Part 1
    // while level < 5
    //  same movement as before in the if statement
    //  in the else,
    //      reset ball position, adjust target height and set target height, 
    //      and add 1 to level, and adjust speed,
    //      script.Box.congratulation = set this to inactive

    if (isRising) {
        var currentPosition = script.getTransform().getWorldPosition();
        print("Current position: " + currentPosition.y);
        print("Target height: " + targetHeight);

        // Move the ball upwards at a constant speed
        if (currentPosition.y < targetHeight) {
            currentPosition.y += script.riseSpeed * getDeltaTime();
            script.getTransform().setWorldPosition(currentPosition);
            print("Ball going up");
        } else {
            isRising = false; // Stop rising
            print("Reached level " + level)
        }
    } else {
        // Start the ball rising again
        startNextLevel();
        // Reset the ball's position to the starting point
        var resetPosition = script.getTransform().getWorldPosition();
        resetPosition.y = -10.0;
        script.getTransform().setWorldPosition(resetPosition);
        
    }

    // Part 2
    // while level < 5
    //  if start level boolean is true
    //      start the level
    //      move the ball up like before until it reaches the target height
    //  if intermission phase
    //      reset ball position, adjust target height and set target height, 
    //      and add 1 to level, and adjust speed,
    //      script.Box.congratulation = set this to inactive
    //      allow user to move the height of the box
    //      look for "start" action
    //  if start action is detected
    //      turn start level boolean to true

});
