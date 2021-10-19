import React from 'react';
import './styles.scss';

type ProgressBarProps = {
  now: number;
  max: number;
}
export function ProgressBar({ now, max } : ProgressBarProps) {
  return (
    <div className="progress-bar">
      <span>{now}</span>
      <div className="fill" style={{ width: `${((now * 100) / max)}%` }} />
    </div>
  );
}
