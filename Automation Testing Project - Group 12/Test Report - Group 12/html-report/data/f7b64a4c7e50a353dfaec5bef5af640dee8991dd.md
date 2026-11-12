# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: anh\tests\attendance.spec.js >> Attendance - phạm vi Admin trên Horilla Demo >> AT09 - Đóng bảng bộ lọc My Attendances
- Location: anh\tests\attendance.spec.js:66:3

# Error details

```
TimeoutError: locator.click: Timeout 20000ms exceeded.
Call log:
  - waiting for getByRole('heading', { name: /^filter\b/i }).first().locator('../..').getByRole('button', { name: /close/i }).first()
    - locator resolved to <button type="button" aria-label="Close" class="oh-filter-panel__close" onclick="toggleModernFilterPanel(false)">…</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - element is outside of the viewport
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - element is outside of the viewport
    - retrying click action
      - waiting 100ms
    38 × waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - element is outside of the viewport
     - retrying click action
       - waiting 500ms

```

# Page snapshot

```yaml
- generic [ref=e1]:
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
            - button " 04:22:09" [ref=e70] [cursor=pointer]:
              - generic [ref=e71]:
                - generic [ref=e72]: 
                - generic [ref=e73]: 04:22:09
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
    - generic [ref=e109]:
      - generic [ref=e111]:
        - heading "My Attendances" [level=3] [ref=e112]
        - generic [ref=e114]:
          - generic: 
          - generic [ref=e116]:
            - button [active] [ref=e117] [cursor=pointer]:
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
      - generic [ref=e249]:
        - generic [ref=e250]:
          - button "Select (46)" [ref=e252] [cursor=pointer]
          - generic [ref=e254]:
            - button "Quick filter" [ref=e256] [cursor=pointer]
            - button "Approved Request" [ref=e265] [cursor=pointer]
            - button "Requested" [ref=e267] [cursor=pointer]
            - button "Not Validated" [ref=e269] [cursor=pointer]
            - button "Validated" [ref=e271] [cursor=pointer]
        - table [ref=e275]:
          - rowgroup [ref=e276]:
            - row [ref=e277]:
              - columnheader [ref=e278]:
                - checkbox "Select All" [ref=e280] [cursor=pointer]
              - columnheader "  Employee" [ref=e281]:
                - generic [ref=e283]:
                  - generic [ref=e284]:
                    - generic [ref=e285]: 
                    - generic [ref=e286]: 
                  - generic [ref=e287]: Employee
              - columnheader "  Date" [ref=e288]:
                - generic [ref=e290]:
                  - generic [ref=e291]:
                    - generic [ref=e292]: 
                    - generic [ref=e293]: 
                  - generic [ref=e294]: Date
              - columnheader "  Check-In" [ref=e295]:
                - generic [ref=e297]:
                  - generic [ref=e298]:
                    - generic [ref=e299]: 
                    - generic [ref=e300]: 
                  - generic [ref=e301]: Check-In
              - columnheader "  Check-Out" [ref=e302]:
                - generic [ref=e304]:
                  - generic [ref=e305]:
                    - generic [ref=e306]: 
                    - generic [ref=e307]: 
                  - generic [ref=e308]: Check-Out
              - columnheader "  Shift" [ref=e309]:
                - generic [ref=e311]:
                  - generic [ref=e312]:
                    - generic [ref=e313]: 
                    - generic [ref=e314]: 
                  - generic [ref=e315]: Shift
              - columnheader "  At Work" [ref=e316]:
                - generic [ref=e318]:
                  - generic [ref=e319]:
                    - generic [ref=e320]: 
                    - generic [ref=e321]: 
                  - generic [ref=e322]: At Work
              - columnheader "Penalties Customize columns" [ref=e323]:
                - generic [ref=e324]:
                  - generic [ref=e325]: Penalties
                  - button "Customize columns" [ref=e327] [cursor=pointer]
          - rowgroup [ref=e335]:
            - row [ref=e336] [cursor=pointer]:
              - cell [ref=e337]:
                - checkbox "Select Row" [ref=e339]
              - cell "Adam Admin" [ref=e340]:
                - generic "Adam Admin" [ref=e343]
              - cell "09/11/2026" [ref=e344]
              - cell "09:00 AM" [ref=e346]
              - cell "None" [ref=e348]
              - cell "Regular Shift" [ref=e350]
              - cell "00:40" [ref=e352]
              - cell "No Penalties" [ref=e354]
            - row [ref=e362] [cursor=pointer]:
              - cell [ref=e363]:
                - checkbox "Select Row" [ref=e365]
              - cell "Adam Admin" [ref=e366]:
                - generic "Adam Admin" [ref=e369]
              - cell "06/11/2026" [ref=e370]
              - cell "09:00 AM" [ref=e372]
              - cell "06:00 PM" [ref=e374]
              - cell "Regular Shift" [ref=e376]
              - cell "09:00" [ref=e378]
              - cell "No Penalties" [ref=e380]
            - row [ref=e388] [cursor=pointer]:
              - cell [ref=e389]:
                - checkbox "Select Row" [ref=e391]
              - cell "Adam Admin" [ref=e392]:
                - generic "Adam Admin" [ref=e395]
              - cell "05/11/2026" [ref=e396]
              - cell "09:00 AM" [ref=e398]
              - cell "06:00 PM" [ref=e400]
              - cell "Regular Shift" [ref=e402]
              - cell "09:00" [ref=e404]
              - cell "No Penalties" [ref=e406]
            - row [ref=e414] [cursor=pointer]:
              - cell [ref=e415]:
                - checkbox "Select Row" [ref=e417]
              - cell "Adam Admin" [ref=e418]:
                - generic "Adam Admin" [ref=e421]
              - cell "04/11/2026" [ref=e422]
              - cell "09:00 AM" [ref=e424]
              - cell "06:00 PM" [ref=e426]
              - cell "Regular Shift" [ref=e428]
              - cell "09:00" [ref=e430]
              - cell "No Penalties" [ref=e432]
            - row [ref=e440] [cursor=pointer]:
              - cell [ref=e441]:
                - checkbox "Select Row" [ref=e443]
              - cell "Adam Admin" [ref=e444]:
                - generic "Adam Admin" [ref=e447]
              - cell "03/11/2026" [ref=e448]
              - cell "09:00 AM" [ref=e450]
              - cell "06:00 PM" [ref=e452]
              - cell "Regular Shift" [ref=e454]
              - cell "09:00" [ref=e456]
              - cell "No Penalties" [ref=e458]
            - row [ref=e466] [cursor=pointer]:
              - cell [ref=e467]:
                - checkbox "Select Row" [ref=e469]
              - cell "Adam Admin" [ref=e470]:
                - generic "Adam Admin" [ref=e473]
              - cell "02/11/2026" [ref=e474]
              - cell "09:00 AM" [ref=e476]
              - cell "06:00 PM" [ref=e478]
              - cell "Regular Shift" [ref=e480]
              - cell "09:00" [ref=e482]
              - cell "No Penalties" [ref=e484]
            - row [ref=e492] [cursor=pointer]:
              - cell [ref=e493]:
                - checkbox "Select Row" [ref=e495]
              - cell "Adam Admin" [ref=e496]:
                - generic "Adam Admin" [ref=e499]
              - cell "27/10/2026" [ref=e500]
              - cell "09:00 AM" [ref=e502]
              - cell "06:00 PM" [ref=e504]
              - cell "Regular Shift" [ref=e506]
              - cell "09:00" [ref=e508]
              - cell "No Penalties" [ref=e510]
            - row [ref=e518] [cursor=pointer]:
              - cell [ref=e519]:
                - checkbox "Select Row" [ref=e521]
              - cell "Adam Admin" [ref=e522]:
                - generic "Adam Admin" [ref=e525]
              - cell "26/10/2026" [ref=e526]
              - cell "09:00 AM" [ref=e528]
              - cell "06:00 PM" [ref=e530]
              - cell "Regular Shift" [ref=e532]
              - cell "09:00" [ref=e534]
              - cell "No Penalties" [ref=e536]
            - row [ref=e544] [cursor=pointer]:
              - cell [ref=e545]:
                - checkbox "Select Row" [ref=e547]
              - cell "Adam Admin" [ref=e548]:
                - generic "Adam Admin" [ref=e551]
              - cell "23/10/2026" [ref=e552]
              - cell "09:00 AM" [ref=e554]
              - cell "06:00 PM" [ref=e556]
              - cell "Regular Shift" [ref=e558]
              - cell "09:00" [ref=e560]
              - cell "No Penalties" [ref=e562]
            - row [ref=e570] [cursor=pointer]:
              - cell [ref=e571]:
                - checkbox "Select Row" [ref=e573]
              - cell "Adam Admin" [ref=e574]:
                - generic "Adam Admin" [ref=e577]
              - cell "22/10/2026" [ref=e578]
              - cell "09:00 AM" [ref=e580]
              - cell "06:00 PM" [ref=e582]
              - cell "Regular Shift" [ref=e584]
              - cell "09:00" [ref=e586]
              - cell "No Penalties" [ref=e588]
            - row [ref=e596] [cursor=pointer]:
              - cell [ref=e597]:
                - checkbox "Select Row" [ref=e599]
              - cell "Adam Admin" [ref=e600]:
                - generic "Adam Admin" [ref=e603]
              - cell "21/10/2026" [ref=e604]
              - cell "09:00 AM" [ref=e606]
              - cell "06:00 PM" [ref=e608]
              - cell "Regular Shift" [ref=e610]
              - cell "09:00" [ref=e612]
              - cell "No Penalties" [ref=e614]
            - row [ref=e622] [cursor=pointer]:
              - cell [ref=e623]:
                - checkbox "Select Row" [ref=e625]
              - cell "Adam Admin" [ref=e626]:
                - generic "Adam Admin" [ref=e629]
              - cell "20/10/2026" [ref=e630]
              - cell "09:00 AM" [ref=e632]
              - cell "06:00 PM" [ref=e634]
              - cell "Regular Shift" [ref=e636]
              - cell "09:00" [ref=e638]
              - cell "No Penalties" [ref=e640]
            - row [ref=e648] [cursor=pointer]:
              - cell [ref=e649]:
                - checkbox "Select Row" [ref=e651]
              - cell "Adam Admin" [ref=e652]:
                - generic "Adam Admin" [ref=e655]
              - cell "19/10/2026" [ref=e656]
              - cell "09:00 AM" [ref=e658]
              - cell "06:00 PM" [ref=e660]
              - cell "Regular Shift" [ref=e662]
              - cell "09:00" [ref=e664]
              - cell "No Penalties" [ref=e666]
            - row [ref=e674] [cursor=pointer]:
              - cell [ref=e675]:
                - checkbox "Select Row" [ref=e677]
              - cell "Adam Admin" [ref=e678]:
                - generic "Adam Admin" [ref=e681]
              - cell "16/10/2026" [ref=e682]
              - cell "09:00 AM" [ref=e684]
              - cell "06:00 PM" [ref=e686]
              - cell "Regular Shift" [ref=e688]
              - cell "09:00" [ref=e690]
              - cell "No Penalties" [ref=e692]
            - row [ref=e700] [cursor=pointer]:
              - cell [ref=e701]:
                - checkbox "Select Row" [ref=e703]
              - cell "Adam Admin" [ref=e704]:
                - generic "Adam Admin" [ref=e707]
              - cell "15/10/2026" [ref=e708]
              - cell "09:00 AM" [ref=e710]
              - cell "06:00 PM" [ref=e712]
              - cell "Regular Shift" [ref=e714]
              - cell "09:00" [ref=e716]
              - cell "No Penalties" [ref=e718]
            - row [ref=e726] [cursor=pointer]:
              - cell [ref=e727]:
                - checkbox "Select Row" [ref=e729]
              - cell "Adam Admin" [ref=e730]:
                - generic "Adam Admin" [ref=e733]
              - cell "14/10/2026" [ref=e734]
              - cell "09:00 AM" [ref=e736]
              - cell "06:00 PM" [ref=e738]
              - cell "Regular Shift" [ref=e740]
              - cell "09:00" [ref=e742]
              - cell "No Penalties" [ref=e744]
            - row [ref=e752] [cursor=pointer]:
              - cell [ref=e753]:
                - checkbox "Select Row" [ref=e755]
              - cell "Adam Admin" [ref=e756]:
                - generic "Adam Admin" [ref=e759]
              - cell "13/10/2026" [ref=e760]
              - cell "09:00 AM" [ref=e762]
              - cell "06:00 PM" [ref=e764]
              - cell "Regular Shift" [ref=e766]
              - cell "09:00" [ref=e768]
              - cell "No Penalties" [ref=e770]
            - row [ref=e778] [cursor=pointer]:
              - cell [ref=e779]:
                - checkbox "Select Row" [ref=e781]
              - cell "Adam Admin" [ref=e782]:
                - generic "Adam Admin" [ref=e785]
              - cell "12/10/2026" [ref=e786]
              - cell "09:00 AM" [ref=e788]
              - cell "06:00 PM" [ref=e790]
              - cell "Regular Shift" [ref=e792]
              - cell "09:00" [ref=e794]
              - cell "No Penalties" [ref=e796]
            - row [ref=e804] [cursor=pointer]:
              - cell [ref=e805]:
                - checkbox "Select Row" [ref=e807]
              - cell "Adam Admin" [ref=e808]:
                - generic "Adam Admin" [ref=e811]
              - cell "09/10/2026" [ref=e812]
              - cell "09:00 AM" [ref=e814]
              - cell "06:00 PM" [ref=e816]
              - cell "Regular Shift" [ref=e818]
              - cell "09:00" [ref=e820]
              - cell "No Penalties" [ref=e822]
            - row [ref=e830] [cursor=pointer]:
              - cell [ref=e831]:
                - checkbox "Select Row" [ref=e833]
              - cell "Adam Admin" [ref=e834]:
                - generic "Adam Admin" [ref=e837]
              - cell "08/10/2026" [ref=e838]
              - cell "09:00 AM" [ref=e840]
              - cell "06:00 PM" [ref=e842]
              - cell "Regular Shift" [ref=e844]
              - cell "09:00" [ref=e846]
              - cell "No Penalties" [ref=e848]
            - row [ref=e856] [cursor=pointer]:
              - cell [ref=e857]:
                - checkbox "Select Row" [ref=e859]
              - cell "Adam Admin" [ref=e860]:
                - generic "Adam Admin" [ref=e863]
              - cell "07/10/2026" [ref=e864]
              - cell "09:00 AM" [ref=e866]
              - cell "06:00 PM" [ref=e868]
              - cell "Regular Shift" [ref=e870]
              - cell "09:00" [ref=e872]
              - cell "No Penalties" [ref=e874]
            - row [ref=e882] [cursor=pointer]:
              - cell [ref=e883]:
                - checkbox "Select Row" [ref=e885]
              - cell "Adam Admin" [ref=e886]:
                - generic "Adam Admin" [ref=e889]
              - cell "06/10/2026" [ref=e890]
              - cell "09:00 AM" [ref=e892]
              - cell "06:00 PM" [ref=e894]
              - cell "Regular Shift" [ref=e896]
              - cell "09:00" [ref=e898]
              - cell "No Penalties" [ref=e900]
            - row [ref=e908] [cursor=pointer]:
              - cell [ref=e909]:
                - checkbox "Select Row" [ref=e911]
              - cell "Adam Admin" [ref=e912]:
                - generic "Adam Admin" [ref=e915]
              - cell "05/10/2026" [ref=e916]
              - cell "09:00 AM" [ref=e918]
              - cell "06:00 PM" [ref=e920]
              - cell "Regular Shift" [ref=e922]
              - cell "09:00" [ref=e924]
              - cell "No Penalties" [ref=e926]
            - row [ref=e934] [cursor=pointer]:
              - cell [ref=e935]:
                - checkbox "Select Row" [ref=e937]
              - cell "Adam Admin" [ref=e938]:
                - generic "Adam Admin" [ref=e941]
              - cell "02/10/2026" [ref=e942]
              - cell "09:00 AM" [ref=e944]
              - cell "06:00 PM" [ref=e946]
              - cell "Regular Shift" [ref=e948]
              - cell "09:00" [ref=e950]
              - cell "No Penalties" [ref=e952]
            - row [ref=e960] [cursor=pointer]:
              - cell [ref=e961]:
                - checkbox "Select Row" [ref=e963]
              - cell "Adam Admin" [ref=e964]:
                - generic "Adam Admin" [ref=e967]
              - cell "01/10/2026" [ref=e968]
              - cell "09:00 AM" [ref=e970]
              - cell "06:00 PM" [ref=e972]
              - cell "Regular Shift" [ref=e974]
              - cell "09:00" [ref=e976]
              - cell "No Penalties" [ref=e978]
            - row [ref=e986] [cursor=pointer]:
              - cell [ref=e987]:
                - checkbox "Select Row" [ref=e989]
              - cell "Adam Admin" [ref=e990]:
                - generic "Adam Admin" [ref=e993]
              - cell "30/09/2026" [ref=e994]
              - cell "09:00 AM" [ref=e996]
              - cell "06:00 PM" [ref=e998]
              - cell "Regular Shift" [ref=e1000]
              - cell "09:00" [ref=e1002]
              - cell "No Penalties" [ref=e1004]
            - row [ref=e1012] [cursor=pointer]:
              - cell [ref=e1013]:
                - checkbox "Select Row" [ref=e1015]
              - cell "Adam Admin" [ref=e1016]:
                - generic "Adam Admin" [ref=e1019]
              - cell "29/09/2026" [ref=e1020]
              - cell "09:00 AM" [ref=e1022]
              - cell "06:00 PM" [ref=e1024]
              - cell "Regular Shift" [ref=e1026]
              - cell "09:00" [ref=e1028]
              - cell "No Penalties" [ref=e1030]
            - row [ref=e1038] [cursor=pointer]:
              - cell [ref=e1039]:
                - checkbox "Select Row" [ref=e1041]
              - cell "Adam Admin" [ref=e1042]:
                - generic "Adam Admin" [ref=e1045]
              - cell "28/09/2026" [ref=e1046]
              - cell "09:00 AM" [ref=e1048]
              - cell "06:00 PM" [ref=e1050]
              - cell "Regular Shift" [ref=e1052]
              - cell "09:00" [ref=e1054]
              - cell "No Penalties" [ref=e1056]
            - row [ref=e1064] [cursor=pointer]:
              - cell [ref=e1065]:
                - checkbox "Select Row" [ref=e1067]
              - cell "Adam Admin" [ref=e1068]:
                - generic "Adam Admin" [ref=e1071]
              - cell "25/09/2026" [ref=e1072]
              - cell "09:00 AM" [ref=e1074]
              - cell "06:00 PM" [ref=e1076]
              - cell "Regular Shift" [ref=e1078]
              - cell "09:00" [ref=e1080]
              - cell "No Penalties" [ref=e1082]
            - row [ref=e1090] [cursor=pointer]:
              - cell [ref=e1091]:
                - checkbox "Select Row" [ref=e1093]
              - cell "Adam Admin" [ref=e1094]:
                - generic "Adam Admin" [ref=e1097]
              - cell "24/09/2026" [ref=e1098]
              - cell "09:00 AM" [ref=e1100]
              - cell "06:00 PM" [ref=e1102]
              - cell "Regular Shift" [ref=e1104]
              - cell "09:00" [ref=e1106]
              - cell "No Penalties" [ref=e1108]
            - row [ref=e1116] [cursor=pointer]:
              - cell [ref=e1117]:
                - checkbox "Select Row" [ref=e1119]
              - cell "Adam Admin" [ref=e1120]:
                - generic "Adam Admin" [ref=e1123]
              - cell "23/09/2026" [ref=e1124]
              - cell "09:00 AM" [ref=e1126]
              - cell "06:00 PM" [ref=e1128]
              - cell "Regular Shift" [ref=e1130]
              - cell "09:00" [ref=e1132]
              - cell "No Penalties" [ref=e1134]
            - row [ref=e1142] [cursor=pointer]:
              - cell [ref=e1143]:
                - checkbox "Select Row" [ref=e1145]
              - cell "Adam Admin" [ref=e1146]:
                - generic "Adam Admin" [ref=e1149]
              - cell "22/09/2026" [ref=e1150]
              - cell "09:00 AM" [ref=e1152]
              - cell "06:00 PM" [ref=e1154]
              - cell "Regular Shift" [ref=e1156]
              - cell "09:00" [ref=e1158]
              - cell "No Penalties" [ref=e1160]
            - row [ref=e1168] [cursor=pointer]:
              - cell [ref=e1169]:
                - checkbox "Select Row" [ref=e1171]
              - cell "Adam Admin" [ref=e1172]:
                - generic "Adam Admin" [ref=e1175]
              - cell "21/09/2026" [ref=e1176]
              - cell "09:00 AM" [ref=e1178]
              - cell "06:00 PM" [ref=e1180]
              - cell "Regular Shift" [ref=e1182]
              - cell "09:00" [ref=e1184]
              - cell "No Penalties" [ref=e1186]
            - row [ref=e1194] [cursor=pointer]:
              - cell [ref=e1195]:
                - checkbox "Select Row" [ref=e1197]
              - cell "Adam Admin" [ref=e1198]:
                - generic "Adam Admin" [ref=e1201]
              - cell "18/09/2026" [ref=e1202]
              - cell "09:00 AM" [ref=e1204]
              - cell "06:00 PM" [ref=e1206]
              - cell "Regular Shift" [ref=e1208]
              - cell "09:00" [ref=e1210]
              - cell "No Penalties" [ref=e1212]
            - row [ref=e1220] [cursor=pointer]:
              - cell [ref=e1221]:
                - checkbox "Select Row" [ref=e1223]
              - cell "Adam Admin" [ref=e1224]:
                - generic "Adam Admin" [ref=e1227]
              - cell "17/09/2026" [ref=e1228]
              - cell "09:00 AM" [ref=e1230]
              - cell "06:00 PM" [ref=e1232]
              - cell "Regular Shift" [ref=e1234]
              - cell "09:00" [ref=e1236]
              - cell "No Penalties" [ref=e1238]
            - row [ref=e1246] [cursor=pointer]:
              - cell [ref=e1247]:
                - checkbox "Select Row" [ref=e1249]
              - cell "Adam Admin" [ref=e1250]:
                - generic "Adam Admin" [ref=e1253]
              - cell "16/09/2026" [ref=e1254]
              - cell "09:00 AM" [ref=e1256]
              - cell "06:00 PM" [ref=e1258]
              - cell "Regular Shift" [ref=e1260]
              - cell "09:00" [ref=e1262]
              - cell "No Penalties" [ref=e1264]
            - row [ref=e1272] [cursor=pointer]:
              - cell [ref=e1273]:
                - checkbox "Select Row" [ref=e1275]
              - cell "Adam Admin" [ref=e1276]:
                - generic "Adam Admin" [ref=e1279]
              - cell "15/09/2026" [ref=e1280]
              - cell "09:00 AM" [ref=e1282]
              - cell "06:00 PM" [ref=e1284]
              - cell "Regular Shift" [ref=e1286]
              - cell "09:00" [ref=e1288]
              - cell "No Penalties" [ref=e1290]
            - row [ref=e1298] [cursor=pointer]:
              - cell [ref=e1299]:
                - checkbox "Select Row" [ref=e1301]
              - cell "Adam Admin" [ref=e1302]:
                - generic "Adam Admin" [ref=e1305]
              - cell "14/09/2026" [ref=e1306]
              - cell "09:00 AM" [ref=e1308]
              - cell "06:00 PM" [ref=e1310]
              - cell "Regular Shift" [ref=e1312]
              - cell "09:00" [ref=e1314]
              - cell "No Penalties" [ref=e1316]
            - row [ref=e1324] [cursor=pointer]:
              - cell [ref=e1325]:
                - checkbox "Select Row" [ref=e1327]
              - cell "Adam Admin" [ref=e1328]:
                - generic "Adam Admin" [ref=e1331]
              - cell "11/09/2026" [ref=e1332]
              - cell "09:00 AM" [ref=e1334]
              - cell "06:00 PM" [ref=e1336]
              - cell "Regular Shift" [ref=e1338]
              - cell "09:00" [ref=e1340]
              - cell "No Penalties" [ref=e1342]
            - row [ref=e1350] [cursor=pointer]:
              - cell [ref=e1351]:
                - checkbox "Select Row" [ref=e1353]
              - cell "Adam Admin" [ref=e1354]:
                - generic "Adam Admin" [ref=e1357]
              - cell "10/09/2026" [ref=e1358]
              - cell "09:00 AM" [ref=e1360]
              - cell "06:00 PM" [ref=e1362]
              - cell "Regular Shift" [ref=e1364]
              - cell "09:00" [ref=e1366]
              - cell "No Penalties" [ref=e1368]
            - row [ref=e1376] [cursor=pointer]:
              - cell [ref=e1377]:
                - checkbox "Select Row" [ref=e1379]
              - cell "Adam Admin" [ref=e1380]:
                - generic "Adam Admin" [ref=e1383]
              - cell "09/09/2026" [ref=e1384]
              - cell "09:00 AM" [ref=e1386]
              - cell "06:00 PM" [ref=e1388]
              - cell "Regular Shift" [ref=e1390]
              - cell "09:00" [ref=e1392]
              - cell "No Penalties" [ref=e1394]
            - row [ref=e1402] [cursor=pointer]:
              - cell [ref=e1403]:
                - checkbox "Select Row" [ref=e1405]
              - cell "Adam Admin" [ref=e1406]:
                - generic "Adam Admin" [ref=e1409]
              - cell "08/09/2026" [ref=e1410]
              - cell "09:00 AM" [ref=e1412]
              - cell "06:00 PM" [ref=e1414]
              - cell "Regular Shift" [ref=e1416]
              - cell "09:00" [ref=e1418]
              - cell "No Penalties" [ref=e1420]
            - row [ref=e1428] [cursor=pointer]:
              - cell [ref=e1429]:
                - checkbox "Select Row" [ref=e1431]
              - cell "Adam Admin" [ref=e1432]:
                - generic "Adam Admin" [ref=e1435]
              - cell "07/09/2026" [ref=e1436]
              - cell "09:00 AM" [ref=e1438]
              - cell "06:00 PM" [ref=e1440]
              - cell "Regular Shift" [ref=e1442]
              - cell "09:00" [ref=e1444]
              - cell "No Penalties" [ref=e1446]
            - row [ref=e1454] [cursor=pointer]:
              - cell [ref=e1455]:
                - checkbox "Select Row" [ref=e1457]
              - cell "Adam Admin" [ref=e1458]:
                - generic "Adam Admin" [ref=e1461]
              - cell "04/09/2026" [ref=e1462]
              - cell "09:00 AM" [ref=e1464]
              - cell "06:00 PM" [ref=e1466]
              - cell "Regular Shift" [ref=e1468]
              - cell "09:00" [ref=e1470]
              - cell "No Penalties" [ref=e1472]
            - row [ref=e1480] [cursor=pointer]:
              - cell [ref=e1481]:
                - checkbox "Select Row" [ref=e1483]
              - cell "Adam Admin" [ref=e1484]:
                - generic "Adam Admin" [ref=e1487]
              - cell "03/09/2026" [ref=e1488]
              - cell "09:00 AM" [ref=e1490]
              - cell "06:00 PM" [ref=e1492]
              - cell "Regular Shift" [ref=e1494]
              - cell "09:00" [ref=e1496]
              - cell "No Penalties" [ref=e1498]
            - row [ref=e1506] [cursor=pointer]:
              - cell [ref=e1507]:
                - checkbox "Select Row" [ref=e1509]
              - cell "Adam Admin" [ref=e1510]:
                - generic "Adam Admin" [ref=e1513]
              - cell "02/09/2026" [ref=e1514]
              - cell "09:00 AM" [ref=e1516]
              - cell "06:00 PM" [ref=e1518]
              - cell "Regular Shift" [ref=e1520]
              - cell "09:00" [ref=e1522]
              - cell "No Penalties" [ref=e1524]
  - log [ref=e1532]
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
> 71  |     await close.click();
      |                 ^ TimeoutError: locator.click: Timeout 20000ms exceeded.
  72  |     await expect(panel).toBeHidden();
  73  |   });
  74  | 
  75  |   test("AT10 - Bảng bộ lọc có thể thao tác với trường lọc", async ({ page }) => {
  76  |     await openAttendance(page, routes.mine, "My Attendances");
  77  |     const panel = await openFilterPanel(page);
  78  |     const control = panel.locator("input, select, textarea").first();
  79  |     await expect(control).toBeVisible();
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