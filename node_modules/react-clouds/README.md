# React Clouds

A customizable React component for creating beautiful, layered clouds. Perfect for creating atmospheric backgrounds and decorative elements in your React applications.

## Installation

```bash
npm install react-clouds
# or
yarn add react-clouds
```

## Features

- Fully customizable cloud appearance (size, color, position)
- Support for single or multiple cloud layers
- Responsive design - automatically adjusts to container width
- TypeScript support
- Lightweight with minimal dependencies
- Smooth shadow-based rendering

## Basic Usage

```jsx
import { Clouds } from 'react-clouds';

const SimpleExample = () => (
  <div style={{ position: 'relative', height: '200px', background: '#ffa6b9' }}>
    <Clouds size={100} color="#ffffff" />
  </div>
);
```

## Advanced Usage - Cloud Layers

```jsx
import { CloudLayers } from 'react-clouds';

const LayeredExample = () => (
  <CloudLayers
    height="24rem"
    backgroundColor="#ffa6b9"
    shadowOpacity={0.1}
    layers={[
      {
        size: 120,
        color: '#ffdbde',
        bottomOffset: 160,
        randomization: {
          xMin: 0.5,
          xMax: 0.7,
          yMin: 0.1,
          yMax: 0.3,
          initialX: 0.4,
        },
      },
      {
        size: 100,
        color: '#ffffff',
        bottomOffset: 0,
        randomization: {
          xMin: 0.4,
          xMax: 0.6,
          yMin: 0.03,
          yMax: 0.2,
          initialX: 0.5,
        },
      },
    ]}
  />
);
```

## API Reference

### Clouds Component Props

| Prop           | Type   | Default   | Description                               |
| -------------- | ------ | --------- | ----------------------------------------- |
| size           | number | 100       | Size of each cloud in pixels              |
| color          | string | '#ffffff' | Color of the clouds                       |
| bottomOffset   | number | 0         | Distance from the bottom of the container |
| xMinMultiplier | number | 0.45      | Minimum multiplier for horizontal spacing |
| xMaxMultiplier | number | 0.6       | Maximum multiplier for horizontal spacing |
| yMinMultiplier | number | 0.05      | Minimum multiplier for vertical variation |
| yMaxMultiplier | number | 0.25      | Maximum multiplier for vertical variation |
| initialXOffset | number | 0.45      | Initial horizontal offset                 |
| className      | string | ''        | Additional CSS classes                    |
| style          | object | {}        | Additional inline styles                  |

### CloudLayers Component Props

| Prop            | Type             | Default   | Description                       |
| --------------- | ---------------- | --------- | --------------------------------- |
| backgroundColor | string           | '#ffa6b9' | Background color of the container |
| height          | string \| number | '24rem'   | Height of the container           |
| shadowOpacity   | number           | 0.1       | Opacity of cloud shadows          |
| layers          | Layer[]          | [...]     | Array of layer configurations     |
| className       | string           | ''        | Additional CSS classes            |
| style           | object           | {}        | Additional inline styles          |

#### Layer Configuration

Each layer in the `layers` array accepts the following properties:

```typescript
interface Layer {
  size: number;
  color: string;
  bottomOffset: number;
  randomization?: {
    xMin?: number;
    xMax?: number;
    yMin?: number;
    yMax?: number;
    initialX?: number;
  };
}
```

## License

MIT © Sahil Tandon
