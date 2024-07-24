import React, { useState, useRef, useEffect } from 'react';

function AccordionItem({ title, content, isOpen, onClick }) {
  const accordionContentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (accordionContentRef.current) {
      // Measure the content's height and set it dynamically
      setContentHeight(accordionContentRef.current.offsetHeight);
    }
  }, [isOpen]);

  const accordionClass = isOpen ? 'cs_accordian active' : 'cs_accordian';

  return (
    <>
      <div className={accordionClass}>
        <h2 className="cs_accordian_head cs_heading_color" onClick={onClick}>
          {title}{' '}
          <span className="cs_accordian_arrow">
            <svg
              width={28}
              height={28}
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-6.11959e-07 14C-2.74531e-07 21.7195 6.28053 28 14 28C21.7195 28 28 21.7195 28 14C28 6.28053 21.7195 -9.49388e-07 14 -6.11959e-07C6.28053 -2.74531e-07 -9.49388e-07 6.28053 -6.11959e-07 14ZM26.25 14C26.25 20.7548 20.7548 26.25 14 26.25C7.24522 26.25 1.75 20.7548 1.75 14C1.75 7.24522 7.24522 1.75 14 1.75C20.7548 1.75 26.25 7.24522 26.25 14ZM13.3814 8.13137C13.7233 7.78947 14.2769 7.78947 14.6186 8.13137L18.9936 12.5064C19.1645 12.6772 19.25 12.9012 19.25 13.125C19.25 13.3488 19.1645 13.5728 18.9936 13.7436C18.6517 14.0855 18.0981 14.0855 17.7564 13.7436L14.875 10.8622L14.875 19.25C14.875 19.7332 14.4837 20.125 14 20.125C13.5163 20.125 13.125 19.7332 13.125 19.25L13.125 10.8622L10.2436 13.7436C9.90172 14.0855 9.34806 14.0855 9.00637 13.7436C8.66469 13.4017 8.66447 12.8481 9.00637 12.5064L13.3814 8.13137Z"
                fill="#307BC4"
              />
            </svg>
          </span>
        </h2>
        <div
          className="cs_accordian_body_wrap"
          style={{ height: isOpen ? `${contentHeight}px` : '0' }}
        >
          <div className="cs_accordian_body" ref={accordionContentRef}>
            <p>{content}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default function Accordion({ data, variant }) {
  const [openItemIndex, setOpenItemIndex] = useState(-1); // Initialize with -1 for no item open initially
  const [firstItemOpen, setFirstItemOpen] = useState(true); // Set the first item to open initially

  const handleItemClick = index => {
    if (index === openItemIndex) {
      setOpenItemIndex(-1);
    } else {
      setOpenItemIndex(index);
    }
  };
  useEffect(() => {
    // Open the first item when the component mounts
    if (firstItemOpen) {
      setOpenItemIndex(2);
      setFirstItemOpen(false);
    }
  }, [firstItemOpen]);

  return (
    <>
      <div
        className={`cs_accordians cs_heading_color ${variant ? variant : ''}`}
      >
        {data?.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            isOpen={index === openItemIndex}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    </>
  );
}
