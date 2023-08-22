export const slideInBouncy = {
    initial: { x: "100%" },
    animate: { x: 0 },
    exit: { x: "-100%" },
};

export const slideOutBouncy = {
    initial: { x: "-100%" },
    animate: { x: 0 },
    exit: { x: "100%" },
};

export const slideInSmooth = {
  initial: { x: "100%" },
  animate: { x: 0, transition: { duration: 0.5, ease: "easeInOut" } },
  exit: { x: "-100%", transition: { duration: 0.5, ease: "easeInOut" } },
};

export const slideOutSmooth = {
    initial: { x: "-100%" },
    animate: { x: 0, transition: { duration: 0.5, ease: "easeInOut" } },
    exit: { x: "100%", transition: { duration: 0.5, ease: "easeInOut" } },
  };