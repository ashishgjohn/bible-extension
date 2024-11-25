import NavigationButton from './NavigationButton';
import { IoChevronBackOutline } from "react-icons/io5";

export default function VerseNavigation() {
    return (
        <div className='absolute w-full p-2 px-4 bg-slate-800 bg-opacity-50 flex justify-between items-center'>
            <NavigationButton to='/'>
                <IoChevronBackOutline size={20} className='text-white' />
            </NavigationButton>
        </div>
    );
}