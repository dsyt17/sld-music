import * as React from 'react';

const PlayOutline = (props?: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            viewBox="0 0 24 24"
            {...props}
        >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
                fill="#000000"
                fillRule="evenodd"
                d="M3 5.497c0-2.32 2.521-3.762 4.521-2.586l11.055 6.503c1.972 1.16 1.972 4.012 0 5.172L7.521 21.089C5.521 22.265 3 20.823 3 18.503V5.497Z"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default PlayOutline;
