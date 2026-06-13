import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "OrderWave — 선적 · 매출 관제" },
      { name: "description", content: "해외영업 선적 · 매출 실시간 관리" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/orderwave.html"
      title="OrderWave"
      style={{ width: "100vw", height: "100vh", border: 0, display: "block" }}
    />
  );
}
