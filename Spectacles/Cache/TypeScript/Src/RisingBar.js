//@input SceneObject Box // Assign the "Box" object in the Inspector
//@input float riseSpeed = 5.0 // Set the constant speed for the box's rise
//@input float initialTarget = 10.0 // Starting height of the box
//@input float levelIncrement = 10.0 // How much higher each level goes

var currentPosition = script.getTransform().getWorldPosition();
currentPosition.y = script.initialTarget;
script.getTransform().setWorldPosition(currentPosition);
    
// var isRising = true; // Flag to control if the box is moving up

// // Function to start moving the box upwards
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

// Update function to move the box upwards at each frame
// script.createEvent("UpdateEvent").bind(function() {
//     // if (isRising) {
//         // var currentPosition = script.Box.getTransform().getWorldPosition();

//         currentPosition = script.getTransform().getWorldPosition();
    
//         // Check if the box has reached or passed the current target height
//         if (currentPosition.y >= targetHeight) {
//             print("Level up");
//             levelUp(); // Set the target for the next level

//         }
//         // Update the box's position
//         script.Box.getTransform().setWorldPosition(currentPosition);
//     //  }
// });

// Initialize and start rising to the first target height
script.createEvent("OnStartEvent").bind(startRising);
