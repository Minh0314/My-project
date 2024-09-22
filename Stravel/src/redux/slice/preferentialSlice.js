import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  countries: [
    {
      id: 1,
      name: "Hà Nội",
      keyword: "ha-noi",
      title: "Thành Phố Cổ Kính",
      desc: "Mumbai không chỉ là trung tâm tài chính – kinh tế, kinh đô điện ảnh – thời trang của Việt Nam, mà đây còn là thành phố cảng vừa hiện đại nhưng vẫn mang nhiều nét cổ kính với những công trình kiến trúc, quán bar, nhà hàng, viện bảo tàng và các cửa hàng thời trang hấp dẫn…",
      tour: "Chuyến Đi Dành Cho Gia Đình 2N/3Đ",
      price: 20000000,
      star: 4,
      img: [
        {
          id: 1,
          url: "https://tl.cdnchinhphu.vn/344445545208135680/2024/6/21/2161-171896470364643444014.jpg",
        },
        {
          id: 2,
          url: "https://i1-dulich.vnecdn.net/2022/05/11/chua-tran-quoc-2-4585-1652253984.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=kelCuiSiMeejHVljjN2WfA",
        },
        {
          id: 2,
          url: "https://tl.cdnchinhphu.vn/344445545208135680/2024/6/21/2161-171896470364643444014.jpg",
        },
      ],
    },
    {
      id: 2,
      name: "Tokyo",
      keyword: "tokyo",
      title: "Thành phố của tương lai",
      desc: "Tokyo là một siêu đô thị nhộn nhịp, nơi truyền thống và hiện đại giao thoa. Từ những khu phố cổ kính đến những tòa nhà chọc trời hiện đại, Tokyo mang đến trải nghiệm độc đáo cho mọi du khách.",
      tour: "Khám phá Tokyo 5N/4Đ cùng gia đình",
      price: 35000000,
      star: 5,
      img: [
        {
          id: 1,
          url: "https://duhocvinahure.edu.vn/wp-content/uploads/2020/10/qiongru-195119015119-Tokyo-Nhat-Ban.jpg",
        },
        {
          id: 2,
          url: "https://i1-dulich.vnecdn.net/2021/02/02/Tokyo-dong-duc-1436-1612237924.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=BQF2RIuKc1JzkQhW3j8B7g",
        },
        {
          id: 3,
          url: "https://www.neverendingvoyage.com/wp-content/uploads/2019/11/sensoji-things-to-do-in-tokyo-japan.jpg",
        },
      ],
    },
    {
      id: 4,
      name: "Paris",
      keyword: "paris",
      title: "Kinh đô ánh sáng",
      desc: "Paris là thành phố của tình yêu, nghệ thuật và thời trang. Tháp Eiffel biểu tượng, bảo tàng Louvre lừng danh và những con phố lãng mạn sẽ khiến bạn say đắm.",
      tour: "Paris lãng mạn 6N/5Đ cùng người thân",
      price: 45000000,
      star: 3,
      img: [
        {
          id: 1,
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Eiffel_tower_at_dawn_horizontal.jpg/800px-Eiffel_tower_at_dawn_horizontal.jpg",
        },
        {
          id: 2,
          url: "https://www.robertharding.com/watermark.php?type=preview&im=RF/RH_RF/PANORAMIC/1160-5441",
        },
        {
          id: 3,
          url: "https://www.robertharding.com/watermark.php?type=preview&im=RM/RH/HORIZONTAL/1385-217",
        },
      ],
    },
    {
      id: 5,
      name: "London",
      keyword: "london",
      title: "Nơi giao thoa của quá khứ và hiện tại",
      desc: "London là một thành phố đa văn hóa với lịch sử lâu đời và kiến trúc độc đáo. Cung điện Buckingham, Big Ben và London Eye là những điểm đến không thể bỏ qua.",
      tour: "Khám phá London 6N/5Đ",
      price: 38000000,
      star: 4,
      img: [
        {
          id: 1,
          url: "https://www.robertharding.com/watermark.php?type=preview&im=RM/RH/HORIZONTAL/1385-185",
        },
        {
          id: 2,
          url: "https://www.robertharding.com/watermark.php?type=preview&im=RM/RH/HORIZONTAL/1306-857",
        },
        {
          id: 3,
          url: "https://www.robertharding.com/watermark.php?type=preview&im=RF/RH_RF/HORIZONTAL/1176-1216",
        },
      ],
    },
    {
      id: 6,
      name: "Sydney",
      keyword: "sydney",
      title: "Thành phố cảng xinh đẹp",
      desc: "Sydney nổi tiếng với Nhà hát Opera mang tính biểu tượng, Cầu Cảng Sydney và những bãi biển tuyệt đẹp. Thành phố này mang đến sự kết hợp hoàn hảo giữa thiên nhiên và cuộc sống đô thị.",
      tour: "Sydney mùa hè 5N/4Đ",
      price: 32000000,
      star: 4,
      img: [
        {
          id: 1,
          url: "https://upload.wikimedia.org/wikipedia/commons/8/81/Sydney_Opera_House_and_Harbour_Bridge_Dusk_2019-06-21.jpg",
        },
        {
          id: 2,
          url: "https://media.istockphoto.com/id/1223954030/vi/anh/c%E1%BA%A3ng-sydney-l%C3%BAc-b%C3%ACnh-minh.jpg?s=2048x2048&w=is&k=20&c=OZEFmoYcAN1KiSme2vNqG10C6dk8OFzo3ULknAWYKgs=",
        },
        {
          id: 3,
          url: " https://media.istockphoto.com/id/532574002/vi/anh/quang-c%E1%BA%A3nh-b%E1%BA%BFn-c%E1%BA%A3ng-sydney-trong-m%E1%BB%99t-ng%C3%A0y-n%E1%BA%AFng-%C4%91%E1%BA%B9p.jpg?s=2048x2048&w=is&k=20&c=EZZm0K8z8kLtYaY4iefRYjc7DSyoPNUuzjk_LIVh3Sk=",
        },
      ],
    },

    {
      id: 7,
      name: "Hồ Chí Minh",
      keyword: "ho-chi-minh",
      title: "Trung Tâm giải trí",
      desc: "Mumbai không chỉ là trung tâm tài chính – kinh tế, kinh đô điện ảnh – thời trang của Việt Nam, mà đây còn là thành phố cảng vừa hiện đại nhưng vẫn mang nhiều nét cổ kính với những công trình kiến trúc, quán bar, nhà hàng, viện bảo tàng và các cửa hàng thời trang hấp dẫn…",
      tour: "Chuyến Đi Dành Cho Gia Đình 2N/3Đ",
      price: 20000000,
      star: 4,
      img: [
        {
          id: 1,
          url: "https://tl.cdnchinhphu.vn/344445545208135680/2024/6/21/2161-171896470364643444014.jpg",
        },
        {
          id: 2,
          url: "https://tl.cdnchinhphu.vn/344445545208135680/2024/6/21/2161-171896470364643444014.jpg",
        },
        {
          id: 3,
          url: "https://i1-dulich.vnecdn.net/2022/05/11/chua-tran-quoc-2-4585-1652253984.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=kelCuiSiMeejHVljjN2WfA",
        },
      ],
    },
    {
      id: 8,
      name: "Bắc Kinh",
      keyword: "bac-kinh",
      title: "Thành phố của tương lai",
      desc: "Tokyo là một siêu đô thị nhộn nhịp, nơi truyền thống và hiện đại giao thoa. Từ những khu phố cổ kính đến những tòa nhà chọc trời hiện đại, Tokyo mang đến trải nghiệm độc đáo cho mọi du khách.",
      tour: "Khám phá Tokyo 5N/4Đ",
      price: 35000000,
      star: 5,
      img: [
        {
          id: 1,
          url: "https://duhocvinahure.edu.vn/wp-content/uploads/2020/10/qiongru-195119015119-Tokyo-Nhat-Ban.jpg",
        },
        {
          id: 2,
          url: "https://www.neverendingvoyage.com/wp-content/uploads/2019/11/sensoji-things-to-do-in-tokyo-japan.jpg",
        },
        {
          id: 3,
          url: "https://i1-dulich.vnecdn.net/2021/02/02/Tokyo-dong-duc-1436-1612237924.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=BQF2RIuKc1JzkQhW3j8B7g",
        },
      ],
    },

    {
      id: 9,
      name: "Mun Bai",
      keyword: "mun-bai",
      title: "Kinh đô ánh sáng",
      desc: "Paris là thành phố của tình yêu, nghệ thuật và thời trang. Tháp Eiffel biểu tượng, bảo tàng Louvre lừng danh và những con phố lãng mạn sẽ khiến bạn say đắm.",
      tour: "Paris lãng mạn 6N/5Đ",
      price: 45000000,
      star: 3,
      img: [
        {
          id: 1,
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Eiffel_tower_at_dawn_horizontal.jpg/800px-Eiffel_tower_at_dawn_horizontal.jpg",
        },

        {
          id: 2,
          url: "https://www.robertharding.com/watermark.php?type=preview&im=RF/RH_RF/PANORAMIC/1160-5441",
        },
        {
          id: 3,
          url: "https://www.robertharding.com/watermark.php?type=preview&im=RM/RH/HORIZONTAL/1385-217",
        },
      ],
    },
    {
      id: 10,
      name: "Machu Picchu",
      keyword: "machu-picchu",
      title: "Thành Phố Bị Lãng Quên Của Người Inca",
      desc: "Nằm trên dãy Andes hùng vĩ, Machu Picchu là một kỳ quan khảo cổ học, minh chứng cho sự tài hoa của người Inca. Hãy khám phá những tàn tích bí ẩn, những bậc thang đá dẫn lên trời và tận hưởng khung cảnh ngoạn mục.",
      tour: "Hành Trình Đến Machu Picchu 5N/6Đ",
      price: 80000000,
      star: 5,
      img: [
        {
          id: 1,
          url: "https://images.pexels.com/photos/5503237/pexels-photo-5503237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          id: 2,
          url: "https://images.pexels.com/photos/5503219/pexels-photo-5503219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          id: 3,
          url: "https://images.pexels.com/photos/5503228/pexels-photo-5503228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
      ],
    },
    {
      id: 11,
      name: "Đại Kim Tự Tháp Giza",
      keyword: "dai-kim-tu-thap-giza",
      title: "Kỳ Quan Duy Nhất Còn Tồn Tại Của Thế Giới Cổ Đại",
      desc: "Đại Kim Tự Tháp Giza, biểu tượng của Ai Cập cổ đại, là một công trình kiến trúc đồ sộ và bí ẩn. Hãy chiêm ngưỡng sự vĩ đại của nó và tìm hiểu về những câu chuyện lịch sử hấp dẫn.",
      tour: "Khám Phá Ai Cập 4N/5Đ",
      price: 50000000,
      star: 4,
      img: [
        {
          id: 1,
          url: "https://images.pexels.com/photos/3873681/pexels-photo-3873681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          id: 2,
          url: "https://images.pexels.com/photos/1738536/pexels-photo-1738536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          id: 3,
          url: "https://images.pexels.com/photos/15126860/pexels-photo-15126860/free-photo-of-binh-minh-hoang-hon-m-c-hinh-bong.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
      ],
    },
    {
      id: 12,
      name: "Vạn Lý Trường Thành",
      keyword: "van-ly-truong-thanh",
      title: "Công Trình Vĩ Đại Của Nhân Loại",
      desc: "Vạn Lý Trường Thành, biểu tượng của Trung Quốc, là một công trình kiến trúc quân sự đồ sộ trải dài hàng ngàn km. Hãy đi bộ trên những đoạn tường thành cổ kính và cảm nhận sự hùng vĩ của lịch sử.",
      tour: "Thám Hiểm Vạn Lý Trường Thành 5N/6Đ",
      price: 60000000,
      star: 5,
      img: [
        {
          id: 1,
          url: "https://images.pexels.com/photos/2815210/pexels-photo-2815210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          id: 2,
          url: "https://images.pexels.com/photos/5714064/pexels-photo-5714064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          id: 3,
          url: "https://images.pexels.com/photos/5714060/pexels-photo-5714060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
      ],
    },
    {
      id: 13,
      name: "Angkor Wat",
      keyword: "angkor-wat",
      title: "Ngôi Đền Kỳ Vĩ Của Đế Chế Khmer",
      desc: "Angkor Wat, biểu tượng của Campuchia, là một quần thể đền đài hùng vĩ và tinh xảo. Hãy khám phá những bức phù điêu tuyệt đẹp, những tòa tháp cao vút và cảm nhận sự huy hoàng của một thời đại đã qua.",
      tour: "Khám Phá Angkor Wat 3N/4Đ",
      price: 40000000,
      star: 4,
      img: [
        {
          id: 1,
          url: "https://images.pexels.com/photos/2416576/pexels-photo-2416576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          id: 2,
          url: "https://images.pexels.com/photos/5279020/pexels-photo-5279020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          id: 3,
          url: "https://images.pexels.com/photos/17980012/pexels-photo-17980012/free-photo-of-hoang-hon-m-c-toa-nha-du-l-ch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
      ],
    },
    {
      id: 14,
      name: "Taj Mahal",
      keyword: "taj-mahal",
      title: "Biểu Tượng Của Tình Yêu Vĩnh Cửu",
      desc: "Taj Mahal, lăng mộ bằng đá cẩm thạch trắng tinh khiết, là một kiệt tác kiến trúc Mogul. Hãy đắm mình trong vẻ đẹp lãng mạn và tìm hiểu về câu chuyện tình yêu cảm động đằng sau nó.",
      tour: "Ấn Độ Huyền Bí 6N/7Đ",
      price: 70000000,
      star: 5,
      img: [
        {
          id: 1,
          url: "https://images.pexels.com/photos/12460246/pexels-photo-12460246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          id: 2,
          url: "https://images.pexels.com/photos/5608221/pexels-photo-5608221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          id: 3,
          url: "https://images.pexels.com/photos/4002705/pexels-photo-4002705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
      ],
    },
    {
      id: 15,
      name: "Grand Canyon",
      keyword: "grand-canyon",
      title: "Kỳ Quan Thiên Nhiên Hùng Vĩ",
      desc: "Grand Canyon, một hẻm núi khổng lồ được tạo ra bởi sông Colorado, là một trong những kỳ quan thiên nhiên ngoạn mục nhất thế giới. Hãy chiêm ngưỡng những lớp đá nhiều màu sắc và cảm nhận sự nhỏ bé của con người trước thiên nhiên.",
      tour: "Khám Phá Grand Canyon 3N/4Đ",
      price: 55000000,
      star: 5,
      img: [
        {
          id: 1,
          url: "https://images.pexels.com/photos/954288/pexels-photo-954288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          id: 2,
          url: "https://images.pexels.com/photos/2882603/pexels-photo-2882603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          id: 3,
          url: "https://images.pexels.com/photos/774123/pexels-photo-774123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },

        {
          id: 16,
          name: "Thác Iguazu",
          title: "Màn Trình Diễn Của Thiên Nhiên",
          desc: "Thác Iguazu, nằm giữa biên giới Argentina và Brazil, là một hệ thống thác nước hùng vĩ và ngoạn mục. Hãy chiêm ngưỡng sức mạnh của dòng nước đổ xuống từ độ cao và tận hưởng không khí trong lành của rừng nhiệt đới xung quanh.",
          tour: "Khám Phá Thác Iguazu 4N/5Đ",
          price: 65000000,
          star: 4,
          img: [
            {
              id: 1,
              url: "https://images.pexels.com/photos/13530269/pexels-photo-13530269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            },
            {
              id: 2,
              url: "https://images.pexels.com/photos/26971433/pexels-photo-26971433/free-photo-of-phong-c-nh-cay-vach-da-thac-n-c.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            },
            {
              id: 3,
              url: "https://images.pexels.com/photos/11584551/pexels-photo-11584551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            },
          ],
        },
      ],
    },
    {
      id: 16,
      name: "Vịnh Hạ Long",
      keyword: "vinh-ha-long",
      title: "Kỳ Quan Thiên Nhiên Thế Giới",
      desc: "Vịnh Hạ Long, với hàng ngàn đảo đá vôi và hang động kỳ ảo, là một trong những điểm đến hấp dẫn nhất Việt Nam. Hãy du thuyền trên vịnh, khám phá các hang động và tận hưởng vẻ đẹp thiên nhiên hùng vĩ.",
      tour: "Du Thuyền Vịnh Hạ Long 2N/3Đ",
      price: 30000000,
      star: 5,
      img: [
        {
          id: 1,
          url: "https://images.pexels.com/photos/58597/pexels-photo-58597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          id: 2,
          url: "https://images.pexels.com/photos/27454425/pexels-photo-27454425/free-photo-of-bi-n-phong-c-nh-thien-nhien-hoang-hon.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          id: 3,
          url: "https://images.pexels.com/photos/3566187/pexels-photo-3566187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
      ],
    },
    {
      id: 17,
      name: "Petra",
      keyword: "petra",
      title: "Thành Phố Đá Cổ Đại",
      desc: "Petra, nằm ở Jordan, là một thành phố cổ được tạc vào vách đá sa thạch. Hãy khám phá những ngôi đền, lăng mộ và nhà hát cổ kính, và chiêm ngưỡng kiến trúc độc đáo của người Nabataean.",
      tour: "Hành Trình Đến Petra 4N/5Đ",
      price: 70000000,
      star: 5,
      img: [
        {
          id: 1,
          url: "https://images.pexels.com/photos/15997880/pexels-photo-15997880/free-photo-of-nui-k-ngh-m-c-da.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
          id: 2,
          url: "https://images.pexels.com/photos/11195793/pexels-photo-11195793.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
          id: 3,
          url: "https://images.pexels.com/photos/18717331/pexels-photo-18717331/free-photo-of-m-c-toa-nha-sa-m-c-da.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
      ],
    },
    {
      id: 18,
      name: "Đền Borobudur",
      keyword: "den-borobudur",
      title: "Ngôi Đền Phật Giáo Lớn Nhất Thế Giới",
      desc: "Đền Borobudur, nằm ở Indonesia, là một công trình kiến trúc Phật giáo đồ sộ và tinh xảo. Hãy leo lên đỉnh đền, chiêm ngưỡng những bức phù điêu và tượng Phật, và tận hưởng không khí thanh tịnh.",
      tour: "Khám Phá Indonesia 5N/6Đ",
      price: 55000000,
      star: 4,
      img: [
        {
          id: 1,
          url: "https://images.pexels.com/photos/5505474/pexels-photo-5505474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          id: 2,
          url: "https://images.pexels.com/photos/5505490/pexels-photo-5505490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          id: 3,
          url: "https://images.pexels.com/photos/5505439/pexels-photo-5505439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
      ],
    },
    {
      id: 19,
      name: "Colosseum",
      keyword: "colosseum",
      title: "Đấu Trường La Mã Huyền Thoại",
      desc: "Colosseum, biểu tượng của Rome cổ đại, là một đấu trường lớn từng tổ chức các trận đấu gladiator và các sự kiện công cộng khác. Hãy khám phá những tàn tích cổ kính và hình dung về cuộc sống ở Rome xưa.",
      tour: "Khám Phá Rome 4N/5Đ",
      price: 45000000,
      star: 5,
      img: [
        {
          id: 1,
          url: "https://images.pexels.com/photos/3469505/pexels-photo-3469505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          id: 2,
          url: "https://images.pexels.com/photos/2678456/pexels-photo-2678456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          id: 3,
          url: "https://images.pexels.com/photos/13072229/pexels-photo-13072229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
      ],
    },
    {
      id: 20,
      name: "Thánh đường Sagrada Familia",
      keyword: "san-gracia-familia",
      title: "Kiệt Tác Của Antoni Gaudí",
      desc: "Thánh đường Sagrada Familia, một công trình kiến trúc độc đáo và đầy màu sắc, là một trong những biểu tượng của Barcelona. Hãy chiêm ngưỡng những chi tiết kiến trúc tinh xảo và cảm nhận sự sáng tạo vô biên của Gaudí.",
      tour: "Khám Phá Barcelona 4N/5Đ",
      price: 50000000,
      star: 4,
      img: [
        {
          id: 1,
          url: "https://images.pexels.com/photos/5567960/pexels-photo-5567960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          id: 2,
          url: "https://images.pexels.com/photos/1386444/pexels-photo-1386444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          id: 3,
          url: "https://images.pexels.com/photos/27348442/pexels-photo-27348442/free-photo-of-anh-sang-ngh-thu-t-m-c-xay-d-ng.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
      ],
    },
  ],
  status: "idle",
  error: null,
};

export const fetchCountries = createAsyncThunk(
  "preferential/fetchCountries",
  async () => {
    const response = await fetch(`https://restcountries.com/v3.1/all`);
    const data = await response.json();
    return data;
  }
);

export const preferentialSlice = createSlice({
  name: "preferential",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.countries = action.payload;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default preferentialSlice.reducer;
