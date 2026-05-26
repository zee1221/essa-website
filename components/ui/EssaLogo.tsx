interface EssaLogoProps {
  size?: number;
  variant?: "default" | "white" | "icon";
}

export function EssaLogo({ size = 40, variant = "default" }: EssaLogoProps) {
  const green = variant === "white" ? "#fff" : "#078930";
  const yellow = variant === "white" ? "#ccc" : "#FCDD09";
  const red = variant === "white" ? "#ddd" : "#DA121A";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="ESSA Logo"
    >
      {/* Outer circle */}
      <circle cx="50" cy="50" r="48" stroke={green} strokeWidth="3" fill="none" />

      {/* Inner ring with Ethiopian tri-color */}
      <circle cx="50" cy="50" r="42" fill="#111" />

      {/* Ethiopian flag arc segments */}
      <path
        d="M50 8 A42 42 0 0 1 50 92"
        stroke={green}
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
        opacity="0.6"
      />

      {/* Ethiopian star (Solomon's star / Pentagram simplified as 5-pointed star) */}
      <polygon
        points="50,22 54,37 70,37 57,46 62,61 50,52 38,61 43,46 30,37 46,37"
        fill={yellow}
        opacity="0.9"
      />

      {/* Football in center */}
      <circle cx="50" cy="50" r="13" fill="white" />
      {/* Football pentagons */}
      <polygon
        points="50,40 55,44 53,50 47,50 45,44"
        fill="#222"
      />
      <polygon
        points="50,60 55,56 59,60 57,66 43,66 41,60 45,56"
        fill="#222"
        transform="rotate(0, 50, 50)"
        opacity="0.6"
      />

      {/* Bottom tri-color band */}
      <path
        d="M20 78 Q50 90 80 78"
        stroke={green}
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M26 82 Q50 94 74 82"
        stroke={yellow}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M33 86 Q50 96 67 86"
        stroke={red}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />

      {/* Motion swoosh */}
      <path
        d="M15 50 Q35 30 65 55"
        stroke={yellow}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}
