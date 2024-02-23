// URL一覧

import { DEFAULT_META_DESCRIPTION, DEFAULT_META_TITLE } from "./metaData";

export type Route = {
  key: string;
  url: string;
  title: string;
  description: string;
};
export const ROUTES = {
  INDEX: {
    key: "INDEX",
    url: "/",
    title: DEFAULT_META_TITLE,
    description: DEFAULT_META_DESCRIPTION,
  },
  CONTACT: {
    key: "CONTACT",
    url: "/contact",
    title: "プライム｜お問い合わせ",
    description: "プライムのお問い合わせページです。",
  },
  PRIVACY_POLICY: {
    key: "PRIVACY_POLICY",
    url: "/privacy-policy",
    title: "プライバシーポリシー",
    description: "",
  },
} as const;
