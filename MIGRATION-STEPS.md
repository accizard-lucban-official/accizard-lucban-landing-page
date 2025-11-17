# Quick Migration Steps - Follow These Commands

## Step 1: Open Command Prompt or PowerShell
- Press `Windows Key + R`
- Type `cmd` or `powershell` and press Enter
- Navigate to your project folder:
  ```
  cd "C:\Users\admin\Desktop\Landing Page"
  ```

## Step 2: Login to Firebase
Run this command:
```
firebase login
```
- This will open your browser
- Login with: **accizardlucbanofficial22@gmail.com**
- Allow Firebase CLI access
- Return to the command prompt when done

## Step 3: Verify Project Exists
Check if your project is available:
```
firebase projects:list
```
- Look for `accizard-lucban-official` in the list
- If it's NOT there, you need to create it first at: https://console.firebase.google.com/

## Step 4: Set Active Project
```
firebase use accizard-lucban-official
```
- This connects your local project to the Firebase project

## Step 5: Install Function Dependencies (if needed)
```
cd functions
npm install
cd ..
```
- This installs required packages for Cloud Functions

## Step 6: Deploy Functions
```
firebase deploy --only functions
```
- This will take a few minutes
- Wait for "Deploy complete!" message

## Step 7: Deploy Hosting
```
firebase deploy --only hosting
```
- This uploads your website files
- Wait for "Deploy complete!" message

## Step 8: Deploy Storage Rules
```
firebase deploy --only storage
```
- This sets up storage permissions

## Step 9: Verify Everything Works
1. Visit: https://accizard-lucban-landing-page.web.app
2. Test the contact form
3. Check the news section

## ✅ Done!

Your site should now be live at:
- **https://accizard-lucban-landing-page.web.app**

---

## Troubleshooting

### If "firebase: command not found"
- Install Firebase CLI: `npm install -g firebase-tools`
- Then try `firebase login` again

### If project doesn't exist
1. Go to: https://console.firebase.google.com/
2. Click "Add project"
3. Name it: `accizard-lucban-official`
4. Follow the setup wizard
5. Then continue with Step 4 above

### If deployment fails
- Check that you're logged in: `firebase login:list`
- Verify project: `firebase use accizard-lucban-official`
- Check error messages in the console

