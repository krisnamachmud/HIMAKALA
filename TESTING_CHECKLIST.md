# 🧪 Admin Panel - Testing Checklist

## Setup Testing Environment

- [ ] Dev server running (`npm run dev`)
- [ ] Open browser at localhost:8081
- [ ] DevTools open (F12) for debugging
- [ ] Check localStorage tab for data verification

---

## 🔑 Keyboard Shortcut Tests

### Test 1: Open Admin Panel
- [ ] Navigate to home page
- [ ] Press `Ctrl+Shift+A`
- [ ] Verify admin panel modal appears with animation
- [ ] Verify close button (X) works
- [ ] Verify pressing Escape closes panel (if implemented)

### Test 2: Hidden Button
- [ ] Look for invisible button in navbar
- [ ] Click next to "Links" text
- [ ] Verify admin panel opens
- [ ] Verify functionality same as keyboard shortcut

### Test 3: Multiple Opens/Closes
- [ ] Open and close panel 5 times
- [ ] Verify no console errors
- [ ] Verify animations smooth
- [ ] Verify data persists between opens

---

## 📋 Tentang HIMAKALA Tab Tests

### Test 4: Add New Feature
- [ ] Click "Tentang HIMAKALA" tab
- [ ] Click "Tambah" button
- [ ] Form appears with all fields empty
- [ ] Fill in:
  - Title: "Inovasi Digital"
  - Icon: "Zap"
  - Description: "Menciptakan solusi digital terdepan"
  - Text Color: "text-primary"
  - BG Color: "bg-primary/10"
- [ ] Click "Simpan"
- [ ] Verify feature disappears from form
- [ ] Close admin panel
- [ ] Verify new feature appears in About section
- [ ] Refresh page (F5)
- [ ] Verify feature still there

### Test 5: Edit Existing Feature
- [ ] Click "Tentang HIMAKALA" tab
- [ ] Click edit (✏️) icon on any feature
- [ ] Modify title: "Updated Title"
- [ ] Click "Simpan"
- [ ] Verify in About section
- [ ] Refresh page
- [ ] Verify changes persisted

### Test 6: Delete Feature
- [ ] Click "Tentang HIMAKALA" tab
- [ ] Count initial features (should be 4)
- [ ] Click delete (🗑️) on one feature
- [ ] Verify it's removed from list
- [ ] Close panel
- [ ] Verify it's removed from About section
- [ ] Refresh page
- [ ] Verify deletion persisted
- [ ] Verify count is 3

### Test 7: Icons Dropdown
- [ ] Click "Tentang HIMAKALA" tab
- [ ] Click "Tambah"
- [ ] Click Icon dropdown
- [ ] Verify all 12+ icons available
- [ ] Select different icon
- [ ] Submit and verify icon displays correctly

### Test 8: Colors Dropdown
- [ ] Click "Tentang HIMAKALA" tab
- [ ] Click "Tambah"
- [ ] Click Text Color dropdown
- [ ] Verify colors available
- [ ] Click BG Color dropdown
- [ ] Verify colors available
- [ ] Submit and verify colors apply correctly

---

## 👥 Pengurus HIMAKALA Tab Tests

### Test 9: Add Member to Division
- [ ] Click "Pengurus HIMAKALA" tab
- [ ] Select first division
- [ ] Click "Anggota" button
- [ ] Fill in:
  - Nama: "John Doe"
  - Posisi: "Ketua"
  - Departemen: "Teknik Informatika"
- [ ] Click "Simpan"
- [ ] Verify member appears in division list
- [ ] Close panel
- [ ] Go to Members section
- [ ] Verify member count increased
- [ ] Click division to see details
- [ ] Verify member listed in modal

### Test 10: Add Members to Multiple Divisions
- [ ] Click "Pengurus HIMAKALA" tab
- [ ] Add member to Divisi 1
- [ ] Add member to Divisi 2
- [ ] Add member to Divisi 3
- [ ] Close panel
- [ ] Go to Members section
- [ ] Verify each division shows correct member counts
- [ ] Click each division card
- [ ] Verify members displayed correctly

### Test 11: Edit Member
- [ ] Click "Pengurus HIMAKALA" tab
- [ ] Find a member
- [ ] Click edit (✏️) icon
- [ ] Change name to "Jane Smith"
- [ ] Change posisi to "Wakil Ketua"
- [ ] Click "Simpan"
- [ ] Verify changes in list
- [ ] Close panel
- [ ] Go to Members section
- [ ] Click division modal
- [ ] Verify updated name and position

### Test 12: Delete Member
- [ ] Click "Pengurus HIMAKALA" tab
- [ ] Count members in a division
- [ ] Click delete (🗑️) on a member
- [ ] Verify member removed from list
- [ ] Close panel
- [ ] Go to Members section
- [ ] Verify member count decreased
- [ ] Click division modal
- [ ] Verify member not in list

### Test 13: Multiple Members Per Division
- [ ] Click "Pengurus HIMAKALA" tab
- [ ] Add 5 members to one division
- [ ] Verify all 5 appear in list
- [ ] Close panel
- [ ] Members section shows "5 Anggota"
- [ ] Click to view modal
- [ ] All 5 members displayed

---

## 🔗 Quick Links Tab Tests

### Test 14: Add New Link
- [ ] Click "Quick Links" tab
- [ ] Click "Tambah" button
- [ ] Fill in:
  - Title: "New Portal"
  - URL: "https://example.com"
  - Description: "Test portal link"
  - Icon: "Globe"
  - Color: "from-primary to-blue-400"
- [ ] Click "Simpan"
- [ ] Close panel
- [ ] Go to Links section
- [ ] Verify new link appears
- [ ] Verify link is clickable
- [ ] Refresh page
- [ ] Verify link still there

### Test 15: Edit Link
- [ ] Click "Quick Links" tab
- [ ] Find existing link
- [ ] Click edit (✏️) icon
- [ ] Change URL to "https://newurl.com"
- [ ] Click "Simpan"
- [ ] Close panel
- [ ] Go to Links section
- [ ] Right-click link → Inspect
- [ ] Verify href is updated
- [ ] Refresh page
- [ ] Verify change persisted

### Test 16: Delete Link
- [ ] Click "Quick Links" tab
- [ ] Count initial links (should be 5)
- [ ] Click delete (🗑️)
- [ ] Verify removed from list
- [ ] Close panel
- [ ] Count links in Links section (should be 4)
- [ ] Refresh page
- [ ] Verify deletion persisted

---

## 💾 Data Persistence Tests

### Test 17: LocalStorage Verification
- [ ] Open DevTools (F12)
- [ ] Go to Application → LocalStorage
- [ ] Click domain (localhost:8081)
- [ ] Find "himakala_admin_data"
- [ ] Verify it contains JSON with aboutFeatures & quickLinks
- [ ] Find "himakala_divisions_data"
- [ ] Verify it contains division data

### Test 18: Page Reload Test
- [ ] Make several changes in admin panel
- [ ] Close admin panel
- [ ] Refresh page (F5)
- [ ] Verify all changes still visible
- [ ] Open admin panel again (Ctrl+Shift+A)
- [ ] Verify edit lists still show latest data

### Test 19: Browser Close Test
- [ ] Make changes in admin panel
- [ ] Close entire browser window
- [ ] Reopen browser
- [ ] Navigate to site
- [ ] Verify changes persisted
- [ ] Open admin panel
- [ ] Verify data loaded correctly

### Test 20: Clear Cache Test
- [ ] Make some changes
- [ ] DevTools → Application → Storage → Clear site data
- [ ] Refresh page
- [ ] Verify data reverted to defaults
- [ ] This confirms localStorage is primary storage

---

## 🎨 UI/UX Tests

### Test 21: Animations
- [ ] Open admin panel
- [ ] Verify smooth modal appear animation
- [ ] Verify smooth form transitions when adding/editing
- [ ] Verify smooth color transitions on hover
- [ ] Close panel smoothly

### Test 22: Responsive Design
- [ ] Resize browser to mobile width (375px)
- [ ] Open admin panel
- [ ] Verify panel fits screen
- [ ] Verify form fields stack properly
- [ ] Verify all buttons accessible
- [ ] Resize to tablet (768px)
- [ ] Verify 2-column layout
- [ ] Resize to desktop (1024px+)
- [ ] Verify optimal layout

### Test 23: Form Validation
- [ ] Click "Tentang HIMAKALA" → "Tambah"
- [ ] Try submit without title
- [ ] Verify "Simpan" button disabled or shows error
- [ ] Try submit without description
- [ ] Same verification
- [ ] Fill all required fields
- [ ] Verify submit works

### Test 24: Tab Switching
- [ ] Open admin panel
- [ ] Click "Tentang HIMAKALA" tab
- [ ] Add form open?
- [ ] Click "Pengurus HIMAKALA" tab
- [ ] Verify previous tab form closed
- [ ] Edit form show correct data
- [ ] Click "Quick Links" tab
- [ ] Verify smooth transition

---

## ⚠️ Reset & Dangerous Operations Tests

### Test 25: Reset Functionality
- [ ] Make several changes
- [ ] Click "Reset" button
- [ ] Confirm in dialog
- [ ] Verify admin panel closes
- [ ] Open admin panel again
- [ ] Verify all data back to defaults
- [ ] Check localStorage cleared

### Test 26: Reset Confirmation
- [ ] Click "Reset" button
- [ ] Verification dialog appears
- [ ] Click "Cancel"
- [ ] Verify data NOT reset
- [ ] Click "Reset" again
- [ ] Click "OK" or "Confirm"
- [ ] Verify reset happens

---

## 🔍 Error Handling Tests

### Test 27: Invalid URL
- [ ] Quick Links tab
- [ ] Try to add link with invalid URL
- [ ] Current behavior: Should accept (no validation)
- [ ] Future: Could add URL validation

### Test 28: Very Long Text
- [ ] Add very long title (500 chars)
- [ ] Add very long description (2000 chars)
- [ ] Verify doesn't break layout
- [ ] Verify doesn't cause errors

### Test 29: Special Characters
- [ ] Add title with: "Test™ @#$% 中文 Ñ"
- [ ] Verify stored correctly
- [ ] Verify displays correctly
- [ ] Verify doesn't break CSS

---

## 🖥️ Browser Compatibility Tests

### Test 30: Chrome/Edge
- [ ] [ ] All tests pass on Chrome
- [ ] [ ] All tests pass on Edge
- [ ] [ ] Check DevTools console (no errors)

### Test 31: Firefox
- [ ] [ ] Keyboard shortcut works
- [ ] [ ] Add/edit/delete works
- [ ] [ ] Data persists
- [ ] [ ] Check console (no errors)

### Test 32: Safari (if available)
- [ ] [ ] Basic functionality works
- [ ] [ ] Animations smooth
- [ ] [ ] localStorage works

---

## 🎯 Real-world Usage Tests

### Test 33: Full Workflow - Add Content
```
1. Ctrl+Shift+A
2. Add 3 new features to About
3. Add 5 new members to divisions
4. Add 2 new quick links
5. Close panel
6. Verify everything visible on page
7. Refresh page
8. Verify all changes persisted
```

### Test 34: Full Workflow - Edit Content
```
1. Ctrl+Shift+A
2. Edit 2 about features
3. Edit 3 member names
4. Edit 1 link URL
5. Close panel
6. Verify edits visible
7. Refresh page
8. Verify edits persisted
```

### Test 35: Full Workflow - Delete & Readd
```
1. Ctrl+Shift+A
2. Delete 1 feature
3. Delete 1 member
4. Delete 1 link
5. Close panel
6. Verify deletions
7. Open panel again
8. Add them back with new data
9. Verify new data displays
```

---

## 📊 Performance Tests

### Test 36: Add 100 Items
- [ ] Programmatically add many items
- [ ] Admin panel still responsive
- [ ] No lag on add/edit/delete
- [ ] Browser doesn't freeze

### Test 37: Large Data Size
- [ ] Add many items until data ~1MB
- [ ] Verify still loads quickly
- [ ] Verify no performance degradation

---

## ✅ Final Verification

- [ ] All 37 tests passed
- [ ] No console errors
- [ ] No warning messages
- [ ] Data persists correctly
- [ ] All animations smooth
- [ ] UI responsive
- [ ] Ready for production

---

## 🐛 Issues Found & Fixed

(Document any issues found during testing)

| Issue | Status | Fix |
|-------|--------|-----|
| Example issue | Fixed | Solution applied |

---

## 📝 Sign-off

- Tested by: _________________
- Date: _________________
- Status: [ ] PASS [ ] FAIL
- Comments: _______________

---

**Version**: 1.0.0  
**Test Date**: [When tested]  
**Status**: Ready for Production ✅
