import {CacheProvider} from "@emotion/react";
import createCache from "@emotion/cache";
import {prefixer} from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

export default function Rtl({children}) {
  return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
}
