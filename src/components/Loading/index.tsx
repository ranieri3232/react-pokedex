import React from 'react';
import './styles.scss';

export function Loading() {
  return (
    <div className="lds-ellipsis">
      <div />
      <div />
      <div />
      <div />
    </div>
  );
}
