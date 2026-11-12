# Bộ kiểm thử Horilla của Ngọc Ánh

Bộ test được tinh gọn theo hướng **chỉ kiểm thử những trang và thao tác có thể quan sát được bằng tài khoản Admin trên Horilla Demo**. Không giả định rằng Admin có quyền tạo Stage, Task, Offboarding Process hoặc Add Employee nếu giao diện không hiển thị các thao tác đó.

## Phạm vi hiện tại

| Chức năng | Số testcase | Phạm vi |
|---|---:|---|
| Attendance | 14 | Attendance Dashboard, My Attendances, bộ lọc, tìm kiếm, Monthly Summary |
| Onboarding | 11 | Onboarding View, Candidate View, danh sách, tìm kiếm, bộ lọc, tải lại trang |
| Offboarding | 8 | Exit Process, tìm kiếm, List/Card, bộ lọc, tải lại trang |
| **Tổng** | **33** | **Chỉ dùng phiên Admin; không tạo/sửa/xóa dữ liệu** |

Các testcase tạo Candidate, Stage, Task, Process và Add Employee được thay bằng kiểm thử danh sách, tìm kiếm, bộ lọc, chế độ hiển thị và khả năng tải lại trang. Lý do: các nút tạo tương ứng không được xác nhận là hiện diện trên giao diện demo mà báo cáo lỗi ghi nhận.

## Chuẩn bị

1. Tại thư mục gốc dự án, cài thư viện và Chromium nếu chưa cài:

   ```bash
   npm ci
   npx playwright install chromium
   ```

2. Tạo `.env` từ `.env.example`, giữ `BASE_URL=https://hr.demo.horilla.com`.
3. Tạo phiên Admin:

   ```bash
   npm run auth:save:anh
   ```

4. Đăng nhập bằng tài khoản Admin được cấp trong cửa sổ Chromium. Quay lại Terminal và nhấn Enter để lưu phiên.

Không chia sẻ hoặc commit `anh/playwright/.auth/user.json` vì tệp này chứa trạng thái đăng nhập.

## Chạy kiểm thử

```bash
# Chạy toàn bộ 33 testcase của Ngọc Ánh
npm run test:anh

# Chạy riêng từng chức năng
npm run test:anh:attendance
npm run test:anh:onboarding
npm run test:anh:offboarding

# Liệt kê testcase mà chưa chạy
npx playwright test --project=anh --list

# Mở báo cáo HTML
npm run report
```

## Nguyên tắc

- Điều hướng thẳng đến URL cần kiểm thử, không tải Dashboard và rê chuột qua menu trước mỗi testcase.
- Chờ `domcontentloaded`, không chờ toàn bộ tài nguyên `load` không cần thiết.
- Không tự động tạo, sửa, xóa dữ liệu; không gửi email hoặc thay đổi trạng thái nhân viên.
- Chấp nhận danh sách dạng bảng, dạng thẻ hoặc trạng thái rỗng hợp lệ.
- Không dùng `test.skip()` để che lỗi selector hoặc thiếu quyền.
- Khi website chuyển về trang đăng nhập hoặc trang khác, testcase báo rõ URL thực tế để phân biệt lỗi phiên/quyền với lỗi hiển thị.
- Bộ test chưa được xác nhận PASS trên website trực tiếp trong môi trường tạo ZIP này. Cần chạy lại trên máy có kết nối tới `hr.demo.horilla.com`.
