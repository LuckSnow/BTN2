const projects = [
  {
    id: 1,
    name: "Personal Portfolio Website",
    description:
      "Website portfolio cá nhân xây dựng bằng Next.js và Tailwind CSS, hiển thị thông tin cá nhân, kỹ năng và dự án.",
    longDescription:
      "Đây là dự án website portfolio cá nhân được xây dựng bằng Next.js 16 với App Router, kết hợp Tailwind CSS v4. Website bao gồm đầy đủ các trang: Home, About, Skills, Projects, Contact và Docs. Hỗ trợ Dynamic Routing cho chi tiết dự án và Catch-all routing cho phần tài liệu.",
    tech: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
    image: "💼",
    github: "https://github.com/nguyenthaittuan",
    demo: "#",
    status: "Hoàn thành",
    year: 2026,
  },
  {
    id: 2,
    name: "E-Commerce Web App",
    description:
      "Ứng dụng thương mại điện tử với chức năng giỏ hàng, đăng nhập và quản lý sản phẩm.",
    longDescription:
      "Dự án e-commerce đầy đủ tính năng với giao diện người dùng hiện đại. Bao gồm hệ thống quản lý sản phẩm, giỏ hàng, thanh toán và xác thực người dùng. Backend sử dụng Node.js và MySQL để lưu trữ dữ liệu.",
    tech: ["React", "Node.js", "MySQL", "CSS"],
    image: "🛒",
    github: "https://github.com/nguyenthaittuan",
    demo: "#",
    status: "Đang phát triển",
    year: 2025,
  },
  {
    id: 3,
    name: "Todo List App",
    description:
      "Ứng dụng quản lý công việc với tính năng thêm, xóa, cập nhật và lọc task theo trạng thái.",
    longDescription:
      "Ứng dụng Todo List được xây dựng với React thuần, sử dụng useState và useEffect để quản lý state. Dữ liệu được lưu trữ trong localStorage để không mất khi reload trang. Giao diện clean và dễ sử dụng.",
    tech: ["React", "JavaScript", "CSS", "LocalStorage"],
    image: "✅",
    github: "https://github.com/nguyenthaittuan",
    demo: "#",
    status: "Hoàn thành",
    year: 2025,
  },
  {
    id: 4,
    name: "Weather Dashboard",
    description:
      "Dashboard thời tiết lấy dữ liệu từ OpenWeather API, hiển thị thời tiết hiện tại và dự báo 5 ngày.",
    longDescription:
      "Ứng dụng dashboard thời tiết tích hợp với OpenWeather API để lấy dữ liệu thời tiết thực tế. Người dùng có thể tìm kiếm thành phố bất kỳ, xem thời tiết hiện tại và dự báo cho 5 ngày tiếp theo. Giao diện trực quan với biểu đồ nhiệt độ.",
    tech: ["JavaScript", "HTML", "CSS", "REST API"],
    image: "🌦️",
    github: "https://github.com/nguyenthaittuan",
    demo: "#",
    status: "Hoàn thành",
    year: 2024,
  },
  {
    id: 5,
    name: "Student Management System",
    description:
      "Hệ thống quản lý sinh viên với các chức năng CRUD, tìm kiếm và xuất báo cáo.",
    longDescription:
      "Hệ thống quản lý sinh viên được xây dựng bằng Java và MySQL. Ứng dụng cho phép quản lý thông tin sinh viên, điểm số, môn học và tạo báo cáo. Có giao diện Swing desktop app thân thiện với người dùng.",
    tech: ["Java", "MySQL", "Swing", "JDBC"],
    image: "🎓",
    github: "https://github.com/nguyenthaittuan",
    demo: "#",
    status: "Hoàn thành",
    year: 2024,
  },
];

export default projects;
