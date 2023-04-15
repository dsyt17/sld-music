import React from 'react';

const ITunesOutline = (props?: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width={286}
            height={286}
            {...props}
        >
            <title>{'tidal copy 3'}</title>
            <defs>
                <linearGradient id="a" x1="96.213%" x2="3.304%" y1="34.121%" y2="62.028%">
                    <stop offset="0%" stopColor="#799FD5" />
                    <stop offset="100%" stopColor="#BC75B1" />
                </linearGradient>
                <linearGradient id="c" x1="79.024%" x2="22.281%" y1="10.574%" y2="90.303%">
                    <stop offset="0%" stopColor="#E75D7F" />
                    <stop offset="100%" stopColor="#9551FC" />
                </linearGradient>
                <linearGradient id="d" x1="74.945%" x2="21.318%" y1="94.416%" y2="6.336%">
                    <stop offset="0%" stopColor="#23C9FE" />
                    <stop offset="100%" stopColor="#FF5C51" />
                </linearGradient>
                <linearGradient id="e" x1="87.672%" x2="36.878%" y1="98.646%" y2="27.931%">
                    <stop offset="0%" stopColor="#18C7FB" stopOpacity={0.557} />
                    <stop offset="44.981%" stopColor="#25CAFB" stopOpacity={0.68} />
                    <stop offset="100%" stopColor="#FFF" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="f" x1="50%" x2="0%" y1="36.405%" y2="64.15%">
                    <stop offset="0%" stopColor="#FFF" stopOpacity={0} />
                    <stop offset="39.444%" stopColor="#B689FC" stopOpacity={0.678} />
                    <stop offset="39.444%" stopColor="#B689FC" stopOpacity={0.678} />
                    <stop offset="100%" stopColor="#9451FB" />
                </linearGradient>
                <linearGradient id="g" x1="64.517%" x2="107.006%" y1="34.165%" y2="0%">
                    <stop offset="0%" stopColor="#FFF" stopOpacity={0} />
                    <stop offset="39.444%" stopColor="#B689FC" stopOpacity={0.678} />
                    <stop offset="72.725%" stopColor="#B689FC" stopOpacity={0.678} />
                    <stop offset="100%" stopColor="#9451FB" />
                </linearGradient>
                <linearGradient id="h" x1="50%" x2="28.169%" y1="50%" y2="-8.205%">
                    <stop offset="0%" stopColor="#FFF" stopOpacity={0} />
                    <stop offset="18.178%" stopColor="#FFA29A" stopOpacity={0.5} />
                    <stop offset="100%" stopColor="#FF5E50" />
                </linearGradient>
                <linearGradient id="i" x1="26.936%" x2="80.256%" y1="89.405%" y2="-27.798%">
                    <stop offset="0%" stopColor="#E0E2E8" />
                    <stop offset="100%" stopColor="#FFF" />
                </linearGradient>
                <circle id="b" cx={129} cy={129} r={129} />
            </defs>
            <g fill="none" fillRule="evenodd">
                <g transform="translate(14 14)">
                    <use xlinkHref="#b" fill="url(#a)" />
                    <use xlinkHref="#b" fill="url(#c)" />
                    <use xlinkHref="#b" fill="url(#d)" fillOpacity={0.6} />
                    <use xlinkHref="#b" fill="url(#e)" />
                    <use xlinkHref="#b" fill="url(#f)" />
                    <use xlinkHref="#b" fill="url(#g)" />
                    <use xlinkHref="#b" fill="url(#h)" />
                </g>
                <path
                    fill="url(#i)"
                    d="M129 242c-62.408 0-113-50.592-113-113S66.592 16 129 16s113 50.592 113 113-50.592 113-113 113ZM99.878 69.558l-.091 32.019.091 57.248c-3.417-2.072-7.606-3.303-12.107-3.303-11.592 0-20.936 8.113-20.936 18.073s9.344 17.982 20.936 17.982c11.593 0 21.44-8.03 21.028-17.982l-.212-5.107-.517-69.205 61.717-16.789v63.211c-3.604-2.503-8.204-4.036-13.2-4.036-11.592 0-20.935 8.113-20.935 18.073s9.343 17.982 20.936 17.982c11.592 0 21.337-8.022 21.337-17.982l.054-79.45V48.274L99.878 69.558Z"
                    transform="translate(14 14)"
                />
            </g>
        </svg>
    );
};

export default ITunesOutline;
