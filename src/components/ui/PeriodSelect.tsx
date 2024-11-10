import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';

type PeriodSelectPropsType = {
    value: string;
    date: Date | undefined;
    onChange: (value: string) => void;
    setDate: (date: Date) => void;
}

export default function PeriodSelect({ value, onChange, setDate, date }: PeriodSelectPropsType) {
    function handleChange(period: string) {
        onChange(period);

        if (date) {
            const newDate = new Date(date);
            const hours = newDate.getHours();
    
            if (period === "AM" && hours >= 12) {
                newDate.setHours(hours - 12);
            } else if (period === "PM" && hours < 12) {
                newDate.setHours(hours + 12);
            }
    
            setDate(newDate);
        }
    }

    return (
        <div>
            <Select value={value} onValueChange={handleChange}>
                <SelectTrigger className="w-[70px] h-[30px] bg-white">
                    <SelectValue placeholder="AM" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="AM">AM</SelectItem>
                    <SelectItem value="PM">PM</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
}