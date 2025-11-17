# How to Fix the Permission Error

## The Problem
You're getting: "Missing permissions required for functions deploy"

## The Solution
You need to add the "Service Account User" role to your account.

## Step-by-Step Instructions

### Step 1: Go to Google Cloud IAM Console
Open this URL in your browser:
**https://console.cloud.google.com/iam-admin/iam?project=accizard-lucban-official-65ba3**

(If that doesn't work, try: https://console.cloud.google.com/iam-admin/iam?project=accizard-lucban)

### Step 2: Find Your Account
Look for your email address: **accizardlucbanofficial22@gmail.com**

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
   - Go to: https://console.cloud.google.com/apis/library?project=accizard-lucban-official-65ba3
   - Enable: "Cloud Functions API" and "Cloud Build API"

## Still Having Issues?
If you can't find the "ADD" button or the role:
1. Make sure you're logged into the correct Google account
2. Verify you have access to the project
3. Check if you need to be added as a project member first

