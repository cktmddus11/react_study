export function getTodayDate(format) {
    const today = new Date();

    switch (format) {
        case 'YYYY-MM-DD':
            return today.toISOString().split('T')[0]; // '2022-08-22' 형식

        case 'YYYY년 M월':
            return new Intl.DateTimeFormat('ko-KR', { year: 'numeric', month: 'long' }).format(today); // '2022년 8월' 형식

        case 'YYYY/MM/DD':
            return today.toLocaleDateString('ko-KR').replace(/\./g, '').replace(/ /g, '-'); // '2022/08/22' 형식

        default:
            throw new Error('지원하지 않는 포맷입니다.');
    }
}