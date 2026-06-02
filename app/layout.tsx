import type { Metadata } from "next";
import "./globals.css";

/**
 * Metadata - Thông tin meta cho trang web
 * Bao gồm title, description, favicon, v.v.
 */
export const metadata: Metadata = {
  title: "Hello World - Next.js App",
  description:
    "A simple Hello World website built with Next.js 14+ App Router and vanilla CSS",
  icons: {
    icon: "/favicon.ico",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

/**
 * RootLayout - Component gốc cho toàn bộ ứng dụng
 * @param children - Nội dung trang con sẽ được hiển thị ở đây
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <head>
        {/* 
          Preconnect đến Google Fonts để tối ưu tốc độ load
          Trong trường hợp này, chúng tôi sử dụng hệ thống font mặc định
          nhưng bạn có thể thêm Google Fonts ở đây nếu muốn
        */}
      </head>
      <body>
        {/* 
          Tất cả các trang sẽ được render bên trong children
          Container CSS sẽ xử lý layout (flex, center, v.v.)
        */}
        {children}
      </body>
    </html>
  );
}
