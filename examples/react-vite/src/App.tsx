import { useState } from "react";
import {
  AeroThemeProvider,
  AeroSky,
  Navbar,
  ThemeSwitcher,
  Card,
  Stat,
  Btn,
  Toggle,
  Slider,
  Select,
  Badge,
  Progress,
  Tabs,
  Alert,
  Toast,
  MediaPlayer,
  Stack,
  SectionLabel,
  type AeroThemeSetting,
} from "@3ba/react";

export function App() {
  const [theme, setTheme] = useState<AeroThemeSetting>("morning");
  const [bubbles, setBubbles] = useState(true);
  const [volume, setVolume] = useState(64);

  return (
    <AeroThemeProvider theme={theme} bubbles={bubbles}>
      <AeroSky style={{ minHeight: "100vh", padding: "28px 22px", boxSizing: "border-box" }}>
        <div style={{ maxWidth: 980, margin: "0 auto", display: "grid", gap: 22 }}>
          <Navbar />

          <Stack row wrap justify="space-between" align="center" gap={16}>
            <div>
              <SectionLabel>Frutiger Aero · React</SectionLabel>
              <h1 className="aero-text-shadow" style={{ margin: "6px 0 0", fontWeight: 300, fontSize: 34 }}>
                A sky for every hour
              </h1>
            </div>
            <ThemeSwitcher value={theme} onChange={setTheme} />
          </Stack>

          <Stack row wrap gap={16}>
            <Stat label="Visitors" value="12.4k" delta="8%" glyph="☀" />
            <Stat label="Signups" value="1,208" delta="3%" glyph="✦" />
            <Stat label="Bounce" value="22%" delta="1%" up={false} glyph="↯" />
          </Stack>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16 }}>
            <Card title="Controls" subtitle="Everything recolors with the theme">
              <Stack gap={16}>
                <Toggle label="Drifting bubbles" on={bubbles} onChange={setBubbles} />
                <Slider label="Volume" value={volume} onChange={setVolume} showValue unit="%" />
                <Select options={["Lagoon", "Meadow", "Aurora", "Twilight"]} defaultValue="Lagoon" />
                <Stack row gap={10} wrap>
                  <Btn variant="primary">Primary</Btn>
                  <Btn variant="positive">Positive</Btn>
                  <Btn variant="ghost">Ghost</Btn>
                  <Badge tone="accent" dot>
                    Live
                  </Badge>
                </Stack>
              </Stack>
            </Card>

            <Card title="Status" subtitle="Feedback surfaces">
              <Stack gap={14}>
                <Tabs items={["Overview", "Activity", "Alerts"]} />
                <Progress value={volume} label="Sync" />
                <Alert tone="success" title="All systems nominal">
                  The sky is clear and the bubbles are rising.
                </Alert>
                <Toast title="Saved to the cloud" body="Your changes are floating safely." action="Undo" />
              </Stack>
            </Card>
          </div>

          <MediaPlayer at={volume} />
        </div>
      </AeroSky>
    </AeroThemeProvider>
  );
}
