import React, { type JSX } from 'react';

export function StarIcon(): JSX.Element {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20">
      <path
        d="M10 14.2L5 17l1-5.6-4-4 5.5-.7 2.5-5 2.5 5 5.6.8-4 4 .9 5.5z"
        stroke="currentColor"
        fill="none"
        fillRule="evenodd"
        strokeLinejoin="round"
      />
    </svg>
  );
}
