import { useState } from "react";
import { Orb } from "../core/Orb";
import { Badge } from "../display/Badge";
import { Progress } from "../display/Progress";
import { IconBtn } from "../controls/Button";

export interface MediaPlayerProps {
  track?: string;
  artist?: string;
  at?: number;
  defaultPlaying?: boolean;
}

export function MediaPlayer({ track = "Lagoon Drift", artist = "The Aero Collective", at = 42, defaultPlaying = true }: MediaPlayerProps) {
  const [playing, setPlaying] = useState(defaultPlaying);
  return (
    <div className="glass glass-static" style={{ padding: 20, display: "grid", gap: 14 }}>
      <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
        <Orb tint="cyan" size={56} glyph="♪" />
        <div style={{ flex: 1 }}>
          <div className="aero-text-shadow" style={{ fontSize: 15, fontWeight: 600 }}>
            {track}
          </div>
          <div className="aero-text-shadow" style={{ opacity: 0.75, fontSize: 12.5 }}>
            {artist}
          </div>
        </div>
        <Badge tone="accent" dot>
          Live
        </Badge>
      </div>
      <Progress value={at} />
      <div style={{ display: "flex", gap: 10, alignItems: "center", justifyContent: "center" }}>
        <IconBtn title="shuffle" style={{ width: 34, height: 34, fontSize: 13 }}>
          ⤮
        </IconBtn>
        <IconBtn title="prev" style={{ width: 38, height: 38 }}>
          ⏮
        </IconBtn>
        <IconBtn variant="primary" title="play" style={{ width: 50, height: 50, fontSize: 18 }} onClick={() => setPlaying((p) => !p)}>
          {playing ? "⏸" : "▶"}
        </IconBtn>
        <IconBtn title="next" style={{ width: 38, height: 38 }}>
          ⏭
        </IconBtn>
        <IconBtn title="repeat" style={{ width: 34, height: 34, fontSize: 13 }}>
          ⟳
        </IconBtn>
      </div>
    </div>
  );
}
