import { useCallback, useEffect, useMemo, useRef, useState } from "react";

//
/**
 * useScreenOn은 targetRef를 관찰하여 화면에 보이는지 여부를 반환하는 hook입니다.
 * @param marginOffset - 관찰할 targetRef의 margin을 설정합니다 . (default: 0)
 * @return {{targetRef: React.MutableRefObject<null>, isOnScreen: boolean}}
 */
const useScreenOn = ({ marginOffset = 0 }) => {
  const targetRef = useRef(null);
  const [isOnScreen, setIsOnScreen] = useState(false);

  const handleOnScreen = useCallback(([entry]) => {
    setIsOnScreen(entry.isIntersecting);
  }, []);

  const observer = useMemo(
    () =>
      new IntersectionObserver(handleOnScreen, {
        rootMargin: `${marginOffset}px`,
      }),
    []
  );

  useEffect(() => {
    if (!targetRef.current) return;

    observer.observe(targetRef.current);

    return () => observer.disconnect();
  }, [targetRef]);

  return { isOnScreen, targetRef };
};

export default useScreenOn;
