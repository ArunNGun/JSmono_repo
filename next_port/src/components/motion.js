export const scrollMotion = (yaxis = -35) => {
    return {
        rest: {
            y: 0,
            transition: {
                duration: 0.5,
                type: "tween",
                ease: "easeIn"
            }
        },
        hover: {
            y: yaxis,
            transition: {
                duration: 0.5,
                type: "tween",
                ease: "easeOut"
            }
        }
    }
};

export const rotateMotion = (zaxis = 45) => {
    return {
        rest: {
            rotate: 0,
            transition: {
                duration: 0.5,
                type: "tween",
                ease: "easeIn"
            }
        },
        hover: {
            rotate: zaxis,
            transition: {
                duration: 0.5,
                type: "tween",
                ease: "easeOut"
            }
        }
    }
};

export const rotateScrollMotion = (zaxis = 45, yaxis = -35) => {
    return {
        rest: {
            rotate: 0,
            y: 0,
            transition: {
                duration: 0.5,
                type: "tween",
                ease: "easeIn"
            }
        },
        hover: {
            rotate: zaxis,
            y: yaxis,
            transition: {
                duration: 0.5,
                type: "tween",
                ease: "easeOut"
            }
        }
    }
};
