# Firebase Migration Guide

## ✅ Configuration Files Updated

All configuration files have been updated for the new Firebase account:

- **Gmail**: accizardlucbanofficial22@gmail.com
- **Project Name**: accizard-lucban-official
- **Site Name**: accizard-lucban-landing-page

### Files Updated:

1. **`.firebaserc`** - Updated project ID to `accizard-lucban-official`
2. **`firebase.json`** - Updated site name to `accizard-lucban-landing-page`
3. **`functions/server.js`** - Updated CORS origin to new site URL
4. **`index_tagalog.html`** - Updated Firebase function URLs
5. **`FIREBASE-FUNCTION-SETUP.md`** - Updated documentation

---

## 📋 Pre-Migration Checklist

Before starting the migration, ensure you have:

- [ ] Access to the new Firebase account (accizardlucbanofficial22@gmail.com)
- [ ] Firebase CLI installed and logged in to the new account
- [ ] The new Firebase project created with name: `accizard-lucban-official`
- [ ] Firebase Hosting site created with name: `accizard-lucban-landing-page`
- [ ] Firebase Storage enabled
- [ ] Firestore Database enabled
- [ ] Cloud Functions enabled (Blaze plan required)

---

## 🚀 Migration Steps

### Step 1: Login to New Firebase Account

```bash
firebase login
```

Make sure you're logged in with: **accizardlucbanofficial22@gmail.com**

### Step 2: Verify Project Connection

```bash
firebase projects:list
```

Verify that `accizard-lucban-official` appears in the list.

### Step 3: Set the Active Project

```bash
firebase use accizard-lucban-official
```

### Step 4: Initialize Firebase Services (if needed)

If this is a fresh project, you may need to initialize services:

```bash
# Initialize Firestore (if not already done)
firebase init firestore

# Initialize Functions (if not already done)
firebase init functions
```

### Step 5: Deploy Firebase Functions

Navigate to the functions directory and deploy:

```bash
cd functions
npm install  # Install dependencies if needed
cd ..
firebase deploy --only functions
```

**Expected Function URLs after deployment:**
- Contact Form: `https://us-central1-accizard-lucban-official.cloudfunctions.net/sendContactEmail`
- Get News: `https://us-central1-accizard-lucban-official.cloudfunctions.net/getNews`
- Download APK: `https://us-central1-accizard-lucban-official.cloudfunctions.net/downloadApk`
- Manual Fetch News: `https://us-central1-accizard-lucban-official.cloudfunctions.net/manualFetchNews`

### Step 6: Deploy Firebase Hosting

```bash
firebase deploy --only hosting
```

Your site will be available at:
- **Primary URL**: `https://accizard-lucban-landing-page.web.app`
- **Custom Domain** (if configured): Your custom domain

### Step 7: Deploy Storage Rules

```bash
firebase deploy --only storage
```

### Step 8: Verify Function URLs

After deployment, verify the actual function URLs in the Firebase Console:
1. Go to Firebase Console → Functions
2. Check the actual URLs for each function
3. Update `index_tagalog.html` if the URLs differ from expected format

---

## 🔧 Post-Migration Configuration

### 1. Environment Variables

If you're using environment variables in Cloud Functions, set them:

```bash
firebase functions:config:set newsdata.apikey="YOUR_API_KEY"
```

Or use `.env` file in the `functions` directory (already configured).

### 2. CORS Configuration

The CORS settings in `functions/server.js` have been updated to allow:
- `https://accizard-lucban-landing-page.web.app`
- `http://localhost:3000` (for local development)

### 3. Storage Rules

Storage rules are configured in `storage.rules`. Deploy them with:
```bash
firebase deploy --only storage
```

### 4. Firestore Rules (if applicable)

If you have Firestore rules, deploy them:
```bash
firebase deploy --only firestore:rules
```

---

## 📝 Important Notes

### Function URLs

The function URLs in `index_tagalog.html` have been updated to the expected format:
- `https://us-central1-accizard-lucban-official.cloudfunctions.net/getNews`
- `https://us-central1-accizard-lucban-official.cloudfunctions.net/sendContactEmail`

**Note**: If Firebase uses Cloud Run instead of Cloud Functions, the URLs may differ. After deployment, check the Firebase Console and update the URLs in `index_tagalog.html` if needed.

### Email Configuration

The contact form uses Gmail SMTP. The email configuration in `functions/index.js` uses:
- From: `accizardlucban@gmail.com`
- To: `accizardlucban@gmail.com`

If you need to change this, update the email addresses in `functions/index.js` (line 697-705).

### News API Key

The NewsData.io API key is configured in `functions/index.js`. Make sure it's valid and has sufficient quota.

---

## 🧪 Testing After Migration

1. **Test Hosting**: Visit `https://accizard-lucban-landing-page.web.app` and verify the site loads correctly.

2. **Test Contact Form**: 
   - Submit a test message through the contact form
   - Verify email is received at `accizardlucban@gmail.com`
   - Check Firestore for the submission record

3. **Test News Function**:
   - Visit the news section on the website
   - Verify news articles load correctly
   - Check Cloud Storage for `news.json` file

4. **Test Functions**:
   ```bash
   # Test getNews function
   curl https://us-central1-accizard-lucban-official.cloudfunctions.net/getNews
   
   # Test sendContactEmail (POST request)
   curl -X POST https://us-central1-accizard-lucban-official.cloudfunctions.net/sendContactEmail \
     -H "Content-Type: application/json" \
     -d '{"firstName":"Test","lastName":"User","email":"test@example.com","subject":"Test","message":"Test message"}'
   ```

---

## 🔄 Data Migration (if needed)

If you need to migrate data from the old Firebase project:

1. **Firestore Data**: Export from old project, import to new project
2. **Storage Files**: Download from old project, upload to new project
3. **User Authentication**: Users will need to re-register (if using Firebase Auth)

---

## 🆘 Troubleshooting

### Functions Not Deploying
- Ensure you're on the Blaze plan (required for Cloud Functions)
- Check that billing is enabled
- Verify Node.js version compatibility

### CORS Errors
- Verify the CORS origin in `functions/server.js` matches your site URL
- Check that functions are deployed correctly

### Storage Access Denied
- Verify storage rules are deployed: `firebase deploy --only storage`
- Check that the bucket exists in the new project

### Function URLs Not Working
- Check Firebase Console for actual function URLs
- Verify functions are deployed: `firebase functions:list`
- Check function logs: `firebase functions:log`

---

## 📞 Support

If you encounter issues during migration:
1. Check Firebase Console for error messages
2. Review function logs: `firebase functions:log`
3. Verify all configuration files are correct
4. Ensure all services are enabled in the new project

---

## ✅ Migration Complete Checklist

- [ ] All configuration files updated
- [ ] Logged in to new Firebase account
- [ ] Project connected and active
- [ ] Functions deployed successfully
- [ ] Hosting deployed successfully
- [ ] Storage rules deployed
- [ ] Function URLs verified and updated (if needed)
- [ ] Contact form tested and working
- [ ] News function tested and working
- [ ] Site accessible at new URL
- [ ] All features working correctly

---

**Last Updated**: Migration configuration completed
**Project**: accizard-lucban-official
**Site**: accizard-lucban-landing-page

