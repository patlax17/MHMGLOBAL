# Mental Health Matters Global - Website

Production-ready website for Mental Health Matters Global, a nonprofit advancing mental health equity through science and community-led healing.

## Project Structure

```
MHMGLOBAL/
├── index.html              # Homepage
├── who-we-are.html         # Mission, vision, healing justice framework
├── leadership.html         # Dr. Ikenna Achebe bio & credentials
├── initiatives.html        # SOS Project, WMHI, Healing Circles
├── trainings.html          # Corporate training catalog & request form
├── events.html             # Events calendar & RSVP system
├── impact.html             # Metrics, outcomes, annual reports
├── resources.html          # Crisis support & downloadable toolkits
├── get-involved.html       # Donation module, volunteer, sponsorship
├── contact.html            # Contact form & information
├── styles.css              # Core design system
├── pages.css               # Page-specific styles
├── forms.css               # Form & donation module styles
├── script.js               # Main JavaScript (Quick Exit, counters, nav)
├── forms.js                # Form handling & validation
└── assets/
    └── logo.png            # MHM Global logo
```

## Features Implemented

### Safety & Accessibility
- ✅ Quick Exit button (desktop: single click, mobile: triple-tap)
- ✅ Crisis support prominently displayed
- ✅ Mobile sticky footer bar (Get Support, Donate, Trainings)
- ✅ 7:1 minimum contrast ratio
- ✅ Semantic HTML & ARIA labels
- ✅ Mobile-first responsive design

### Conversion Flows
- ✅ **Donation Module**: Givebutter-style with one-time/monthly toggle, suggested amounts, payment method placeholders
- ✅ **Training Requests**: Full proposal form with email capture & CRM tagging
- ✅ **Event RSVP**: Eventbrite-style registration placeholders
- ✅ **Toolkit Downloads**: Email capture for PDF resources
- ✅ **Volunteer Applications**: MHM Envoy signup form

### Technical Features
- ✅ Live impact counters with animation
- ✅ Form validation & spam prevention (honeypot)
- ✅ GA4 conversion tracking placeholders
- ✅ Schema.org nonprofit markup
- ✅ Mobile menu toggle
- ✅ Smooth scroll navigation
- ✅ Email automation placeholders

## Design System

**Color Palette:**
- Navy Blue: #001F3F (authority)
- Sage Green: #87A96B (healing)
- Warm Ochre: #CC7722 (urgency/crisis)
- White: #FFFFFF
- Slate Gray: #708090

**Typography:**
- Headlines: Lora (serif) - clinical authority
- Body: Poppins (sans-serif) - accessible empathy

**Identity:** Academic-Community Hybrid (Clinical Authority + Healing Justice)

## Integration Placeholders

The following integrations are ready for deployment:

1. **Givebutter** (Donations) - `get-involved.html#donate`
2. **Eventbrite/RallyUp** (Events) - `events.html`
3. **Mailchimp/Flodesk** (Newsletter) - Footer & `contact.html`
4. **HubSpot** (Training CRM) - `forms.js` line 15
5. **Google Analytics 4** - `script.js` line 78
6. **reCAPTCHA** - All forms (honeypot currently active)

## CRM Tagging System

All form submissions are tagged for segmentation:
- `training_inquiry` - Training proposal requests
- `donor` - Donation completions
- `volunteer_envoy` - Envoy applications
- `toolkit_download` - Resource downloads
- `media_request` - Press inquiries
- `event_rsvp` - Event registrations
- `general_contact` - Contact form submissions

## Deployment Instructions

### Option 1: Static Hosting (Recommended for MVP)
1. Upload all files to Netlify, Vercel, or GitHub Pages
2. Set custom domain
3. Enable SSL
4. Add environment variables for API keys (when integrations are added)

### Option 2: With CMS (For Non-Technical Updates)
1. Use Netlify CMS or Forestry.io
2. Mark editable sections:
   - Home hero text
   - Impact counters
   - Events list
   - Training catalog
   - Toolkit resources

### Performance Optimization
- Optimize logo: Convert to SVG or use PNG @2x (max 100KB)
- Enable CDN (Cloudflare recommended)
- Add lazy loading for images
- Minify CSS/JS for production
- Target: LCP < 2.5s, FID < 100ms, CLS < 0.1

## Content Update Cadence

**Weekly:**
- Events calendar review
- RSVP confirmations

**Monthly:**
- Impact counter updates
- Newsletter content

**Quarterly:**
- Content audit
- Training catalog refresh
- Annual report updates

## SEO Optimization

All pages include:
- Descriptive title tags
- Meta descriptions
- Semantic heading hierarchy
- Schema.org nonprofit markup
- Open Graph tags

**Primary Keywords:**
- mental health equity nonprofit
- violence prevention program
- corporate mental health training
- safeTALK training
- ASIST training
- QPR training
- community trauma recovery

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile Safari (iOS 13+)
- Chrome Mobile (Android 8+)

## Governance Notes

**Editable Content Blocks:**
- Home: Hero text, impact counters, trust bar affiliations
- Events: Event listings (structured data)
- Trainings: Course catalog table
- Resources: Toolkit descriptions
- Get Involved: Sponsorship tiers

**Privacy & Security:**
- SSL required (enforce HTTPS)
- Cookie/GDPR banner needed for EU visitors
- HIPAA-capable forms if collecting health data
- Daily backups recommended
- Spam protection active (honeypot + reCAPTCHA ready)

## Next Steps for Production

1. **Add Logo**: Place optimized logo in `/assets/logo.png`
2. **Configure Integrations**:
   - Set up Givebutter account & embed code
   - Connect Eventbrite API
   - Add Mailchimp API key
   - Install GA4 tracking code
3. **Test Forms**: Verify all form submissions route correctly
4. **Performance Audit**: Run Lighthouse, optimize images
5. **Accessibility Audit**: Test with screen readers
6. **Legal**: Add Privacy Policy & Terms of Service pages
7. **Launch**: Deploy to production domain

## Support

For questions about implementation or customization, refer to inline code comments or contact the development team.

---

**Built with:** HTML5, CSS3, Vanilla JavaScript
**Framework:** None (lightweight, maintainable)
**License:** Proprietary - Mental Health Matters Global
**Version:** 1.0.0
**Last Updated:** February 2026
