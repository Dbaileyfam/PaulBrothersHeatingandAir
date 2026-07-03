import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

export function PageTransition() {
  const { pathname } = useLocation();
  const [progressVisible, setProgressVisible] = useState(false);

  useEffect(() => {
    setProgressVisible(true);
    const hide = window.setTimeout(() => setProgressVisible(false), 520);
    return () => window.clearTimeout(hide);
  }, [pathname]);

  return (
    <>
      <div
        className={`pb-route-progress ${progressVisible ? "is-active" : ""}`}
        aria-hidden
      />
      <div key={pathname} className="pb-page-enter">
        <Outlet />
      </div>
    </>
  );
}
