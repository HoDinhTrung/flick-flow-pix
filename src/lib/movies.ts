export type Movie = {
  id: string;
  title: string;
  poster: string;
  views: string;
  likes: string;
  episodes: number;
  watched: number;
};

const titles = [
  "Bí Mật Của Trái Tim Lạnh Giá",
  "Tổng Tài Bá Đạo",
  "Hồi Sinh Sau Vực Thẳm",
  "Ngọn Lửa Báo Thù",
  "Đêm Trắng Thành Đô",
  "Nữ Vương Trở Lại",
  "Thợ Săn Bóng Tối",
  "Hợp Đồng Hôn Nhân 100 Ngày",
  "Kẻ Phản Bội Cuối Cùng",
  "Trò Chơi Vương Quyền Đỏ",
  "Sói Đơn Độc",
  "Nụ Hôn Định Mệnh",
  "Ánh Trăng Máu",
  "Tình Yêu Không Lối Thoát",
  "Đại Chiến Phố Đông",
  "Cô Dâu Thay Thế",
  "Vệ Sĩ Của Tôi Là Tổng Tài",
  "Ký Ức Bị Đánh Cắp",
];

const viewsList = ["12.4K", "88.1K", "1.2M", "455K", "9.8K", "55.45K"];
const likesList = ["300", "12.9K", "55.45K", "8.4K", "980", "120K"];
const epList = [50, 60, 80, 40];

export const movies: Movie[] = titles.map((title, i) => ({
  id: `m${i + 1}`,
  title,
  poster: `https://picsum.photos/seed/reelnoir${i + 1}/400/600`,
  views: viewsList[i % 6]!,
  likes: likesList[i % 6]!,
  episodes: epList[i % 4]!,
  watched: ((i * 7) % 40) + 3,
}));

export const byId = (id: string): Movie => movies.find((m) => m.id === id) ?? movies[0]!;


export const banners = movies.slice(0, 5);
export const comingSoon = movies.slice(0, 8);
export const trending = movies.slice(4, 12);
export const premium = movies.slice(2, 6);
export const hotList = movies.slice(8, 12);
export const history = movies.slice(0, 9);
export const myMovies = movies.slice(6, 15);
