import React, { useState, useRef } from "react";
import style from "./FullPageSection.module.css";

interface FullPageSectionsProps {
  children: React.ReactNode[];
  titles: string[];
}

const FullPageSection: React.FC<FullPageSectionsProps> = ({
  children,
  titles,
}) => {
  const [expandedIndex, setExpandedIndex] = useState<number>(0); // First section is expanded by default
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleExpand = (index: number) => {
    if (expandedIndex !== index) {
      setExpandedIndex(index); // Only change if a different section is clicked
    }
  };

  const handleScroll = (index: number) => {
    const section = sectionRefs.current[index];
    if (!section) return;

    const sectionHeight = section.clientHeight;
    const scrollPosition = section.scrollTop;
    const scrollHeight = section.scrollHeight;

    // Only trigger the scroll logic if the section is scrollable
    if (scrollHeight <= sectionHeight) {
      return; // No need to handle scroll if content isn't large enough to scroll
    }

    // Define thresholds:
    const bottomThreshold = scrollHeight - sectionHeight * 1; // Trigger bottom detection after 80% scroll
    const topThreshold = sectionHeight * 0; // Trigger top detection when less than 20% scrolled

    const atBottom = scrollPosition >= bottomThreshold;
    const atTop = scrollPosition <= topThreshold;

    // Handle scroll behavior only when the section is expanded
    if (expandedIndex === index) {
      // Scroll down to the next section when reaching the bottom (after scrolling 80% of the section)
      if (atBottom && index < children.length - 1) {
        setExpandedIndex(index + 1);
      }

      // Scroll up to the previous section when reaching the top (after scrolling 20% of the section)
      if (atTop && index > 0) {
        setExpandedIndex(index - 1);
      }
    }
  };

  return (
    <div className={style.fullPageContainer}>
      {children.map((child, index) => {
        const isExpanded = expandedIndex === index;
        return (
          <div
            key={index}
            ref={(el) => (sectionRefs.current[index] = el)}
            className={`${style.fullPageSection} ${
              isExpanded ? style.expanded : style.collapsed
            }`}
            onClick={() => handleExpand(index)}
            onScroll={() => handleScroll(index)}
          >
            {!isExpanded && (
              <div className={style.coverLayer}>
                <h2>{titles[index]}</h2> {/* Title for each section */}
              </div>
            )}
            {isExpanded && child} {/* Display content only when expanded */}
          </div>
        );
      })}
    </div>
  );
};

export default FullPageSection;
