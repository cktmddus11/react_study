import { useEffect } from "react";
export const usePageTitle = (title) => {
    useEffect(() => {
        // $ => 관례싱 dom 값이 들어올거같으면 
        const $title = document.getElementsByTagName("title")[0];
        $title.innerHTML = title;
    }, [title])
}