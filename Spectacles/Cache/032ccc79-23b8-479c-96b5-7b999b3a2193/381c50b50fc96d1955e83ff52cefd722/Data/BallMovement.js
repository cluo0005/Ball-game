// //@input SceneObject Box // Assign the "Box" object in the Inspector (make sure it matches the exact name)
// //@input float riseSpeed = 0.1 // Set the constant speed for the ball's rise
// var targetHeight; // Variable to store the stopping height
// var isRising = false; // Variable to track if the ball should be moving up

// // Initialize target height based on box position
// function initializeTargetHeight() {
//     if (script.Box
//     ) {  // Check if the Box object is assigned
//         targetHeight = script.Box.getTransform().getWorldPosition().y; // Get the Y position of the Box
//     } else {
//         print("Error: Box object is not assigned.");
//     }
// }

// // Function to start moving the ball upwards
// function startRising() {
//     isRising = true;
// }

// // Update function to move the ball upwards at each frame
// script.createEvent("UpdateEvent").bind(function() {
//     if (isRising) {
//         var currentPosition = script.getTransform().getWorldPosition();
        
//         // Check if the ball has reached the target height
//         if (currentPosition.y < targetHeight) {
//             // Move the ball upwards at a constant speed
//             currentPosition.y += script.riseSpeed * getDeltaTime();
//             script.getTransform().setWorldPosition(currentPosition);
//         } else {
//             // Stop the upward movement once the target height is reached
//             isRising = false;
//         }
//     }
// });

// // Initialize and start rising
// initializeTargetHeight();
// startRising();



var isRising = false; // Flag to control if the ball is moving up
var currentHeight = 0; // Starting height of the ball, initially 0 or the starting position
var targetHeight = 0; // Target height that the ball is rising to

// Function to update the target height to the Box's current Y position
function updateTargetHeight() {
    if (script.Box) {
        try {
            return script.Box.getTransform().getWorldPosition().y + 1.0; // Adjust the gap as needed
        } catch {
            print("Couldn't get box position")
            return 0
        }
        // Get the Y position of the Box and add a little offset if you want a gap between the ball and the box
        
    } else {
        print("Error: Box object is not assigned.");
        return 0;
    }
}

// Function to start the ball rising
function startRising() {
    targetHeight = updateTargetHeight(); // Get the latest Box height
    isRising = true;
}

// Update function to move the ball upwards at each frame
script.createEvent("UpdateEvent").bind(function() {
    if (isRising) {
        var currentPosition = script.getTransform().getWorldPosition();
        
        // Move the ball upwards at a constant speed
        if (currentPosition.y < targetHeight) {
            currentPosition.y += script.riseSpeed * getDeltaTime();
            script.getTransform().setWorldPosition(currentPosition);
        } else {
            // When the ball reaches the target height, set the current position to the target
            currentPosition.y = targetHeight;
            script.getTransform().setWorldPosition(currentPosition);
            // Now set the current position as the new starting point for the next rise
            currentHeight = targetHeight;
            isRising = false; // Stop rising
            print("reached level from ball")
        }
    }
});

// Start rising each time
script.createEvent("OnStartEvent").bind(startRising);

// Optional: Restart rising each time the box moves by binding this to a trigger event or condition.
