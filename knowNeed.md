Link giáo trình https://drive.google.com/drive/folders/1WYAyusS4m498bqCR8iyzRYmS26zGh8g-

- Bài 1: Cách thức hoạt động của react
- 1 - SPA: Trả ra 1 file index.html và trong html này chứa săn các giao diện và để khi người dùng chuyển trang thì sẽ không cần load lại và ko cần gọi lại server

- 2 - Dom là phần HTML nhìn thấy trên giao diện
- Quá trình chạy react-app : 
  - Dịch code : babel compiler => code nhiều ver với js ví dụ như require và import const
  - Tối ưu code: Nén nó thành 1 vài file: css/js --> web-pack
  - Cả 2 phần này để đã được cấu hình trong create-react-app

- Bài 2: React Component
- Đặt tên: Viết hoa chữ đầu tiên
- Trong componet chúng ta có thể viết code js.
- Tại sao chúng ta lại dùng component, vì chúng ta có thể truyền động hay quản lí trạng thái của compinent hay element hay biến
- P/s: khi bạn import thì :
  - . là thư mục hiện tại
  - .. là quay ra thư mục cha
  - click mà tên file nghiêng tức là chế độ preview
  - click*2 thì sẽ hết và sẽ mở file

- Bài 3: State
- Bản chất là JS Object để quản lý dữ liệu nội bộ của component.
- Khi State thay đổi, component sẽ tự động Re-render (vẽ lại giao diện).
- KHÔNG ĐƯỢC gán trực tiếp (`this.state.name = ...`), bắt buộc phải dùng `this.setState({...})`.
- Nên dùng Arrow Function cho các method xử lý sự kiện để không bị mất liên kết `this`.

- Bài 4: Nesting Component - Lồng ghép component
- Chia nhỏ ứng dụng thành các component con độc lập (như xếp hình lego) và nhúng vào component Cha để dễ tái sử dụng và quản lý code.

- Bài 5: Props (Properties)
- Luồng truyền dữ liệu: Truyền từ component CHA XUỐNG CON (1 chiều).
- Props là Read-only (chỉ đọc), component con KHÔNG ĐƯỢC sửa props.
- Cú pháp truyền: String có thể dùng `"..."`, còn Number, Boolean, Array, Object, Function bắt buộc bọc trong dấu `{}`.
- Để truyền dữ liệu từ CON LÊN CHA: Cha truyền một hàm (callback function) qua Props cho Con, Con gọi hàm đó kèm tham số để gửi dữ liệu ngược về Cha.

- Bài 6: Render danh sách (map) & Thuộc tính Key
- Khi dùng `.map()` để lặp danh sách JSX, bắt buộc phải có thuộc tính `key` ở thẻ bao bọc ngoài cùng (vd: `<div key={user.id}>`).
- `key` giúp thuật toán Virtual DOM của React định danh duy nhất từng phần tử để biết chính xác phần tử nào bị thêm, sửa, xóa khi cập nhật giao diện.
- KHÔNG NÊN dùng `index` làm key: Vì khi mảng bị thêm mới lên đầu hoặc xóa/sắp xếp, `index` của các phần tử bị xáo trộn, làm React nhầm lẫn trạng thái và re-render sai. Luôn ưu tiên dùng `id` duy nhất (như `user.id`).