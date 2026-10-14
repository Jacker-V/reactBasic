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
- Bản chất là JS Object để quản lý state

- Bài 4: Nesting Component - Nén component
- Hay nói khác đi về truyền vào component khác bên trong 1 component

- Bài 5: Props
- Dùng để truyền dữ liệu từ component con sang component Cha
- Để truyền props từ Cha sang con, thì với String, Number, boolean thì để chắc chắn và code nhận diện được luôn thì nên thêm {} trước giá trị