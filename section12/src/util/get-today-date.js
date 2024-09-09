/* 
    format : YYYY-MM-DD, YYYY년 M월, YYYY/MM/DD, YYYY.MM.DD
    inputDate : 


*/
export function getinputDate(format, inputDate) {
    const inputDateValue = inputDate ?
        new Date(inputDate) :
        new Date();
    // '' 빈값이거나 undefined falsy 인 경우 기본값 세팅
    switch (format) {
        case 'YYYY-MM-DD':
            return inputDateValue.toISOString().split('T')[0]; // '2022-08-22' 형식

        case 'YYYY년 M월':
            return new Intl.inputDateValueFormat('ko-KR', { year: 'numeric', month: 'long' }).format(inputDateValue); // '2022년 8월' 형식

        case 'YYYY/MM/DD':
            return inputDateValue.toLocaleDateString('ko-KR').replace(/\./g, '').replace(/ /g, '-'); // '2022/08/22' 형식

        case 'YYYY.MM.DD':
            const year = inputDateValue.getFullYear();
            const month = String(inputDateValue.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 1을 더함
            const day = String(inputDateValue.getDate()).padStart(2, '0'); // 날짜를 2자리로 맞춤
            return `${year}.${month}.${day}`; // '2022.08.22' 형식
        default:
            throw new Error('지원하지 않는 포맷입니다.');
    }
}