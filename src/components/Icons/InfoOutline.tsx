import * as React from 'react';

const InfoOutline = (props?: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            viewBox="0 0 24 24"
            {...props}
        >
            <path
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 11v5m9-4a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
            <circle cx={12} cy={7.5} r={1} fill="#000" />
        </svg>
    );
};
export default InfoOutline;
