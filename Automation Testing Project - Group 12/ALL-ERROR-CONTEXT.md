# TONG HOP LOI PLAYWRIGHT

- Thu muc goc: `D:\University\Nam4\Test\Project\softwareTesting\Automation Testing Project - Group 12`
- So file tim thay: **4**

> Moi phan ben duoi tuong ung voi mot test bi loi.

---

## 1. test-results\2026-11-09T15-40-23-299Z\attendance-Attendance---ph-0713f-thể-thao-tác-với-trường-lọc-anh

**File goc:** `test-results\2026-11-09T15-40-23-299Z\attendance-Attendance---ph-0713f-thể-thao-tác-với-trường-lọc-anh\error-context.md`

# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: anh\tests\attendance.spec.js >> Attendance - phạm vi Admin trên Horilla Demo >> AT10 - Bảng bộ lọc có thể thao tác với trường lọc
- Location: anh\tests\attendance.spec.js:75:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('heading', { name: /^filter\b/i }).first().locator('input, select, textarea').first()
Expected: visible
Timeout: 20000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByRole('heading', { name: /^filter\b/i }).first().locator('input, select, textarea').first() with timeout 20000ms
  - waiting for getByRole('heading', { name: /^filter\b/i }).first().locator('input, select, textarea').first()

```

```yaml
- button "Unlock sidebar (auto-collapses on hover-out)"
- img "Northwind Technologies Inc."
- text: Northwind Technologies Inc..
- link "My Company":
  - /url: "#"
- navigation "Main navigation":
  - link:
    - /url: /dashboard/
  - button "Employee"
  - button "Attendance"
  - button "Leave"
  - button "Payroll"
  - button "Recruitment"
  - button "Onboarding"
  - button "Offboarding"
  - button "Performance"
  - button "Project"
  - button "Assets"
  - button "Tickets"
  - button "Reports"
- text: Version 2.3.0 arrow_forward
- list:
  - listitem:
    - text: 
    - link "Horilla":
      - /url: https://hr.demo.horilla.com/?breadcrumb_nav=true
  - listitem:
    - text: 
    - link "Attendance":
      - /url: https://hr.demo.horilla.com/attendance/
  - listitem:
    - link "My Attendances":
      - /url: https://hr.demo.horilla.com/attendance/view-my-attendance/?breadcrumb_nav=true
- button " 03:53:41"
- button "Toggle theme":
  - link "Toggle theme":
    - /url: "#"
    - text: 
- button "":
  - link "":
    - /url: /settings/system-preferences-view/
- button ""
- button ""
- button ""
- button ""
- button "user Adam Admin Online":
  - img "user"
  - heading "Adam Admin" [level=5]
  - paragraph: Online
- heading " All Notifications" [level=3]:
  - button ""
  - text: All Notifications
- button "Clear All"
- heading "My Attendances" [level=3]
- text: 
- button "Filter Filter":
  - img "Filter"
  - text: Filter
- heading "Filter My Attendances" [level=3]
- button "Close":
  - img:
    - img
- textbox "Find a filter"
- img:
  - img
- text: Attendance Attendance Date
- textbox "Attendance Date":
  - /placeholder: Attendance date
- text: Min Hour
- textbox "Min Hour":
  - /placeholder: Minimum Hour
- text: Validated?
- radio "Any" [checked]
- text: Any
- radio "Yes"
- text: "Yes"
- radio "No"
- text: No OT Approved?
- radio "Any" [checked]
- text: Any
- radio "Yes"
- text: "Yes"
- radio "No"
- text: No Requested?
- radio "Any" [checked]
- text: Any
- radio "Yes"
- text: "Yes"
- radio "No"
- text: No Approved Request?
- radio "Any" [checked]
- text: Any
- radio "Yes"
- text: "Yes"
- radio "No"
- text: "No"
- img:
  - img
- text: Advanced Attendance From
- textbox "Attendance From":
  - /placeholder: Attendance date is greater than or equal to
- text: At Work Greater or Equal
- textbox "At Work Greater or Equal":
  - /placeholder: At work second is greater than or equal to
- text: Attendance Till
- textbox "Attendance Till":
  - /placeholder: Attendance date is less than or equal to
- text: At Work Lesser or Equal
- textbox "At Work Lesser or Equal":
  - /placeholder: At work second is less than or equal to
- button "+ Add filter"
- img:
  - img
- text: Group By
- button "Clear all":
  - img:
    - img
  - text: Clear all
- button "Apply":
  - img:
    - img
  - text: Apply
- button "Select (46)"
- button "Quick filter":
  - img:
    - img
  - text: Quick filter
  - img:
    - img
- button "Approved Request"
- button "Requested"
- button "Not Validated"
- button "Validated"
- table:
  - rowgroup:
    - row "Select All   Employee   Date   Check-In   Check-Out   Shift   At Work Penalties Customize columns":
      - columnheader "Select All":
        - checkbox "Select All"
      - columnheader "  Employee"
      - columnheader "  Date"
      - columnheader "  Check-In"
      - columnheader "  Check-Out"
      - columnheader "  Shift"
      - columnheader "  At Work"
      - columnheader "Penalties Customize columns":
        - text: Penalties
        - button "Customize columns"
  - rowgroup:
    - row "Select Row Adam Admin 09/11/2026 09:00 AM None Regular Shift 00:40 No Penalties":
      - cell "Select Row":
        - checkbox "Select Row"
      - cell "Adam Admin"
      - cell "09/11/2026"
      - cell "09:00 AM"
      - cell "None"
      - cell "Regular Shift"
      - cell "00:40"
      - cell "No Penalties":
        - img:
          - img
        - text: No Penalties
    - row "Select Row Adam Admin 06/11/2026 09:00 AM 06:00 PM Regular Shift 09:00 No Penalties":
      - cell "Select Row":
        - checkbox "Select Row"
      - cell "Adam Admin"
      - cell "06/11/2026"
      - cell "09:00 AM"
      - cell "06:00 PM"
      - cell "Regular Shift"
      - cell "09:00"
      - cell "No Penalties":
        - img:
          - img
        - text: No Penalties
    - row "Select Row Adam Admin 05/11/2026 09:00 AM 06:00 PM Regular Shift 09:00 No Penalties":
      - cell "Select Row":
        - checkbox "Select Row"
      - cell "Adam Admin"
      - cell "05/11/2026"
      - cell "09:00 AM"
      - cell "06:00 PM"
      - cell "Regular Shift"
      - cell "09:00"
      - cell "No Penalties":
        - img:
          - img
        - text: No Penalties
    - row "Select Row Adam Admin 04/11/2026 09:00 AM 06:00 PM Regular Shift 09:00 No Penalties":
      - cell "Select Row":
        - checkbox "Select Row"
      - cell "Adam Admin"
      - cell "04/11/2026"
      - cell "09:00 AM"
      - cell "06:00 PM"
      - cell "Regular Shift"
      - cell "09:00"
      - cell "No Penalties":
        - img:
          - img
        - text: No Penalties
    - row "Select Row Adam Admin 03/11/2026 09:00 AM 06:00 PM Regular Shift 09:00 No Penalties":
      - cell "Select Row":
        - checkbox "Select Row"
      - cell "Adam Admin"
      - cell "03/11/2026"
      - cell "09:00 AM"
      - cell "06:00 PM"
      - cell "Regular Shift"
      - cell "09:00"
      - cell "No Penalties":
        - img:
          - img
        - text: No Penalties
    - row "Select Row Adam Admin 02/11/2026 09:00 AM 06:00 PM Regular Shift 09:00 No Penalties":
      - cell "Select Row":
        - checkbox "Select Row"
      - cell "Adam Admin"
      - cell "02/11/2026"
      - cell "09:00 AM"
      - cell "06:00 PM"
      - cell "Regular Shift"
      - cell "09:00"
      - cell "No Penalties":
        - img:
          - img
        - text: No Penalties
    - row "Select Row Adam Admin 27/10/2026 09:00 AM 06:00 PM Regular Shift 09:00 No Penalties":
      - cell "Select Row":
        - checkbox "Select Row"
      - cell "Adam Admin"
      - cell "27/10/2026"
      - cell "09:00 AM"
      - cell "06:00 PM"
      - cell "Regular Shift"
      - cell "09:00"
      - cell "No Penalties":
        - img:
          - img
        - text: No Penalties
    - row "Select Row Adam Admin 26/10/2026 09:00 AM 06:00 PM Regular Shift 09:00 No Penalties":
      - cell "Select Row":
        - checkbox "Select Row"
      - cell "Adam Admin"
      - cell "26/10/2026"
      - cell "09:00 AM"
      - cell "06:00 PM"
      - cell "Regular Shift"
      - cell "09:00"
      - cell "No Penalties":
        - img:
          - img
        - text: No Penalties
    - row "Select Row Adam Admin 23/10/2026 09:00 AM 06:00 PM Regular Shift 09:00 No Penalties":
      - cell "Select Row":
        - checkbox "Select Row"
      - cell "Adam Admin"
      - cell "23/10/2026"
      - cell "09:00 AM"
      - cell "06:00 PM"
      - cell "Regular Shift"
      - cell "09:00"
      - cell "No Penalties":
        - img:
          - img
        - text: No Penalties
    - row "Select Row Adam Admin 22/10/2026 09:00 AM 06:00 PM Regular Shift 09:00 No Penalties":
      - cell "Select Row":
        - checkbox "Select Row"
      - cell "Adam Admin"
      - cell "22/10/2026"
      - cell "09:00 AM"
      - cell "06:00 PM"
      - cell "Regular Shift"
      - cell "09:00"
      - cell "No Penalties":
        - img:
          - img
        - text: No Penalties
    - row "Select Row Adam Admin 21/10/2026 09:00 AM 06:00 PM Regular Shift 09:00 No Penalties":
      - cell "Select Row":
        - checkbox "Select Row"
      - cell "Adam Admin"
      - cell "21/10/2026"
      - cell "09:00 AM"
      - cell "06:00 PM"
      - cell "Regular Shift"
      - cell "09:00"
      - cell "No Penalties":
        - img:
          - img
        - text: No Penalties
    - row "Select Row Adam Admin 20/10/2026 09:00 AM 06:00 PM Regular Shift 09:00 No Penalties":
      - cell "Select Row":
        - checkbox "Select Row"
      - cell "Adam Admin"
      - cell "20/10/2026"
      - cell "09:00 AM"
      - cell "06:00 PM"
      - cell "Regular Shift"
      - cell "09:00"
      - cell "No Penalties":
        - img:
          - img
        - text: No Penalties
    - row "Select Row Adam Admin 19/10/2026 09:00 AM 06:00 PM Regular Shift 09:00 No Penalties":
      - cell "Select Row":
        - checkbox "Select Row"
      - cell "Adam Admin"
      - cell "19/10/2026"
      - cell "09:00 AM"
      - cell "06:00 PM"
      - cell "Regular Shift"
      - cell "09:00"
      - cell "No Penalties":
        - img:
          - img
        - text: No Penalties
    - row "Select Row Adam Admin 16/10/2026 09:00 AM 06:00 PM Regular Shift 09:00 No Penalties":
      - cell "Select Row":
        - checkbox "Select Row"
      - cell "Adam Admin"
      - cell "16/10/2026"
      - cell "09:00 AM"
      - cell "06:00 PM"
      - cell "Regular Shift"
      - cell "09:00"
      - cell "No Penalties":
        - img:
          - img
        - text: No Penalties
    - row "Select Row Adam Admin 15/10/2026 09:00 AM 06:00 PM Regular Shift 09:00 No Penalties":
      - cell "Select Row":
        - checkbox "Select Row"
      - cell "Adam Admin"
      - cell "15/10/2026"
      - cell "09:00 AM"
      - cell "06:00 PM"
      - cell "Regular Shift"
      - cell "09:00"
      - cell "No Penalties":
        - img:
          - img
        - text: No Penalties
    - row "Select Row Adam Admin 14/10/2026 09:00 AM 06:00 PM Regular Shift 09:00 No Penalties":
      - cell "Select Row":
        - checkbox "Select Row"
      - cell "Adam Admin"
      - cell "14/10/2026"
      - cell "09:00 AM"
      - cell "06:00 PM"
      - cell "Regular Shift"
      - cell "09:00"
      - cell "No Penalties":
        - img:
          - img
        - text: No Penalties
    - row "Select Row Adam Admin 13/10/2026 09:00 AM 06:00 PM Regular Shift 09:00 No Penalties":
      - cell "Select Row":
        - checkbox "Select Row"
      - cell "Adam Admin"
      - cell "13/10/2026"
      - cell "09:00 AM"
      - cell "06:00 PM"
      - cell "Regular Shift"
      - cell "09:00"
      - cell "No Penalties":
        - img:
          - img
        - text: No Penalties
    - row "Select Row Adam Admin 12/10/2026 09:00 AM 06:00 PM Regular Shift 09:00 No Penalties":
      - cell "Select Row":
        - checkbox "Select Row"
      - cell "Adam Admin"
      - cell "12/10/2026"
      - cell "09:00 AM"
      - cell "06:00 PM"
      - cell "Regular Shift"
      - cell "09:00"
      - cell "No Penalties":
        - img:
          - img
        - text: No Penalties
    - row "Select Row Adam Admin 09/10/2026 09:00 AM 06:00 PM Regular Shift 09:00 No Penalties":
      - cell "Select Row":
        - checkbox "Select Row"
      - cell "Adam Admin"
      - cell "09/10/2026"
      - cell "09:00 AM"
      - cell "06:00 PM"
      - cell "Regular Shift"
      - cell "09:00"
      - cell "No Penalties":
        - img:
          - img
        - text: No Penalties
    - row "Select Row Adam Admin 08/10/2026 09:00 AM 06:00 PM Regular Shift 09:00 No Penalties":
      - cell "Select Row":
        - checkbox "Select Row"
      - cell "Adam Admin"
      - cell "08/10/2026"
      - cell "09:00 AM"
      - cell "06:00 PM"
      - cell "Regular Shift"
      - cell "09:00"
      - cell "No Penalties":
        - img:
          - img
        - text: No Penalties
    - row "Select Row Adam Admin 07/10/2026 09:00 AM 06:00 PM Regular Shift 09:00 No Penalties":
      - cell "Select Row":
        - checkbox "Select Row"
      - cell "Adam Admin"
      - cell "07/10/2026"
      - cell "09:00 AM"
      - cell "06:00 PM"
      - cell "Regular Shift"
      - cell "09:00"
      - cell "No Penalties":
        - img:
          - img
        - text: No Penalties
    - row "Select Row Adam Admin 06/10/2026 09:00 AM 06:00 PM Regular Shift 09:00 No Penalties":
      - cell "Select Row":
        - checkbox "Select Row"
      - cell "Adam Admin"
      - cell "06/10/2026"
      - cell "09:00 AM"
      - cell "06:00 PM"
      - cell "Regular Shift"
      - cell "09:00"
      - cell "No Penalties":
        - img:
          - img
        - text: No Penalties
    - row "Select Row Adam Admin 05/10/2026 09:00 AM 06:00 PM Regular Shift 09:00 No Penalties":
      - cell "Select Row":
        - checkbox "Select Row"
      - cell "Adam Admin"
      - cell "05/10/2026"
      - cell "09:00 AM"
      - cell "06:00 PM"
      - cell "Regular Shift"
      - cell "09:00"
      - cell "No Penalties":
        - img:
          - img
        - text: No Penalties
    - row "Select Row Adam Admin 02/10/2026 09:00 AM 06:00 PM Regular Shift 09:00 No Penalties":
      - cell "Select Row":
        - checkbox "Select Row"
      - cell "Adam Admin"
      - cell "02/10/2026"
      - cell "09:00 AM"
      - cell "06:00 PM"
      - cell "Regular Shift"
      - cell "09:00"
      - cell "No Penalties":
        - img:
          - img
        - text: No Penalties
    - row "Select Row Adam Admin 01/10/2026 09:00 AM 06:00 PM Regular Shift 09:00 No Penalties":
      - cell "Select Row":
        - checkbox "Select Row"
      - cell "Adam Admin"
      - cell "01/10/2026"
      - cell "09:00 AM"
      - cell "06:00 PM"
      - cell "Regular Shift"
      - cell "09:00"
      - cell "No Penalties":
        - img:
          - img
        - text: No Penalties
    - row "Select Row Adam Admin 30/09/2026 09:00 AM 06:00 PM Regular Shift 09:00 No Penalties":
      - cell "Select Row":
        - checkbox "Select Row"
      - cell "Adam Admin"
      - cell "30/09/2026"
      - cell "09:00 AM"
      - cell "06:00 PM"
      - cell "Regular Shift"
      - cell "09:00"
      - cell "No Penalties":
        - img:
          - img
        - text: No Penalties
    - row "Select Row Adam Admin 29/09/2026 09:00 AM 06:00 PM Regular Shift 09:00 No Penalties":
      - cell "Select Row":
        - checkbox "Select Row"
      - cell "Adam Admin"
      - cell "29/09/2026"
      - cell "09:00 AM"
      - cell "06:00 PM"
      - cell "Regular Shift"
      - cell "09:00"
      - cell "No Penalties":
        - img:
          - img
        - text: No Penalties
    - row "Select Row Adam Admin 28/09/2026 09:00 AM 06:00 PM Regular Shift 09:00 No Penalties":
      - cell "Select Row":
        - checkbox "Select Row"
      - cell "Adam Admin"
      - cell "28/09/2026"
      - cell "09:00 AM"
      - cell "06:00 PM"
      - cell "Regular Shift"
      - cell "09:00"
      - cell "No Penalties":
        - img:
          - img
        - text: No Penalties
    - row "Select Row Adam Admin 25/09/2026 09:00 AM 06:00 PM Regular Shift 09:00 No Penalties":
      - cell "Select Row":
        - checkbox "Select Row"
      - cell "Adam Admin"
      - cell "25/09/2026"
      - cell "09:00 AM"
      - cell "06:00 PM"
      - cell "Regular Shift"
      - cell "09:00"
      - cell "No Penalties":
        - img:
          - img
        - text: No Penalties
    - row "Select Row Adam Admin 24/09/2026 09:00 AM 06:00 PM Regular Shift 09:00 No Penalties":
      - cell "Select Row":
        - checkbox "Select Row"
      - cell "Adam Admin"
      - cell "24/09/2026"
      - cell "09:00 AM"
      - cell "06:00 PM"
      - cell "Regular Shift"
      - cell "09:00"
      - cell "No Penalties":
        - img:
          - img
        - text: No Penalties
    - row "Select Row Adam Admin 23/09/2026 09:00 AM 06:00 PM Regular Shift 09:00 No Penalties":
      - cell "Select Row":
        - checkbox "Select Row"
      - cell "Adam Admin"
      - cell "23/09/2026"
      - cell "09:00 AM"
      - cell "06:00 PM"
      - cell "Regular Shift"
      - cell "09:00"
      - cell "No Penalties":
        - img:
          - img
        - text: No Penalties
    - row "Select Row Adam Admin 22/09/2026 09:00 AM 06:00 PM Regular Shift 09:00 No Penalties":
      - cell "Select Row":
        - checkbox "Select Row"
      - cell "Adam Admin"
      - cell "22/09/2026"
      - cell "09:00 AM"
      - cell "06:00 PM"
      - cell "Regular Shift"
      - cell "09:00"
      - cell "No Penalties":
        - img:
          - img
        - text: No Penalties
    - row "Select Row Adam Admin 21/09/2026 09:00 AM 06:00 PM Regular Shift 09:00 No Penalties":
      - cell "Select Row":
        - checkbox "Select Row"
      - cell "Adam Admin"
      - cell "21/09/2026"
      - cell "09:00 AM"
      - cell "06:00 PM"
      - cell "Regular Shift"
      - cell "09:00"
      - cell "No Penalties":
        - img:
          - img
        - text: No Penalties
    - row "Select Row Adam Admin 18/09/2026 09:00 AM 06:00 PM Regular Shift 09:00 No Penalties":
      - cell "Select Row":
        - checkbox "Select Row"
      - cell "Adam Admin"
      - cell "18/09/2026"
      - cell "09:00 AM"
      - cell "06:00 PM"
      - cell "Regular Shift"
      - cell "09:00"
      - cell "No Penalties":
        - img:
          - img
        - text: No Penalties
    - row "Select Row Adam Admin 17/09/2026 09:00 AM 06:00 PM Regular Shift 09:00 No Penalties":
      - cell "Select Row":
        - checkbox "Select Row"
      - cell "Adam Admin"
      - cell "17/09/2026"
      - cell "09:00 AM"
      - cell "06:00 PM"
      - cell "Regular Shift"
      - cell "09:00"
      - cell "No Penalties":
        - img:
          - img
        - text: No Penalties
    - row "Select Row Adam Admin 16/09/2026 09:00 AM 06:00 PM Regular Shift 09:00 No Penalties":
      - cell "Select Row":
        - checkbox "Select Row"
      - cell "Adam Admin"
      - cell "16/09/2026"
      - cell "09:00 AM"
      - cell "06:00 PM"
      - cell "Regular Shift"
      - cell "09:00"
      - cell "No Penalties":
        - img:
          - img
        - text: No Penalties
    - row "Select Row Adam Admin 15/09/2026 09:00 AM 06:00 PM Regular Shift 09:00 No Penalties":
      - cell "Select Row":
        - checkbox "Select Row"
      - cell "Adam Admin"
      - cell "15/09/2026"
      - cell "09:00 AM"
      - cell "06:00 PM"
      - cell "Regular Shift"
      - cell "09:00"
      - cell "No Penalties":
        - img:
          - img
        - text: No Penalties
    - row "Select Row Adam Admin 14/09/2026 09:00 AM 06:00 PM Regular Shift 09:00 No Penalties":
      - cell "Select Row":
        - checkbox "Select Row"
      - cell "Adam Admin"
      - cell "14/09/2026"
      - cell "09:00 AM"
      - cell "06:00 PM"
      - cell "Regular Shift"
      - cell "09:00"
      - cell "No Penalties":
        - img:
          - img
        - text: No Penalties
    - row "Select Row Adam Admin 11/09/2026 09:00 AM 06:00 PM Regular Shift 09:00 No Penalties":
      - cell "Select Row":
        - checkbox "Select Row"
      - cell "Adam Admin"
      - cell "11/09/2026"
      - cell "09:00 AM"
      - cell "06:00 PM"
      - cell "Regular Shift"
      - cell "09:00"
      - cell "No Penalties":
        - img:
          - img
        - text: No Penalties
    - row "Select Row Adam Admin 10/09/2026 09:00 AM 06:00 PM Regular Shift 09:00 No Penalties":
      - cell "Select Row":
        - checkbox "Select Row"
      - cell "Adam Admin"
      - cell "10/09/2026"
      - cell "09:00 AM"
      - cell "06:00 PM"
      - cell "Regular Shift"
      - cell "09:00"
      - cell "No Penalties":
        - img:
          - img
        - text: No Penalties
    - row "Select Row Adam Admin 09/09/2026 09:00 AM 06:00 PM Regular Shift 09:00 No Penalties":
      - cell "Select Row":
        - checkbox "Select Row"
      - cell "Adam Admin"
      - cell "09/09/2026"
      - cell "09:00 AM"
      - cell "06:00 PM"
      - cell "Regular Shift"
      - cell "09:00"
      - cell "No Penalties":
        - img:
          - img
        - text: No Penalties
    - row "Select Row Adam Admin 08/09/2026 09:00 AM 06:00 PM Regular Shift 09:00 No Penalties":
      - cell "Select Row":
        - checkbox "Select Row"
      - cell "Adam Admin"
      - cell "08/09/2026"
      - cell "09:00 AM"
      - cell "06:00 PM"
      - cell "Regular Shift"
      - cell "09:00"
      - cell "No Penalties":
        - img:
          - img
        - text: No Penalties
    - row "Select Row Adam Admin 07/09/2026 09:00 AM 06:00 PM Regular Shift 09:00 No Penalties":
      - cell "Select Row":
        - checkbox "Select Row"
      - cell "Adam Admin"
      - cell "07/09/2026"
      - cell "09:00 AM"
      - cell "06:00 PM"
      - cell "Regular Shift"
      - cell "09:00"
      - cell "No Penalties":
        - img:
          - img
        - text: No Penalties
    - row "Select Row Adam Admin 04/09/2026 09:00 AM 06:00 PM Regular Shift 09:00 No Penalties":
      - cell "Select Row":
        - checkbox "Select Row"
      - cell "Adam Admin"
      - cell "04/09/2026"
      - cell "09:00 AM"
      - cell "06:00 PM"
      - cell "Regular Shift"
      - cell "09:00"
      - cell "No Penalties":
        - img:
          - img
        - text: No Penalties
    - row "Select Row Adam Admin 03/09/2026 09:00 AM 06:00 PM Regular Shift 09:00 No Penalties":
      - cell "Select Row":
        - checkbox "Select Row"
      - cell "Adam Admin"
      - cell "03/09/2026"
      - cell "09:00 AM"
      - cell "06:00 PM"
      - cell "Regular Shift"
      - cell "09:00"
      - cell "No Penalties":
        - img:
          - img
        - text: No Penalties
    - row "Select Row Adam Admin 02/09/2026 09:00 AM 06:00 PM Regular Shift 09:00 No Penalties":
      - cell "Select Row":
        - checkbox "Select Row"
      - cell "Adam Admin"
      - cell "02/09/2026"
      - cell "09:00 AM"
      - cell "06:00 PM"
      - cell "Regular Shift"
      - cell "09:00"
      - cell "No Penalties":
        - img:
          - img
        - text: No Penalties
- log
```

# Test source

```ts
  1   | const { test, expect } = require("@playwright/test");
  2   | const {
  3   |   openPage, findAction, findFilterPanel,
  4   |   openFilterPanel, assertListOrEmpty, assertNoApplicationError, reloadAndVerify,
  5   | } = require("./helpers");
  6   | 
  7   | const routes = {
  8   |   dashboard: "/attendance/dashboard/",
  9   |   mine: "/attendance/view-my-attendance/",
  10  |   monthly: "/attendance/monthly-summary/",
  11  | };
  12  | 
  13  | async function openAttendance(page, route, label) {
  14  |   await openPage(page, route, "Attendance", label);
  15  | }
  16  | 
  17  | test.describe("Attendance - phạm vi Admin trên Horilla Demo", () => {
  18  |   test("AT01 - Mở trang Attendance", async ({ page }) => {
  19  |     await openAttendance(page, routes.dashboard, "Attendance Dashboard");
  20  |     await expect(page.locator("body")).toContainText(/attendance/i);
  21  |   });
  22  | 
  23  |   test("AT02 - Dashboard có vùng nội dung tổng quan", async ({ page }) => {
  24  |     await openAttendance(page, routes.dashboard, "Attendance Dashboard");
  25  |     const body = (await page.locator("body").innerText()).trim();
  26  |     expect(body.length).toBeGreaterThan(20);
  27  |     expect(body).toMatch(/attendance|dashboard|check.?in|check.?out/i);
  28  |   });
  29  | 
  30  |   test("AT03 - Dashboard không hiển thị lỗi ứng dụng", async ({ page }) => {
  31  |     await openAttendance(page, routes.dashboard, "Attendance Dashboard");
  32  |     await assertNoApplicationError(page);
  33  |   });
  34  | 
  35  |   test("AT04 - Mở My Attendances", async ({ page }) => {
  36  |     await openAttendance(page, routes.mine, "My Attendances");
  37  |     await expect(page.locator("body")).toContainText(/my attendances|attendance/i);
  38  |   });
  39  | 
  40  |   test("AT05 - My Attendances hiển thị danh sách hoặc trạng thái rỗng", async ({ page }) => {
  41  |     await openAttendance(page, routes.mine, "My Attendances");
  42  |     await assertListOrEmpty(page);
  43  |   });
  44  | 
  45  |   test("AT06 - My Attendances có các cột thông tin chấm công", async ({ page }) => {
  46  |     await openAttendance(page, routes.mine, "My Attendances");
  47  |     const headings = (await page.locator("th, [role=columnheader]").allInnerTexts()).join(" ");
  48  |     const body = await page.locator("body").innerText();
  49  |     expect(`${headings} ${body}`).toMatch(/date|employee|check.?in|check.?out|shift|at work|attendance/i);
  50  |   });
  51  | 
  52  |   test("AT07 - Bộ lọc My Attendances hiển thị các trường chấm công", async ({ page }) => {
  53  |     await openAttendance(page, routes.mine, "My Attendances");
  54  |     const panel = await openFilterPanel(page);
  55  |     await expect(panel).toContainText(/Attendance Date|Min Hour|Validated|OT Approved/i);
  56  |     const filterControls = panel.locator("input, select, textarea");
  57  |     await expect(filterControls.first()).toBeVisible();
  58  |   });
  59  | 
  60  |   test("AT08 - Mở bảng bộ lọc My Attendances", async ({ page }) => {
  61  |     await openAttendance(page, routes.mine, "My Attendances");
  62  |     const panel = await openFilterPanel(page);
  63  |     await expect(panel).toContainText(/filter/i);
  64  |   });
  65  | 
  66  |   test("AT09 - Đóng bảng bộ lọc My Attendances", async ({ page }) => {
  67  |     await openAttendance(page, routes.mine, "My Attendances");
  68  |     const panel = await openFilterPanel(page);
  69  |     const close = await findAction(page, /^close$/i, panel);
  70  |     expect(close, "Bảng bộ lọc không có nút Close").not.toBeNull();
  71  |     await close.click();
  72  |     await expect(panel).toBeHidden();
  73  |   });
  74  | 
  75  |   test("AT10 - Bảng bộ lọc có thể thao tác với trường lọc", async ({ page }) => {
  76  |     await openAttendance(page, routes.mine, "My Attendances");
  77  |     const panel = await openFilterPanel(page);
  78  |     const control = panel.locator("input, select, textarea").first();
> 79  |     await expect(control).toBeVisible();
      |                           ^ Error: expect(locator).toBeVisible() failed
  80  |     await expect(panel).toContainText(/attendance date|min hour|validated|ot approved/i);
  81  |     await assertNoApplicationError(page);
  82  |   });
  83  | 
  84  |   test("AT11 - Mở Monthly Summary", async ({ page }) => {
  85  |     await openAttendance(page, routes.monthly, "Monthly Summary");
  86  |     await expect(page.locator("body")).toContainText(/monthly summary|monthly|attendance/i);
  87  |   });
  88  | 
  89  |   test("AT12 - Monthly Summary hiển thị dữ liệu hoặc trạng thái rỗng", async ({ page }) => {
  90  |     await openAttendance(page, routes.monthly, "Monthly Summary");
  91  |     await assertListOrEmpty(page);
  92  |   });
  93  | 
  94  |   test("AT13 - Tải lại My Attendances không phát sinh lỗi", async ({ page }) => {
  95  |     await openAttendance(page, routes.mine, "My Attendances");
  96  |     await reloadAndVerify(page, routes.mine);
  97  |     await assertListOrEmpty(page);
  98  |   });
  99  | 
  100 |   test("AT14 - Tải lại Monthly Summary không phát sinh lỗi", async ({ page }) => {
  101 |     await openAttendance(page, routes.monthly, "Monthly Summary");
  102 |     await reloadAndVerify(page, routes.monthly);
  103 |   });
  104 | });
  105 | 
```

---

## 2. test-results\2026-11-09T15-40-23-299Z\attendance-Attendance---ph-3f563-h-sách-hoặc-trạng-thái-rỗng-anh

**File goc:** `test-results\2026-11-09T15-40-23-299Z\attendance-Attendance---ph-3f563-h-sách-hoặc-trạng-thái-rỗng-anh\error-context.md`

# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: anh\tests\attendance.spec.js >> Attendance - phạm vi Admin trên Horilla Demo >> AT05 - My Attendances hiển thị danh sách hoặc trạng thái rỗng
- Location: anh\tests\attendance.spec.js:40:3

# Error details

```
Error: Trang không có bảng/danh sách hiển thị, trạng thái rỗng hoặc bộ điều khiển danh sách hợp lệ

expect(received).toBeTruthy()

Received: false
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e3]:
    - generic [ref=e4]:
      - button "Unlock sidebar (auto-collapses on hover-out)" [ref=e5] [cursor=pointer]
      - generic [ref=e8]:
        - img "Northwind Technologies Inc." [ref=e9]
        - generic [ref=e10]:
          - generic [ref=e11]: Northwind Technologies Inc..
          - link "My Company" [ref=e12] [cursor=pointer]:
            - /url: "#"
    - navigation "Main navigation" [ref=e13]:
      - link [ref=e14] [cursor=pointer]:
        - /url: /dashboard/
        - generic [aria-hidden] [ref=e15]: Dashboard
      - button "Employee" [ref=e17] [cursor=pointer]
      - button "Attendance" [ref=e20] [cursor=pointer]
      - button "Leave" [ref=e23] [cursor=pointer]
      - button "Payroll" [ref=e26] [cursor=pointer]
      - button "Recruitment" [ref=e29] [cursor=pointer]
      - button "Onboarding" [ref=e32] [cursor=pointer]
      - button "Offboarding" [ref=e35] [cursor=pointer]
      - button "Performance" [ref=e38] [cursor=pointer]
      - button "Project" [ref=e41] [cursor=pointer]
      - button "Assets" [ref=e44] [cursor=pointer]
      - button "Tickets" [ref=e47] [cursor=pointer]
      - button "Reports" [ref=e50] [cursor=pointer]
    - generic "Horilla HR version 2.3.0" [ref=e52]: Version 2.3.0
  - generic "Quick Actions" [ref=e54] [cursor=pointer]: arrow_forward
  - generic [ref=e57]:
    - generic:
      - generic [ref=e58]:
        - list [ref=e60]:
          - listitem [ref=e61]:
            - text: 
            - link "Horilla" [ref=e62] [cursor=pointer]:
              - /url: https://hr.demo.horilla.com/?breadcrumb_nav=true
          - listitem [ref=e63]:
            - text: 
            - link "Attendance" [ref=e64] [cursor=pointer]:
              - /url: https://hr.demo.horilla.com/attendance/
          - listitem [ref=e65]:
            - link "My Attendances" [ref=e66] [cursor=pointer]:
              - /url: https://hr.demo.horilla.com/attendance/view-my-attendance/?breadcrumb_nav=true
        - generic [ref=e67]:
          - generic [ref=e68]:
            - button " 03:52:04" [ref=e70] [cursor=pointer]:
              - generic [ref=e71]:
                - generic [ref=e72]: 
                - generic [ref=e73]: 03:52:04
            - button [ref=e74] [cursor=pointer]:
              - link "Toggle theme" [ref=e75]:
                - /url: "#"
                - generic [ref=e76]: 
            - button [ref=e77] [cursor=pointer]:
              - link "" [ref=e78]:
                - /url: /settings/system-preferences-view/
            - button "" [ref=e81] [cursor=pointer]
            - button "" [ref=e84] [cursor=pointer]
            - button "" [ref=e87] [cursor=pointer]
            - button "" [ref=e90] [cursor=pointer]
          - button "user Adam Admin Online" [ref=e93] [cursor=pointer]:
            - generic [ref=e94]:
              - img "user" [ref=e96]
              - generic [ref=e99]:
                - heading "Adam Admin" [level=5] [ref=e100]
                - paragraph [ref=e101]: Online
      - generic [ref=e104]:
        - heading [level=3] [ref=e105]:
          - button "" [ref=e106] [cursor=pointer]
          - text: All Notifications
        - button "Clear All" [ref=e108] [cursor=pointer]
    - generic [ref=e111]:
      - heading "My Attendances" [level=3] [ref=e112]
      - generic [ref=e114]:
        - generic: 
        - generic [ref=e116]:
          - button [ref=e117] [cursor=pointer]:
            - img "Filter" [ref=e118]
            - text: Filter
          - generic [ref=e119]:
            - generic [ref=e120]:
              - heading "Filter My Attendances" [level=3] [ref=e121]
              - button "Close" [ref=e122] [cursor=pointer]
            - textbox "Find a filter" [ref=e128]
            - generic [ref=e130]:
              - generic [ref=e131]:
                - generic [ref=e132]:
                  - generic [ref=e133] [cursor=pointer]: Attendance
                  - generic [ref=e150]:
                    - generic [ref=e152]:
                      - generic [ref=e153]: Attendance Date
                      - textbox "Attendance Date" [ref=e154]:
                        - /placeholder: Attendance date
                    - generic [ref=e156]:
                      - generic [ref=e157]: Min Hour
                      - textbox "Min Hour" [ref=e158]:
                        - /placeholder: Minimum Hour
                    - generic [ref=e160]:
                      - generic [ref=e161]: Validated?
                      - generic [ref=e162]:
                        - generic [ref=e163] [cursor=pointer]:
                          - radio "Any" [checked]
                          - generic [ref=e164]: Any
                        - generic [ref=e165] [cursor=pointer]:
                          - radio "Yes"
                          - generic [ref=e166]: "Yes"
                        - generic [ref=e167] [cursor=pointer]:
                          - radio "No"
                          - generic [ref=e168]: "No"
                    - generic [ref=e170]:
                      - generic [ref=e171]: OT Approved?
                      - generic [ref=e172]:
                        - generic [ref=e173] [cursor=pointer]:
                          - radio "Any" [checked]
                          - generic [ref=e174]: Any
                        - generic [ref=e175] [cursor=pointer]:
                          - radio "Yes"
                          - generic [ref=e176]: "Yes"
                        - generic [ref=e177] [cursor=pointer]:
                          - radio "No"
                          - generic [ref=e178]: "No"
                    - generic [ref=e180]:
                      - generic [ref=e181]: Requested?
                      - generic [ref=e182]:
                        - generic [ref=e183] [cursor=pointer]:
                          - radio "Any" [checked]
                          - generic [ref=e184]: Any
                        - generic [ref=e185] [cursor=pointer]:
                          - radio "Yes"
                          - generic [ref=e186]: "Yes"
                        - generic [ref=e187] [cursor=pointer]:
                          - radio "No"
                          - generic [ref=e188]: "No"
                    - generic [ref=e190]:
                      - generic [ref=e191]: Approved Request?
                      - generic [ref=e192]:
                        - generic [ref=e193] [cursor=pointer]:
                          - radio "Any" [checked]
                          - generic [ref=e194]: Any
                        - generic [ref=e195] [cursor=pointer]:
                          - radio "Yes"
                          - generic [ref=e196]: "Yes"
                        - generic [ref=e197] [cursor=pointer]:
                          - radio "No"
                          - generic [ref=e198]: "No"
                - generic [ref=e199]:
                  - generic [ref=e200] [cursor=pointer]: Advanced
                  - generic [ref=e209]:
                    - generic [ref=e210]:
                      - generic [ref=e211]:
                        - generic [ref=e212]:
                          - generic [ref=e213]: Attendance From
                          - textbox "Attendance From" [ref=e214]:
                            - /placeholder: Attendance date is greater than or equal to
                        - generic [ref=e215]:
                          - generic [ref=e216]: At Work Greater or Equal
                          - textbox "At Work Greater or Equal" [ref=e217]:
                            - /placeholder: At work second is greater than or equal to
                      - generic [ref=e218]:
                        - generic [ref=e219]:
                          - generic [ref=e220]: Attendance Till
                          - textbox "Attendance Till" [ref=e221]:
                            - /placeholder: Attendance date is less than or equal to
                        - generic [ref=e222]:
                          - generic [ref=e223]: At Work Lesser or Equal
                          - textbox "At Work Lesser or Equal" [ref=e224]:
                            - /placeholder: At work second is less than or equal to
                    - button "+ Add filter" [ref=e228] [cursor=pointer]
              - generic [ref=e229]: Group By
            - generic [ref=e237]:
              - button "Clear all" [ref=e238] [cursor=pointer]
              - button "Apply" [ref=e243] [cursor=pointer]
  - log [ref=e248]
```

# Test source

```ts
  34  |     ? /attendance|monthly summary|check.?in|check.?out/i
  35  |     : moduleName === "Onboarding"
  36  |       ? /onboarding|candidate|applicant|stage/i
  37  |       : /offboarding|exit process|resignation|employee/i;
  38  | 
  39  |   await expect.poll(async () => {
  40  |     const text = (await page.locator("body").innerText().catch(() => "")).replace(/\s+/g, " ").trim();
  41  |     return text.length > 20 && modulePattern.test(text);
  42  |   }, {
  43  |     message: `Nội dung ${pageName || moduleName} chưa được render đầy đủ`,
  44  |     timeout: 20000,
  45  |     intervals: [250, 500, 1000, 1500],
  46  |   }).toBeTruthy();
  47  | 
  48  |   await closeBlockingNotification(page);
  49  |   await expect(page.locator("body")).toBeVisible({ timeout: 10000 });
  50  | }
  51  | 
  52  | async function openPage(page, route, moduleName, pageName) {
  53  |   const target = route.startsWith("http") ? route : route.startsWith("/") ? route : `/${route}`;
  54  |   await page.goto(target, { waitUntil: "domcontentloaded", timeout: 45000 });
  55  |   await expect(page.locator("body")).toBeVisible({ timeout: 15000 });
  56  | 
  57  |   const expected = new URL(target, process.env.BASE_URL || process.env.HORILLA_BASE_URL || "https://hr.demo.horilla.com");
  58  |   await expect.poll(() => new URL(page.url()).pathname, {
  59  |     message: `Website không mở đúng trang ${pageName || moduleName}`,
  60  |     timeout: 15000,
  61  |   }).toBe(expected.pathname);
  62  | 
  63  |   await waitForPageContent(page, moduleName, pageName);
  64  |   await assertNoApplicationError(page);
  65  | }
  66  | 
  67  | async function findAction(page, pattern, scope = page) {
  68  |   const regex = pattern instanceof RegExp ? pattern : new RegExp(pattern, "i");
  69  |   const loose = new RegExp(regex.source.replace(/^\^/, "").replace(/\$$/, ""), regex.flags.replace("g", ""));
  70  |   return await firstVisible(scope.getByRole("button", { name: loose }))
  71  |     || await firstVisible(scope.getByRole("link", { name: loose }))
  72  |     || await firstVisible(scope.getByRole("listitem", { name: loose }))
  73  |     || await firstVisible(scope.locator("a,button,[role=button],li").filter({ hasText: loose }));
  74  | }
  75  | 
  76  | async function findSearch(page) {
  77  |   return await firstVisible(page.getByRole("searchbox"))
  78  |     || await firstVisible(page.getByRole("textbox", { name: /search/i }))
  79  |     || await firstVisible(page.locator('input[placeholder*="search" i], input[aria-label*="search" i], input[name*="search" i]'));
  80  | }
  81  | 
  82  | async function findFilterPanel(page) {
  83  |   const heading = await firstVisible(page.getByRole("heading", { name: /^filter\b/i }));
  84  |   const text = await firstVisible(page.getByText(/^filter$/i));
  85  |   const anchor = heading || text;
  86  |   if (!anchor) return null;
  87  | 
  88  |   // Tìm container gần nhất có nút Close; fallback là vùng chứa heading Filter.
  89  |   const panel = anchor.locator("xpath=ancestor::*[.//button[normalize-space()='Close'] or .//*[@role='button' and contains(translate(@aria-label,'CLOSE','close'),'close')]][1]");
  90  |   return await firstVisible(panel) || anchor;
  91  | }
  92  | 
  93  | async function openFilterPanel(page) {
  94  |   let panel = await findFilterPanel(page);
  95  |   if (panel && await panel.isVisible().catch(() => false)) return panel;
  96  | 
  97  |   const button = await findAction(page, /^filter$/i);
  98  |   expect(button, "Trang không có nút Filter khả dụng").not.toBeNull();
  99  |   await button.click();
  100 |   await expect.poll(async () => {
  101 |     const candidate = await findFilterPanel(page);
  102 |     return Boolean(candidate && await candidate.isVisible().catch(() => false));
  103 |   }, { message: "Nhấn Filter nhưng bảng bộ lọc không xuất hiện", timeout: 10000 }).toBeTruthy();
  104 |   panel = await findFilterPanel(page);
  105 |   expect(panel).not.toBeNull();
  106 |   return panel;
  107 | }
  108 | 
  109 | async function hasVisibleLocator(locator) {
  110 |   const count = await locator.count().catch(() => 0);
  111 |   for (let i = 0; i < count; i += 1) {
  112 |     if (await locator.nth(i).isVisible().catch(() => false)) return true;
  113 |   }
  114 |   return false;
  115 | }
  116 | 
  117 | async function assertListOrEmpty(page) {
  118 |   const structured = page.locator(
  119 |     "table:visible, [role=table]:visible, [role=grid]:visible, [class*=kanban]:visible, [class*=pipeline]:visible, [class*=list-view]:visible, [class*=oh-sticky-table]:visible, [class*=oh-card]:visible, [class*=card-container]:visible",
  120 |   );
  121 |   const body = (await page.locator("body").innerText()).replace(/\s+/g, " ");
  122 |   const empty = /no data|no records|no .* found|empty|không có dữ liệu|không tìm thấy|chưa có/i.test(body);
  123 |   const search = await findSearch(page);
  124 |   const filter = await findAction(page, /^filter$/i);
  125 |   const list = await findAction(page, /^list$/i);
  126 |   const card = await findAction(page, /^card$/i);
  127 |   const moduleContent = /attendance|monthly summary|onboarding|candidate|exit process|offboarding/i.test(body);
  128 |   const renderedListView = Boolean(moduleContent && (search || filter || list || card));
  129 |   const hasStructure = await hasVisibleLocator(structured);
  130 | 
  131 |   expect(
  132 |     hasStructure || empty || renderedListView,
  133 |     "Trang không có bảng/danh sách hiển thị, trạng thái rỗng hoặc bộ điều khiển danh sách hợp lệ",
> 134 |   ).toBeTruthy();
      |     ^ Error: Trang không có bảng/danh sách hiển thị, trạng thái rỗng hoặc bộ điều khiển danh sách hợp lệ
  135 | }
  136 | 
  137 | async function assertNoApplicationError(page) {
  138 |   const body = await page.locator("body").innerText().catch(() => "");
  139 |   expect(body, "Website hiển thị lỗi ứng dụng").not.toMatch(APP_ERROR);
  140 | }
  141 | 
  142 | async function reloadAndVerify(page, route) {
  143 |   await page.reload({ waitUntil: "domcontentloaded", timeout: 45000 });
  144 |   await expect.poll(() => new URL(page.url()).pathname, {
  145 |     message: "Sau khi tải lại, website chuyển khỏi URL kiểm thử",
  146 |     timeout: 15000,
  147 |   }).toBe(route);
  148 |   await waitForPageContent(page, route.includes("attendance") ? "Attendance" : route.includes("onboarding") ? "Onboarding" : "Offboarding", route);
  149 |   await assertNoApplicationError(page);
  150 | }
  151 | 
  152 | module.exports = {
  153 |   openPage,
  154 |   firstVisible,
  155 |   findAction,
  156 |   findSearch,
  157 |   findFilterPanel,
  158 |   openFilterPanel,
  159 |   assertListOrEmpty,
  160 |   assertNoApplicationError,
  161 |   reloadAndVerify,
  162 |   escapeRegExp,
  163 | };
  164 | 
```

---

## 3. test-results\2026-11-09T15-40-23-299Z\attendance-Attendance---ph-5dcb0--bảng-bộ-lọc-My-Attendances-anh

**File goc:** `test-results\2026-11-09T15-40-23-299Z\attendance-Attendance---ph-5dcb0--bảng-bộ-lọc-My-Attendances-anh\error-context.md`

# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: anh\tests\attendance.spec.js >> Attendance - phạm vi Admin trên Horilla Demo >> AT09 - Đóng bảng bộ lọc My Attendances
- Location: anh\tests\attendance.spec.js:66:3

# Error details

```
Error: Trang không có nút Filter khả dụng

expect(received).not.toBeNull()

Received: null
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e3]:
    - generic [ref=e4]:
      - button "Unlock sidebar (auto-collapses on hover-out)" [ref=e5] [cursor=pointer]
      - generic [ref=e8]:
        - img "Northwind Technologies Inc." [ref=e9]
        - generic [ref=e10]:
          - generic [ref=e11]: Northwind Technologies Inc..
          - link "My Company" [ref=e12] [cursor=pointer]:
            - /url: "#"
    - navigation "Main navigation" [ref=e13]:
      - link [ref=e14] [cursor=pointer]:
        - /url: /dashboard/
        - generic [aria-hidden] [ref=e15]: Dashboard
      - button "Employee" [ref=e17] [cursor=pointer]
      - button "Attendance" [ref=e20] [cursor=pointer]
      - button "Leave" [ref=e23] [cursor=pointer]
      - button "Payroll" [ref=e26] [cursor=pointer]
      - button "Recruitment" [ref=e29] [cursor=pointer]
      - button "Onboarding" [ref=e32] [cursor=pointer]
      - button "Offboarding" [ref=e35] [cursor=pointer]
      - button "Performance" [ref=e38] [cursor=pointer]
      - button "Project" [ref=e41] [cursor=pointer]
      - button "Assets" [ref=e44] [cursor=pointer]
      - button "Tickets" [ref=e47] [cursor=pointer]
      - button "Reports" [ref=e50] [cursor=pointer]
    - generic "Horilla HR version 2.3.0" [ref=e52]: Version 2.3.0
  - generic "Quick Actions" [ref=e54] [cursor=pointer]: arrow_forward
  - generic [ref=e57]:
    - generic:
      - generic [ref=e58]:
        - list [ref=e60]:
          - listitem [ref=e61]:
            - text: 
            - link "Horilla" [ref=e62] [cursor=pointer]:
              - /url: https://hr.demo.horilla.com/?breadcrumb_nav=true
          - listitem [ref=e63]:
            - text: 
            - link "Attendance" [ref=e64] [cursor=pointer]:
              - /url: https://hr.demo.horilla.com/attendance/
          - listitem [ref=e65]:
            - link "My Attendances" [ref=e66] [cursor=pointer]:
              - /url: https://hr.demo.horilla.com/attendance/view-my-attendance/?breadcrumb_nav=true
        - generic [ref=e67]:
          - generic [ref=e68]:
            - button " 03:53:05" [ref=e70] [cursor=pointer]:
              - generic [ref=e71]:
                - generic [ref=e72]: 
                - generic [ref=e73]: 03:53:05
            - button [ref=e74] [cursor=pointer]:
              - link "Toggle theme" [ref=e75]:
                - /url: "#"
                - generic [ref=e76]: 
            - button [ref=e77] [cursor=pointer]:
              - link "" [ref=e78]:
                - /url: /settings/system-preferences-view/
            - button "" [ref=e81] [cursor=pointer]
            - button "" [ref=e84] [cursor=pointer]
            - button "" [ref=e87] [cursor=pointer]
            - button "" [ref=e90] [cursor=pointer]
          - button "user Adam Admin Online" [ref=e93] [cursor=pointer]:
            - generic [ref=e94]:
              - img "user" [ref=e96]
              - generic [ref=e99]:
                - heading "Adam Admin" [level=5] [ref=e100]
                - paragraph [ref=e101]: Online
      - generic [ref=e104]:
        - heading [level=3] [ref=e105]:
          - button "" [ref=e106] [cursor=pointer]
          - text: All Notifications
        - button "Clear All" [ref=e108] [cursor=pointer]
    - generic [ref=e111]:
      - heading "My Attendances" [level=3] [ref=e112]
      - generic [ref=e114]:
        - generic: 
        - generic [ref=e116]:
          - button "Filter Filter" [ref=e117] [cursor=pointer]:
            - img "Filter"
            - text: Filter
          - generic [ref=e118]:
            - generic [ref=e119]:
              - heading "Filter My Attendances" [level=3] [ref=e120]
              - button "Close" [ref=e121] [cursor=pointer]
            - textbox "Find a filter" [ref=e127]
            - generic [ref=e129]:
              - generic [ref=e130]:
                - generic [ref=e131]:
                  - generic [ref=e132] [cursor=pointer]: Attendance
                  - generic [ref=e137]:
                    - generic [ref=e139]:
                      - generic [ref=e140]: Attendance Date
                      - textbox "Attendance Date" [ref=e141]:
                        - /placeholder: Attendance date
                    - generic [ref=e143]:
                      - generic [ref=e144]: Min Hour
                      - textbox "Min Hour" [ref=e145]:
                        - /placeholder: Minimum Hour
                    - generic [ref=e147]:
                      - generic [ref=e148]: Validated?
                      - generic [ref=e149]:
                        - generic [ref=e150] [cursor=pointer]:
                          - radio "Any" [checked]
                          - generic [ref=e151]: Any
                        - generic [ref=e152] [cursor=pointer]:
                          - radio "Yes"
                          - generic [ref=e153]: "Yes"
                        - generic [ref=e154] [cursor=pointer]:
                          - radio "No"
                          - generic [ref=e155]: "No"
                    - generic [ref=e157]:
                      - generic [ref=e158]: OT Approved?
                      - generic [ref=e159]:
                        - generic [ref=e160] [cursor=pointer]:
                          - radio "Any" [checked]
                          - generic [ref=e161]: Any
                        - generic [ref=e162] [cursor=pointer]:
                          - radio "Yes"
                          - generic [ref=e163]: "Yes"
                        - generic [ref=e164] [cursor=pointer]:
                          - radio "No"
                          - generic [ref=e165]: "No"
                    - generic [ref=e167]:
                      - generic [ref=e168]: Requested?
                      - generic [ref=e169]:
                        - generic [ref=e170] [cursor=pointer]:
                          - radio "Any" [checked]
                          - generic [ref=e171]: Any
                        - generic [ref=e172] [cursor=pointer]:
                          - radio "Yes"
                          - generic [ref=e173]: "Yes"
                        - generic [ref=e174] [cursor=pointer]:
                          - radio "No"
                          - generic [ref=e175]: "No"
                    - generic [ref=e177]:
                      - generic [ref=e178]: Approved Request?
                      - generic [ref=e179]:
                        - generic [ref=e180] [cursor=pointer]:
                          - radio "Any" [checked]
                          - generic [ref=e181]: Any
                        - generic [ref=e182] [cursor=pointer]:
                          - radio "Yes"
                          - generic [ref=e183]: "Yes"
                        - generic [ref=e184] [cursor=pointer]:
                          - radio "No"
                          - generic [ref=e185]: "No"
                - generic [ref=e186]:
                  - generic [ref=e187] [cursor=pointer]: Advanced
                  - generic [ref=e191]:
                    - generic [ref=e192]:
                      - generic [ref=e193]:
                        - generic [ref=e194]:
                          - generic [ref=e195]: Attendance From
                          - textbox "Attendance From" [ref=e196]:
                            - /placeholder: Attendance date is greater than or equal to
                        - generic [ref=e197]:
                          - generic [ref=e198]: At Work Greater or Equal
                          - textbox "At Work Greater or Equal" [ref=e199]:
                            - /placeholder: At work second is greater than or equal to
                      - generic [ref=e200]:
                        - generic [ref=e201]:
                          - generic [ref=e202]: Attendance Till
                          - textbox "Attendance Till" [ref=e203]:
                            - /placeholder: Attendance date is less than or equal to
                        - generic [ref=e204]:
                          - generic [ref=e205]: At Work Lesser or Equal
                          - textbox "At Work Lesser or Equal" [ref=e206]:
                            - /placeholder: At work second is less than or equal to
                    - button "+ Add filter" [ref=e210] [cursor=pointer]
              - generic [ref=e211]: Group By
            - generic [ref=e216]:
              - button "Clear all" [ref=e217] [cursor=pointer]
              - button "Apply" [ref=e222] [cursor=pointer]
  - log [ref=e225]
```

# Test source

```ts
  1   | const { expect } = require("@playwright/test");
  2   | 
  3   | const APP_ERROR = /500 server error|traceback|application error|internal server error|server error/i;
  4   | 
  5   | function escapeRegExp(value) {
  6   |   return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  7   | }
  8   | 
  9   | async function firstVisible(locator) {
  10  |   const count = await locator.count().catch(() => 0);
  11  |   for (let i = 0; i < count; i += 1) {
  12  |     const item = locator.nth(i);
  13  |     if (await item.isVisible().catch(() => false)) return item;
  14  |   }
  15  |   return null;
  16  | }
  17  | 
  18  | async function closeBlockingNotification(page) {
  19  |   // Horilla đôi khi giữ drawer All Notifications mở từ storage/session trước đó.
  20  |   const drawerText = page.getByText(/all notifications/i).first();
  21  |   if (!(await drawerText.isVisible().catch(() => false))) return;
  22  | 
  23  |   const close = await firstVisible(page.getByRole("button", { name: /close|dismiss/i }))
  24  |     || await firstVisible(page.locator('button[aria-label*="close" i], [role="button"][aria-label*="close" i]'));
  25  |   if (close) {
  26  |     await close.click().catch(() => {});
  27  |     await expect(drawerText).toBeHidden({ timeout: 5000 }).catch(() => {});
  28  |   }
  29  | }
  30  | 
  31  | async function waitForPageContent(page, moduleName, pageName) {
  32  |   // Chờ nội dung ứng dụng được render, không chỉ chờ DOM/body xuất hiện.
  33  |   const modulePattern = moduleName === "Attendance"
  34  |     ? /attendance|monthly summary|check.?in|check.?out/i
  35  |     : moduleName === "Onboarding"
  36  |       ? /onboarding|candidate|applicant|stage/i
  37  |       : /offboarding|exit process|resignation|employee/i;
  38  | 
  39  |   await expect.poll(async () => {
  40  |     const text = (await page.locator("body").innerText().catch(() => "")).replace(/\s+/g, " ").trim();
  41  |     return text.length > 20 && modulePattern.test(text);
  42  |   }, {
  43  |     message: `Nội dung ${pageName || moduleName} chưa được render đầy đủ`,
  44  |     timeout: 20000,
  45  |     intervals: [250, 500, 1000, 1500],
  46  |   }).toBeTruthy();
  47  | 
  48  |   await closeBlockingNotification(page);
  49  |   await expect(page.locator("body")).toBeVisible({ timeout: 10000 });
  50  | }
  51  | 
  52  | async function openPage(page, route, moduleName, pageName) {
  53  |   const target = route.startsWith("http") ? route : route.startsWith("/") ? route : `/${route}`;
  54  |   await page.goto(target, { waitUntil: "domcontentloaded", timeout: 45000 });
  55  |   await expect(page.locator("body")).toBeVisible({ timeout: 15000 });
  56  | 
  57  |   const expected = new URL(target, process.env.BASE_URL || process.env.HORILLA_BASE_URL || "https://hr.demo.horilla.com");
  58  |   await expect.poll(() => new URL(page.url()).pathname, {
  59  |     message: `Website không mở đúng trang ${pageName || moduleName}`,
  60  |     timeout: 15000,
  61  |   }).toBe(expected.pathname);
  62  | 
  63  |   await waitForPageContent(page, moduleName, pageName);
  64  |   await assertNoApplicationError(page);
  65  | }
  66  | 
  67  | async function findAction(page, pattern, scope = page) {
  68  |   const regex = pattern instanceof RegExp ? pattern : new RegExp(pattern, "i");
  69  |   const loose = new RegExp(regex.source.replace(/^\^/, "").replace(/\$$/, ""), regex.flags.replace("g", ""));
  70  |   return await firstVisible(scope.getByRole("button", { name: loose }))
  71  |     || await firstVisible(scope.getByRole("link", { name: loose }))
  72  |     || await firstVisible(scope.getByRole("listitem", { name: loose }))
  73  |     || await firstVisible(scope.locator("a,button,[role=button],li").filter({ hasText: loose }));
  74  | }
  75  | 
  76  | async function findSearch(page) {
  77  |   return await firstVisible(page.getByRole("searchbox"))
  78  |     || await firstVisible(page.getByRole("textbox", { name: /search/i }))
  79  |     || await firstVisible(page.locator('input[placeholder*="search" i], input[aria-label*="search" i], input[name*="search" i]'));
  80  | }
  81  | 
  82  | async function findFilterPanel(page) {
  83  |   const heading = await firstVisible(page.getByRole("heading", { name: /^filter\b/i }));
  84  |   const text = await firstVisible(page.getByText(/^filter$/i));
  85  |   const anchor = heading || text;
  86  |   if (!anchor) return null;
  87  | 
  88  |   // Tìm container gần nhất có nút Close; fallback là vùng chứa heading Filter.
  89  |   const panel = anchor.locator("xpath=ancestor::*[.//button[normalize-space()='Close'] or .//*[@role='button' and contains(translate(@aria-label,'CLOSE','close'),'close')]][1]");
  90  |   return await firstVisible(panel) || anchor;
  91  | }
  92  | 
  93  | async function openFilterPanel(page) {
  94  |   let panel = await findFilterPanel(page);
  95  |   if (panel && await panel.isVisible().catch(() => false)) return panel;
  96  | 
  97  |   const button = await findAction(page, /^filter$/i);
> 98  |   expect(button, "Trang không có nút Filter khả dụng").not.toBeNull();
      |                                                            ^ Error: Trang không có nút Filter khả dụng
  99  |   await button.click();
  100 |   await expect.poll(async () => {
  101 |     const candidate = await findFilterPanel(page);
  102 |     return Boolean(candidate && await candidate.isVisible().catch(() => false));
  103 |   }, { message: "Nhấn Filter nhưng bảng bộ lọc không xuất hiện", timeout: 10000 }).toBeTruthy();
  104 |   panel = await findFilterPanel(page);
  105 |   expect(panel).not.toBeNull();
  106 |   return panel;
  107 | }
  108 | 
  109 | async function hasVisibleLocator(locator) {
  110 |   const count = await locator.count().catch(() => 0);
  111 |   for (let i = 0; i < count; i += 1) {
  112 |     if (await locator.nth(i).isVisible().catch(() => false)) return true;
  113 |   }
  114 |   return false;
  115 | }
  116 | 
  117 | async function assertListOrEmpty(page) {
  118 |   const structured = page.locator(
  119 |     "table:visible, [role=table]:visible, [role=grid]:visible, [class*=kanban]:visible, [class*=pipeline]:visible, [class*=list-view]:visible, [class*=oh-sticky-table]:visible, [class*=oh-card]:visible, [class*=card-container]:visible",
  120 |   );
  121 |   const body = (await page.locator("body").innerText()).replace(/\s+/g, " ");
  122 |   const empty = /no data|no records|no .* found|empty|không có dữ liệu|không tìm thấy|chưa có/i.test(body);
  123 |   const search = await findSearch(page);
  124 |   const filter = await findAction(page, /^filter$/i);
  125 |   const list = await findAction(page, /^list$/i);
  126 |   const card = await findAction(page, /^card$/i);
  127 |   const moduleContent = /attendance|monthly summary|onboarding|candidate|exit process|offboarding/i.test(body);
  128 |   const renderedListView = Boolean(moduleContent && (search || filter || list || card));
  129 |   const hasStructure = await hasVisibleLocator(structured);
  130 | 
  131 |   expect(
  132 |     hasStructure || empty || renderedListView,
  133 |     "Trang không có bảng/danh sách hiển thị, trạng thái rỗng hoặc bộ điều khiển danh sách hợp lệ",
  134 |   ).toBeTruthy();
  135 | }
  136 | 
  137 | async function assertNoApplicationError(page) {
  138 |   const body = await page.locator("body").innerText().catch(() => "");
  139 |   expect(body, "Website hiển thị lỗi ứng dụng").not.toMatch(APP_ERROR);
  140 | }
  141 | 
  142 | async function reloadAndVerify(page, route) {
  143 |   await page.reload({ waitUntil: "domcontentloaded", timeout: 45000 });
  144 |   await expect.poll(() => new URL(page.url()).pathname, {
  145 |     message: "Sau khi tải lại, website chuyển khỏi URL kiểm thử",
  146 |     timeout: 15000,
  147 |   }).toBe(route);
  148 |   await waitForPageContent(page, route.includes("attendance") ? "Attendance" : route.includes("onboarding") ? "Onboarding" : "Offboarding", route);
  149 |   await assertNoApplicationError(page);
  150 | }
  151 | 
  152 | module.exports = {
  153 |   openPage,
  154 |   firstVisible,
  155 |   findAction,
  156 |   findSearch,
  157 |   findFilterPanel,
  158 |   openFilterPanel,
  159 |   assertListOrEmpty,
  160 |   assertNoApplicationError,
  161 |   reloadAndVerify,
  162 |   escapeRegExp,
  163 | };
  164 | 
```

---

## 4. test-results\2026-11-09T15-40-23-299Z\attendance-Attendance---ph-d2110-ển-thị-các-trường-chấm-công-anh

**File goc:** `test-results\2026-11-09T15-40-23-299Z\attendance-Attendance---ph-d2110-ển-thị-các-trường-chấm-công-anh\error-context.md`

# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: anh\tests\attendance.spec.js >> Attendance - phạm vi Admin trên Horilla Demo >> AT07 - Bộ lọc My Attendances hiển thị các trường chấm công
- Location: anh\tests\attendance.spec.js:52:3

# Error details

```
Error: Trang không có nút Filter khả dụng

expect(received).not.toBeNull()

Received: null
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e3]:
    - generic [ref=e4]:
      - button "Unlock sidebar (auto-collapses on hover-out)" [ref=e5] [cursor=pointer]
      - generic [ref=e8]:
        - img "Northwind Technologies Inc." [ref=e9]
        - generic [ref=e10]:
          - generic [ref=e11]: Northwind Technologies Inc..
          - link "My Company" [ref=e12] [cursor=pointer]:
            - /url: "#"
    - navigation "Main navigation" [ref=e13]:
      - link [ref=e14] [cursor=pointer]:
        - /url: /dashboard/
        - generic [aria-hidden] [ref=e15]: Dashboard
      - button "Employee" [ref=e17] [cursor=pointer]
      - button "Attendance" [ref=e20] [cursor=pointer]
      - button "Leave" [ref=e23] [cursor=pointer]
      - button "Payroll" [ref=e26] [cursor=pointer]
      - button "Recruitment" [ref=e29] [cursor=pointer]
      - button "Onboarding" [ref=e32] [cursor=pointer]
      - button "Offboarding" [ref=e35] [cursor=pointer]
      - button "Performance" [ref=e38] [cursor=pointer]
      - button "Project" [ref=e41] [cursor=pointer]
      - button "Assets" [ref=e44] [cursor=pointer]
      - button "Tickets" [ref=e47] [cursor=pointer]
      - button "Reports" [ref=e50] [cursor=pointer]
    - generic "Horilla HR version 2.3.0" [ref=e52]: Version 2.3.0
  - generic "Quick Actions" [ref=e54] [cursor=pointer]: arrow_forward
  - generic [ref=e57]:
    - generic:
      - generic [ref=e58]:
        - list [ref=e60]:
          - listitem [ref=e61]:
            - text: 
            - link "Horilla" [ref=e62] [cursor=pointer]:
              - /url: https://hr.demo.horilla.com/?breadcrumb_nav=true
          - listitem [ref=e63]:
            - text: 
            - link "Attendance" [ref=e64] [cursor=pointer]:
              - /url: https://hr.demo.horilla.com/attendance/
          - listitem [ref=e65]:
            - link "My Attendances" [ref=e66] [cursor=pointer]:
              - /url: https://hr.demo.horilla.com/attendance/view-my-attendance/?breadcrumb_nav=true
        - generic [ref=e67]:
          - generic [ref=e68]:
            - button " 03:52:31" [ref=e70] [cursor=pointer]:
              - generic [ref=e71]:
                - generic [ref=e72]: 
                - generic [ref=e73]: 03:52:31
            - button [ref=e74] [cursor=pointer]:
              - link "Toggle theme" [ref=e75]:
                - /url: "#"
                - generic [ref=e76]: 
            - button [ref=e77] [cursor=pointer]:
              - link "" [ref=e78]:
                - /url: /settings/system-preferences-view/
            - button "" [ref=e81] [cursor=pointer]
            - button "" [ref=e84] [cursor=pointer]
            - button "" [ref=e87] [cursor=pointer]
            - button "" [ref=e90] [cursor=pointer]
          - button "user Adam Admin Online" [ref=e93] [cursor=pointer]:
            - generic [ref=e94]:
              - img "user" [ref=e96]
              - generic [ref=e99]:
                - heading "Adam Admin" [level=5] [ref=e100]
                - paragraph [ref=e101]: Online
      - generic [ref=e104]:
        - heading [level=3] [ref=e105]:
          - button "" [ref=e106] [cursor=pointer]
          - text: All Notifications
        - button "Clear All" [ref=e108] [cursor=pointer]
    - generic [ref=e111]:
      - heading "My Attendances" [level=3] [ref=e112]
      - generic [ref=e114]:
        - generic: 
        - generic [ref=e116]:
          - button "Filter Filter" [ref=e117] [cursor=pointer]:
            - img "Filter"
            - text: Filter
          - generic [ref=e118]:
            - generic [ref=e119]:
              - heading "Filter My Attendances" [level=3] [ref=e120]
              - button "Close" [ref=e121] [cursor=pointer]
            - textbox "Find a filter" [ref=e127]
            - generic [ref=e129]:
              - generic [ref=e130]:
                - generic [ref=e131]:
                  - generic [ref=e132] [cursor=pointer]: Attendance
                  - generic [ref=e137]:
                    - generic [ref=e139]:
                      - generic [ref=e140]: Attendance Date
                      - textbox "Attendance Date" [ref=e141]:
                        - /placeholder: Attendance date
                    - generic [ref=e143]:
                      - generic [ref=e144]: Min Hour
                      - textbox "Min Hour" [ref=e145]:
                        - /placeholder: Minimum Hour
                    - generic [ref=e147]:
                      - generic [ref=e148]: Validated?
                      - generic [ref=e149]:
                        - generic [ref=e150] [cursor=pointer]:
                          - radio "Any" [checked]
                          - generic [ref=e151]: Any
                        - generic [ref=e152] [cursor=pointer]:
                          - radio "Yes"
                          - generic [ref=e153]: "Yes"
                        - generic [ref=e154] [cursor=pointer]:
                          - radio "No"
                          - generic [ref=e155]: "No"
                    - generic [ref=e157]:
                      - generic [ref=e158]: OT Approved?
                      - generic [ref=e159]:
                        - generic [ref=e160] [cursor=pointer]:
                          - radio "Any" [checked]
                          - generic [ref=e161]: Any
                        - generic [ref=e162] [cursor=pointer]:
                          - radio "Yes"
                          - generic [ref=e163]: "Yes"
                        - generic [ref=e164] [cursor=pointer]:
                          - radio "No"
                          - generic [ref=e165]: "No"
                    - generic [ref=e167]:
                      - generic [ref=e168]: Requested?
                      - generic [ref=e169]:
                        - generic [ref=e170] [cursor=pointer]:
                          - radio "Any" [checked]
                          - generic [ref=e171]: Any
                        - generic [ref=e172] [cursor=pointer]:
                          - radio "Yes"
                          - generic [ref=e173]: "Yes"
                        - generic [ref=e174] [cursor=pointer]:
                          - radio "No"
                          - generic [ref=e175]: "No"
                    - generic [ref=e177]:
                      - generic [ref=e178]: Approved Request?
                      - generic [ref=e179]:
                        - generic [ref=e180] [cursor=pointer]:
                          - radio "Any" [checked]
                          - generic [ref=e181]: Any
                        - generic [ref=e182] [cursor=pointer]:
                          - radio "Yes"
                          - generic [ref=e183]: "Yes"
                        - generic [ref=e184] [cursor=pointer]:
                          - radio "No"
                          - generic [ref=e185]: "No"
                - generic [ref=e186]:
                  - generic [ref=e187] [cursor=pointer]: Advanced
                  - generic [ref=e191]:
                    - generic [ref=e192]:
                      - generic [ref=e193]:
                        - generic [ref=e194]:
                          - generic [ref=e195]: Attendance From
                          - textbox "Attendance From" [ref=e196]:
                            - /placeholder: Attendance date is greater than or equal to
                        - generic [ref=e197]:
                          - generic [ref=e198]: At Work Greater or Equal
                          - textbox "At Work Greater or Equal" [ref=e199]:
                            - /placeholder: At work second is greater than or equal to
                      - generic [ref=e200]:
                        - generic [ref=e201]:
                          - generic [ref=e202]: Attendance Till
                          - textbox "Attendance Till" [ref=e203]:
                            - /placeholder: Attendance date is less than or equal to
                        - generic [ref=e204]:
                          - generic [ref=e205]: At Work Lesser or Equal
                          - textbox "At Work Lesser or Equal" [ref=e206]:
                            - /placeholder: At work second is less than or equal to
                    - button "+ Add filter" [ref=e210] [cursor=pointer]
              - generic [ref=e211]: Group By
            - generic [ref=e216]:
              - button "Clear all" [ref=e217] [cursor=pointer]
              - button "Apply" [ref=e222] [cursor=pointer]
  - log [ref=e225]
```

# Test source

```ts
  1   | const { expect } = require("@playwright/test");
  2   | 
  3   | const APP_ERROR = /500 server error|traceback|application error|internal server error|server error/i;
  4   | 
  5   | function escapeRegExp(value) {
  6   |   return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  7   | }
  8   | 
  9   | async function firstVisible(locator) {
  10  |   const count = await locator.count().catch(() => 0);
  11  |   for (let i = 0; i < count; i += 1) {
  12  |     const item = locator.nth(i);
  13  |     if (await item.isVisible().catch(() => false)) return item;
  14  |   }
  15  |   return null;
  16  | }
  17  | 
  18  | async function closeBlockingNotification(page) {
  19  |   // Horilla đôi khi giữ drawer All Notifications mở từ storage/session trước đó.
  20  |   const drawerText = page.getByText(/all notifications/i).first();
  21  |   if (!(await drawerText.isVisible().catch(() => false))) return;
  22  | 
  23  |   const close = await firstVisible(page.getByRole("button", { name: /close|dismiss/i }))
  24  |     || await firstVisible(page.locator('button[aria-label*="close" i], [role="button"][aria-label*="close" i]'));
  25  |   if (close) {
  26  |     await close.click().catch(() => {});
  27  |     await expect(drawerText).toBeHidden({ timeout: 5000 }).catch(() => {});
  28  |   }
  29  | }
  30  | 
  31  | async function waitForPageContent(page, moduleName, pageName) {
  32  |   // Chờ nội dung ứng dụng được render, không chỉ chờ DOM/body xuất hiện.
  33  |   const modulePattern = moduleName === "Attendance"
  34  |     ? /attendance|monthly summary|check.?in|check.?out/i
  35  |     : moduleName === "Onboarding"
  36  |       ? /onboarding|candidate|applicant|stage/i
  37  |       : /offboarding|exit process|resignation|employee/i;
  38  | 
  39  |   await expect.poll(async () => {
  40  |     const text = (await page.locator("body").innerText().catch(() => "")).replace(/\s+/g, " ").trim();
  41  |     return text.length > 20 && modulePattern.test(text);
  42  |   }, {
  43  |     message: `Nội dung ${pageName || moduleName} chưa được render đầy đủ`,
  44  |     timeout: 20000,
  45  |     intervals: [250, 500, 1000, 1500],
  46  |   }).toBeTruthy();
  47  | 
  48  |   await closeBlockingNotification(page);
  49  |   await expect(page.locator("body")).toBeVisible({ timeout: 10000 });
  50  | }
  51  | 
  52  | async function openPage(page, route, moduleName, pageName) {
  53  |   const target = route.startsWith("http") ? route : route.startsWith("/") ? route : `/${route}`;
  54  |   await page.goto(target, { waitUntil: "domcontentloaded", timeout: 45000 });
  55  |   await expect(page.locator("body")).toBeVisible({ timeout: 15000 });
  56  | 
  57  |   const expected = new URL(target, process.env.BASE_URL || process.env.HORILLA_BASE_URL || "https://hr.demo.horilla.com");
  58  |   await expect.poll(() => new URL(page.url()).pathname, {
  59  |     message: `Website không mở đúng trang ${pageName || moduleName}`,
  60  |     timeout: 15000,
  61  |   }).toBe(expected.pathname);
  62  | 
  63  |   await waitForPageContent(page, moduleName, pageName);
  64  |   await assertNoApplicationError(page);
  65  | }
  66  | 
  67  | async function findAction(page, pattern, scope = page) {
  68  |   const regex = pattern instanceof RegExp ? pattern : new RegExp(pattern, "i");
  69  |   const loose = new RegExp(regex.source.replace(/^\^/, "").replace(/\$$/, ""), regex.flags.replace("g", ""));
  70  |   return await firstVisible(scope.getByRole("button", { name: loose }))
  71  |     || await firstVisible(scope.getByRole("link", { name: loose }))
  72  |     || await firstVisible(scope.getByRole("listitem", { name: loose }))
  73  |     || await firstVisible(scope.locator("a,button,[role=button],li").filter({ hasText: loose }));
  74  | }
  75  | 
  76  | async function findSearch(page) {
  77  |   return await firstVisible(page.getByRole("searchbox"))
  78  |     || await firstVisible(page.getByRole("textbox", { name: /search/i }))
  79  |     || await firstVisible(page.locator('input[placeholder*="search" i], input[aria-label*="search" i], input[name*="search" i]'));
  80  | }
  81  | 
  82  | async function findFilterPanel(page) {
  83  |   const heading = await firstVisible(page.getByRole("heading", { name: /^filter\b/i }));
  84  |   const text = await firstVisible(page.getByText(/^filter$/i));
  85  |   const anchor = heading || text;
  86  |   if (!anchor) return null;
  87  | 
  88  |   // Tìm container gần nhất có nút Close; fallback là vùng chứa heading Filter.
  89  |   const panel = anchor.locator("xpath=ancestor::*[.//button[normalize-space()='Close'] or .//*[@role='button' and contains(translate(@aria-label,'CLOSE','close'),'close')]][1]");
  90  |   return await firstVisible(panel) || anchor;
  91  | }
  92  | 
  93  | async function openFilterPanel(page) {
  94  |   let panel = await findFilterPanel(page);
  95  |   if (panel && await panel.isVisible().catch(() => false)) return panel;
  96  | 
  97  |   const button = await findAction(page, /^filter$/i);
> 98  |   expect(button, "Trang không có nút Filter khả dụng").not.toBeNull();
      |                                                            ^ Error: Trang không có nút Filter khả dụng
  99  |   await button.click();
  100 |   await expect.poll(async () => {
  101 |     const candidate = await findFilterPanel(page);
  102 |     return Boolean(candidate && await candidate.isVisible().catch(() => false));
  103 |   }, { message: "Nhấn Filter nhưng bảng bộ lọc không xuất hiện", timeout: 10000 }).toBeTruthy();
  104 |   panel = await findFilterPanel(page);
  105 |   expect(panel).not.toBeNull();
  106 |   return panel;
  107 | }
  108 | 
  109 | async function hasVisibleLocator(locator) {
  110 |   const count = await locator.count().catch(() => 0);
  111 |   for (let i = 0; i < count; i += 1) {
  112 |     if (await locator.nth(i).isVisible().catch(() => false)) return true;
  113 |   }
  114 |   return false;
  115 | }
  116 | 
  117 | async function assertListOrEmpty(page) {
  118 |   const structured = page.locator(
  119 |     "table:visible, [role=table]:visible, [role=grid]:visible, [class*=kanban]:visible, [class*=pipeline]:visible, [class*=list-view]:visible, [class*=oh-sticky-table]:visible, [class*=oh-card]:visible, [class*=card-container]:visible",
  120 |   );
  121 |   const body = (await page.locator("body").innerText()).replace(/\s+/g, " ");
  122 |   const empty = /no data|no records|no .* found|empty|không có dữ liệu|không tìm thấy|chưa có/i.test(body);
  123 |   const search = await findSearch(page);
  124 |   const filter = await findAction(page, /^filter$/i);
  125 |   const list = await findAction(page, /^list$/i);
  126 |   const card = await findAction(page, /^card$/i);
  127 |   const moduleContent = /attendance|monthly summary|onboarding|candidate|exit process|offboarding/i.test(body);
  128 |   const renderedListView = Boolean(moduleContent && (search || filter || list || card));
  129 |   const hasStructure = await hasVisibleLocator(structured);
  130 | 
  131 |   expect(
  132 |     hasStructure || empty || renderedListView,
  133 |     "Trang không có bảng/danh sách hiển thị, trạng thái rỗng hoặc bộ điều khiển danh sách hợp lệ",
  134 |   ).toBeTruthy();
  135 | }
  136 | 
  137 | async function assertNoApplicationError(page) {
  138 |   const body = await page.locator("body").innerText().catch(() => "");
  139 |   expect(body, "Website hiển thị lỗi ứng dụng").not.toMatch(APP_ERROR);
  140 | }
  141 | 
  142 | async function reloadAndVerify(page, route) {
  143 |   await page.reload({ waitUntil: "domcontentloaded", timeout: 45000 });
  144 |   await expect.poll(() => new URL(page.url()).pathname, {
  145 |     message: "Sau khi tải lại, website chuyển khỏi URL kiểm thử",
  146 |     timeout: 15000,
  147 |   }).toBe(route);
  148 |   await waitForPageContent(page, route.includes("attendance") ? "Attendance" : route.includes("onboarding") ? "Onboarding" : "Offboarding", route);
  149 |   await assertNoApplicationError(page);
  150 | }
  151 | 
  152 | module.exports = {
  153 |   openPage,
  154 |   firstVisible,
  155 |   findAction,
  156 |   findSearch,
  157 |   findFilterPanel,
  158 |   openFilterPanel,
  159 |   assertListOrEmpty,
  160 |   assertNoApplicationError,
  161 |   reloadAndVerify,
  162 |   escapeRegExp,
  163 | };
  164 | 
```

---
