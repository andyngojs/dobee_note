import { useState, useMemo, useCallback } from "react";

import appConfig from "@app/config";

export default function useHomeHook() {
  const [index, setIndex] = useState(0);

  return {
    index, 
    setIndex,
  }
}
