import React from 'react';
import { motion } from 'framer-motion';
const Cross = ({ pathVariants, animatePath, transition }) => {
    return (
        // <svg svg width="100%" height="100%" viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg">
        //     <g clip-path="url(#clip0_4_10)">
        //         <motion.path
        //             initial="rest"
        //             animate={animatePath}
        //             variants={pathVariants}
        //             transition={transition}
        //             fill={animatePath === "light" ? "#E3ECFF" : "#050A18"}
        //             d="M90.1474 43.7383C89.7988 43.6808 89.4412 43.746 89.1353 43.9225L84.2278 46.7557C84.0834 46.8391 83.9585 46.946 83.8511 47.067L57.5179 47.0672C55.9951 47.0673 54.7562 45.8284 54.7563 44.3056L54.7565 17.974C54.7796 17.9535 54.8034 17.9336 54.8252 17.9118C54.9183 17.8187 55.0002 17.7126 55.0677 17.5956L57.901 12.6882C58.0776 12.3822 58.1426 12.0247 58.0852 11.6761L57.2757 6.76856C57.1539 6.03099 56.5163 5.48984 55.769 5.48984L46.0548 5.48984C45.3074 5.48996 44.6695 6.03087 44.548 6.76844L43.7385 11.676C43.681 12.0245 43.7462 12.3822 43.9228 12.6882L46.7561 17.5956C46.8394 17.7398 46.9463 17.8647 47.0674 17.9721L47.0671 44.3057C47.0672 45.0433 46.78 45.7368 46.2584 46.2584C45.7368 46.78 45.0433 47.0673 44.3057 47.0672L17.9722 47.067C17.8648 46.946 17.74 46.8392 17.5957 46.7558L12.6883 43.9225C12.3823 43.7459 12.0246 43.6807 11.676 43.7382L6.76864 44.5478C6.03119 44.6692 5.49005 45.3068 5.49005 46.0546L5.49005 55.7688C5.49017 56.5162 6.03119 57.154 6.76876 57.2755L11.6762 58.0851C12.0246 58.1427 12.3825 58.0775 12.6883 57.9009L17.5958 55.0675C17.713 54.9999 17.8189 54.9181 17.912 54.825C17.9339 54.803 17.9537 54.7794 17.9741 54.7564L44.3056 54.7564C45.0433 54.7564 45.7368 55.0436 46.2583 55.5651C46.7799 56.0867 47.0672 56.7801 47.0671 57.5179L47.0671 83.8513C46.946 83.9587 46.8391 84.0836 46.7559 84.2278L43.9226 89.1355C43.746 89.4414 43.6808 89.7991 43.7384 90.1476L44.548 95.055C44.6696 95.7924 45.3072 96.3336 46.0547 96.3337L55.7689 96.3337C56.1872 96.3337 56.5708 96.1644 56.8492 95.886C57.0683 95.6669 57.2221 95.3799 57.2757 95.0551L58.0852 90.1476C58.1426 89.799 58.0775 89.4413 57.9009 89.1353L55.0676 84.2279C54.9843 84.0837 54.8774 83.9588 54.7563 83.8514L54.7563 57.5178C54.7562 56.7802 55.0435 56.0867 55.5651 55.5651C56.0866 55.0435 56.7802 54.7563 57.5177 54.7564L83.8514 54.7564C83.9588 54.8774 84.0835 54.9842 84.2279 55.0676L89.1353 57.9009C89.4413 58.0775 89.799 58.1427 90.1475 58.0852L95.055 57.2758C95.38 57.2222 95.6667 57.0684 95.886 56.8492C96.1642 56.5709 96.3335 56.1871 96.3336 55.769V46.0547C96.3335 45.3073 95.7925 44.6695 95.0549 44.548L90.1474 43.7383ZM88.3718 53.9332L86.519 52.8634L86.5188 48.9601L88.3719 47.8903L88.3718 53.9332ZM47.8904 13.4518L53.9332 13.4518L52.8634 15.3049L48.9602 15.3049L47.8904 13.4518ZM47.3506 8.54427L54.4732 8.54427L54.7788 10.3972L47.045 10.3972L47.3506 8.54427ZM15.3049 48.9602L15.305 52.8633L13.4519 53.9331L13.4519 47.8903L15.3049 48.9602ZM8.54447 47.3504L10.3975 47.0448L10.3973 54.7787L8.54435 54.4731L8.54447 47.3504ZM53.9332 88.3716L47.8904 88.3716L48.9602 86.5185L52.8635 86.5186L53.9332 88.3716ZM54.4732 93.2791L47.3505 93.2793L47.0449 91.4263L54.7788 91.4261L54.4732 93.2791ZM53.4055 53.4053C52.307 54.5038 51.7019 55.9644 51.7021 57.5178L51.7021 83.4641H50.1217L50.1217 57.5178C50.1218 55.9643 49.5167 54.5039 48.4182 53.4054C47.3197 52.3069 45.8593 51.7018 44.3058 51.7019H18.3593V50.1215L44.3056 50.1215C45.8591 50.1216 47.3196 49.5166 48.4181 48.4181C49.5164 47.3197 50.1215 45.8591 50.1214 44.3056V18.3593L51.7017 18.3593L51.7019 44.3056C51.7019 47.5124 54.3109 50.1215 57.5177 50.1215H83.4643L83.4644 51.7018L57.5181 51.7018C55.9645 51.7021 54.5039 52.3069 53.4055 53.4053ZM93.2793 54.473L91.4262 54.7787L91.4262 47.0449L93.2792 47.3506L93.2793 54.473Z" />
        //     </g>
        //     <defs>
        //         <clipPath id="clip0_4_10">
        //             <rect width="72" height="72" fill="white" transform="translate(0 50.9116) rotate(-45)" />
        //         </clipPath>
        //     </defs>
        // </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 97 97">
            <path fill={animatePath === "light" ? "#E3ECFF" : "#050A18"} d="M3.09944e-06 49.1736L37.7671 49.1736C40.4167 49.2185 42.8866 50.3412 44.6829 52.2722L44.7278 52.3171C46.6588 54.1134 47.7815 56.6282 47.8264 59.2329L47.8264 97H49.1736L49.1736 59.2329C49.2185 56.5833 50.3412 54.1134 52.2722 52.3171L52.3171 52.2722C54.1134 50.3412 56.6283 49.2185 59.2329 49.1736L97 49.1736V47.8264L59.2329 47.8264C56.5833 47.7815 54.1134 46.6588 52.3171 44.7278L52.2722 44.6829C50.3412 42.8866 49.2185 40.3718 49.1736 37.7671L49.1736 3.09944e-06H47.8264L47.8264 37.7671C47.7815 40.4167 46.6588 42.8866 44.7278 44.6829L44.6829 44.7278C42.8866 46.6588 40.3718 47.7815 37.7671 47.8264L3.09944e-06 47.8264V49.1736ZM48.5 44.4583C50.7454 44.4583 52.5417 46.2546 52.5417 48.5C52.5417 50.7454 50.7454 52.5417 48.5 52.5417C46.2546 52.5417 44.4583 50.7454 44.4583 48.5C44.4583 46.2546 46.2546 44.4583 48.5 44.4583Z"></path>
        </svg>
    )
}

export default Cross;