import React from "react";

const KeyCap = ({ children }: { children: React.ReactNode }) => (
  <kbd className="flex items-center p-0! bg-gradient-to-tl from-neutral-n3 to-neutral-n1 rounded-xs [box-shadow:inset_0_-2px_0_0_#c2c2c2,inset_0_0_1px_1px_#fff,0_1px_2px_1px_rgba(30,35,90,0.4)]! h-[1.125rem] w-5 justify-center mr-[0.4em] text-neutral-n8! border-none! dark:text-neutral-n12! dark:opacity-80">
    {children}
  </kbd>
);

const KeyboardLegend = () => {
  return (
    <div className="hidden md:flex gap-4">
      <div className="flex items-center">
        <KeyCap>
          <svg width="15" height="15" aria-label="Enter key" role="img">
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.2"
            >
              <path d="M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3"></path>
            </g>
          </svg>
        </KeyCap>
        <span className="text-xs text-neutral-n8">to open link</span>
      </div>
      <div className="flex items-center">
        <KeyCap>
          <svg width="15" height="15" aria-label="Arrow down" role="img">
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.2"
            >
              <path d="M7.5 3.5v8M10.5 8.5l-3 3-3-3"></path>
            </g>
          </svg>
        </KeyCap>
        <span className="text-xs text-neutral-n8">to select</span>
      </div>
      <div className="flex items-center">
        <KeyCap>
          <svg width="15" height="15" aria-label="Arrow up" role="img">
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.2"
            >
              <path d="M7.5 11.5v-8M10.5 6.5l-3-3-3 3"></path>
            </g>
          </svg>
        </KeyCap>
        <span className="text-xs text-neutral-n8">to select</span>
      </div>
      <div className="flex items-center">
        <KeyCap>
          <svg width="15" height="15" aria-label="Escape key" role="img">
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.2"
            >
              <path d="M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956"></path>
            </g>
          </svg>
        </KeyCap>
        <span className="text-xs text-neutral-n8">to close</span>
      </div>
    </div>
  );
};

export default KeyboardLegend;
