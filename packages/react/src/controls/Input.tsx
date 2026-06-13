import type { InputHTMLAttributes, TextareaHTMLAttributes, ReactNode } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
}

export function Input({ invalid, className = "", ...rest }: InputProps) {
  return <input className={`aero-input ${invalid ? "aero-input-invalid" : ""} ${className}`.replace(/\s+/g, " ").trim()} {...rest} />;
}

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function Textarea({ className = "", ...rest }: TextareaProps) {
  return <textarea className={`aero-textarea ${className}`.trim()} {...rest} />;
}

export interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
  kbd?: ReactNode;
}

export function SearchBar({ placeholder = "Search the sky…", kbd = "⌘K", ...rest }: SearchBarProps) {
  return (
    <div className="aero-search">
      <span className="aero-search-icon">⌕</span>
      <Input placeholder={placeholder} {...rest} />
      {kbd && <span className="aero-search-kbd">{kbd}</span>}
    </div>
  );
}

export interface FieldProps {
  label?: ReactNode;
  hint?: ReactNode;
  error?: ReactNode;
  children?: ReactNode;
}

export function Field({ label, hint, error, children }: FieldProps) {
  return (
    <label style={{ display: "grid", gap: 7 }}>
      {label && (
        <span className="aero-text-shadow" style={{ fontSize: 12, fontWeight: 600, color: "var(--t-text)", letterSpacing: "0.02em" }}>
          {label}
        </span>
      )}
      {children}
      {(error || hint) && (
        <span className="aero-text-shadow" style={{ fontSize: 11.5, color: error ? "#fecaca" : "var(--t-text-dim)" }}>
          {error || hint}
        </span>
      )}
    </label>
  );
}
