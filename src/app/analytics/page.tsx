import { AnalyticsDashboard } from "@/components/analytics-dashboard"
import { analytics } from "@/utils/analytics"
import { getDate } from "@/utils"

export default async function AnalyticsPage() {
  const TRACKING_DAYS = 7

  const pageviews = await analytics.retrieveDays("pageview", TRACKING_DAYS)

  const totalPagesViews = pageviews.reduce((acc, curr) => {
    return (
      acc +
      curr.events.reduce((acc, curr) => {
        return acc + Object.values(curr)[0]!
      }, 0)
    )
  }, 0)

  const avgVisitorsPerDay = (totalPagesViews / TRACKING_DAYS).toFixed(1)

  const amtVisitorsToday = pageviews
    .filter((e) => e.date === getDate())
    .reduce((acc, curr) => {
      return (
        acc +
        curr.events.reduce((acc, curr) => {
          return acc + Object.values(curr)[0]!
        }, 0)
      )
    }, 0)

  return (
    <div className="h-min-screen w-full py-12 flex justify-center">
      <div className="relative w-full max-w-6xl mx-auto">
        <AnalyticsDashboard
          avgVisitorsPerDay={avgVisitorsPerDay}
          amtVisitorsToday={amtVisitorsToday}
        />
      </div>
    </div>
  )
}
