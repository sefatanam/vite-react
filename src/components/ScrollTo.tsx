interface ScrollToPosition {
  to: "TOP" | "BOTTOM";
}

function ScrollTo(to: ScrollToPosition) {
  const scrollToTop = (scrollToPosition: ScrollToPosition) => {
    window.scrollTo({
      top: scrollToPosition.to === "TOP" ? 0 : -1,
      behavior: "smooth",
    });
  };

  return (
    <div
      onClick={() => scrollToTop(to)}
      title="Scroll to top button"
      className="fixed bottom-4 right-4 bg-pink-600 rounded-full"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-16 h-16 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
  );
}

export default ScrollTo;
