import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { ReferralEntryPage } from './ReferralEntryPage'
import { WelcomePage } from './WelcomePage'
import { TermsPage } from './TermsPage'
import { AnalyticsPage } from './AnalyticsPage'
import { WhatsNewPage } from './WhatsNewPage'

storiesOf('Modules/Onboarding', module)
  .add('Referral Entry Page', () => {
    return <ReferralEntryPage onSubmitCode={action('submit')} onNext={action('next')} />
  })
  .add('Welcome Page', () => {
    return <WelcomePage onNext={action('login')} />
  })
  .add('Terms Page', () => {
    return <TermsPage onAgree={action('agree')} />
  })
  .add(`What's New Page`, () => {
    return <WhatsNewPage onNext={action('ok')} />
  })
  .add('Analytics Page', () => {
    return <AnalyticsPage onNext={action('next')} />
  })
