export const animations = {
    growOnHover: {
        whileHover: {
            scale: 1.1
        }
    },
    slideInFromTop: {
        initial: {
            y: -100,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1
        },
        transition: {
            duration: 0.5
        }
    }
}