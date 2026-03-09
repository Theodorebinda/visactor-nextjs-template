import Container from "@/components/container";
import { metrics } from "@/data/metrics";
import MetricCard from "./components/metric-card";

export default function Metrics() {
  return (
    <Container className="grid grid-cols-1 gap-y-6 border-b border-border py-4 phone:grid-cols-2 laptop:grid-cols-4">
      {metrics.map((metric) => (
        <MetricCard key={metric.title} {...metric} />
      ))}
      <div className="flex items-center justify-center rounded-lg border border-border bg-secondary p-4">
        <p className="text-sm text-muted-foreground">
          More metrics coming soon...
        </p>
      </div>
    </Container>
  );
}
