// //@input SceneObject Box // Assign the "Box" object in the Inspector
// //@input float riseSpeed = 5.0 // Set the constant speed for the box's rise

// var isRising = true; // Flag to control if the box is moving up
// var targetHeight = 100; // Desired Y-position height where the box should stop

// // Function to start the movement
// function startRising() {
//     isRising = true;
// }

// // Update function to move the box upwards
// script.createEvent("UpdateEvent").bind(function() {
//     if (isRising) {
//         var currentPosition = script.Box.getTransform().getWorldPosition();
        
//         // Move the box upwards at a constant speed
//         currentPosition.y += script.riseSpeed * getDeltaTime();

//         // Check if the box has reached or passed the target height
//         if (currentPosition.y >= targetHeight) {
//             currentPosition.y = targetHeight; // Set the box exactly at the target height
//             isRising = false; // Stop further upward movement
//         }
        
//         // Update the box's position
//         script.Box.getTransform().setWorldPosition(currentPosition);
//     }
// });

// // Initialize and start rising
// startRising();
//@input SceneObject Box // Assign the "Box" object in the Inspector
//@input float riseSpeed = 5.0 // Set the constant speed for the box's rise
//@input float initialHeight = 0.0 // Starting height of the box
//@input float levelIncrement = 50.0 // How much higher each level goes

var targetHeight = script.initialHeight; // Starting target height
var isRising = true; // Flag to control if the box is moving up

// Function to start moving the box upwards
function startRising() {
    isRising = true;
}

// Function to set the next level's target height
function levelUp() {
    targetHeight += script.levelIncrement; // Increase target height for the next level
    isRising = true; // Restart the upward movement
    print("Level up %d", targetHeight);

}

// Update function to move the box upwards at each frame
script.createEvent("UpdateEvent").bind(function() {
    // if (isRising) {
        var currentPosition = script.Box.getTransform().getWorldPosition();
        
        // // Move the box upwards at a constant speed
        currentPosition.y += 2 * script.riseSpeed * getDeltaTime();

        // Check if the box has reached or passed the current target height
        if (!isRising) {
            currentPosition.y = targetHeight; // Set the box exactly at the target height
            // isRising = false; // Stop further upward movement
            print("Level up");
            levelUp(); // Set the target for the next level
            

        }
        // Update the box's position
        script.Box.getTransform().setWorldPosition(currentPosition);
    //  }
});

// Initialize and start rising to the first target height
script.createEvent("OnStartEvent").bind(startRising);
