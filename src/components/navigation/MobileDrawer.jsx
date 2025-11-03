import React from "react";
import { X } from "lucide-react";
import DrawerMenuItem from "./DrawerMenuItem";
import { MENU } from "../../data/menuData";

const MobileDrawer = ({ isOpen, onClose, onNavigate }) => {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
        onClick={onClose}
      />
      <div className="fixed left-0 top-0 bottom-0 w-3/4 max-w-sm bg-gradient-to-b from-neutral-900/98 to-neutral-800/95 z-[60] overflow-y-auto">

        <div className="p-6">
          <button
            onClick={onClose}
            className="mb-6 p-2 hover:bg-white/10 rounded transition-colors"
          >
            <X size={24} className="text-white" />
          </button>
          <nav className="space-y-1">
            {MENU.map((item, idx) => (
              <DrawerMenuItem
                key={idx}
                item={item}
                onNavigate={(path) => {
                  onNavigate(path);
                  onClose();
                }}
              />
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default MobileDrawer;