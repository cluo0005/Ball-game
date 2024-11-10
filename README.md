# SnapMotion - Spectacles AR Motion Game

A motion-controlled AR game developed for Snap Spectacles using Lens Studio. Players control an ascending tennis ball through various levels by physical movement, interacting with floating platforms and collecting rewards.

In addition to these features, SnapMotion includes customizable and user-adjustable hand-changing AR, allowing players to tailor their experience to their preferences and ensure a more intuitive and personalized gameplay.

## 📱 Project Overview

SnapMotion is an augmented reality game that uses the Snap Spectacles motion tracking capabilities to create an engaging vertical platformer experience. Players guide a tennis ball upward through increasingly challenging levels, with dynamic difficulty scaling and interactive elements.

### Key Features

- Motion-controlled tennis ball movement
- Progressive difficulty scaling
- Dynamic platform generation
- Level-based progression system
- Collision detection system
- Visual feedback and congratulations system
- Adjustable game parameters through Inspector

## 🛠 Project Structure

```
📂 SnapMotion/
├── 📂 Scripts/
│   ├── BallController.js      # Main ball movement and physics
│   ├── LevelManager.js        # Level progression and difficulty
│   └── CollisionSystem.js     # Collision detection handling
├── 📂 Objects/
│   ├── Camera Object
│   ├── Lighting
│   ├── SpectaclesInteractionKit
│   ├── Parent/
│   │   ├── C_tennis_ball_GEO
│   │   └── Box/
│   │       └── BoxCollider
│   └── Congrats/
│       ├── Object
│       └── PinchButtonCapsuleExample/
│           ├── Button Mesh
│           └── Object
└── 📂 Resources/
    ├── Textures/
    └── Materials/
```

## ⚙️ Configuration

### Game Parameters

- **Initial Speed**: 5.0 units/second
- **Level Increment**: 10.0 units
- **Speed Increase**: 0.1 units per level
- **Maximum Levels**: 5

## 🎮 Gameplay Mechanics

1. **Ball Movement**
   - Continuous upward movement
   - Speed increases with each level
   - Motion control sensitivity adjusts dynamically

2. **Level Progression**
   - 5 increasingly challenging levels
   - Target height increases by 10 units per level
   - Speed gradually increases for additional challenge

3. **Reset Mechanics**
   - Ball resets to starting position after reaching target
   - Congratulations display between levels
   - Smooth transition between levels

## 💻 Implementation Details

### Level Management
- Dynamic difficulty adjustment
- Progressive speed increase
- Height-based level completion
- Automatic level transition system

## 🚀 Getting Started

1. **Prerequisites**
   - Lens Studio (Latest Version)
   - Snap Spectacles Device
   - Development Environment Setup

2. **Installation**
   - Clone this repository
   - Open project in Lens Studio
   - Configure device settings
   - Build and deploy

## 📄 License

Copyright (c) 2024 Chun Yan Luo

Distributed under the MIT License. This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

Chun Yan Luo

Project Link: [https://github.com/chloeluo/SnapMotion](https://github.com/cluo0005/Ball-game)

## 🙏 Acknowledgments

- Snap AR Team
- Lens Studio Documentation
- AR Development Community
