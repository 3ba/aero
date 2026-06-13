import type { ReactNode } from "react";
import { Avatar } from "../display/Avatar";

export interface ChatMessage {
  from: string;
  text: ReactNode;
  me?: boolean;
}

export interface ChatThreadProps {
  messages: ChatMessage[];
}

export function ChatThread({ messages }: ChatThreadProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {messages.map((m, i) => (
        <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-end", flexDirection: m.me ? "row-reverse" : "row" }}>
          <Avatar name={m.from} size={28} />
          <div className={`aero-chat-bubble ${m.me ? "aero-chat-me" : "aero-chat-them"}`}>{m.text}</div>
        </div>
      ))}
    </div>
  );
}
