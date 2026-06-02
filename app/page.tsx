/**
 * page.tsx - Trang chính của ứng dụng
 * Đây là trang home sẽ hiển thị tại đường dẫn "/"
 */

export default function Home() {
  return (
    <main className="container">
      {/* 
        Tiêu đề chính
        - Sử dụng <h1> tag cho SEO
        - CSS class "container" căn giữa nội dung
        - Animation fade-in được định nghĩa trong globals.css
      */}
      <h1>Hello, World! 👋</h1>

      {/* 
        Mô tả ngắn
        - Đoạn text thuyết minh
        - Responsive và centered
        - Có animation delay để tạo hiệu ứng sequencing
      */}
      <p>
        Chào mừng bạn đến với một trang web "Hello World" đơn giản được xây dựng
        bằng <strong>Next.js 14+</strong> với <strong>App Router</strong> và{" "}
        <strong>CSS thuần</strong>.
      </p>

      {/* 
        Thông tin thêm
        - Giải thích kỹ thuật
        - Sử dụng CSS variables cho styling consistency
      */}
      <p>
        Trang này được thiết kế với responsive layout, animations mượt mà, và hỗ
        trợ dark mode. Không có thư viện UI bên thứ ba, tất cả CSS được viết
        thủ công cho tối đa kiểm soát và tối ưu hóa.
      </p>
    </main>
  );
}
