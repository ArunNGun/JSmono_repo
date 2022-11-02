import React from 'react';

const Logo = ({ fillOne = '#f2f2f2', fillTwo = '#f2f2f2' }) => {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.4038 0C15.9423 0 15.4809 0 15.0195 0C14.8118 0 14.61 0.0104188 14.4081 0.0312589C13.9755 0.0729391 13.5544 0.18756 13.1276 0.406382C12.3201 0.833604 11.5415 1.47965 10.8666 2.39661C10.1283 3.39694 9.66114 4.6786 9.17087 6.06447C8.86518 6.91892 8.56525 7.78378 8.25955 8.63823C7.8558 9.77402 7.45782 10.9098 7.05407 12.0456C6.59265 13.3481 6.13122 14.6506 5.66979 15.9531C5.19106 17.3181 4.70656 18.6727 4.22783 20.0378C3.7664 21.3403 3.30498 22.6428 2.84355 23.9453C2.4398 25.0811 2.04182 26.2169 1.63807 27.3527C1.33814 28.2071 1.03244 29.0615 0.732516 29.9264C0.565249 30.3953 0.403749 30.8538 0.236482 31.3227C0.219178 31.3748 0.0173035 31.9166 0 31.9687H5.2026L14.0043 7.08564C14.0159 7.08564 14.0216 7.08564 14.0332 7.07522V31.9687H18.4167V0C18.2033 0 17.9957 0 17.7823 0C17.3266 0 16.8652 0 16.4038 0Z" fill={fillOne} fill-opacity="0.7" />
            <path d="M28.4816 23.4139C27.8356 24.4038 27.0281 24.9977 26.1514 24.9977C24.2769 24.9977 22.7196 22.3094 22.4081 18.777L22.4312 18.7144L29.0469 0.010437H23.8443C23.4636 1.09412 23.0772 2.17781 22.6965 3.2615C22.2178 4.62652 21.7333 5.98113 21.2545 7.34616C20.7931 8.64867 20.3317 9.95117 19.8703 11.2641C19.4665 12.3999 19.0685 13.5357 18.6648 14.6715C18.3591 15.5259 18.0591 16.3804 17.7535 17.2452C17.592 17.7141 17.4247 18.1726 17.2574 18.6415C17.2401 18.6936 17.2228 18.7457 17.2055 18.7978H18.5321C18.8897 26.1648 22.1659 32 26.1572 32C28.4932 32 30.5927 30.0098 32 26.8838L28.4816 23.4139Z" fill={fillTwo} fill-opacity="0.7" />
        </svg>
    )
}

export default Logo;