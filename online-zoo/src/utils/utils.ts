export const handleRightScroll = (
  ref: React.RefObject<HTMLDivElement | null>,
) => {
  ref.current?.scrollBy({
    left: 200,
    behavior: "smooth",
  });
};

export const handleLeftScroll = (
  ref: React.RefObject<HTMLDivElement | null>,
) => {
  ref.current?.scrollBy({
    left: -200,
    behavior: "smooth",
  });
};
