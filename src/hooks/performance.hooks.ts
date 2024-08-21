import { useReportWebVitals } from 'next/web-vitals';

export const MeasurePerformance = (): void =>
  useReportWebVitals((metric) => {
    // eslint-disable-next-line no-console
    console.log(metric);
  });
