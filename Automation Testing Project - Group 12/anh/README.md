# Bộ kiểm thử Horilla của Ngọc Ánh

Bộ kiểm thử Playwright tập trung vào ba module Attendance, Onboarding và Offboarding trên Horilla Demo, sử dụng tài khoản Admin.

## Phạm vi và số lượng testcase

| Module | Số testcase | Phạm vi chính |
|---|---:|---|
| Attendance | 21 | Dashboard, My Attendances, Monthly Summary, Attendances, Attendance Requests, Daily Work Status (kiểm tra redirect sang Day-wise), bộ lọc và tải lại |
| Onboarding | 21 | Onboarding View, Candidate View, stage/pipeline, tìm kiếm, bộ lọc, chọn bản ghi và điều hướng |
| Offboarding | 21 | Exit Process, tìm kiếm, bộ lọc, List/Card, menu Actions và điều hướng |
| **Tổng** | **63** | **21 testcase cho mỗi module** |

Các testcase tập trung vào điều hướng, nội dung, cấu trúc dữ liệu, trạng thái rỗng, tìm kiếm, bộ lọc, chế độ hiển thị và hành vi trình duyệt. Các thao tác có thể làm thay đổi dữ liệu như tạo/xóa quy trình, thêm nhân viên, gửi email hoặc cập nhật trạng thái không được submit trong bộ test này.

Một số testcase kiểm tra control tùy chọn sẽ dùng test.skip() với lý do rõ ràng khi tài khoản hoặc giao diện hiện tại không cung cấp control đó.

## Chuẩn bị

1. Tại thư mục gốc dự án, cài thư viện và Chromium nếu chưa cài:

   ~~~bash
   npm ci
   npx playwright install chromium
   ~~~

2. Tạo .env từ .env.example, bảo đảm có:

   ~~~env
   BASE_URL=https://hr.demo.horilla.com
   ~~~

3. Tạo hoặc cập nhật phiên Admin trên máy đang chạy test:

   ~~~bash
   npm run auth:save:anh
   ~~~

   Đăng nhập trong cửa sổ Chromium. Khi vào được Dashboard, quay lại Terminal và nhấn Enter để lưu phiên vào anh/playwright/.auth/user.json.

   **Không commit hoặc chia sẻ file session.** Thư mục .auth đã được thêm vào .gitignore; sau khi clone/pull branch mới, hãy tạo lại session bằng lệnh trên.

## Chạy kiểm thử

~~~bash
# Chạy toàn bộ 63 testcase của Ngọc Ánh
npm run test:anh

# Chạy riêng từng module
npm run test:anh:attendance
npm run test:anh:onboarding
npm run test:anh:offboarding

# Liệt kê testcase mà chưa chạy
npx playwright test --project=anh --list

# Mở báo cáo HTML sau khi chạy
npm run report
~~~

## Nguyên tắc kiểm thử

- Dùng một worker vì các module chia sẻ tài khoản Admin của website demo.
- Điều hướng trực tiếp đến trang cần kiểm thử, không cần tải Dashboard và rê chuột qua menu trước mỗi testcase.
- Chấp nhận dữ liệu dạng bảng, danh sách, card/kanban hoặc trạng thái rỗng hợp lệ.
- Chờ các bảng nạp bất đồng bộ trước khi kết luận trang không có dữ liệu.
- Drawer Filter của Horilla vẫn nằm trong DOM khi đóng; kiểm tra trạng thái bằng class `oh-filter-panel--open`, không dùng `toBeHidden()`.
- Daily Work Status là URL cũ; Horilla chuyển hướng đến Monthly Summary với `view=daily`, vì vậy AT21 kiểm tra chuyển hướng và chế độ Day-wise.
- Không submit form tạo mới, xóa bản ghi, gửi email hoặc thay đổi trạng thái nghiệp vụ.
- Khi website chuyển về trang đăng nhập hoặc chuyển sang URL khác, testcase cần báo rõ để phân biệt lỗi session/quyền với lỗi giao diện.

## Trạng thái xác nhận

Bản mở rộng hiện có 63 testcase và đã được kiểm tra cú pháp JavaScript. Cần chạy lại trên máy có session Admin hợp lệ để xác nhận kết quả thực tế; việc kiểm tra cú pháp không thay thế cho một lần chạy Playwright thành công.
