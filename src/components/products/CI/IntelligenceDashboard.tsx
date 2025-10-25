import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './IntelligenceDashboard.module.css'
import {
  Briefcase,
  Settings,
  Megaphone,
  Headphones,
  TrendingUp,
  PieChart,
  BarChart3,
  Users,
  DollarSign,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react'

interface AnimatedNumberProps {
  value: string | number
  duration?: number
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value, duration = 1.5 }) => {
  const [displayValue, setDisplayValue] = useState(0)
  const numValue = typeof value === 'string' ? parseInt(value, 10) : value

  useEffect(() => {
    if (isNaN(numValue)) return

    let startTime: number
    let animationFrameId: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const elapsed = (currentTime - startTime) / 1000
      const progress = Math.min(elapsed / duration, 1)
      
      setDisplayValue(Math.floor(numValue * progress))

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate)
      } else {
        setDisplayValue(numValue)
      }
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrameId)
  }, [value, duration, numValue])

  return <span>{displayValue}</span>
}

// Executive View Component
const ExecutiveView = () => (
  <div className={styles.roleContent}>
    <div className={styles.viewHeader}>
      <h3 className={styles.viewTitle}>Executive Dashboard</h3>
      <p className={styles.viewSubtitle}>Strategic Competitive Position Summary</p>
    </div>

    <div className={styles.metricsGrid}>
      <motion.div
        className={styles.metricCard}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0 }}
      >
        <div className={styles.metricIcon}><TrendingUp size={24} /></div>
        <div className={styles.metricContent}>
          <div className={styles.metricLabel}>Market Position</div>
          <div className={styles.metricValue}>#2</div>
          <div className={styles.metricSubtext}>of 12 major competitors</div>
        </div>
      </motion.div>

      <motion.div
        className={styles.metricCard}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className={styles.metricIcon}><CheckCircle size={24} /></div>
        <div className={styles.metricContent}>
          <div className={styles.metricLabel}>Win/Loss Rate</div>
          <div className={styles.metricValue}><AnimatedNumber value={68} duration={1.2} />%</div>
          <div className={styles.metricSubtext}>vs competitors this quarter</div>
        </div>
      </motion.div>

      <motion.div
        className={styles.metricCard}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className={styles.metricIcon}><PieChart size={24} /></div>
        <div className={styles.metricContent}>
          <div className={styles.metricLabel}>Market Share</div>
          <div className={styles.metricValue}><AnimatedNumber value={24} duration={1.2} />%</div>
          <div className={styles.metricSubtext}>+2% from last quarter</div>
        </div>
      </motion.div>
    </div>

    {/* Win/Loss Table */}
    <motion.div
      className={styles.tableSection}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h4 className={styles.tableTitle}>Win/Loss Analysis</h4>
      <table className={styles.dataTable}>
        <thead>
          <tr>
            <th>Competitor</th>
            <th>Win Rate</th>
            <th>Lost Deals</th>
            <th>Trend</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mercury Bank</td>
            <td className={styles.positive}>72%</td>
            <td>8</td>
            <td><span className={styles.trendUp}>↑ +5%</span></td>
          </tr>
          <tr>
            <td>Neobanks Direct</td>
            <td className={styles.neutral}>64%</td>
            <td>14</td>
            <td><span className={styles.trendFlat}>→ Stable</span></td>
          </tr>
          <tr>
            <td>FinTech Plus</td>
            <td className={styles.negative}>58%</td>
            <td>21</td>
            <td><span className={styles.trendDown}>↓ -3%</span></td>
          </tr>
          <tr>
            <td>Capital One</td>
            <td className={styles.neutral}>61%</td>
            <td>17</td>
            <td><span className={styles.trendFlat}>→ Stable</span></td>
          </tr>
        </tbody>
      </table>
    </motion.div>
  </div>
)

// Executive View Explanation Component
const ExecutiveExplanation = () => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className={styles.explanationPanel}
  >
    Get a <span className={styles.keywordHighlight}>bird's-eye view</span> of your competitive landscape. Track <span className={styles.keywordHighlight}>market position</span>, <span className={styles.keywordHighlight}>win rates</span>, and <span className={styles.keywordHighlight}>share trends</span> to make strategic decisions. See how you stack up against the industry.
  </motion.div>
)

// Product Manager View Component
const ProductManagerView = () => (
  <div className={styles.roleContent}>
    <div className={styles.viewHeader}>
      <h3 className={styles.viewTitle}>Product Manager Dashboard</h3>
      <p className={styles.viewSubtitle}>Feature Comparison & Roadmap Intelligence</p>
    </div>

    <div className={styles.metricsGrid}>
      <motion.div
        className={styles.metricCard}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0 }}
      >
        <div className={styles.metricIcon}><AlertCircle size={24} /></div>
        <div className={styles.metricContent}>
          <div className={styles.metricLabel}>Feature Gaps</div>
          <div className={styles.metricValue}><AnimatedNumber value={8} duration={1.2} /></div>
          <div className={styles.metricSubtext}>key features behind</div>
        </div>
      </motion.div>

      <motion.div
        className={styles.metricCard}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className={styles.metricIcon}><DollarSign size={24} /></div>
        <div className={styles.metricContent}>
          <div className={styles.metricLabel}>Pricing Gap</div>
          <div className={styles.metricValue}><AnimatedNumber value={12} duration={1.2} />%</div>
          <div className={styles.metricSubtext}>variance from leaders</div>
        </div>
      </motion.div>

      <motion.div
        className={styles.metricCard}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className={styles.metricIcon}><Clock size={24} /></div>
        <div className={styles.metricContent}>
          <div className={styles.metricLabel}>Updates Detected</div>
          <div className={styles.metricValue}><AnimatedNumber value={23} duration={1.2} /></div>
          <div className={styles.metricSubtext}>this month</div>
        </div>
      </motion.div>
    </div>

    {/* Feature Comparison Table */}
    <motion.div
      className={styles.tableSection}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h4 className={styles.tableTitle}>Feature Comparison Matrix</h4>
      <table className={styles.featureTable}>
        <thead>
          <tr>
            <th>Feature</th>
            <th>Us</th>
            <th>Mercury</th>
            <th>Neobanks</th>
            <th>FinTech</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rate Comparison</td>
            <td className={styles.checkmark}>✓</td>
            <td className={styles.checkmark}>✓</td>
            <td>✗</td>
            <td className={styles.checkmark}>✓</td>
          </tr>
          <tr>
            <td>Mobile App</td>
            <td className={styles.checkmark}>✓</td>
            <td className={styles.checkmark}>✓</td>
            <td className={styles.checkmark}>✓</td>
            <td className={styles.checkmark}>✓</td>
          </tr>
          <tr>
            <td>AI Recommendations</td>
            <td className={styles.checkmark}>✓</td>
            <td>✗</td>
            <td className={styles.checkmark}>✓</td>
            <td className={styles.checkmark}>✓</td>
          </tr>
          <tr>
            <td>Real-time Alerts</td>
            <td className={styles.checkmark}>✓</td>
            <td className={styles.checkmark}>✓</td>
            <td>✗</td>
            <td className={styles.checkmark}>✓</td>
          </tr>
          <tr>
            <td>API Access</td>
            <td className={styles.checkmark}>✓</td>
            <td>✗</td>
            <td className={styles.checkmark}>✓</td>
            <td>✗</td>
          </tr>
        </tbody>
      </table>
    </motion.div>
  </div>
)

// Product Manager Explanation Component
const ProductManagerExplanation = () => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className={styles.explanationPanel}
  >
    Benchmark your <span className={styles.keywordHighlight}>product roadmap</span> against competitors. Identify <span className={styles.keywordHighlight}>feature gaps</span>, <span className={styles.keywordHighlight}>pricing differences</span>, and <span className={styles.keywordHighlight}>upcoming launches</span> to stay ahead in your market.
  </motion.div>
)

// Marketing View Component
const MarketingView = () => (
  <div className={styles.roleContent}>
    <div className={styles.viewHeader}>
      <h3 className={styles.viewTitle}>Marketing Dashboard</h3>
      <p className={styles.viewSubtitle}>Campaign & Promotion Intelligence</p>
    </div>

    <div className={styles.metricsGrid}>
      <motion.div
        className={styles.metricCard}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0 }}
      >
        <div className={styles.metricIcon}><BarChart3 size={24} /></div>
        <div className={styles.metricContent}>
          <div className={styles.metricLabel}>Active Campaigns</div>
          <div className={styles.metricValue}><AnimatedNumber value={12} duration={1.2} /></div>
          <div className={styles.metricSubtext}>competitors running</div>
        </div>
      </motion.div>

      <motion.div
        className={styles.metricCard}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className={styles.metricIcon}><Users size={24} /></div>
        <div className={styles.metricContent}>
          <div className={styles.metricLabel}>Campaign Overlap</div>
          <div className={styles.metricValue}><AnimatedNumber value={34} duration={1.2} />%</div>
          <div className={styles.metricSubtext}>targeting same segments</div>
        </div>
      </motion.div>

      <motion.div
        className={styles.metricCard}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className={styles.metricIcon}><Megaphone size={24} /></div>
        <div className={styles.metricContent}>
          <div className={styles.metricLabel}>Messaging Variants</div>
          <div className={styles.metricValue}><AnimatedNumber value={56} duration={1.2} /></div>
          <div className={styles.metricSubtext}>detected this month</div>
        </div>
      </motion.div>
    </div>

    {/* Campaign Tracker Table */}
    <motion.div
      className={styles.tableSection}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h4 className={styles.tableTitle}>Active Campaign Tracker</h4>
      <table className={styles.campaignTable}>
        <thead>
          <tr>
            <th>Campaign</th>
            <th>Competitor</th>
            <th>Type</th>
            <th>Duration</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>"Get $500 Cash"</td>
            <td>Mercury Bank</td>
            <td>Sign-up Bonus</td>
            <td>Ongoing</td>
            <td><span className={styles.statusActive}>Active</span></td>
          </tr>
          <tr>
            <td>"Save More Today"</td>
            <td>Neobanks Direct</td>
            <td>Rate Promotion</td>
            <td>30 days</td>
            <td><span className={styles.statusActive}>Active</span></td>
          </tr>
          <tr>
            <td>"Back to School"</td>
            <td>FinTech Plus</td>
            <td>Limited Offer</td>
            <td>15 days</td>
            <td><span className={styles.statusEnding}>Ending</span></td>
          </tr>
          <tr>
            <td>"Holiday Special"</td>
            <td>Capital One</td>
            <td>Seasonal</td>
            <td>45 days</td>
            <td><span className={styles.statusActive}>Active</span></td>
          </tr>
        </tbody>
      </table>
    </motion.div>
  </div>
)

// Marketing Explanation Component
const MarketingExplanation = () => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className={styles.explanationPanel}
  >
    Monitor <span className={styles.keywordHighlight}>competitor campaigns</span> and <span className={styles.keywordHighlight}>messaging</span> in real-time. Discover what works, avoid redundant tactics, and <span className={styles.keywordHighlight}>own messaging gaps</span> to win market share.
  </motion.div>
)

// Front-Line View Component
const FrontLineView = () => (
  <div className={styles.roleContent}>
    <div className={styles.viewHeader}>
      <h3 className={styles.viewTitle}>Front-Line Dashboard</h3>
      <p className={styles.viewSubtitle}>Sales & Support Quick Reference</p>
    </div>

    <div className={styles.metricsGrid}>
      <motion.div
        className={styles.metricCard}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0 }}
      >
        <div className={styles.metricIcon}><TrendingUp size={24} /></div>
        <div className={styles.metricContent}>
          <div className={styles.metricLabel}>Rate Updates</div>
          <div className={styles.metricValue}><AnimatedNumber value={14} duration={1.2} /></div>
          <div className={styles.metricSubtext}>this week</div>
        </div>
      </motion.div>

      <motion.div
        className={styles.metricCard}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className={styles.metricIcon}><AlertCircle size={24} /></div>
        <div className={styles.metricContent}>
          <div className={styles.metricLabel}>Objections Tracked</div>
          <div className={styles.metricValue}><AnimatedNumber value={89} duration={1.2} /></div>
          <div className={styles.metricSubtext}>patterns identified</div>
        </div>
      </motion.div>

      <motion.div
        className={styles.metricCard}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className={styles.metricIcon}><Users size={24} /></div>
        <div className={styles.metricContent}>
          <div className={styles.metricLabel}>Win-Back Opportunities</div>
          <div className={styles.metricValue}><AnimatedNumber value={127} duration={1.2} /></div>
          <div className={styles.metricSubtext}>identified</div>
        </div>
      </motion.div>
    </div>

    {/* Rate Comparison Quick Tool */}
    <motion.div
      className={styles.tableSection}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h4 className={styles.tableTitle}>Rate Comparison Tool</h4>
      <table className={styles.rateTable}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Us</th>
            <th>Mercury</th>
            <th>Advantage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Savings Account</td>
            <td className={styles.rateHighlight}>4.85%</td>
            <td>4.50%</td>
            <td className={styles.advantage}>+0.35%</td>
          </tr>
          <tr>
            <td>Money Market</td>
            <td className={styles.rateHighlight}>5.02%</td>
            <td>4.95%</td>
            <td className={styles.advantage}>+0.07%</td>
          </tr>
          <tr>
            <td>CD (12-month)</td>
            <td>5.35%</td>
            <td className={styles.rateHighlight}>5.40%</td>
            <td>-0.05%</td>
          </tr>
          <tr>
            <td>Auto Loan</td>
            <td className={styles.rateHighlight}>6.29%</td>
            <td>6.50%</td>
            <td className={styles.advantage}>+0.21%</td>
          </tr>
        </tbody>
      </table>
    </motion.div>
  </div>
)

// Front-Line Explanation Component
const FrontLineExplanation = () => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className={styles.explanationPanel}
  >
    Arm your <span className={styles.keywordHighlight}>sales and support teams</span> with <span className={styles.keywordHighlight}>instant competitive intel</span>. Answer objections, compare rates, and <span className={styles.keywordHighlight}>close deals faster</span> with real-time competitive advantage.
  </motion.div>
)

function IntelligenceDashboard() {
  const [activeRole, setActiveRole] = useState<'executive' | 'product' | 'marketing' | 'frontline'>('executive')

  const roles = [
    { id: 'executive' as const, label: 'Executive', icon: <Briefcase size={28} />, description: 'C-Suite & Board-Level' },
    { id: 'product' as const, label: 'Product Manager', icon: <Settings size={28} />, description: 'Product & Development' },
    { id: 'marketing' as const, label: 'Marketing', icon: <Megaphone size={28} />, description: 'Marketing & Growth' },
    { id: 'frontline' as const, label: 'Front-Line', icon: <Headphones size={28} />, description: 'Sales & Support' }
  ]

  const renderContent = () => {
    switch(activeRole) {
      case 'executive':
        return <ExecutiveView />
      case 'product':
        return <ProductManagerView />
      case 'marketing':
        return <MarketingView />
      case 'frontline':
        return <FrontLineView />
      default:
        return <ExecutiveView />
    }
  }

  const renderExplanation = () => {
    switch(activeRole) {
      case 'executive':
        return <ExecutiveExplanation />
      case 'product':
        return <ProductManagerExplanation />
      case 'marketing':
        return <MarketingExplanation />
      case 'frontline':
        return <FrontLineExplanation />
      default:
        return <ExecutiveExplanation />
    }
  }

  return (
    <section className={styles.dashboardSection}>
      {/* Section Title */}
      <div className={styles.titleContainer}>
        <motion.h2
          className={styles.mainTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Competitive Intelligence Dashboard
        </motion.h2>
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Your command center for competitive strategy, customized for every team.
        </motion.p>
      </div>

      {/* Role Tabs */}
      <div className={styles.hiddenRoles}></div>

      {/* Dashboard Container with 10/70/20 Layout */}
      <motion.div
        className={styles.dashboardContainer}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        {/* 10/70/20 Layout Wrapper */}
        <div className={styles.layoutWrapper}>
          {/* 10% - Role Buttons (Left) */}
          <div className={styles.rolesColumn}>
            <motion.div
              className={styles.rolesTabs}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {roles.map((role) => (
                <motion.button
                  key={role.id}
                  className={`${styles.roleTab} ${activeRole === role.id ? styles.roleTabActive : ''}`}
                  onClick={() => setActiveRole(role.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  title={role.label}
                >
                  <div className={styles.roleIconWrapper}>
                    <span className={styles.roleIcon}>{role.icon}</span>
                  </div>
                  <div className={styles.roleTextWrapper}>
                    <div className={styles.roleLabel}>{role.label}</div>
                    <div className={styles.roleDescription}>{role.description}</div>
                  </div>
                  
                  {/* Active indicator line */}
                  {activeRole === role.id && (
                    <motion.div
                      className={styles.activeIndicator}
                      layoutId="activeIndicator"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </motion.div>
          </div>

          {/* 70% - Dashboard */}
          <div className={styles.dashboardColumn}>
            {/* Dashboard Mockup */}
            <div className={styles.dashboardMockup}>
              {/* Header Bar */}
              <div className={styles.dashboardHeader}>
                <div className={styles.headerBrand}>
                  <div className={styles.brandLogo}></div>
                  <span className={styles.brandText}>Competitive Intelligence Dashboard</span>
                </div>
                <div className={styles.headerActions}>
                  <div className={styles.actionButton}></div>
                  <div className={styles.actionButton}></div>
                  <div className={styles.actionButton}></div>
                </div>
              </div>

              {/* Main Dashboard Content */}
              <div className={styles.mainContent}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeRole}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                  >
                    {renderContent()}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Footer Bar */}
              <div className={styles.dashboardFooter}>
                <div className={styles.footerStatus}>Last updated: 2 minutes ago</div>
                <div className={styles.footerIndicators}>
                  <motion.div
                    className={styles.liveIndicator}
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  ></motion.div>
                  <span>Live</span>
                </div>
              </div>
            </div>
          </div>

          {/* 20% - Explanation Panel (Right) */}
          <div className={styles.explanationColumn}>
            <AnimatePresence mode="wait">
              {renderExplanation()}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default IntelligenceDashboard
