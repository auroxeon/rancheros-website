'use client'

import Header from './Header'
import MainContent from './MainContent'
import Footer from './Footer'

export default function SiteContainer() {
  return (
    <div id="SITE_CONTAINER" style={{ minHeight: '100vh', width: '100%' }}>
      <div id="main_MF" className="main_MF" style={{ minHeight: '100vh', width: '100%' }}>
        <div id="SCROLL_TO_TOP" className="Vd6aQZ ignore-focus SCROLL_TO_TOP" role="region" tabIndex={-1} aria-label="top of page">
          <span className="mHZSwn">top of page</span>
        </div>
        <div id="site-root" className="site-root" style={{ minHeight: '100vh', width: '100%' }}>
          <div id="masterPage" className="masterPage css-editing-scope" style={{ minHeight: '100vh', width: '100%' }}>
            <div id="SITE_PAGES" className="JsJXaX SITE_PAGES" style={{ minHeight: '100vh', width: '100%' }}>
              <div id="c1dmp" className="P0dCOY c1dmp" style={{ minHeight: '100vh', width: '100%' }}>
                <div className="PJ4KCX wixui-page" data-testid="page-bg"></div>
                <div style={{ width: '100%' }}>
                  <div className="c1dmp-overflow-wrapper xpmKd_" data-testid="responsive-container-overflow" style={{ width: '100%' }}>
                    <div data-testid="responsive-container-content" tabIndex={-1} className="c1dmp-container" style={{ width: '100%' }}>
                      <Header />
                      <MainContent />
                      <Footer />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

