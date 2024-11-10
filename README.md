SnapMotion
SnapMotion is a AR app focused on rehabilitation exercises. Initially designed to help patients with arm-raising exercises, SnapMotion will later expand to include other rehabilitation-focused actions.

Features
Raising Hands Exercise: Supports arm-raising exercises in AR and expands rehabilitative functionality in future updating.

Table of Contents
Requirements
Installation
Packages 
Assets
AI Tools Used
Usage
Contributing
License

Requirements
Lens Studio (latest version): SnapMotion is built with Lens Studio, so ensure you have the latest version installed.
Snap-compatible VR hardware: A VR headset compatible with Snap AR.
Installation
Clone the repository: git clone https://github.com/YourUsername/SnapMotion.git
Open in Lens Studio: Open the project files in Lens Studio.
Set up the environment: Assign any necessary SceneObjects and adjust the settings as per your needs.
Packages and Dependencies
The following packages and scripts are used in SnapMotion:

Lens Studio Core Packages:

Physics Engine: Used for simulating gravity in exercises where objects, like a ball, fall into the user's hands.
Animation Package: To handle smooth transitions and animations for hand movements and object interactions.
SnapML Models (for future integration):

Pose Estimation Models: Models for tracking arm and hand movements.
Gesture Recognition Models: Planned for recognizing specific finger movements like pinching and pushing.
Assets
3D Models:
Ball Model: Used in the initial arm-raising exercises.
Hand and Arm Models: Essential for the VR experience of raising hands and interacting with objects.
Textures:
Textures for background and object rendering, enhancing the immersive experience.
UI Components:
In-game guidance UI for each exercise.
Feedback UI, such as progress tracking for each motion exercise.
AI Tools Used
SnapMotion utilizes the following AI tools to support and enhance the rehabilitation exercises:

Lens Studio’s SnapML for pose tracking and gesture recognition (to be implemented in future updates).
OpenAI GPT-4 (used during development) for generating code ideas, problem-solving, and drafting documentation.
Usage
Starting Exercises: Launch SnapMotion in Lens Studio and select the exercise from the main menu.
Performing Movements: Follow on-screen instructions to raise hands, pinch fingers, or push as per the selected exercise.
Feedback and Progress: The app will provide feedback on each movement to help improve rehabilitation effectiveness.
Contributing
Contributions are welcome! Feel free to submit issues, suggestions, or pull requests to enhance SnapMotion's functionality.

License
This project is licensed under the MIT License - see the LICENSE file for details.
