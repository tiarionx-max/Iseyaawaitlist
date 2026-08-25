/**
 * Illustrated Ogun landscape standing in for the final commissioned
 * artwork — a warm, layered scene (hills, a winding road, a village, a
 * river, vegetation framing the top corners) built from flat shapes so it
 * degrades gracefully and costs nothing to load. Swap this file's content
 * for a photo/illustration via next/image once the final art lands.
 */
export function HeroMedia() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-cream" aria-hidden="true">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 1024"
        preserveAspectRatio="xMidYMax slice"
        fill="none"
      >
        <rect width="1440" height="1024" fill="#fff3dc" />

        {/* distant hills */}
        <path d="M0 560 C 220 500, 380 610, 620 540 C 860 470, 1040 560, 1440 500 L1440 1024 L0 1024 Z" fill="#dcd2ab" opacity="0.55" />
        <path d="M0 640 C 260 580, 460 660, 720 610 C 980 560, 1180 640, 1440 590 L1440 1024 L0 1024 Z" fill="#c9c295" opacity="0.6" />

        {/* river */}
        <path
          d="M-40 760 C 90 740, 140 800, 90 850 C 40 900, 100 950, 220 940 L 260 1024 L -40 1024 Z"
          fill="#bcd2c7"
          opacity="0.8"
        />

        {/* road */}
        <path
          d="M120 1024 C 260 880, 420 820, 560 800 C 760 772, 900 830, 1080 790 C 1220 760, 1320 780, 1440 740"
          stroke="#e7d9b8"
          strokeWidth="46"
          strokeLinecap="round"
        />
        <path
          d="M120 1024 C 260 880, 420 820, 560 800 C 760 772, 900 830, 1080 790 C 1220 760, 1320 780, 1440 740"
          stroke="#c9b98e"
          strokeWidth="2"
          strokeDasharray="14 14"
        />

        {/* village clusters */}
        <g fill="#013519" opacity="0.85">
          <rect x="760" y="742" width="46" height="34" rx="2" />
          <path d="M756 742 L783 720 L810 742 Z" />
          <rect x="900" y="758" width="38" height="28" rx="2" />
          <path d="M897 758 L919 740 L941 758 Z" />
          <rect x="1180" y="700" width="42" height="32" rx="2" />
          <path d="M1176 700 L1201 680 L1226 700 Z" />
        </g>
        <g fill="#4c6a54" opacity="0.6">
          <rect x="60" y="600" width="70" height="180" rx="3" />
          <rect x="200" y="660" width="50" height="120" rx="3" />
        </g>

        {/* market accent, bottom right */}
        <g opacity="0.9">
          <rect x="1250" y="900" width="60" height="90" rx="4" fill="#013519" />
          <rect x="1320" y="920" width="55" height="70" rx="4" fill="#f5d700" />
          <rect x="1250" y="900" width="130" height="14" rx="4" fill="#ee6c27" />
        </g>

        {/* birds */}
        <g stroke="#5d6a60" strokeWidth="3" strokeLinecap="round" opacity="0.5">
          <path d="M1080 160 q10 -14 20 0 q10 -14 20 0" fill="none" />
          <path d="M1150 210 q8 -11 16 0 q8 -11 16 0" fill="none" />
          <path d="M1000 120 q7 -10 14 0 q7 -10 14 0" fill="none" />
        </g>
      </svg>

      {/* vegetation framing the top corners */}
      <svg className="absolute -left-10 -top-10 h-56 w-72 sm:h-72 sm:w-96" viewBox="0 0 300 220" fill="none" aria-hidden="true">
        <path d="M0 0 C 90 10, 170 40, 230 100 C 190 70, 120 50, 60 55 C 130 70, 190 100, 230 150 C 170 120, 100 100, 40 105 C 100 125, 160 155, 190 200" stroke="#5b4632" strokeWidth="5" fill="none" strokeLinecap="round" />
        <g fill="#2f5d3b">
          <ellipse cx="70" cy="45" rx="26" ry="15" transform="rotate(-25 70 45)" />
          <ellipse cx="120" cy="70" rx="30" ry="16" transform="rotate(-15 120 70)" />
          <ellipse cx="150" cy="115" rx="28" ry="15" transform="rotate(10 150 115)" />
          <ellipse cx="95" cy="95" rx="22" ry="13" transform="rotate(-40 95 95)" />
          <ellipse cx="180" cy="150" rx="26" ry="14" transform="rotate(20 180 150)" />
          <ellipse cx="45" cy="20" rx="20" ry="12" transform="rotate(-10 45 20)" />
        </g>
      </svg>
      <svg className="absolute -right-10 -top-10 h-56 w-72 -scale-x-100 sm:h-72 sm:w-96" viewBox="0 0 300 220" fill="none" aria-hidden="true">
        <path d="M0 0 C 90 10, 170 40, 230 100 C 190 70, 120 50, 60 55 C 130 70, 190 100, 230 150 C 170 120, 100 100, 40 105 C 100 125, 160 155, 190 200" stroke="#5b4632" strokeWidth="5" fill="none" strokeLinecap="round" />
        <g fill="#2f5d3b">
          <ellipse cx="70" cy="45" rx="26" ry="15" transform="rotate(-25 70 45)" />
          <ellipse cx="120" cy="70" rx="30" ry="16" transform="rotate(-15 120 70)" />
          <ellipse cx="150" cy="115" rx="28" ry="15" transform="rotate(10 150 115)" />
          <ellipse cx="95" cy="95" rx="22" ry="13" transform="rotate(-40 95 95)" />
          <ellipse cx="180" cy="150" rx="26" ry="14" transform="rotate(20 180 150)" />
          <ellipse cx="45" cy="20" rx="20" ry="12" transform="rotate(-10 45 20)" />
        </g>
      </svg>
    </div>
  );
}
