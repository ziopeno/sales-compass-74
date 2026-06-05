import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "선적 항로 관제실" },
      { name: "description", content: "해외영업 선적 · 매출 실시간 관리" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/atlas.html"
      title="선적 항로 관제실"
      style={{ width: "100vw", height: "100vh", border: 0, display: "block" }}
    />
  );
}
