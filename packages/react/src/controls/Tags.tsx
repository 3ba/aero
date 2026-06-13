import { useState } from "react";

export interface TagsProps {
  defaultTags?: string[];
  placeholder?: string;
  onChange?: (tags: string[]) => void;
}

export function Tags({ defaultTags = [], placeholder = "Add tag…", onChange }: TagsProps) {
  const [tags, setTags] = useState<string[]>(defaultTags);
  const [draft, setDraft] = useState("");

  const commit = (next: string[]) => {
    setTags(next);
    onChange?.(next);
  };

  const add = () => {
    const t = draft.trim();
    if (t && !tags.includes(t)) commit([...tags, t]);
    setDraft("");
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center" }}>
      {tags.map((t) => (
        <span key={t} className="aero-tag">
          {t}
          <button className="aero-tag-x" onClick={() => commit(tags.filter((x) => x !== t))}>
            ✕
          </button>
        </span>
      ))}
      <input
        className="aero-input"
        style={{ width: 110, padding: "6px 12px", fontSize: 12 }}
        placeholder={placeholder}
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") add();
        }}
      />
    </div>
  );
}
