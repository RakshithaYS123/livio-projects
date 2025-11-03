import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

const DrawerMenuItem = ({ item, level = 0, onNavigate }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  const handleClick = () => {
    if (hasChildren) {
      setIsExpanded(!isExpanded);
    } else {
      onNavigate(item.path);
    }
  };

  const getTextColor = () => {
    if (level === 0) return "text-gray-300";
    if (level === 1 && item.title === "Residential") return "text-amber-500";
    if (
      level === 1 &&
      (item.title === "Commercial" || item.title === "Contracting")
    )
      return "text-amber-500";
    if (level === 1 && item.title === "Philosophy") return "text-amber-500";
    if (level === 1 && item.title === "Leadership") return "text-amber-500";
    return "text-gray-400";
  };

  return (
    <div className="mb-2">
      <div
        onClick={handleClick}
        className={`flex items-center justify-between py-2 cursor-pointer hover:text-white transition-colors ${getTextColor()}`}
      >
        <span
          className={`${
            level === 0 ? "text-base tracking-wider font-light" : "text-sm"
          } ${level === 2 ? "uppercase tracking-wide" : ""}`}
        >
          {item.title}
        </span>
        {hasChildren && (
          <ChevronRight
            size={18}
            className={`transform transition-transform ${
              isExpanded ? "rotate-90" : ""
            }`}
          />
        )}
      </div>

      {isExpanded && hasChildren && (
        <div className="ml-4 mt-1 space-y-1">
          {item.children.map((child, idx) => (
            <DrawerMenuItem
              key={idx}
              item={child}
              level={level + 1}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      )}

      {isExpanded && item.subsections && (
        <div className="ml-2 mt-1 space-y-1">
          {item.subsections.map((sub, idx) => (
            <div
              key={idx}
              className="py-1 text-sm text-gray-400 hover:text-white cursor-pointer"
            >
              {sub}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DrawerMenuItem;