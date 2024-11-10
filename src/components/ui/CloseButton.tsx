import Button from './Button';
import close from "./../../assets/imgs/Cross.png";

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
            classname={`closeBtn cursor-pointer z-50 p-2 bg-white/10 backdrop-blur-[50px] border-white/70 border rounded-[10px] ${className}`}
        >
            <img src={close} className='w-[17.50px] h-[16.16px]' title='close icon' />
        </Button>
    );
}