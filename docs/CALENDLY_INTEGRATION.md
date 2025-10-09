# Calendly Integration Guide

This document explains how to integrate Calendly with the consultation booking system.

## Current Implementation

The consultation modal is already set up and ready for Calendly integration. The system collects user information and is prepared to pass it to Calendly for scheduling.

## Files Involved

- `components/ConsultationModal/index.tsx` - The main consultation form modal
- `utils/calendly.ts` - Calendly integration utilities
- `contexts/ConsultationContext.tsx` - State management for the modal
- `components/ConsultationButton/index.tsx` - Button that triggers the modal

## Integration Steps

### Step 1: Get Your Calendly URL

1. Sign up for Calendly at [calendly.com](https://calendly.com)
2. Create a consultation event type
3. Get your Calendly URL (e.g., `https://calendly.com/your-username/consultation`)

### Step 2: Configure Calendly Settings

Update the configuration in `utils/calendly.ts`:

```typescript
export const CALENDLY_CONFIG = {
  // Replace with your actual Calendly URL
  CALENDLY_URL: "https://calendly.com/your-username/consultation",

  // Enable pre-filling user data
  PREFILL_DATA: true,

  // Customize Calendly appearance
  EMBED_SETTINGS: {
    hideEventTypeDetails: false,
    hideLandingPageDetails: false,
    primaryColor: "00d4aa", // Lime green matching your brand
    textColor: "4d4d4d",
  },
};
```

### Step 3: Enable Calendly Integration

In `components/ConsultationModal/index.tsx`, uncomment the Calendly integration line:

```typescript
// Change this:
// const result = await handleCalendlyIntegration(userData);

// To this:
const result = await handleCalendlyIntegration(userData);
```

### Step 4: Add Calendly Script (Optional)

If you want to use Calendly's popup widget instead of redirecting, add the Calendly script to your `app/layout.tsx`:

```tsx
// Add this to the <head> section
<script
  src="https://assets.calendly.com/assets/external/widget.js"
  async
></script>
```

## Integration Options

### Option 1: Popup Widget (Recommended)

The current implementation uses Calendly's popup widget. This keeps users on your site while showing the Calendly interface.

**Pros:**

- Users stay on your website
- Better user experience
- Seamless integration

**Cons:**

- Requires loading Calendly script
- Slightly more complex setup

### Option 2: Direct Redirect

For a simpler approach, you can redirect users directly to Calendly:

```typescript
// In utils/calendly.ts, modify handleCalendlyIntegration to use:
redirectToCalendly(userData);
```

**Pros:**

- Simple implementation
- No additional scripts needed
- Always up-to-date with Calendly features

**Cons:**

- Users leave your website
- Less control over the experience

## User Data Flow

The consultation form collects:

- First Name (required)
- Last Name (required)
- Email (required)
- Phone (optional)
- Company (optional)
- Message/Requirements (required)

This data is passed to Calendly and pre-fills the scheduling form.

## Customization Options

### Pre-fill Data

Calendly can pre-fill user information:

```typescript
// In utils/calendly.ts
const buildCalendlyUrlWithPrefill = (userData: CalendlyUserData): string => {
  const params = new URLSearchParams();

  if (userData.firstName)
    params.append("name", `${userData.firstName} ${userData.lastName}`);
  if (userData.email) params.append("email", userData.email);
  if (userData.phone) params.append("a1", userData.phone);
  if (userData.company) params.append("a2", userData.company);
  if (userData.message) params.append("a3", userData.message);

  return `${CALENDLY_CONFIG.CALENDLY_URL}?${params.toString()}`;
};
```

### Styling

Customize Calendly's appearance to match your brand:

```typescript
EMBED_SETTINGS: {
  primaryColor: '00d4aa',    // Lime green
  textColor: '4d4d4d',       // Dark gray
  hideEventTypeDetails: false,
  hideLandingPageDetails: false,
}
```

## Testing

1. Fill out the consultation form
2. Click "Schedule Free Consultation"
3. Verify that Calendly opens with pre-filled data
4. Test the scheduling flow end-to-end

## Troubleshooting

### Common Issues

1. **Calendly not loading**: Ensure the script is included in your HTML
2. **Pre-fill not working**: Check that your Calendly event type allows custom fields
3. **Styling issues**: Verify color codes are in the correct format (without #)

### Debug Mode

Enable debug logging by checking the browser console. The integration logs user data and any errors.

## Next Steps

1. Set up your Calendly account and event types
2. Update the configuration in `utils/calendly.ts`
3. Enable the integration in `components/ConsultationModal/index.tsx`
4. Test the complete flow
5. Customize styling and behavior as needed

## Support

For Calendly-specific issues, refer to:

- [Calendly Developer Documentation](https://developer.calendly.com/)
- [Calendly Embed Options](https://help.calendly.com/hc/en-us/articles/360020052833-Embed-options-overview)
