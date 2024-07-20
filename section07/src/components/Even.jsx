import {useEffect} from 'react';

// count값이 짝수일때만 화면에 마운트 되는 컴포넌트
// 짝수가 아니라서 화면에서 언마운트 될떄 제어
const Even= () => {
    useEffect(() => {
        // 클린업, 정리함수.
        return () => { // 언마운트 될떄 호출됨.
            console.log("unmount");
        };
    }, [])
    return <div>짝수입니다.</div>
}
export default Even;