import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    {
      name: "Nguyễn Văn A",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      comment: "Nhân viên thân thiện và nhiệt tình. Rất hài lòng!",
      star: 5,
    },
    {
      name: "Trần Thị B",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      comment: "Sản phẩm chất lượng, giao hàng nhanh chóng.",
      star: 4,
    },
    {
      name: "Lê Văn C",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      comment: "Giá cả hợp lý, sản phẩm đẹp và đúng mô tả. ",
      star: 5,
    },
    {
      name: "Phạm Thị D",
      avatar: "https://randomuser.me/api/portraits/women/4.jpg",
      comment: "Sản phẩm tốt, nhưng giao hàng hơi chậm.",
      star: 3,
    },
    {
      name: "Hoàng Văn E",
      avatar: "https://randomuser.me/api/portraits/men/5.jpg",
      comment: "Mình rất thích sản phẩm này, sẽ giới thiệu cho bạn bè.",
      star: 5,
    },
  ],
  status: "idle",
  error: null,
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});
