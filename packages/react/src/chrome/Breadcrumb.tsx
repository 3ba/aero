import { Fragment } from "react";

export interface BreadcrumbProps {
  parts: string[];
}

export function Breadcrumb({ parts }: BreadcrumbProps) {
  return (
    <div className="aero-breadcrumb">
      {parts.map((p, i) => {
        const last = i === parts.length - 1;
        return (
          <Fragment key={i}>
            {last ? (
              <span className="aero-breadcrumb-current">{p}</span>
            ) : (
              <a href="#" onClick={(e) => e.preventDefault()}>
                {p}
              </a>
            )}
            {!last && <span className="aero-breadcrumb-sep">›</span>}
          </Fragment>
        );
      })}
    </div>
  );
}
