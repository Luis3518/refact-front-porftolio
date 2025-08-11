import { onMounted } from 'vue'

export function useAnalytics() {
  const getAnalyticsUrl = () => {
    return import.meta.env.ANALYTICS_API_URL
  }

  const trackEvent = (eventName) => {
    try {
      const url = getAnalyticsUrl()
      const payload = { event: eventName }

      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      }).catch(error => {
        console.log('Analytics tracking failed:', error);
      });

      console.log('Analytics event tracked:', eventName);
    } catch (error) {
      console.log('Analytics tracking error:', error);
    }
  }

  const trackPageVisit = () => {
    trackEvent("page_visit")
  }

  const trackCVClick = () => {
    trackEvent("click_CV")
  }

  const trackFormSubmit = (formName) => {
    trackEvent("form_submit")
  }

  const trackProjectView = (projectName) => {
    trackEvent("project_view")
  }

  // Auto-track page visit when component mounts
  onMounted(() => {
    // Small delay to ensure DOM is ready
    setTimeout(() => {
      trackPageVisit()
    }, 100)
  })

  return {
    trackEvent,
    trackPageVisit,
    trackCVClick,
    trackFormSubmit,
    trackProjectView
  }
}
