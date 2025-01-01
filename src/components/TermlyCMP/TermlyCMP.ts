"use client";

import { useEffect, useMemo, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const SCRIPT_SRC_BASE = "https://app.termly.io";

const WEBSITE_UUID = "a22be3e5-0b4d-4865-a76c-f61a3863de76";

export default function TermlyCMP() {
  const scriptSrc = useMemo(() => {
    const src = new URL(SCRIPT_SRC_BASE);
    src.pathname = `/resource-blocker/${WEBSITE_UUID}`;
    return src.toString();
  }, []);

  const isScriptAdded = useRef(false);

  useEffect(() => {
    if (isScriptAdded.current) return;
    const script = document.createElement("script");
    script.src = scriptSrc;
    document.head.appendChild(script);
    isScriptAdded.current = true;
  }, [scriptSrc]);

  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    window.Termly?.initialize();
  }, [pathname, searchParams]);

  return null;
}
