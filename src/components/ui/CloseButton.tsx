import Button from './Button';
import { IoClose } from 'react-icons/io5';

type CloseButtonPropsType = {
    className?: string
}

export default function CloseButton({ className }: CloseButtonPropsType) {
    function handleClose() {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            const activeTab = tabs[0];
            chrome.tabs.sendMessage(activeTab.id ?? 0, { action: 'removeSidebar' });
        });
    }

    return (
        <Button
            onClick={handleClose}
            classname={`closeBtn cursor-pointer z-50 ${className}`}
        >
            <IoClose size={18} color="#fff" />
        </Button>
    );
}