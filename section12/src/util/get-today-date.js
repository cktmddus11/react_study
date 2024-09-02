export function getTodayDate(format, todayDate) {
    const today =  todayDate ? new Date(todayDate) : new Date();
                    // '' 빈값이거나 undefined falsy 인 경우 기본값 세팅
    switch (format) {
        case 'YYYY-MM-DD':
            return today.toISOString().split('T')[0]; // '2022-08-22' 형식

        case 'YYYY년 M월':
            return new Intl.DateTimeFormat('ko-KR', { year: 'numeric', month: 'long' }).format(today); // '2022년 8월' 형식

        case 'YYYY/MM/DD':
            return today.toLocaleDateString('ko-KR').replace(/\./g, '').replace(/ /g, '-'); // '2022/08/22' 형식

        case 'YYYY.MM.DD':
            const year = today.getFullYear();
            const month = String(today.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 1을 더함
            const day = String(today.getDate()).padStart(2, '0'); // 날짜를 2자리로 맞춤
            return `${year}.${month}.${day}`; // '2022.08.22' 형식
        default:
            throw new Error('지원하지 않는 포맷입니다.');
    }
}