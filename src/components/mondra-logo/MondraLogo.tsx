import React from 'react'


interface IMondraLogoProps {
    width?: string
    height?: string
    color?: string
    style?: React.CSSProperties
}

export const MondraLogo: React.FC<IMondraLogoProps> = ({ width = "121", height = "64", color = 'currentColor', style, ...props }) => (
    <svg
        viewBox="0 0 212 44"
        fill={color}
        width={width}
        height={height}
        style={{ ...style }}
        {...(props as any)}
    >
        <g xmlns="http://www.w3.org/2000/svg" transform="matrix(1,0,0,1,-4751.41,-545.584)">
            <g transform="matrix(0.165625,0,0,0.055,4751.41,545.584)">
                <g>
                    <g transform="matrix(4.24615,0,0,12.7867,-59.1199,-235.416)">
                        <path d="M102.35,47C102.35,38.86 107.82,33.91 114.73,33.91C118.73,33.91 122.02,35.28 124.17,38.73C126.17,35.28 129.7,33.91 133.55,33.91C140.45,33.91 145.92,38.91 145.92,47L145.92,64.71C145.92,66.674 144.304,68.29 142.34,68.29C140.376,68.29 138.76,66.674 138.76,64.71L138.76,46.93C138.76,42.63 136.35,40.55 133.22,40.55C130.09,40.55 127.75,42.63 127.75,46.93L127.75,64.71C127.761,66.688 126.148,68.328 124.17,68.35C124.17,68.35 124.17,68.35 124.169,68.35C122.206,68.35 120.589,66.734 120.589,64.77C120.589,64.75 120.59,64.73 120.59,64.71L120.59,46.93C120.59,42.63 118.11,40.55 115.05,40.55C111.99,40.55 109.52,42.63 109.52,46.93L109.52,64.71C109.523,64.773 109.525,64.836 109.525,64.899C109.525,66.869 107.904,68.489 105.935,68.489C103.966,68.489 102.345,66.869 102.345,64.899C102.345,64.836 102.347,64.773 102.35,64.71L102.35,47Z" />
                    </g>
                    <g transform="matrix(4.24615,0,0,12.7867,-59.1199,-235.416)">
                        <path d="M149.63,51.16C149.63,41.691 157.421,33.9 166.89,33.9C176.359,33.9 184.15,41.691 184.15,51.16C184.15,60.629 176.359,68.42 166.89,68.42C157.421,68.42 149.63,60.629 149.63,51.16ZM176.92,51.16C176.92,45.3 172.62,40.55 166.92,40.55C161.22,40.55 156.92,45.3 156.92,51.16C156.92,57.02 161.22,61.78 166.92,61.78C172.62,61.78 176.92,57 176.92,51.16Z" />
                    </g>
                    <g transform="matrix(4.24615,0,0,12.7867,-59.1199,-235.416)">
                        <path d="M187.86,49.08C187.86,39.77 194.31,33.9 202.51,33.9C210.71,33.9 217.17,39.77 217.17,49.08L217.17,64.71C217.181,66.692 215.562,68.334 213.58,68.35C213.58,68.35 213.58,68.35 213.579,68.35C211.616,68.35 209.999,66.734 209.999,64.77C209.999,64.75 210,64.73 210,64.71L210,48.82C210,43.41 206.68,40.55 202.51,40.55C198.34,40.55 195,43.41 195,48.82L195,64.71C195,66.674 193.384,68.29 191.42,68.29C189.456,68.29 187.84,66.674 187.84,64.71C187.84,64.71 187.86,49.08 187.86,49.08Z" />
                    </g>
                    <g transform="matrix(4.24615,0,0,12.7867,-59.1199,-235.416)">
                        <path d="M249.4,64.38C246.411,66.995 242.561,68.42 238.59,68.38C229.21,68.38 222.12,60.76 222.12,51.12C222.12,41.48 229.21,33.86 238.59,33.86C242.584,33.832 246.446,35.311 249.4,38L249.4,25.18C249.4,23.216 251.016,21.6 252.98,21.6C254.944,21.6 256.56,23.216 256.56,25.18L256.56,64.71C256.56,66.674 254.944,68.29 252.98,68.29C251.016,68.29 249.4,66.674 249.4,64.71L249.4,64.38ZM249.4,51.16L249.4,50.71C249.14,44.91 244.84,40.55 239.4,40.55C233.96,40.55 229.4,45.1 229.4,51.16C229.4,57.22 233.83,61.78 239.4,61.78C244.97,61.78 249.4,57.22 249.4,51.16Z" />
                    </g>
                    <g transform="matrix(4.24615,0,0,12.7867,-59.1199,-235.416)">
                        <path d="M263,49.14C263,39.9 269.18,33.9 277.65,33.9C277.657,33.9 277.663,33.9 277.67,33.9C279.48,33.9 280.97,35.39 280.97,37.2C280.97,37.21 280.97,37.22 280.97,37.23C280.959,39.047 279.467,40.539 277.65,40.55C273.35,40.55 270.16,43.41 270.16,49.14L270.16,64.71C270.16,66.674 268.544,68.29 266.58,68.29C264.616,68.29 263,66.674 263,64.71L263,49.14Z" />
                    </g>
                    <g transform="matrix(4.24615,0,0,12.7867,-59.1199,-235.416)">
                        <path d="M307.49,64.38C304.501,66.995 300.651,68.42 296.68,68.38C287.3,68.38 280.21,60.76 280.21,51.12C280.21,41.48 287.3,33.9 296.68,33.9C300.669,33.861 304.53,35.325 307.49,38L307.49,37.54C307.49,35.576 309.106,33.96 311.07,33.96C313.034,33.96 314.65,35.576 314.65,37.54L314.65,64.71C314.65,66.674 313.034,68.29 311.07,68.29C309.106,68.29 307.49,66.674 307.49,64.71L307.49,64.38ZM307.49,51.16L307.49,50.71C307.23,44.91 302.93,40.55 297.49,40.55C292.05,40.55 287.49,45.1 287.49,51.16C287.49,57.22 291.92,61.78 297.49,61.78C303.06,61.78 307.49,57.22 307.49,51.16Z" />
                    </g>
                    <g transform="matrix(4.24615,0,0,12.7867,-59.1199,-235.416)">
                        <path d="M88.83,32.24C85.66,24.735 78.268,19.833 70.121,19.833C63.373,19.833 57.052,23.195 53.28,28.79C53.14,28.99 53.01,29.2 52.88,29.4C51.367,26.981 49.364,24.907 47,23.31C43.648,21.052 39.697,19.846 35.655,19.846C24.513,19.846 15.345,29.014 15.345,40.156C15.345,49.999 22.5,58.496 32.2,60.17C30.83,62.27 30.101,64.723 30.1,67.23C30.094,68.947 30.434,70.648 31.1,72.23C33.1,77.033 37.816,80.178 43.018,80.178C46.817,80.178 50.428,78.502 52.88,75.6C53.645,76.511 54.526,77.318 55.5,78C57.643,79.458 60.175,80.238 62.767,80.238C67.072,80.238 71.104,78.086 73.5,74.51C74.95,72.379 75.721,69.858 75.71,67.28C75.71,65.564 75.37,63.864 74.71,62.28C74.402,61.583 74.034,60.914 73.61,60.28C83.316,58.607 90.478,50.105 90.478,40.255C90.478,37.5 89.917,34.772 88.83,32.24ZM23.92,48.06C21.258,44.095 20.768,39.043 22.62,34.64C23.692,32.114 25.474,29.953 27.75,28.42C30.087,26.845 32.842,26.003 35.66,26.003C43.421,26.003 49.809,32.389 49.81,40.15L49.81,54.3L35.66,54.3C33.767,54.306 31.893,53.929 30.15,53.19C27.621,52.119 25.457,50.336 23.92,48.06ZM49.28,69.86C48.764,71.075 47.91,72.116 46.82,72.86C45.692,73.619 44.359,74.016 43,74C40.745,74.004 38.631,72.876 37.38,71C36.638,69.887 36.242,68.578 36.242,67.24C36.242,63.529 39.289,60.472 43,60.46L49.77,60.46L49.77,67.23C49.785,68.131 49.618,69.025 49.28,69.86ZM68.97,69.86C68.461,71.076 67.61,72.119 66.52,72.86C64.625,74.139 62.207,74.376 60.1,73.49C58.883,72.978 57.841,72.123 57.1,71.03C56.359,69.903 55.976,68.578 56,67.23L56,60.46L62.77,60.46C63.673,60.459 64.568,60.639 65.4,60.99C66.617,61.502 67.659,62.357 68.4,63.45C69.663,65.348 69.889,67.76 69,69.86L68.97,69.86ZM83.16,45.66C80.957,50.877 75.823,54.289 70.16,54.3L56,54.3L56,40.15C56,32.388 62.388,26 70.15,26C77.912,26 84.3,32.388 84.3,40.15C84.292,42.044 83.904,43.918 83.16,45.66Z" />
                    </g>
                </g>
            </g>
        </g>
    </svg>
)
