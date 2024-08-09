# Snowfy 🌨️

**Snowfy** is a library for creating customizable snow effects for React projects.

## Installation

```bash
pnpm install snowfy
# or
npm install snowfy
# or
yarn add snowfy
```

### Usage

#### React

To use the snow effect in a React project, you can import the component and use it directly in your React components.

Example

1. Import the Components

```tsx
import { Snowfy } from 'snowfy'
```

2. Use the Component in Your Project

```tsx
import { Snowfy } from 'snowfy'

const App = () => {
  return (
    <div>
      <Snowfy
        intensity={100}
        color='white'
        size={5}
        speed={1}
        wind={1}
        zigzagPercentage={25}
        zIndex={-1}
      />
    </div>
  )
}

export default App
```

### Configuration

#### Component Properties

| **Props**        | **Type** | **Default** | **Description **                                                            |
| ---------------- | -------- | ----------- | --------------------------------------------------------------------------- |
| className        | String   | `''`        | Optional CSS class for additional styling of the component.                 |
| intensity        | Number   | `50`        | Number of snowflakes to be displayed.                                       |
| color            | String   | `white`     | Color of the snowflakes.                                                    |
| zIndex           | Number   | `0`         | `z-index` value to control the stacking order of the snowflakes.            |
| size             | Number   | `5`         | Size of the snowflakes.                                                     |
| speed            | Number   | `1`         | Falling speed of the snowflakes.                                            |
| wind             | Number   | `0`         | Intensity of the wind, affecting the horizontal movement of the snowflakes. |
| zigzagPercentage | Number   | `20`        | Percentage of snowflakes that move in a zigzag pattern (0 to 100).          |

### Configuration Example

```tsx
<Snowfy
  intensity={100}
  color='white'
  size={5}
  speed={1}
  wind={1}
  zigzagPercentage={25}
  zIndex={-1}
/>
```

### Contributing

If you want to contribute to the project, feel free to open issues and pull requests. Please follow the contribution guidelines and maintain code quality.

### License

This project is licensed under the MIT License. See the LICENSE file for more details.

### Contact

If you have any questions or suggestions, please contact us at: thiagotnon@gmail.com.

Thank you for using [snowfy](https://github.com/thiagotnon/snowfy.git)! I hope you enjoy the snow effect in your projects.

Made with 💜 by [thiagotnon](https://github.com/thiagotnon).
