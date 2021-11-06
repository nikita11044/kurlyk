import * as React from "react";

type IconPropsType = {
    width?: number | string,
    height?: number | string,
    fill?: string,
}

export const SvgComponent: React.FC<IconPropsType> = ({width, height, fill}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 512 512"
            fill={fill}>
            <path
                d="M140 5c-30.1 2.9-62.4 10.5-86.5 20.4l-6 2.4 3 1.1C61.4 32.9 65 36 65 41.2c0 6.1-3.6 9-12.9 10.2-11.7 1.5-26.1 9-35.3 18.3L12 74.5l4.9 1.8C22.8 78.4 28 83.8 28 87.9c0 1.8-1.7 5.2-4.9 9.4C8.8 116.7.1 147.9 0 179.7c0 28.2 13.4 54.7 42.5 83.8 21.5 21.6 50.8 42.3 82.4 58.6 9.7 5 19.1 13.1 22 19.3 2.5 5.1 2.8 14 .6 19.2-4.2 10.2-14.9 19.9-31.2 28.2-14.9 7.6-33 13.5-48.5 15.7l-4.8.6v4.9c0 6.8 2.5 12.5 6.5 15 4.1 2.5 6 7.5 4.5 11.4-2.4 6.5-.2 16.4 4.6 20.7 1.1.9 4.3 2.9 7.2 4.3 5.7 2.9 6.7 4.5 7.7 11.8 1.1 8.4 7 14.6 14.6 15.5 6.7.7 9.2 2 13.1 6.6 11.9 14.3 45.6 17 68.8 5.6 26.5-13.1 54.4-59.9 65.3-109.9 4.4-19.9 6-35.6 6-58.5 0-37-6-63.4-18.5-82.2-6.5-9.6-13.6-14.9-27.1-20.2-14.6-5.7-26.6-7.8-49.1-8.5-28.7-1-40.6-4.3-50.8-14.4-17.4-16.9-4.8-39.3 28.2-50.5 16.2-5.5 37.8-6.3 58.1-2.3 16 3.2 30.5 5.3 44.9 6.5 13 1.2 29 1.9 29 1.4 0-.2-1.9-2.7-4.1-5.6-12.4-15.5-16.4-38.7-9.4-53 3.1-6.4 9.7-13.1 15-15.3 4.9-2 15.9-1.7 25 .6 4.3 1.1 8 1.8 8.2 1.6.5-.5-7.8-12.6-13.4-19.6-6.4-8-21.7-23.3-29.8-30-20.5-16.8-45-28.6-70.3-34.1C185.9 4.5 155.8 3.5 140 5zm-20.4 37c28.5 1.7 49.3 6.2 54.8 11.6 3.6 3.7 3.6 9.1 0 12.8-3.2 3.2-6.9 3.4-14 .7-9-3.5-36.2-7.1-53.2-7.1-7.8 0-11.7-1.9-13.1-6.3-1.3-3.8-.4-7.3 2.5-9.8 3.7-3.2 3.2-3.1 23-1.9zm123.1 10.3c6.8 2.5 12 7.3 15.3 14.1 3 6.1 3.2 7.2 2.8 14-.7 11.4-6.2 19.2-16.8 23.9-5.6 2.6-15.8 2.7-21.3.3-5.5-2.4-12.2-8.9-14.8-14.4-6.6-13.8 1.1-32.5 15.5-37.6 4.9-1.7 14.9-1.9 19.3-.3z"/>
            <path
                d="M229.5 70.4c-5.9 2.6-7.2 10.1-2.6 14.7 4.9 4.9 12.9 3 15-3.4 2.6-7.8-4.9-14.6-12.4-11.3zM282 108c-5.4 5.8-5.6 17.5-.6 28.6 6.4 13.9 15.5 20.8 40.9 30.9 52.3 20.7 133.8 48.4 171.1 58.1 9.4 2.4 17.2 4.2 17.4 4 .8-.9-29.9-21.7-58.3-39.6-83.1-52.4-145.8-85-163.5-85-3.4 0-4.7.6-7 3z"/>
        </svg>
    );
}

export default SvgComponent;