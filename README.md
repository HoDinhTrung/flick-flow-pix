# Crimson Reels

Tone màu đen đỏ. Hãy tạo cho tôi 1 mockup về app xem phim trên điện thoại với các yêu cầu sau:

Có menu gồm 3 page: Home, My List, Profile. Menu được đặt dưới màn hình.

Trong home: có thanh tìm kiếm được đặt trên cùng màn hình. Khi vuốt xuống thì nó đi theo.



Có Carousel Banner ở dưới thanh tìm kiếm.Mặc định sẽ hiển thị thumbnail của phim kèm nút "Play". Auto vuốt sang sang hoặc tự vuốt thì sẽ chuyển sang thumbnail và nút play của phim khác. Độ lớn của thumbnail sẽ chiếm nửa màn hình và có thể thấy được 1 phần nhỏ thumbnail của phim khác ở 2 bên.



Dưới Carousel Banner sẽ là 1 section "Coming Soon". Section này chứa thumbnail và tên bộ phim, được hiển thị trong Horizontal Scroll. Trong thumbnail sẽ hiển thị tag "Soon" ở góc trên bên phải và lượt xem ở góc dưới bên phải, lượt thích ở góc dưới cùng bên trái. Trong màn hình điện thoại, độ lớn của thumbnail của từng phim vừa đủ để cho 3 bộ phim xuất hiện và có hiện 1 tí thumbnail của bộ phim thứ 4 để người dùng biết mà vuốt sang. 



Dưới "Coming Soon" là "Most Trending". Hiển thị tương tự Coming Soon nhưng không có tag.

Dưới Most trending sẽ là "Premium". Hiển thị theo dạng Grid 2x2. Thumbnail hiển thị như Coming Soon nhưng tag là icon kim cương.

Dưới Premium là Hot List, hiển hị như Premium nhưng tag là icon ngọn lửa.

 

 Ở trong menu My List sẽ có 2 tab: History và My Movie

Tab history sẽ chứa list phim mà user đã xem. Phim sẽ hiển thị theo dạng grid 3x3 gồm thumbnail và tên phim.Thumbnail hiển thị tập phim đã xem/ full tập ở góc phải dưới cùng của thumbnail. Tên phim được hiển thị 2 dòng với độ rộng bằng thumbnail, nếu dài quá thì sẽ "...". 

Tab My Movie cũng tương tự tab History. 

Ở góc phải màn hình của menu sẽ có icon "select". User ấn vào thì sẽ bật chế độ chọn phim ( các hình tròn hiện lên ở góc phải trên của thumbnail của các phim), user có thể chọn 1 hoặc nhiều phim, khi chọn, hình tròn ấy sẽ được đánh dấu tích. Trong chế độ chọn phim, sẽ xuất hiện 2 button ở dưới cùng của màn hình là "select all" và "delete"(Lúc này, thanh menu ở dưới bị ẩn đi).



Ở trong menu profile sẽ có: 

Avatar, name, user ID ở bên trên, chính giữa.

Ở bên dưới sẽ gồm các thanh ngang có cấu trúc:

Icon + Tiêu đề (Title/Label): Nằm ở bên trái trong thanh ngang, cho biết nội dung của mục đó. Mũi tên (Chevron/Arrow): Nằm ở bên phải, biểu tượng > thể hiện tính năng bấm vào được (clickable/navigational).



Các thanh gồm: Feedback, Contact us, Privacy Policy. 



Màn hình watching: Đây là màn chính để user xem phim. Khi user ấn vào 1 phim thì màn này sẽ hiện lên. Chi tiết trong màn gồm:

Tên phim: HIển thị ở bên trên cùng góc trái của màn hình, nét chữ màu trắng, font chữ mảnh, dài quá thì "..."

Tập phim, hiển thị bên trên cùng góc phải màn hình ( ví dụ: 3/50)

Icon trái tym: User ấn nút này thì sẽ tính là thích phim đấy. Dưới icon sẽ hiển thị các con số thể hiện lượt thích ( ví dụ: 300, 55.45K) 

Icon "Lưu": User ấn nút này để thêm vào "My List".  Dưới icon sẽ hiển thị các con số thể hiện lượt đã thêm ( ví dụ: 300, 55.45K)

Icon "List": User ấn nút này thì sẽ có 1 section hiển thị 1 nửa màn hình. Trong đó có chia 2 phần: phần 1 là Thumbnail, tên phim và total 60 episodes sẽ hiển thị theo phương ngang. Phần 2 là các tập phim. Phần 2 gôm các tab: 1-30, 31-60. Dưới tab sẽ là những ô được đánh số từ được sắp xếp theo dạng grid 5x6. Các ô từ 15 đến 30 có icon "Khóa" vì cần phải mở khóa mới xem được. Ô có số tập tương ứng với tập hiện tại đang xem sẽ có hiệu ứng thể hiện là đang được bật/ đang được xem.

Thanh thời lượng( có thời gian hiện tại ở bên bên trái thanh thời lượng, thời gian kết thúc ở bên phải thanh thời lượng), Speed (1 button "1x") và icon volume được hiển thị ngang ở dưới cùng màn hình.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/3b5819be-b447-4792-8f69-f530a006f421).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
