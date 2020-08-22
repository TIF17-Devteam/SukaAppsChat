import dayjs from 'dayjs';
import isToday from 'dayjs/plugin/isToday';
import isYesterday from 'dayjs/plugin/isYesterday';

dayjs.extend(isToday);
dayjs.extend(isYesterday);

export const parseTime = ({ time, locale }) => {
    const instance = dayjs(time);
    if (instance.isToday()) {
        return instance.locale(locale).format('HH:mm');
    }

    if (instance.isYesterday()) {
        return 'Kemarin';
    }

    return instance.locale(locale).format('DD/MM/YYYY');
}