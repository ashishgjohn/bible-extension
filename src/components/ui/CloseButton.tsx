import Button from './Button';
import { IoClose } from "react-icons/io5";

type CloseButtonPropsType = {
    className?: string
}

export default function CloseButton({ className }: CloseButtonPropsType) {
    function handleClose() {
        chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
            const activeTab = tabs[0];
            chrome.tabs.sendMessage(activeTab.id ?? 0, { action: 'removeSidebar' });
            await chrome.storage.local.set({ isSidebarOpen: false });
        });
    }

    return (
        <Button
            onClick={handleClose}
            classname={`p-[6px] closeBtn cursor-pointer z-50 bg-white/10 backdrop-blur-[50px] border-white/70 border rounded-[10px] ${className}`}
        >
            <IoClose size={24} color='#fff' />
        </Button>
    );
}