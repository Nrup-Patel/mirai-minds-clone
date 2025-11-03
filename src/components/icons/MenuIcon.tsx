"use client";

export default function MenuIcon({
  size = 26,
  color = "#BC5A1B",
  isClose = false,
}: {
  size?: number;
  color?: string;
  isClose?: boolean;
}) {
  return isClose ? (
    // Close icon (X)
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 6L18 18M6 18L18 6"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  ) : (
    // Menu (hamburger) icon
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 6h18M3 12h18M3 18h18"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
