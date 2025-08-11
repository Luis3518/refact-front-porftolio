import { onMounted } from 'vue'

export function useAnalytics() {
  const getAnalyticsUrl = () => {
    const url = import.meta.env.VITE_ANALYTICS_API_URL || 'http://localhost:4000/track'
    
    // DEBUG: Validación de URL de analytics
    console.log('🔍 DEBUG Analytics URL:', url)
    console.log('🔍 Raw env var:', import.meta.env.VITE_ANALYTICS_API_URL)
    
    return url
  }

  const trackEvent = (eventName) => {
    try {
      const url = getAnalyticsUrl()
      const payload = { event: eventName }

      // DEBUG: Validación antes de enviar
      console.log('📊 DEBUG Analytics Track:', {
        eventName,
        url,
        payload,
        willSend: !!url
      })

      if (!url) {
        console.warn('⚠️ No analytics URL configured, skipping track')
        return
      }

      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      }).then(response => {
        console.log('✅ Analytics response:', response.status, response.statusText)
      }).catch(error => {
        console.log('❌ Analytics tracking failed:', error);
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
