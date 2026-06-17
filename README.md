# Frutiger Aero

A glassy, sky-themed component pack inspired by the **Frutiger Aero** aesthetic —
frosted glass, glossy orbs, drifting bubbles and time-of-day skies. Ships for
**React**, **Next.js** and **Vue 3**, fully typed with TypeScript.

> Same look, two runtimes. Every component reads from a shared CSS theme engine,
> so React and Vue render pixel-for-pixel identical surfaces.

## Packages

| Package        | Description                         |
| -------------- | ----------------------------------- |
| `@3ba/styles`  | CSS theme engine + component styles |
| `@3ba/react`   | React components (works in Nextjs)  |
| `@3ba/vue`     | Vue 3 components                    |

The styles package is used for both UI packages, install it once and import
the stylesheet at the root of your app/project.

## Quick start

### React / Next.js

```bash
pnpm add @3ba/react @3ba/styles
```

```tsx
import "@3ba/styles";
import { AeroThemeProvider, AeroSky, Card, Btn } from "@3ba/react";

export default function App() {
  return (
    <AeroThemeProvider theme="morning">
      <AeroSky style={{ minHeight: "100vh", padding: 32 }}>
        <Card title="Hello sky" subtitle="Frutiger Aero, in React">
          Glassy by default.
          <Btn variant="primary" style={{ marginTop: 16 }}>Launch</Btn>
        </Card>
      </AeroSky>
    </AeroThemeProvider>
  );
}
```


### Vue 3

```bash
pnpm add @3ba/vue @3ba/styles
```

```vue
<script setup lang="ts">
import "@3ba/styles";
import { AeroThemeProvider, AeroSky, Card, Btn } from "@3ba/vue";
</script>

<template>
  <AeroThemeProvider theme="morning">
    <AeroSky :style="{ minHeight: '100vh', padding: '32px' }">
      <Card title="Hello sky" subtitle="Frutiger Aero, in Vue">
        Glassy by default.
        <Btn variant="primary" :style="{ marginTop: '16px' }">Launch</Btn>
      </Card>
    </AeroSky>
  </AeroThemeProvider>
</template>
```

## Theming

Five time-based themes: `sunrise`, `morning`, `noon`,
`dusk`, `night`. You can apply `theme` to `AeroThemeProvider` (or any
`AeroSky`), or set `.theme-<name>` class on any ancestor; Or use `resolveAutoTheme()`
to pick a theme from the current clock time.

## Development

This is a pnpm workspace.

```bash
pnpm install
pnpm build        # build every package
pnpm typecheck    # type-check every package
```

Example apps live in [`examples/`](./examples): a Next.js app, a React + Vite
app, and a Vue + Vite app.

## License

MIT