# R3f Template

## Setup

To run this project locally, download [Node.js](https://nodejs.org/en/download) and follow these steps:

```
# Install dependencies
npm install

# Run the local server at localhost:5173
npm run dev

# Build for production in the dist/ directory
npm run build
```


project structure:
````
src/
├── Character/
│   └── character.jsx       # Contains the main 3D model with animations
├── overlay/
│   └── overlay.jsx         # Contains an overlay to show information
└── Experience.jsx          # Main scene/canvas with lights and settings
````