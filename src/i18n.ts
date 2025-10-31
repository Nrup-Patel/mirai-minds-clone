import { getRequestConfig } from "next-intl/server";

export const locales = ["ja", "en"] as const; // Japanese first
export const defaultLocale = "ja"; // ✅ Default is Japanese

export default getRequestConfig(async ({ locale }) => {
  const resolvedLocale = locale ?? defaultLocale;

  return {
    locale: resolvedLocale,
    messages: (await import(`./locales/${resolvedLocale}.json`)).default,
  };
});
