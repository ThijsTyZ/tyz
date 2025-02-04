import { type ReactElement } from 'react';
import { theme } from '@/theme';

export type LogoProps = {
  width?: number;
  height?: number;
};

export function Logo({
  width = 180,
  height = width * (2 / 3),
}: LogoProps): ReactElement {
  const { colors } = theme;

  // TODO: support dark mode
  const textColor = colors.black;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`60 50 ${width} ${height + 20}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
    >
      <title>TYZ</title>
      <path
        d="M50 119.695H91.46C96.98 119.695 101.46 124.175 101.46 129.695V136.765H84.13V185.095H66.98V136.765H55C52.24 136.765 50 134.525 50 131.765V119.695Z"
        fill={textColor}
      />
      <path
        d="M158.25 161.055V185.085H146.27C143.51 185.085 141.27 182.845 141.27 180.085V161.055L117.41 119.785H131.4C134.98 119.785 138.28 121.695 140.07 124.795L149.72 141.555L162.35 119.785H182.12L158.26 161.055H158.25Z"
        fill={textColor}
      />
      <path
        d="M225.78 167.935H241.03C246.53 167.935 251.03 172.435 251.03 177.935V185.085H196.08L223.86 137.015H202.74C199.98 137.015 197.74 134.775 197.74 132.015V119.775H253.56L225.78 167.925V167.935Z"
        fill={textColor}
      />
      <path
        d="M169.92 60.8154L165.11 56.0054L157.67 63.4454L158.08 63.8554C156.47 63.8754 154.87 64.4954 153.65 65.7254L148.35 71.0254L135.8 83.5754C131.6 87.7754 131.6 94.5954 135.8 98.7954C139.33 102.325 145.05 102.325 148.58 98.7954L162.67 84.7054C167.51 79.8654 167.88 72.2454 163.78 66.9754L169.94 60.8154H169.92Z"
        fill="url(#gradientOrange)"
      />
      <path
        d="M193.38 61.2154H161.03L166.12 56.3854L191.08 58.6954C192.38 58.8154 193.38 59.9054 193.38 61.2154Z"
        fill={colors.darkGray}
      />
      <path
        d="M156.94 68.5254L155.01 67.0254L168.51 56.5654C163.33 49.8854 153.73 48.6754 147.05 53.8454C142.08 57.6954 140.14 63.9954 141.6 69.7154L148.63 64.4154C149.52 63.7454 150.78 63.9254 151.45 64.8154C152.12 65.7054 151.94 66.9654 151.05 67.6454L134.51 80.1054L132.62 82.6054C125.82 91.5954 127.49 104.375 136.37 111.315L158.56 81.8654C161.79 77.7254 161.06 71.7554 156.92 68.5254H156.94ZM157.73 57.5654C158.62 56.8954 159.88 57.0754 160.56 57.9654C161.23 58.8554 161.05 60.1154 160.16 60.7854C159.27 61.4554 158 61.2754 157.33 60.3854C156.66 59.4954 156.84 58.2254 157.73 57.5554V57.5654Z"
        fill="url(#gradientBlue)"
      />
      <defs>
        <linearGradient
          id="gradientOrange"
          x1="148.1"
          y1="87.9654"
          x2="156.68"
          y2="61.9754"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={colors.orangeEnd} />
          <stop offset="1" stopColor={colors.orangeStart} />
        </linearGradient>
        <linearGradient
          id="gradientBlue"
          x1="160.35"
          y1="53.3054"
          x2="133.86"
          y2="100.495"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={colors.blueStart} />
          <stop offset="1" stopColor={colors.blueEnd} />
        </linearGradient>
      </defs>
    </svg>
  );
}
