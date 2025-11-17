# How to Fix the Permission Error

## The Problem
You're getting: "Missing permissions required for functions deploy"

## The Solution
You need to add the "Service Account User" role to your account.

## Step-by-Step Instructions

### Method 1: Through Firebase Console (EASIEST - Recommended)

1. **Go to Firebase Console:**
   - Open: https://console.firebase.google.com/project/accizard-lucban-official-65ba3
   - Make sure you're logged in with: **accizardlucbanofficial22@gmail.com**

2. **Navigate to Project Settings:**
   - Click the gear icon (⚙️) next to "Project Overview" in the left sidebar
   - Select "Project settings"

3. **Go to IAM & Admin:**
   - Scroll down to find "Your project" section
   - Click "Cloud resource location" or look for a link to "Google Cloud Console"
   - OR directly go to: https://console.cloud.google.com/iam-admin/iam?project=accizard-lucban

### Method 2: Direct Google Cloud Console Access

**If you see a permissions error (like in your screenshot):**

1. **First, request the "Role Viewer" permission:**
   - Click the blue "Request role" button you see on the page
   - This will send a request to grant you basic access

2. **OR try accessing through Firebase:**
   - Go to: https://console.firebase.google.com/project/accizard-lucban-official-65ba3/settings/iam
   - This should show your IAM members

### Step 2: Find Your Account
Once you can access the IAM page, look for your email address: **accizardlucbanofficial22@gmail.com**

**Note:** The GCP project ID is `accizard-lucban` (even though your Firebase project ID is `accizard-lucban-official-65ba3`)

### Step 3: Edit Your Permissions
1. Click the **pencil icon (✏️)** or **"Edit"** button next to your email
2. OR click on your email address to open the edit panel

### Step 4: Add the Role
1. Look for a button that says:
   - **"ADD ANOTHER ROLE"**
   - **"+ ADD"**
   - **"GRANT ACCESS"**
   - Or a **"+"** button
2. Click it
3. In the search box that appears, type: **Service Account User**
4. Select: **Service Account User** (or **roles/iam.serviceAccountUser**)
5. Click **"SAVE"** or **"UPDATE"**

### Step 5: Wait a Few Seconds
The permissions may take 10-30 seconds to propagate.

### Step 6: Try Deploying Again
Go back to your Command Prompt and run:
```
firebase deploy --only functions
```

## Alternative: If You're the Project Owner
If you're the project owner but still can't see the "ADD" button:

1. Make sure you're viewing the correct project
2. Try refreshing the page
3. Check if you have "Owner" or "Editor" role already
4. If you're the only user, you might need to enable APIs first:
   - Go to: https://console.cloud.google.com/apis/library?project=accizard-lucban
   - Enable: "Cloud Functions API" and "Cloud Build API"

## Still Having Issues?
If you can't find the "ADD" button or the role:
1. Make sure you're logged into the correct Google account
2. Verify you have access to the project
3. Check if you need to be added as a project member first

